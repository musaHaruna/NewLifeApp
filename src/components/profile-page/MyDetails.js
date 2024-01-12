import { BiEditAlt } from 'react-icons/bi'
import { CgAddR } from 'react-icons/cg'
import geogiaTech from '../../assets/images/georgia-tech.png'
import React, { useState } from 'react'
import EditProfileDetailsModal from '../Modals/EditProfileDetailsModal'
import EditEducationModal from '../Modals/EditEducationModal'
import EditProfileAbout from '../Modals/ẸditProfileAbout'

const MyDetails = ({ user }) => {
  const [isPersonalDetailsModalOpen, setIsPersonalDetailsModalOpen] =
    useState(false)
  const [isEditAboutModalOpen, setIsEditAboutModalOpen] = useState(false)
  const [isEditEducationModalOpen, setIsEditEducationModalOpen] =
    useState(false)

  const openPersonalDetailsModal = () => {
    setIsPersonalDetailsModalOpen(true)
  }

  const closePersonalDetailsModal = () => {
    setIsPersonalDetailsModalOpen(false)
  }
  const openEditAboutModal = () => {
    setIsEditAboutModalOpen(true)
  }

  const closeEditAboutModal = () => {
    setIsEditAboutModalOpen(false)
  }
  const openEditEducationModal = () => {
    setIsEditEducationModalOpen(true)
  }

  const closeEditEducationModal = () => {
    setIsEditEducationModalOpen(false)
  }

  function splitFullName(fullName) {
    const parts = fullName.split(' ');

    let firstName = parts[0];
    let middleName = '';
    let lastName = '';

    if (parts.length === 2) {
      // First and Last name only
      lastName = parts[1];
    } else if (parts.length > 2) {
      // First, Middle, and Last name
      middleName = parts.slice(1, -1).join(' '); // Join middle name if there are multiple words
      lastName = parts[parts.length - 1];
    }

    return {
      firstName,
      middleName,
      lastName,
    };
  }

  const { firstName, middleName, lastName } = splitFullName(user.full_name);

  const renderDescriptionWithLineBreaks = (description) => {
    return description?.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <article className='bg-container'>
      <EditProfileDetailsModal
        isOpen={isPersonalDetailsModalOpen}
        onClose={closePersonalDetailsModal}
      />
      <EditEducationModal
        isOpen={isEditEducationModalOpen}
        onClose={closeEditEducationModal}
      />
      <EditProfileAbout
        isOpen={isEditAboutModalOpen}
        onClose={closeEditAboutModal}
      />
      <section>
        <div className='details-headings'>
          <h4>Personal Details </h4>
          <BiEditAlt className='icon' onClick={openPersonalDetailsModal} />
        </div>
        <section className='personal-details'>
          <div>
            <p>First Name</p>
            <p>Middle Name</p>
            <p>Last Name</p>
            <p>Username</p>
            <p>Date of birth</p>
            <p>Location</p>
          </div>
          <div className='info'>
            <p>{firstName}</p>
            <p>{middleName}</p>
            <p>{lastName}</p>
            <p>@{user?.user_name}</p>
            <p>{new Date(user?.DOB).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p>{`${user?.country || "Country"}, ${user?.state || "City"}`}</p>
          </div>
        </section>
      </section>
      <section className='about'>
        <div className='details-headings'>
          <h4>About</h4>
          <BiEditAlt className='icon' onClick={openEditAboutModal} />
        </div>
        <div>
          <p>
            {renderDescriptionWithLineBreaks(user?.about)}
          </p>
        </div>
      </section>
      <section>
        <div className='details-headings'>
          <h4>Education</h4>
          <div className='icons'>
            <BiEditAlt className='icon' onClick={openEditEducationModal} />
            <CgAddR className='icon' onClick={openEditEducationModal} />
          </div>
        </div>
        <div className='feeds-content'>
          <div>
            <img src={geogiaTech} />
          </div>

          <div>
            <h5>Georgia Tech</h5>
            <p>Doctor of Geonomic</p>
            <p className='date'>July 2010 - July 2023</p>
          </div>
        </div>
      </section>
    </article>
  )
}

export default MyDetails
