import { createHashRouter } from 'react-router-dom'
import App from '../App'
import PageTransiton from '../features/pageTransition/pageTransition'
import Home from '../components/home/home'
import About from '../components/about/about'
import Contact from '../components/contact/contact'
import ErrorPage from '../components/errorPage/errorPage'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <PageTransiton>
            <Home />
          </PageTransiton>
        ),
      },
      {
        path: 'about',
        element: (
          <PageTransiton>
            <About />
          </PageTransiton>
        ),
      },
      {
        path: 'contact',
        element: (
          <PageTransiton>
            <Contact />
          </PageTransiton>
        ),
      },
    ],
  },
])

export default router
