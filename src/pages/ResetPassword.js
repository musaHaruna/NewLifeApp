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
import { useMutation } from '@tanstack/react-query'
import { RotatingLines } from 'react-loader-spinner'
import auth from '../services/api/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from '../redux/reducers/jwtReducer'
import { loginSuccess } from '../redux/reducers/userReducer'
import GoogleLoginButton from '../components/onboarding-page/GoogleLoginButton'
import CompleteProfile from './CompleteProfile'
import EmailConfirmationModal from '../components/Modals/EmailConfirmationModal'

const ResetPassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [passwordShown, setPasswordShown] = useState(false)
  const [showProfile, setShowProfile] = useState(null)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true)
  }

  const closeSuccessModal = () => {
    setIsConfirmModalOpen(false)
    // onClose()
  }

  const togglePasswordVisibility = () => {
    setPasswordShown((prev) => !prev)
  }

  const schema = yup.object().shape({
    email: yup.string().required('Your Full Name is Required!'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    // Call the mutate function to trigger the login mutation
    openConfirmModal()
  }

  return (
    <>
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
              <h2>Reset Password</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='reg-input'>
                  <label>Emai</label>
                  <div className='input-field'>
                    <input
                      type='text'
                      placeholder='Email, username, or phone number'
                      {...register('email')}
                    />
                  </div>
                  <p className='error'>{errors.email?.message}</p>
                </div>

                <div className='btns'>
                  <button
                    type='submit'
                    className='login'
                    // disabled={mutation?.isPending}
                  >
                    <>
                      Reset Password <HiOutlineArrowNarrowRight />
                    </>
                  </button>
                </div>
              </form>
            </section>
          </article>
        </article>
      </Wrapper>
      {isConfirmModalOpen && (
        <EmailConfirmationModal onClose={closeSuccessModal} />
      )}
    </>
  )
}

export default ResetPassword
