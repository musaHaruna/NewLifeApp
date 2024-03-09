import photo from '../../assets/images/photo.png'
import { useQuery } from '@tanstack/react-query'
import user from '../../services/api/user'

const Photos = () => {
  const getPhotos = useQuery({
    queryKey: ['get-photos'],
    queryFn: user.getPhotos,
  })
  const photos = getPhotos?.data?.photos
  console.log(photos)

  return (
    <article className='tcontainer-wrapper photo'>
      <section className='photo-grid'>
        {photos?.map((photo, index) => (
          <div key={index}>
            <img src={photo.file.url} alt={`picture-${index}`} />
          </div>
        ))}
      </section>
      <div className='tbtn-container'>
        <button className='btn-primary load-more'>Load More</button>
      </div>
    </article>
  )
}

export default Photos
