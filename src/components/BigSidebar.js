import NavLinks from './NavLinks'
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/BigSidebar'

const BigSidebar = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <header>
            <Logo />
            <div>
              <p>New Life</p>
              <p>Research Foundation</p>
            </div>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}
export default BigSidebar
