import { HiLink } from 'react-icons/hi'
import { useQuery } from '@tanstack/react-query'
import user from '../../services/api/user'

const UsefullLinks = () => {
  const getLinks = useQuery({
    queryKey: ['get-usefull-links'],
    queryFn: user.getUsefullLinks,
  })

  const links = getLinks?.data?.links
  
  return (
    <section className='tcontainer-wrapper'>
      {links?.map((link, index) => (
        <div key={index} className='usefull-links'>
          <div>
            <HiLink />
          </div>
          <a href={link.url} target='blank'>
            {link.url}
          </a>
        </div>
      ))}
    </section>
  )
}

export default UsefullLinks
