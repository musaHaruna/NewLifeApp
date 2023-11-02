import Wrapper from '../assets/wrappers/Navbar'
import profile from '../assets/images/profile.png'
import { BsBell } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { CiSearch } from 'react-icons/ci'
import { SlArrowDown } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  const dropdownClick = () => {
    setNavOpen(!navOpen)
  }

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
          <sections className='nav-dropdown'>
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
          </sections>
        ) : null}
      </div>
    </Wrapper>
  )
}
export default Navbar
