import Nav from "./Nav";
import bg from "../../assests/header1.jpg";
import { useEffect } from "react";
export default function Header(props) {

  return (
    <>
      <header className=" position-relative overflow-hidden" id="home">
        <Nav />
        <div
          className="container-fluid black-50 vh-100 md-h-100 d-flex
        align-items-center color-white"
        >
          
          <div
            className="col-lg-6 mt-lg-3 col-md-10 col-sm-10 px-lg-5 d-flex
          align-items-start flex-column"
          >
            <h1 className="font-montserrat text-center font-size-45 text-sm-center ">
              <span className="bottom-inside-border"> DAM</span>
              <span className="text-orange">-T Company</span>
            </h1>
            <h6 className="font-montserrat  text-sm-center" style={{color:"orange"}}>
              Dawood Alfallah Mohammadi Trading Company
            </h6>
            <p style={{ textAlign: "justify", fontWeight:"500" }} className="col-md-8 col-lg-10 col-sm-10 font-montserrat">
              
             DAM-T Company is a leading shipment company in Afghanistan.  
                 We offers
                dependable services for import and export to and from
                Afghanistan.
              
              </p>
              <a href="#about" className="text-decoration-none btn px-3 py-2" style={{background:"orange"}}>Read More</a>
          </div>
         
           
          </div>
       

     <img src={props.bg} className="bg1" alt="" />
        {/* <img src="./pictures/background.jpg" className="bg1" alt="" /> */}
        <img src="./pictures/background2.jpg" className="bg2" alt="" />
      </header>



    </>)
}