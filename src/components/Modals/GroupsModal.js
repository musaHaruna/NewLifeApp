import React from 'react'
import GenericModal from './GenericModal'
import Wrapper from '../../assets/wrappers/GroupsModal'
import { CgCloseR } from 'react-icons/cg'
import { useState } from 'react'
import SuccessModal from './SuccessModal'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import adminService from '../../services/api/admin';
import { toast } from 'react-toastify'
import ConfirmationModal from './ConfirmationModal'

const GroupsModal = ({ isOpen, onClose }) => {
  const queryClient = useQueryClient();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    privacy: '',
    description: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const openConfirmModal = () => {
    setConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  const openSuccessModal = (e) => {
    e.preventDefault()
    setIsSuccessModalOpen(true)
  }
  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false)
    onClose()
  }

  const { mutate, isPending } = useMutation({
    mutationFn: adminService.createGroup,
    onSuccess: (data) => {
      // toas.success(data.message);
      queryClient.invalidateQueries(['groups']);
      openSuccessModal();
    },
    onError: (error) => {
      console.error('Login error:', error);
      toast.error(error?.message);
    },
  });

  const handleSubmit = () => {
    setMessage(`Are you sure you want to create group?`);
    openConfirmModal();
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    // Perform your form validation here
    // For simplicity, let's assume all fields are required
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = 'This field is required';
      }
    });
    return errors;
  };

  return (
    <GenericModal isOpen={isOpen} onClose={onClose}>
      <Wrapper>
        <div className='heading'>
          <h3>Create a Group</h3>
          <CgCloseR onClick={onClose} className='icon' />
        </div>

        <form>
          <p className='note'>
            Fill in details of the forum you want to create, also indicate if
            you wan it private or public. Approval for the forum should take a
            maximum of 72 hours
          </p>
          <div>
            <label>Title of Group</label>
            <input type='text' placeholder='Enter title here' />
            <p className='error'></p>
          </div>
          <div>
            <label>Privacy</label>
            <select>
              <option value='Select privacy'>Select privacy</option>
              <option value='Public'>Public</option>
              <option value='Private'>Private</option>
            </select>
          </div>
          <div>
            <label>Description (What will the group be about)</label>
            <textarea type='text' placeholder='Enter title here' />
            <p>0/2000</p>
            <p className='error'></p>
          </div>
          <div className='btn'>
            <button onClick={handleSubmit}>Create Group</button>
          </div>
        </form>
        {isSuccessModalOpen ? (
          <SuccessModal onClose={closeSuccessModal} />
        ) : null}

        {confirmModalOpen && (
          <ConfirmationModal onClose={closeConfirmModal} action={mutate} isLoading={isPending} message={message} />
        )}
      </Wrapper>
    </GenericModal>
  )
}

export default GroupsModal
