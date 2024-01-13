import styled from 'styled-components'

const Wrapper = styled.article`
  h3 {
    text-align: center;
    font-weight: 600;
    color: #2a4d93;
    font-size: 24px;
  }

  p {
    text-align: center;
  }

  button {
    display: block;
    border: none;
    background-color: #2a4d93;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    margin: 0.5rem auto;
    cursor: pointer;
  }

  .close-modal {
    font-size: 28px;
    display: flex;
    justify-content: flex-end;
    color: #141b34;
    cursor: pointer;
  }
  .p-color {
    color: #205090;
  }

  .new-pword {
    color: #fff;
    text-decoration: none;
  }
`

export default Wrapper
