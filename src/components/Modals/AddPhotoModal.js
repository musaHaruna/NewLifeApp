import React from 'react'
import Wrapper from '../../assets/wrappers/SuccessModal'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { MdInsertPhoto } from 'react-icons/md'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import user from '../../services/api/user'

const AddPhotoModal = ({ onClose, message }) => {
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

  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const handlePhotoChange = (e) => {
    setSelectedPhoto(e.target.files[0])
  }

  const handlePhotoUpload = async (e) => {
    e.preventDefault()
    if (selectedPhoto) {
      const formData = new FormData()
      formData.append('photo', selectedPhoto)

      try {
        await documentMutation.mutateAsync(formData)
        setSelectedPhoto(null) // Reset selected file after upload
      } catch (error) {
        console.log(error)
      }
    }
  }

  const documentMutation = useMutation({
    mutationFn: user.uploadPhoto,
    queryKey: ['get-photos'],
    onSuccess: (data) => {
      toast.success('Photo uploaded successfully')
    },
    onError: (error) => {
      console.error('Error:', error)
      toast.error(error?.message || 'An error occurred during document upload')
    },
  })

  return (
    <Wrapper style={modalStyle}>
      <form style={contentStyle} onSubmit={handlePhotoUpload}>
        <div className='heading'>
          <h3>Add Photo</h3>
          <button onClick={onClose}>
            <IoMdClose />
          </button>
        </div>
        <div className='drop-box'>
          <div className='photo-icon'>
            <MdInsertPhoto />
          </div>
          <p>
            {selectedPhoto
              ? 'File ready for upload'
              : 'Drag your photo here or click Upload to add photo'}
          </p>
          <div class='custom-file-upload'>
            <input type='file' id='upload' onChange={handlePhotoChange} />
            <label for='upload'>Upload photo</label>
          </div>
        </div>
        <button className='action-btn' type='submit'>
          Upload Document
        </button>
      </form>
    </Wrapper>
  )
}

export default AddPhotoModal
