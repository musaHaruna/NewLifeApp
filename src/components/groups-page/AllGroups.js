import group from '../../assets/images/group-img.png'
import { MdOutlineCheckBox } from 'react-icons/md'
import { MdOutlineAddBox } from 'react-icons/md'
import { useState } from 'react'
import GroupApprovalModal from '../Modals/GroupApprovalModal'
import userService from '../../services/api/user'
import { useQuery } from '@tanstack/react-query'
import groupImg from '../../../src/assets/images/group-img.png'
import SkeletonArticle from '../skeletons/SkeletonArticle'

const AllGroups = () => {
  const data = [
    {
      imgSrc: group,
      title: 'New members Questions and Answers',
      membersCount: '12,003 Members',
      description: 'All Questions concerning our platform can be asked here',
    },
    // Add more objects as needed
  ]

  const groups = useQuery({
    queryKey: ['get-groups'],
    queryFn: userService.getGroups,
  })

  console.log(groups)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <article className='all-groups'>
      {groups.isPending &&
        [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme='light' />)}
      <section className='flex-column'>
        <>
          {groups?.data?.map((item, index) => (
            <section>
              {isModalOpen && (
                <GroupApprovalModal
                  createdBy={item.createdBy}
                  groupId={item._id}
                  isOpen={openModal}
                  onClose={closeModal}
                />
              )}
              <div className='content' key={index}>
                <div className='img'>
                  <img src={groupImg} alt={`group-img-${index}`} />
                </div>
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.membersCount}</p>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className='flex'>
                <button className='member' onClick={openModal}>
                  Make Admin
                </button>
                <button className='member'>
                  <MdOutlineCheckBox className='icon' />
                  Member
                </button>
              </div>
            </section>
          ))}
        </>
      </section>
      {groups.isError && <p>An Error Occured</p>}
    </article>
  )
}

export default AllGroups
