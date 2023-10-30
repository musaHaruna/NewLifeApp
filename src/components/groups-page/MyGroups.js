import group from '../../assets/images/group-img.png'
import { MdOutlineCheckBox } from 'react-icons/md'

const MyGroups = () => {
  return (
    <article className='all-groups'>
      <section>
        <div className='content'>
          <div className='img'>
            <img src={group} alt='group-img' />
          </div>
          <div>
            <h5>New members Questions and Answers</h5>
            <p>12,003 Members</p>
            <p>All Questions concerining our platform can be asked here</p>
          </div>
        </div>
        <button className='member'>
          <MdOutlineCheckBox className='icon' />
          Member
        </button>
      </section>
    </article>
  )
}

export default MyGroups
