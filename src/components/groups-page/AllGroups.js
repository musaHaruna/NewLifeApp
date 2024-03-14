import group from '../../assets/images/group-img.png'
import { MdOutlineCheckBox } from 'react-icons/md'
import { MdOutlineAddBox } from 'react-icons/md'
import { useState } from 'react'
import GroupApprovalModal from '../Modals/GroupApprovalModal'

import { useSelector } from 'react-redux';
import groupImg from '../../../src/assets/images/group-img.png'
import SkeletonArticle from '../skeletons/SkeletonArticle'

const AllGroups = ({ groups, isPending, isError }) => {
  const { user } = useSelector((store) => store.user);
  console.log(groups, "group")
  const data = [
    {
      imgSrc: group,
      title: 'New members Questions and Answers',
      membersCount: '12,003 Members',
      description: 'All Questions concerning our platform can be asked here',
    },
    // Add more objects as needed
  ]


  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <article className='all-groups'>
      {isPending &&
        [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme='light' />)}
      <section className='flex-column'>
        <>
          {groups?.map((item, index) => (
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
                  <p>{item.members?.length} Members</p>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className='flex'>
                {
                  (item?.privacy === "public" || item.members.some(member => member.user === user._id && member.status === "approved")) ?
                    <button className='member'>
                      <MdOutlineCheckBox className='icon' />
                      Member
                    </button> :
                    <button className='member'>
                      <MdOutlineCheckBox className='icon' />
                      Join group
                    </button>
                }

                <button className='member' onClick={openModal}>
                  Make Admin
                </button>

              </div>
            </section>
          ))}
        </>
      </section>
      {isError && <p>An Error Occured</p>}
    </article>
  )
}

export default AllGroups
