import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Services(props) {
  

  return (
    <>
      <section className="position-relative services pb-md-5" id="services">
        <div
          className="container-fluid d-md-flex justify-content-center
  align-items-center  my-5"
        >
          <div className="container">
            <h1
              className="text-center my-5 color-blue-light"
              data-aos="zoom-out-down"
            >
              <span className="bottom-inside-border font-montserrat fw-bold">
                Services
</span>
            </h1>

            <ServiceList animation={true} />
          </div>
        </div>
      </section>
    </>
  );
}

export function ServiceList(props = { animation: true, edit: false }) {

  // const data = 
  // [
  //   {
  //     Title:"Package Shipping",
  //     Description:"Package shipping is a fundamental service offered by shipment companies to transport individual packages from one location to another. ",
  //     Image:"https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFja2FnZSUyMHNoaXBwcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  //   },
  //   {
  //     Title:"Express Delivery",
  //     Description:"Express delivery is a premium shipping option that prioritizes speed and time-sensitive shipments. It caters to customers who need their packages to be delivered quickly, often within one or two days. ",
  //     Image:"https://images.unsplash.com/photo-1607273685680-6bd976c5a5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  //   },
  //   {
  //     Title:"Freight Shipping",
  //     Description:"Freight shipping deals with the transportation of larger and heavier cargo that exceeds the size and weight limitations of regular packages.",
  //     Image:"https://images.unsplash.com/photo-1524522173746-f628baad3644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=931&q=80"
  //   }
  // ]

  const [ service, setServices] = useState(false)
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('localhost:500/get/services'); 
        if (!response) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setServices(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  })


  return (
    <>


      <div className="row gy-5">
        {

          data ? data.map((d, i) => {

            return (
              <div className="col-xl-4 threeD  col-lg-4 col-md-6 col-sm-10
              h-auto mx-auto " key={i}>
                <div className="card  overflow-hidden h-100 blue-dark " >
                  <div className="card-header position-relative bg-orange " style={{borderBottomRightRadius:"100%", borderBottomLeftRadius:"100%"}}>
                  {/* <img src={"http://localhost:500/uploads/" + d.Image} alt=""
                    className="card-img-top " style={{ height: "100%", objectFit: "cover", width: "100%" }} /> */}

<img  src={`${d.Image}`} alt="service image "
                    className="card-img-top px-2 pt-2 " style={{ height: "200px", objectFit: "cover", width: "100%" }} />

                    
                  </div>
                  <div className="card-body position-relative">
                    {/* <div className={props.animation ? "hover-text" : " "}> */}
                    <div className="text-white">
                      <h3 className="choose-point font-playfair text-center">{d.Title}</h3>
                      <p className="font-montserrat text-center">
                        {d.Description}
                      </p>
                    </div>
                  </div>

                </div>



              </div>
            )
          }) : ""

        }
        
      </div>

    </>


  );
}
