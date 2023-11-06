import React, { useState, useEffect, useRef } from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import profile from '../assets/images/profile.png'
import { BsBell } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { CiSearch } from 'react-icons/ci'
import { SlArrowDown } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const dropdownRef = useRef(null)

  const dropdownClick = () => {
    setNavOpen(!navOpen)
  }

  const closeDropdown = () => {
    setNavOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown()
      }
    }

    if (navOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navOpen])

  return (
    <Wrapper>
      <div className='search'>
        <CiSearch className='search-icon' />
        <input type='text' placeholder='search' />
      </div>
      <div className='nav-icons'>
        <Link to={'/notifications'}>
          <BsBell className='icon' />
        </Link>
        <Link to={'/messages'}>
          <CiMail className='icon' />
        </Link>

        <div className='profile-info'>
          <img src={profile} width={34} alt='profile' className='profile' />
          <div>
            <SlArrowDown className='drop-down' onClick={dropdownClick} />
          </div>
        </div>

        {navOpen ? (
          <section className='nav-dropdown' ref={dropdownRef}>
            <div className='profile-content'>
              <img className='profile-img' src={profile} alt='' />
              <div>
                <h5>Luper Joseph</h5>
                <p>@luperjoe360</p>
              </div>
            </div>

            <Link to={'/profile'}>
              <button>View my profile</button>
            </Link>

            <button>Help</button>
            <button>Language</button>
            <button>Sign out</button>
          </section>
        ) : null}
      </div>
    </Wrapper>
  )
}

export default Navbar
