import Wrapper from '../../assets/wrappers/Forum'
import { CiSearch } from 'react-icons/ci'
import { CgAddR } from 'react-icons/cg'
import MyForums from '../../components/forums-page/MyForums'
import { useState } from 'react'
import ForumModal from '../../components/Modals/ForumModal'

const Forum = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <Wrapper>
      <ForumModal isOpen={isModalOpen} onClose={closeModal} />
      <article className='tab-content'>
        <h2>Forums</h2>
        <div className='photos-search'>
          <div className='search'>
            <CiSearch className='search-icon' />
            <input type='text' placeholder='Search forum' />
          </div>
          <div className='btn-primary '>
            <CgAddR className='icon' />
            <button onClick={openModal}>Create New Forum</button>
          </div>
        </div>
      </article>

      <article>
        <section className='tabs'>
          <div className='groups'>
            <div className={`tab-btn active`}>
              <h4>
                Forum <span className='number'>1</span>
              </h4>
            </div>
          </div>
        </section>

        <section>
          <MyForums />
        </section>
      </article>
    </Wrapper>
  )
}

export default Forum
