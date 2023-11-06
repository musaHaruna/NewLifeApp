import { BiEditAlt } from 'react-icons/bi'
import { CgAddR } from 'react-icons/cg'
import geogiaTech from '../../assets/images/georgia-tech.png'
import { useState } from 'react'
import EditProfileDetailsModal from '../Modals/EditProfileDetailsModal'
import EditEducationModal from '../Modals/EditEducationModal'
import EditProfileAbout from '../Modals/ẸditProfileAbout'

const MyDetails = () => {
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
            <p>Luper</p>
            <p>Tsenum</p>
            <p>Joseph</p>
            <p>@luperjoe360</p>
            <p>2nd July 1970</p>
            <p>United States of America, Georgia</p>
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
            Hi there! My name is Joseph Luper and I am a passionate professional
            with a talent for problem-solving and a thirst for knowledge. Over
            the years, I've developed a diverse skillset that allows me to adapt
            to different situations and industries, always seeking to deliver
            high-quality results.
          </p>
          <p>
            I have experience in project management, business analysis, and
            product design and development. I've worked in startups,
            corporations, and non-profit organizations, in fields such as
            finance, healthcare, and education. My strengths include critical
            thinking, communication, and collaboration.
          </p>
          <p>
            I'm always looking for new challenges and opportunities to make a
            positive impact.In my free time, I enjoy traveling, reading, and
            playing sports. I'm also involved in volunteer work and mentoring
            programs, as I believe in giving back to my community and helping
            others grow.If you're looking for a dedicated professional who can
            bring value to your team and help you achieve your goals, don't
            hesitate to reach out. Let's connect and see how we can work
            together!
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
