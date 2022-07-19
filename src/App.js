import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Bottom1 from './Components/NavigationBottom/Bottom1'
import Home from './pages/Home'
const App = () => {
  return (
    <>
    
     <Bottom1 />
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </>
  )
}

export default App