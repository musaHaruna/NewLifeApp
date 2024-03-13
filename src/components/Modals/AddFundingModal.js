import React from 'react'
import Wrapper from '../../assets/wrappers/SuccessModal'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { MdInsertPhoto } from 'react-icons/md'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import user from '../../services/api/user'
import { RotatingLines } from 'react-loader-spinner'
const AddFundingModal = ({ onClose, message }) => {
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
    marginTop: '2%',
    overflow: 'hidden',
    borderRadius: '5px',
    padding: '1.5rem',
  }

  const [documentTitle, setDocumentTitle] = useState('')
  const [selecteDocument, setSelectedDocument] = useState(null)
  const [summaryValue, setSummaryValue] = useState('')

  const [urlValue, setUrlValue] = useState('')

  const handleUrlChange = (event) => {
    setUrlValue(event.target.value)
  }

  const handleSummaryChange = (event) => {
    setSummaryValue(event.target.value)
  }

  const handleDocumentChange = (e) => {
    setSelectedDocument(e.target.files[0])
  }

  const handleDocumentTitleChange = (event) => {
    setDocumentTitle(event.target.value)
  }

  const handleDocumentUpload = async (e) => {
    e.preventDefault()
    const titleRegex = /^.+$/ // Allow any character, 1-255 characters
    const titleIsValid = titleRegex.test(documentTitle)
    if (!titleIsValid) {
      toast.error('Invalid document title')
      return
    }
    if (!urlValue) {
      toast.error('Please enter URL')
      return
    }
    if (!selecteDocument) {
      toast.error('Please select a file')
      return
    }

    if (!summaryValue) {
      toast.error('Please enter summary')
      return
    }

    if (selecteDocument) {
      const formData = new FormData()
      formData.append('image', selecteDocument)
      formData.append('title', documentTitle)
      formData.append('summary', summaryValue)
      formData.append('url', urlValue)

      try {
        await documentMutation.mutateAsync(formData)
        setSelectedDocument(null) // Reset selected file after upload
        onClose()
      } catch (error) {
        console.log(error)
      }
    }
  }

  const documentMutation = useMutation({
    mutationFn: user.addFundings,
    queryKey: ['get-documents'],
    onSuccess: (data) => {
      toast.success('Funding uploaded successfully')
      onClose()
    },
    onError: (error) => {
      console.error('Error:', error)
      toast.error(error?.message || 'An error occurred during document upload')
    },
  })

  return (
    <Wrapper style={modalStyle}>
      <div style={contentStyle}>
        <div className='heading'>
          <h3>Add Funding</h3>
          <button onClick={onClose}>
            <IoMdClose />
          </button>
        </div>

        <form onSubmit={handleDocumentUpload}>
          <div class='custom-file-upload'>
            <input type='file' id='upload' onChange={handleDocumentChange} />
            <label for='upload'>
              {selecteDocument ? 'File ready for upload' : 'Upload Photo'}{' '}
            </label>
          </div>
          <label>
            Title of Document
            <input
              type='text'
              placeholder='Enter title here'
              value={documentTitle}
              onChange={handleDocumentTitleChange}
            />
          </label>
          <label>
            Summary
            <textarea
              name='summary'
              id='summary'
              cols='30'
              rows='4'
              placeholder='Write summary here'
              value={summaryValue}
              onChange={handleSummaryChange}
            ></textarea>
          </label>

          <label>
            Url
            <input
              type='text'
              id='urlInput'
              name='urlInput'
              placeholder='Type url'
              value={urlValue}
              onChange={handleUrlChange}
            />
          </label>
          <button className='action-btn' type='submit'>
            {documentMutation.isPending ? (
              <RotatingLines
                type='Oval'
                style={{ color: '#fff' }}
                height={20}
                width={20}
              />
            ) : (
              <>Upload Funding</>
            )}
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

export default AddFundingModal
