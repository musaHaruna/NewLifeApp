import profile from '../../assets/images/profile.png'
import Wrapper from '../../assets/wrappers/Feeds'
import { BsThreeDots } from 'react-icons/bs'
import { SlLike } from 'react-icons/sl'
import { TfiCommentAlt } from 'react-icons/tfi'
import { CgProfile } from 'react-icons/cg'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { BsCameraVideo } from 'react-icons/bs'
import user from '../../services/api/user'
import { useQuery } from '@tanstack/react-query'
import { RotatingLines } from 'react-loader-spinner'
import formatTimeAgo from '../../utils/utilsFunction'

const Feeds = () => {
  const pageNum = 1
  const pageLimit = 10

  const feeds = useQuery({
    queryKey: ['get-feeds'],
    queryFn: (page, limit) => user.getFeeds(pageNum, pageLimit),
  })

  console.log(feeds)
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

        {feeds.isPending ? (
          <div>
            <RotatingLines
              type='Oval'
              style={{ color: '#FFF' }}
              height={50}
              width={50}
            />
          </div>
        ) : (
          feeds?.data?.results?.map((feed, index) => (
            <section key={index} className='feeds-card'>
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
                    <p>{feed.message}</p>
                    <p className='time'>{formatTimeAgo(feed.createdAt)}</p>
                  </div>
                </div>
                <div className='feeds-icons'>
                  <p>
                    <SlLike className='feed-icon' /> Like
                  </p>
                  <p>
                    <TfiCommentAlt className='feed-icon' /> Comment
                  </p>
                </div>
              </div>
              <div>
                <BsThreeDots />
              </div>
            </section>
          ))
        )}
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
