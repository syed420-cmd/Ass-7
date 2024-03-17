import React, { useState } from 'react'
import Carddata from './Cards'
import data from './Components/data.json'
import { useEffect } from 'react'
import Banner from './Components/Banner/Banner'
import Nav from './Components/Navbar/Nav'
import Cards from './Cards'
const App = () => {
  


  return (
    <>
   
   <Nav/>
    <Banner/>
    <Cards/>
       
    </>
  )
}

export default App