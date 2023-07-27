import { useEffect } from "react";

export default function About() {

  return (
    <>
      <main className=" d-flex align-items-center container px-1 about-home">
        <div className="row  position-relative">
          <div className="col-lg-7 col-md-10 mx-auto color-dark-blue" data-aos="zoom-in">
            <h1>
              <span className="bottom-inside-border"> Dawood</span> Alfallah Muhammadi 
            </h1>
            <h1>
              Trading Company
            </h1>
          </div>
          <div className="col-lg-5 col-md-10 mx-auto" data-aos="zoom-in-out" style={{fontWeight:"500" }}>
           
        
         
           <p>
           Dawoow Alfallah Muhammadi Trading Company is Shipment Company for reliable,
            cost-effective, and efficient transportation services. Experience the difference of
             a trusted partner dedicated to your satisfaction. Contact us today to discuss your 
             shipment needs and let us take care of the logistics while you focus on growing your business.

           </p>
          
           
          </div>
          <div className="circle-ball-movement"></div>
        </div>
        
      </main>
    </>
  )
}