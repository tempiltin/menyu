import React from 'react'
import { Route , Routes } from 'react-router-dom'
// import Error from './Error';

import Home from './pages/Home'





// console.log(window.location.href.split('/'));


function App () {
  return (
    <>
    
    
    <Routes>
      <Route path='*' element={<Home />}/>
      {/* <Route path='*' element={<Error/>}/> */}
    </Routes>
    </>
  )
}

export default App