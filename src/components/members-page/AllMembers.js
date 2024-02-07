import avatar from '../../assets/images/profile.png'

import { MdOutlinePersonAddAlt1 } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'
import SkeletonArticle from '../../components/skeletons/SkeletonArticle'

const AllMembers = ({ members }) => {
  return (
    <article className='all-groups'>
      {members.isPending
        ? [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme='light' />)
        : members?.data?.members.map((member) => (
            <section className='members' key={member.id}>
              <div className='content members'>
                <div className='img'>
                  <img src={avatar} alt='group-img' />
                </div>
                <div>
                  <h6>
                    {member.full_name} <span>Member</span>
                  </h6>
                  <p>
                    Joined{' '}
                    {new Date(member.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                    {' - '}
                    {new Date(member.updatedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              <div className='member-icons'>
                <MdOutlinePersonAddAlt1 className='icon' />
                <BsThreeDotsVertical className='icon' />
              </div>
            </section>
          ))}
    </article>
  )
}

export default AllMembers
