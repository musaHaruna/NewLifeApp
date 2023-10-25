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
    align-items: center;
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
    border-radius: 15px;
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
`

export default Wrapper
