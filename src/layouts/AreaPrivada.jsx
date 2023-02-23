import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Tablero from '../components/Tablero'
import { Footer } from '../components/Footer'
import '../../public/css/AreaPrivada.css'



const AreaPrivada = () => {

  const [selected, setSelected ] = useState("");
  
  
  return (
    <>
   
     <div className='container_area-privada'>   
      <Header />      

      <div className='display-info'>
      <Sidebar selected={selected} setSelected={setSelected } />    
      <Tablero />  
      </div>
      <Footer />
      
     </div>  
     
    </>
  )
}

export default AreaPrivada