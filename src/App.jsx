import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import Product from './pages/Product/Product'
import Listing from './pages/Listing/Listing'
import Cart from './pages/Cart/Cart'
import Layout from './Layout'
import Login from './pages/Login/login'
import SignUp from './pages/Signup/signUp'
import Forgotpassword from './pages/ForgotPassword/Forgotpassword'
import Resetpassword from './pages/ResetPassword/Resetpassword'

function App() {
  

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/listing' element={<Listing/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sig-nup' element={<SignUp/>}/>
          <Route path='/forgot-password' element={<Forgotpassword/>}/>
          <Route path='/reset-password' element={<Resetpassword/>}/>
        </Route>

          
      </Routes>
    </BrowserRouter>
    
      
    
  )
}

export default App
