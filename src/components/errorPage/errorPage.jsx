import { useRouteError } from 'react-router-dom'
import { TbError404 } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <section id='errorPage'>
      <h3>{error.status === 404 && 'This page does not exist...'}</h3>
      {error.status === 404 ? (
        <TbError404 className='errorIcon' />
      ) : (
        error.status
      )}
      <h3>{error.statusText || 'An error occurred'}</h3>
      <h3>
        Return to the <Link to='/'>home page?</Link>{' '}
      </h3>
    </section>
  )
}

export default ErrorPage
