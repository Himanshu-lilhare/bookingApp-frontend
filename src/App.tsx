
import './App.css'
import { BrowserRouter , Routes , Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Profile from './pages/Profile'


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
