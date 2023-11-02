import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/Events'
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from 'react-icons/io'
import { RiHotspotLine } from 'react-icons/ri'
import { BsImage } from 'react-icons/bs'

const Events = () => {
  const [activeTab, setActiveTab] = useState('all-members')

  return (
    <Wrapper>
      <article className='tab-content'>
        <h2>Events</h2>
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
