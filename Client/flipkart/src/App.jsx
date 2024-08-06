
import Header from './components/Header'
import {Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Signup from './components/Signup'
import Addproduct from './components/Addproduct'
const App = () => {
  return (
    <div>
      <Header/>
       <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/add' element={<Addproduct/>}/>

       </Routes>
    </div>
  )
}

export default App
