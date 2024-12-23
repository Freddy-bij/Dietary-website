import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Layout from './Components/Layout'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  element={<Layout/>}>
       <Route path='/' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/home' element={<Home/>}/>
     </Route>
     
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
