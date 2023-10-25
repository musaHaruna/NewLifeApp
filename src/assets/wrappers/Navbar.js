import styled from 'styled-components'

const Wrapper = styled.nav`
  height: 4rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 0.5rem 6rem;
  background-color: #fff;

  input {
    display: block;
    width: 100%;
    background-color: #f2f7fd;
    border: none;
    color: #b7b4b4;
    font-weight: 200;
  }

  input:focus {
    outline: none;
  }

 
  .nav-icons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .icon {
    display: block;
    font-size: 34px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #f2f7fd;
  }
  .profile-info {
    display: flex;
    gap: 0.2rem;
    align-items: center;
  }

  .profile-info div {
    font-size: 14px;
  }

 
`

export default Wrapper
