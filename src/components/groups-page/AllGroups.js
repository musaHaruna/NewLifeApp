import group from '../../assets/images/group-img.png'
import { MdOutlineCheckBox } from 'react-icons/md'
import { MdOutlineAddBox } from 'react-icons/md'

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
  return (
    <article className='all-groups'>
      <section>
        {data.map((item, index) => (
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
      <section>
        {data.map((item, index) => (
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
        <button className='member join-group'>
          <MdOutlineAddBox className='icon' />
          Join Group
        </button>
      </section>
    </article>
  )
}

export default AllGroups
