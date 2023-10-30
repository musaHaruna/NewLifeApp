import main from '../../assets/images/main.png'
import logo from '../../assets/images/Logo.png'
import Wrapper from '../../assets/wrappers/RegisterPage'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const CreateAccountPage1 = ({ nextStep }) => {
  return (
    <Wrapper>
      <article className='register-login-container'>
        <article>
          <img src={main} alt='hero-img' />
        </article>
        <article>
          <section className='logo-container'>
            <div className='logo'>
              <img src={logo} alt='logo' />
            </div>
            <h5>NELIREF</h5>
          </section>
          <section>
            <h2>Create an account</h2>
            <form>
              <div>
                <label>Full name</label>
                <input type='text' placeholder='Enter full name' />
              </div>

              <div>
                <label>Phone number</label>

                <div className='phone-number'>
                  <select>
                    <option value='NGR'>NGR</option>
                    <option value='KEN'>KEN</option>
                  </select>
                  <input type='text' placeholder='Enter your phone number ' />
                </div>
              </div>
              <div>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='Enter your preffered username'
                />
              </div>
            </form>

            <div className='btns'>
              <button onClick={nextStep} className='login'>
                Continue <HiOutlineArrowNarrowRight />
              </button>
              <Link to={'/login'}>
                <button className='google'>Cancel</button>
              </Link>
            </div>
          </section>
        </article>
      </article>
    </Wrapper>
  )
}

export default CreateAccountPage1
