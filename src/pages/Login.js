import main from '../assets/images/main.png'
import logo from '../assets/images/Logo.png'
import Wrapper from '../assets/wrappers/RegisterPage'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }

  return (
    <Wrapper>
      <article className='hero-img-container'>
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
          <h2>Login</h2>
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
          </form>
          <p>Forgort Password?</p>
          <div className='btns'>
            <button className='login'>
              Login <HiOutlineArrowNarrowRight />
            </button>
            <button className='google'>
              <FcGoogle /> Continue with google
            </button>
          </div>
        </section>
        <p className='register-link'>
          Don't have and account? <Link to={'/register'}>Get started</Link>
        </p>
      </article>
    </Wrapper>
  )
}

export default Login
