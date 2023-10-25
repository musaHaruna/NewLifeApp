import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Landing, Error, Register } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Feeds,
  Resources,
  Groups,
  SharedLayout,
  Forum,
  Members,
  Fundings,
} from './pages/dashboard'
import Events from './pages/dashboard/Events'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Feeds />} />
          <Route path='resources' element={<Resources />} />
          <Route path='groups' element={<Groups />} />
          <Route path='forum' element={<Forum />} />
          <Route path='events' element={<Events />} />
          <Route path='members' element={<Members />} />
          <Route path='fundings' element={<Fundings />} />
        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  )
}

export default App
