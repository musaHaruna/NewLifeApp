import Wrapper from '../../assets/wrappers/Notifications'
import profile from '../../assets/images/profile.png'

import { AiOutlineUserAdd, AiOutlineCheckSquare } from 'react-icons/ai'

const Notifications = () => {
  return (
    <Wrapper>
      <article className='tab-content'>
        <h2>Notifications</h2>
      </article>

      <article>
        <section className='tabs'>
          <div className='groups'>
            <div className={`tab-btn active`}>
              <h4>
                Notificatons <span className='number'>5</span>
              </h4>
            </div>
          </div>
        </section>

        <section className='notifications-wrapper'>
          <section
            className='notification-card
          '
          >
            <div className='notification-content'>
              <img className='profile' src={profile} alt='' />
              <div>
                <p>
                  <span className='users-name'> Gbadebo Gbadamosi</span> Sent
                  you a connection
                </p>
                <p className='date'>3 days ago</p>
              </div>
            </div>
            <div className='btns'>
              <button className='connect'>
                <AiOutlineUserAdd className='icon' /> Connect
              </button>
              <button className='decline'>
                <AiOutlineUserAdd className='icon' />
                Decline
              </button>
            </div>
          </section>
          <section
            className='notification-card
          '
          >
            <div className='notification-content'>
              <img className='profile' src={profile} alt='' />
              <div>
                <p>
                  <span className='users-name'> Gbadebo Gbadamosi</span> Sent
                  you a connection
                </p>
                <p className='date'>3 days ago</p>
              </div>
            </div>
            <div className='btns'>
              <button className='connected'>
                <AiOutlineCheckSquare className='icon' /> Connect
              </button>
            </div>
          </section>
          <section
            className='notification-card
          '
          >
            <div className='notification-content'>
              <img className='profile' src={profile} alt='' />
              <div>
                <p>
                  Your request to join the{' '}
                  <span className='users-name'>Undergradute scholarship</span>{' '}
                  group has been granted
                </p>
                <p className='date'>3 days ago</p>
              </div>
            </div>
          </section>
        </section>
      </article>
    </Wrapper>
  )
}

export default Notifications
