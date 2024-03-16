import React from 'react'
import profileImg from '../../assets/images/profile.png'
import { TbUserPlus } from 'react-icons/tb'
import { CiMenuKebab } from 'react-icons/ci'

const jsonData = [
  {
    name: 'Gbadebo Gbadamosi',
    profileImg: profileImg,
    paragraph:
      'We are going to be talking about what this group is about and how you can benefit from the group.',
    date: 'Today | 18:00 GMT +1',
    role: 'Admin',
  },
  {
    name: 'Gbadebo Gbadamosi',
    profileImg: profileImg,
    paragraph:
      'We are going to be talking about what this group is about and how you can benefit from the group.',
    date: 'Today | 18:00 GMT +1',
    role: 'Member',
  },
]

const GroupMembers = () => {
  return (
    <div className='post'>
      {jsonData.map((item, index) => (
        <div key={index} className='list-wrapper'>
          <div className='list-card'>
            <div className='img-wrapper'>
              <img src={item.profileImg} alt='' />
            </div>
            <h2 className='head'>{item.name}</h2>
            <p className='role'>{item.role}</p>
          </div>
          <div className='icons'>
            <TbUserPlus />
            <CiMenuKebab />
          </div>
        </div>
      ))}
    </div>
  )
}

export default GroupMembers
