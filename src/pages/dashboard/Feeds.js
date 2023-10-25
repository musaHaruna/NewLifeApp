import profile from '../../assets/images/profile.png'
import Wrapper from '../../assets/wrappers/Feeds'
import { BsThreeDots } from 'react-icons/bs'
import { SlLike } from 'react-icons/sl'
import { TfiCommentAlt } from 'react-icons/tfi'
import { CgProfile } from 'react-icons/cg'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { BsCameraVideo } from 'react-icons/bs'
const Feeds = () => {
  return (
    <Wrapper>
      <article className='feeds'>
        <section className='search'>
          <CgProfile className='icon' />
          <div className='search'>
            <input type='text' placeholder='search' />
          </div>
          <HiOutlinePhotograph className='icon' />
          <BsCameraVideo className='icon' />
        </section>

        <section className='feeds-card'>
          <div>
            <div className='feeds-content'>
              <div>
                <img
                  src={profile}
                  width={34}
                  alt='profile'
                  className='profile'
                />
              </div>

              <div>
                <p>
                  <span className='name'>Gabriel Joseph </span>became a
                  registered member
                </p>
                <p className='time'>46 mins ago</p>
              </div>
            </div>
            <div className='feeds-icons'>
              <p>
                <SlLike className='feed-icon' /> Like
              </p>
              <p>
                <TfiCommentAlt className='feed-icon' /> Coment
              </p>
            </div>
          </div>

          <div>
            <BsThreeDots />
          </div>
        </section>
      </article>
      <article className='updates'>
        <h3>Latest Updates </h3>
        <section>
          <div className='updates-content'>
            <div>
              <img src={profile} width={40} alt='profile' className='profile' />
            </div>
            <div>
              <p>
                Your request to the <span>Undergraduate group</span> has been
                approved
              </p>
              <p className='period'>2 days ago</p>
            </div>
          </div>
        </section>
        <div className='btn-more'>
          <button className='btn-primary '>More Updates</button>
        </div>
      </article>
    </Wrapper>
  )
}
export default Feeds
