import styled from 'styled-components'

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  justify-content: space-between;
  gap: 2rem;
  align-items: start;

  .feeds,
  .updates {
    background-color: #fff;
    padding: 1rem 2rem;
    border-radius: 15px;
  }
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

  .search {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem 0.8rem;
    border-radius: 25px;
  }

  .search .icon {
    font-size: 20px;
    color: #b7b4b4;
  }

  .feeds-card {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0;
  }

  .feeds-content {
    display: flex;
    gap: 1rem;
  }

  .feeds-content p {
    color: #1e1e1e;
  }
  .time {
    font-size: 12px;
  }

  .name {
    font-weight: 400;
  }

  .feeds-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .feeds-icons p {
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 0.5rem;
  }
  .feed-icon {
    color: var(--primary-blue);
    font-size: 14px;
    font-weight: bold;
  }

  .updates {
    padding: 1rem;
  }

  .updates h3 {
    color: #1e1e1e;
    font-weight: 600;
    border-bottom: 1px solid #b7b4b4;
  }

  .period {
    font-size: 10px;
  }

  .updates-content {
    display: flex;
    align-items: start;
    gap: 0.5rem;
    border-bottom: 1px solid #b7b4b4;
    padding: 0.5rem 0;
    // border-top: 1px solid #b7b4b4;
    margin: 1rem 0;
  }
  .updates section div p span {
    font-weight: 500;
  }

  .btn-more {
    display: flex;
    justify-content: center;
  }
`
export default Wrapper
