import React, { useEffect } from 'react'
import Footer from './common/Footer'
import ContactUs from './ContactUs'
import Headers from './common/Header'
import bg from "../assests/header3.jpg"

function ContactUser() {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <>
            <Headers bg={bg}/>
            <h1 className="text-center color-dark-blue  pt-5 pb-3 mt-5">
                <span className="" style={{ boxShadow: "orange 0px -5px 0px inset", borderRadius: "20%" }}> Leave Your Message </span>
            </h1>
            <ContactUs />

            {/* <Address/> */}
            <Footer />
        </>
    )
}

export default ContactUser

