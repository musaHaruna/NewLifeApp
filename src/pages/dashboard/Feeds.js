import profile from '../../assets/images/profile.png'
import Wrapper from '../../assets/wrappers/Feeds'
import { BsThreeDots } from 'react-icons/bs'
import { SlLike } from 'react-icons/sl'
import { TfiCommentAlt } from 'react-icons/tfi'
const Feeds = () => {
  return (
    <Wrapper>
      <article>
        <sectionv>
          <div className='search'>
            <input type='text' placeholder='search' />
          </div>
        </sectionv>
        <section>
          <div>
            <div>
              <img src={profile} width={34} alt='profile' className='profile' />
              <div>
                <p>
                  <span>Gabriel Joseph </span>became a registered member
                </p>
                <p>46 mins ago</p>
              </div>
              <div>
                <p>
                  <SlLike /> Like
                </p>
                <p>
                  <TfiCommentAlt /> Coment
                </p>
              </div>
            </div>
          </div>

          <div>
            <BsThreeDots />
          </div>
        </section>
      </article>
      <article>
        <h3>Latest Updates </h3>
        <section>
          <div>
            <div>
              <img src={profile} width={34} alt='profile' className='profile' />
            </div>
            <div>
              <p>
                Your request to the <span>Undergraduate group</span> has been
                approved
              </p>
              <p>2 days ago</p>
            </div>
          </div>
        </section>
        <button>More Updates</button>
      </article>
    </Wrapper>
  )
}
export default Feeds
