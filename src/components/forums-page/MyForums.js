import group from '../../assets/images/group-img.png'
import emptystate from '../../assets/images/empty-state.png'
import { MdOutlineCheckBox } from 'react-icons/md'

const MyForums = () => {
  const data = 1
  const data2 = [
    {
      imgSrc: group,
      title: 'New members Questions and Answers',
      membersCount: '12,003 Members',
      description: 'All Questions concerning our platform can be asked here',
    },
    // Add more objects as needed
  ]

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
            {data2.map((item, index) => (
              <div className='content' key={index}>
                <div className='img'>
                  <img src={item.imgSrc} alt={`group-img-${index}`} />
                </div>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.membersCount}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
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
