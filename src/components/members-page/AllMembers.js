import avatar from '../../assets/images/profile.png'

import { MdOutlinePersonAddAlt1 } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'

const AllMembers = () => {
  return (
    <article className='all-groups'>
      <section className='members'>
        <div className='content members'>
          <div className='img'>
            <img src={avatar} alt='group-img' />
          </div>
          <div>
            <h6>
              Gbadebo Gbadamosi <span>Member</span>
            </h6>
            <p>Joined Apr. 2023 - Active last 12 hours ago</p>
          </div>
        </div>
        <div className='member-icons'>
          <MdOutlinePersonAddAlt1 className='icon' />
          <BsThreeDotsVertical className='icon' />
        </div>
      </section>
    </article>
  )
}

export default AllMembers
