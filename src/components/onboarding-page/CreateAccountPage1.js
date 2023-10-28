import main from '../../assets/images/main.png'
import logo from '../../assets/images/Logo.png'
import Wrapper from '../../assets/wrappers/RegisterPage'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


const CreateAccountPage1 = ({ nextStep }) => {
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
          <h2>Create an account</h2>
          <form>
            <div>
              <label>Level of education</label>
              <select>
                <option value='No previous qualification'>
                  No previous qualification
                </option>
                <option value='High school/ SSCE'>High school/ SSCE</option>
                <option value='College/ Diploma'>College/ Diploma</option>
                <option value='BSc'>BSc</option>
                <option value='MSc'>MSc</option>
                <option value='PhD'>PhD</option>
              </select>
            </div>
            <div>
              <label>Date of birth</label>
              <input type='date' placeholder='Date of birth' />
            </div>

            <div>
              <label>Gender</label>
              <select>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
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
    </Wrapper>
  )
}

export default CreateAccountPage1
