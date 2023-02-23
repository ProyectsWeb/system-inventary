import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AreaPrivada from './layouts/AreaPrivada'


function App() {

  return (   
    <BrowserRouter>    
     <Routes>     
       <Route path='/' element={<AreaPrivada />}></Route>  
     </Routes>
    </BrowserRouter>    
  )
}

export default App
