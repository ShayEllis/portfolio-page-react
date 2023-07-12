import { createHashRouter } from 'react-router-dom'
import App from '../App'
import Home from '../components/home/home'
import About from '../components/about/about'
import Contact from '../components/contact/contact'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

export default router
