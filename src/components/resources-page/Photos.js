import photo from '../../assets/images/photo.png'

const Photos = () => {
  return (
    <article className='tcontainer-wrapper photo'>
      <section className='photo-grid'>
        <div>
          <img src={photo} alt='picture' />
        </div>
        <div>
          <img src={photo} alt='picture' />
        </div>
        <div>
          <img src={photo} alt='picture' />
        </div>
        <div>
          <img src={photo} alt='picture' />
        </div>
        <div>
          <img src={photo} alt='picture' />
        </div>
        <div>
          <img src={photo} alt='picture' />
        </div>
        <div>
          <img src={photo} alt='picture' />
        </div>
        <div>
          <img src={photo} alt='picture' />
        </div>
        <div>
          <img src={photo} alt='picture' />
        </div>
        <div>
          <img src={photo} alt='picture' />
        </div>
        <div>
          <img src={photo} alt='picture' />
        </div>
        <div>
          <img src={photo} alt='picture' />
        </div>
      </section>
      <div className='tbtn-container'>
        <button className='btn-primary load-more'>Load More</button>
      </div>
    </article>
  )
}

export default Photos
