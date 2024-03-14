import group from '../../assets/images/group-img.png'
import { MdOutlineCheckBox } from 'react-icons/md'
import { MdOutlineAddBox } from 'react-icons/md'
import { useEffect, useState } from 'react'
import GroupApprovalModal from '../Modals/GroupApprovalModal'

import { useSelector } from 'react-redux';
import groupImg from '../../../src/assets/images/group-img.png'
import SkeletonArticle from '../skeletons/SkeletonArticle'
import userService from '../../services/api/user';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import ConfirmationModal from '../Modals/ConfirmationModal'
import { toast } from 'react-toastify'

const AllGroups = ({ groups, isPending, isError }) => {
  const { user } = useSelector((store) => store.user);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [message, setMessage] = useState('');

  const openConfirmModal = () => {
    setConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const joinGroup = (groupId) => {
    setSelectedGroup(groupId)
    setMessage("Are you sure you want to join this group?")
    openConfirmModal()
  }

  const mutation = useMutation({
    mutationFn: userService.joinGroup,
    onSuccess: (data) => {
      toast.success(data.message);
      setSelectedGroup(null)
      queryClient.invalidateQueries(['get-groups']);
      closeConfirmModal();
    },
    onError: (error) => {
      console.error('Login error:', error);
      toast.error(error?.error);
      toast.error(error?.message);
      toast.error(error);
    },
  });
  useEffect(() => {
    console.log(groups)
    console.log(user)
  }, [groups])


  return (
    <article className='all-groups'>
      {isPending &&
        [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme='light' />)}
      <section className='flex-column'>
        <>
          {groups?.map((item, index) => (
            <section key={index}>
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
                  <p>{item?.privacy === "public" ? "All" : item.members?.length} Members</p>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className='flex'>
                {
                  (item?.privacy === "public" || item.members.some(member => member.user === user._id && member.status === "approved")) ?
                    <button className='member'>
                      <MdOutlineCheckBox className='icon' />
                      Member
                    </button> : item.members.some(member => member.user === user._id && member.status === "pending") ?
                      <button className='member'>
                        <MdOutlineCheckBox className='icon' />
                        Request Sent
                      </button> :
                      <button className='member' onClick={() => joinGroup(item._id)}>
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
      {confirmModalOpen && (
        <ConfirmationModal onClose={closeConfirmModal} action={() => mutation.mutate(selectedGroup)} isLoading={mutation?.isPending} message={message} />
      )}
    </article>
  )
}

export default AllGroups
