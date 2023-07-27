import React, { useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import Services from "./Services";
import header2 from "../assests/header2.jpg";

function ServiceUser() {
  const [intro, setIntro]  = useState("We provide efficient Import-Export solutions.")
  useEffect(()=>{
   
    window.scroll(0,0)
},[])
  return (
 <>
    <Header bg ={header2} intro = {intro}/>

    <Services/>

    <Footer/>
 </>
  )
}

export default ServiceUser
