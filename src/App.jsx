
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About';
import PostList from './Pages/PostList';
import UsersList from './Pages/UsersList';


function App() {

  return (
    <>
     
     {/* <Navbar/> */}
     <About/>
     <PostList/>
     <UsersList/>
    </>
  )
}

export default App
