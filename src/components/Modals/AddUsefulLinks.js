import React from 'react'
import Wrapper from '../../assets/wrappers/SuccessModal'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { loginSuccess } from '../../redux/reducers/userReducer'
import user from '../../services/api/user'
import { RotatingLines } from 'react-loader-spinner'

const AddUsefulLinks = ({ onClose, message }) => {
  const modalStyle = {
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }

  const contentStyle = {
    backgroundColor: 'white',
    width: '30%',
    margin: 'auto',
    marginTop: '5%',
    overflow: 'hidden',
    borderRadius: '5px',
    padding: '1.5rem',
  }

  const [formData, setFormData] = useState({
    title: '',
    url: '',
  })

  console.log(formData)

  const [formErrors, setFormErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const mutation = useMutation({
    mutationFn: user.uploadUsefullLinks,
    queryKey: ['get-usefull-links'],
    onSuccess: (data) => {
      toast.success('Link Added')
    },
    onError: (error) => {
      toast.error(error)
      toast.error(error?.message)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('its working')
    const validationErrors = validateForm()

    // If there are no validation errors, submit the form
    mutation.mutate(formData)
  }

  const validateForm = () => {
    const errors = {}
    // Perform your form validation here
    // For simplicity, let's assume all fields are required
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = 'This field is required'
      }
    })
    return errors
  }
  return (
    <Wrapper style={modalStyle}>
      <div style={contentStyle}>
        <div className='heading'>
          <h3>Add Link</h3>
          <button onClick={onClose}>
            <IoMdClose />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Title of Link
            <input
              type='text'
              placeholder='Enter title here'
              name='title'
              onChange={handleInputChange}
            />
          </label>
          <label>
            Enter URL
            <input
              type='text'
              placeholder='Enter URL'
              name='url'
              onChange={handleInputChange}
            />
          </label>

          <button className='action-btn' type='submit'>
            Upload Link
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

export default AddUsefulLinks
