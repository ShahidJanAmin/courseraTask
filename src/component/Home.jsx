
import About from "./About";
import ChooseUs from "./ChooseUs";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Work from "./Work";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { useEffect } from "react";


import bg from "../assests/header1.jpg"
export default function Home() {
    useEffect(()=>{
        window.scroll(0,0);
    },[])

    return (
        <>

            
                        <Header bg={bg}/>


                        <About />

                        <Services  len={3}/>
                         <ChooseUs />
                         <Work />
                       <ContactUs />

                      <Footer/> 
       


           
        </>
    )
}