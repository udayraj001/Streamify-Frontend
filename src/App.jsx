import React from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './css/App.css'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import LeftBlock from './components/LeftBlock'
import './css/index.css'
import './css/index-responsive.css'
import './css/index-components.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from './Root'
import Mid from './components/Mid'
import RightBlock from './components/RightBlock'
import Profile from './components/Profile'

function App() {
  
  return (
    
    
     <>

<ResponsiveAppBar/>
    <div className='App' >
        <LeftBlock/>
        <Mid/>
        <RightBlock/>
    </div>

<Router>
  <Routes>
    <Route>
   

    {/* <Route path="/" element={<Root />}> */}
      <Route index element={<Profile/>} />
      {/* <Route path='/login' element={<Profile />} /> */}
     
      
    </Route>
  </Routes>
</Router>









</>




  
  )
}

export default App
