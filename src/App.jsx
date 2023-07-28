import React from 'react'
import './App.scss'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import Navbar from './layout/navbar/Navbar'
import Home from './pages/Home'

const App = () => {

  return <>
<BrowserRouter>

<Navbar/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/explore' element={<Explore/>} />
<Route path='/profile' element={<Profile/>} />


</Routes>

</BrowserRouter>
  
  
  </>

}

export default App