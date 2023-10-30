import group from '../../assets/images/group-img.png'
import emptystate from '../../assets/images/empty-state.png'
import { MdOutlineCheckBox } from 'react-icons/md'

const MyForums = () => {
  const data = 0

  return (
    <article className='forums'>
      {data === 0 ? (
        <article className='all-groups none'>
          <div className='no-forum-container'>
            <div className='no-forum'>
              <img src={emptystate} alt='no-forums' />
            </div>
            <p>You do not belong to any forum</p>
            <p>Create a forum or request to join an existing one</p>
          </div>
        </article>
      ) : (
        <article className='all-groups'>
          <section>
            <div className='content'>
              <div className='img'>
                <img src={group} alt='group-img' />
              </div>
              <div>
                <h5>NELIRF New Orland Excos</h5>
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
      )}
    </article>
  )
}

export default MyForums
