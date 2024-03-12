import React from 'react'
import GenericModal from './GenericModal'
import Wrapper from '../../assets/wrappers/GroupsModal'
import { CgCloseR } from 'react-icons/cg'
import { useState } from 'react'
import SuccessModal from './SuccessModal'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'
import userService from '../../services/api/user'

const GroupsModal = ({ isOpen, onClose }) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [privacy, setPrivacy] = useState('public')
  const [description, setDescription] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handlePrivacyChange = (e) => {
    setPrivacy(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const openSuccessModal = (e) => {
    e.preventDefault()
    setIsSuccessModalOpen(true)
  }
  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false)
    onClose()
  }

  const mutation = useMutation({
    mutationFn: userService.createGroup,
    onSuccess: (data) => {
      setIsSuccessModalOpen(true)
    },
    onError: (error) => {
      // Handle login error
      toast.error('Error')
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title) {
      toast.error('Title is required')
      return
    }
    if (!privacy) {
      toast.error('Privacy is required')
      return
    }
    if (!description) {
      toast.error('Description is required')
      return
    }
    // If there are no validation errors, submit the form
    mutation.mutate({
      name: title,
      privacy,
      description,
    })
    setTitle('')
    setPrivacy('public')
    setDescription('')
  }
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
            <input
              type='text'
              placeholder='Enter title here'
              value={title}
              onChange={handleTitleChange}
            />
            <p className='error'></p>
          </div>
          <div>
            <label>Privacy</label>
            <select value={privacy} onChange={handlePrivacyChange}>
              <option value='public'>public</option>
              <option value='private'>private</option>
            </select>
          </div>
          <div>
            <label>Description (What will the group be about)</label>
            <textarea
              type='text'
              placeholder='Enter title here'
              value={description}
              onChange={handleDescriptionChange}
            />
            <p>0/2000</p>
            <p className='error'></p>
          </div>
          <div className='btn'>
            <button onClick={handleSubmit}>
              {' '}
              {mutation.isPending ? (
                <RotatingLines
                  type='Oval'
                  style={{ color: '#FFF' }}
                  height={20}
                  width={20}
                />
              ) : (
                <>Create Group</>
              )}
            </button>
          </div>
        </form>
        {isSuccessModalOpen ? (
          <SuccessModal onClose={closeSuccessModal} />
        ) : null}
      </Wrapper>
    </GenericModal>
  )
}

export default GroupsModal
