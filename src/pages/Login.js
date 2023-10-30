import main from '../assets/images/main.png'
import logo from '../assets/images/Logo.png'
import Wrapper from '../assets/wrappers/RegisterPage'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }

  const schema = yup.object().shape({
    username: yup.string().required('your Full Name is Required!'),
    password: yup
      .string()
      .min(6)
      .max(20)
      .required('password must be at least 6 characters'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Wrapper>

      
      <article className='register-login-container'>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Email/Username</label>
                <input
                  type='text'
                  placeholder='Email, username or phone number'
                  {...register('username')}
                />
                <p className='error'>{errors.username?.message}</p>
              </div>

              <div>
                <label>Password</label>
                <div className='password-field'>
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    placeholder='*********'
                    {...register('password')}
                  />
                  <div className='margin-o' onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <AiOutlineEye className='icon' />
                    ) : (
                      <AiOutlineEyeInvisible className='icon' />
                    )}
                  </div>
                </div>
                <p className='error'>{errors.password?.message}</p>
              </div>
              <p>Forgort Password?</p>
              <div className='btns'>
                <button type='submit' className='login'>
                  Login <HiOutlineArrowNarrowRight />
                </button>
                <button className='google'>
                  <FcGoogle /> Continue with google
                </button>
              </div>
              <p className='register-link'>
                Don't have and account?{' '}
                <Link to={'/register'}>Get started</Link>
              </p>
            </form>
          </section>
        </article>
      </article>
    </Wrapper>
  )
}

export default Login
