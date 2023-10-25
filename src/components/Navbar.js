import Wrapper from '../assets/wrappers/Navbar'
import profile from '../assets/images/profile.png'
import { BsBell } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { CiSearch } from 'react-icons/ci'
import { SlArrowDown } from 'react-icons/sl'

const Navbar = () => {
  return (
    <Wrapper>
      <div className='search'>
        <CiSearch className='search-icon' />
        <input type='text' placeholder='search' />
      </div>
      <div className='nav-icons'>
        <BsBell className='icon' />
        <CiMail className='icon' />
        <div className='profile-info'>
          <img src={profile} width={34} alt='profile' className='profile' />
          <div>
            <SlArrowDown />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
