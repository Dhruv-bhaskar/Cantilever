import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import CreatePost from './components/CreatePost'
import AllPosts from './components/AllPosts'
import PostDetails from './components/PostDetails'
import EditPost from './components/EditPost'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
     path: '/',
     element:
     <div>
      <Home/>
     </div>
  },
  {
     path: '/login',
     element:
     <div>
      <Login/>
     </div>
  },
  {
     path: '/register',
     element:
     <div>
      <Register/>
     </div>
  },
  {
     path: '/create',
     element:
     <div>
      <CreatePost/>
     </div>
  },
  {
     path: '/allpost',
     element:
     <div>
      <AllPosts/>
     </div>
  },
  {
     path: '/post/:id',
     element:
     <div>
      <PostDetails/>
     </div>
  },
  {
     path: '/edit/:id',
     element:
     <div>
      <EditPost/>
     </div>
  },
])

function App() {
  
  return (
    <div>
       <RouterProvider router={router}/>
       <ToastContainer position='top-right' autoClose={1500}/>
    </div>
  )
}

export default App
