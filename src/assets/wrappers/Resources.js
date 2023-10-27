import styled from 'styled-components'

const Wrapper = styled.main`
  .tab-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .tab-content h2 {
    color: var(--primary-blue);
    font-size: 30px;
    font-weight: 600;
  }

  .search {
    display: flex;
    align-items: center;
    width: 30%;
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 10px;
  }

  .search input {
    width: 100%;
    border: none;
    font-size: 14px;
  }

  .search input:focus {
    outline: none;
  }

  .btn-primary {
    padding: 0.7rem 1rem;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  .btn-primary button {
    background-color: inherit;

    border: none;
    color: inherit;
    font-size: 14px;
    padding: 0;
    margin: 0;
  }

  .photos-search {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 0.5rem;
    width: 60%;
  }

  .photos-search .search {
    width: 60%;
  }

  .tabs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f2f7fd;
    padding: 1rem;
    border-radius: 15px 15px 0 0;
  }

  .tabs div {
    display: flex;
    align-items: center;
    color: #1e1e1e;
  }
  .tab-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  .tab-btn h4 {
    font-weight: 500;
  }
  .tab-btn.tab-active {
    color: var(--primary-blue);
  }

  .tab-btn.active .icon {
    color: var(--primary-blue);
  }

  .tab-btn.active h4 {
    color: var(--primary-blue);
  }
  .thead {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  .tcontainer-wrapper {
    background-color: #fff;
  }

  .tcontainer-wrapper.photo {
    padding: 2rem;
  }

  .tcontainer {
    background-color: #fff;
    border-bottom: 1px solid #b7b4b4;
  }

  .tcell {
    font-family: 'Poppins', sans-serif;
  }

  .tcell.icon {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  .tcell.icon p {
    font-size: 30px;
    color: var(--primary-blue);
  }
  a {
    color: #1e1e1e;
    text-decoration: none;
  }

  .btn-primary {
    padding: 0.5rem 1.5rem;
  }

  .tbtn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .photo-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }

  .photo-grid div {
    width: 100%;
  }

  .photo-grid div img {
    display: block;
    width: 100%;
  }

  .usefull-links {
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    border: 1px solid #b7b4b4;
  }

  .btn-primary.load-more {
    margin: 3rem auto;
  }
`

export default Wrapper
