import avatar from '../../assets/images/profile.png'

import { MdOutlinePersonAddAlt1 } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'
import SkeletonArticle from '../../components/skeletons/SkeletonArticle'
import MemberCard from './MemberCard'

const AllMembers = ({ members }) => {
  return (
    <article className='all-groups'>
      {members.isPending
        ? [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme='light' />)
        : members?.data?.members.map((member) => (
          <MemberCard key={member._id} member={member} />
        ))}
    </article>
  )
}

export default AllMembers
