import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/Events'
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from 'react-icons/io'
import { RiHotspotLine } from 'react-icons/ri'
import { BsImage } from 'react-icons/bs'
import { BsCalendar2Event } from 'react-icons/bs'
import AddEventModal from '../../components/Modals/AddEventModal'

const Events = () => {
  const [activeTab, setActiveTab] = useState('all-members')
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false)

  const openAddEventModal = () => {
    setIsAddEventModalOpen(true)
  }

  const closeAddEventModal = () => {
    setIsAddEventModalOpen(false)
  }

  return (
    <Wrapper>
      {isAddEventModalOpen && <AddEventModal onClose={closeAddEventModal} />}
      <article className='tab-content'>
        <h2>Events</h2>
        <div className='btn-primary '>
          <BsCalendar2Event className='icon' />
          <button onClick={openAddEventModal}>Add Event</button>
        </div>
      </article>

      <article className='members-container'>
        <section className='tabs'>
          <div className='groups'>
            <div>
              <h4 className='today'>Today</h4>
            </div>
            <div>
              <h4 className='upcoming'>
                Upcoming
                <IoIosArrowDown />
              </h4>
            </div>
          </div>
          <div className='displays'>
            <div>
              <IoIosArrowBack />
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </section>

        <section className='event-container'>
          <section>
            <div className='event-date'>
              <p>April 2023</p>
              <div className='line'></div>
            </div>
            <section className='events'>
              <div className='event-content'>
                <p>April 2021 - 11:00AM - 2:00PM EST</p>
                <h5>NELRIF April Scholarship Conference</h5>
                <div className='virtual-event'>
                  <RiHotspotLine className='icon' />
                  <p>Vitual Event</p>
                </div>
                <p className='summary'>Summary of events goes here....</p>
              </div>
              <div className='picture'>
                <BsImage />
              </div>
            </section>
            <section className='events'>
              <div className='event-content'>
                <p>April 2021 - 11:00AM - 2:00PM EST</p>
                <h5>NELRIF April Scholarship Conference</h5>
                <div className='virtual-event'>
                  <RiHotspotLine className='icon' />
                  <p>Vitual Event</p>
                </div>
                <p className='summary'>Summary of events goes here....</p>
              </div>
              <div className='picture'>
                <BsImage />
              </div>
            </section>
          </section>
        </section>
      </article>
    </Wrapper>
  )
}

export default Events
