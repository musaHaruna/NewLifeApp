import Wrapper from '../../assets/wrappers/GenericModal'

const GenericModal = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }

  const contentStyle = {
    backgroundColor: 'white',
    width: '70%',
    margin: 'auto',
    marginTop: '10%',
    padding: '20px',
    borderRadius: '5px',
  }

  return (
    <Wrapper>
      <div style={modalStyle}>
        <div style={contentStyle}>
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default GenericModal
