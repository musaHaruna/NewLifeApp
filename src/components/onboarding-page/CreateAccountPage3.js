import main from '../../assets/images/main.png'
import logo from '../../assets/images/Logo.png'
import Wrapper from '../../assets/wrappers/RegisterPage'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'

const CreateAccountPage1 = ({ nextStep }) => {
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }

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
                <label>Email/Username</label>
                <input
                  type='text'
                  placeholder='Email, username or phone number'
                />
              </div>

              <div>
                <label>Password</label>
                <div className='password-field'>
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    placeholder='*********'
                  />
                  <div className='margin-o' onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <AiOutlineEye className='icon' />
                    ) : (
                      <AiOutlineEyeInvisible className='icon' />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label>Confirm password</label>
                <div className='password-field'>
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    placeholder='*********'
                  />
                  <div className='margin-o' onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <AiOutlineEye className='icon' />
                    ) : (
                      <AiOutlineEyeInvisible className='icon' />
                    )}
                  </div>
                </div>
              </div>
            </form>
            <p>Forgort Password?</p>
            <div className='btns'>
              <button onClick={nextStep} className='login'>
                Create an account <HiOutlineArrowNarrowRight />
              </button>
              <button className='google'>
                <FcGoogle /> Continue with google
              </button>
            </div>
          </section>
          <p className='policy'>
            Continuing means you agree to our terms of use and privacy policy
          </p>
          <p className='signin'>
            Already have an account? <Link> Sign in</Link>
          </p>
        </article>
      </article>
    </Wrapper>
  )
}

export default CreateAccountPage1
