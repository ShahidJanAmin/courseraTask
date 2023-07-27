import truct from "../assests/trust.png";
import lesscost from "../assests/lesscost.png";
import safe from "../assests/safe.png";
import { useEffect, useState } from "react";
import Loading from "./common/loading";
export default function ChooseUs() {

  // const data = [
  //   {
  //     Title:"Market Trust",
  //     Description:"Market trust is the confidence and reliance that consumers and investors have in a particular market or industry. It is built through consistent delivery of quality products and services, transparent and ethical business practices, and maintaining a positive reputation among stakeholders.",
  //     Image:truct
  //   },
  //   {
  //     Title:"Cost Effective",
  //     Description:"Cost-effective refers to achieving the desired results or outcomes while minimizing expenses and resources. It involves finding efficient and economical solutions that offer the best value for money without compromising on quality or performance.",
  //     Image:lesscost
  //   },
  //   {
  //     Title:"Safe Delivery",
  //     Description:"Safe delivery refers to the secure and reliable transportation of goods from one location to another without any damage, loss, or mishandling. It involves implementing stringent safety measures, proper packaging, and reliable logistics to ensure the items reach their destination in perfect condition.",
  //     Image:safe
  //   }
  // ]
  const [chooseUs, setChooseUs] = useState(false)
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('localhost:500/get/services'); // Replace with your API endpoint
        if (!response) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setChooseUs(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  })
  return (
    <>
      chooseUs?<section className="position-relative why_choose">

<div className="container-fluid d-md-flex justify-content-center
align-items-center my-md-5 py-md-5 pb-3">
  <div className="container">
    <h1 className="text-center my-5 color-blue-light"
      data-aos="zoom-out-down">
       Why Choose Us?
      </h1>
    <p className="col-md-75 col-sm-10 mx-auto" style={{ textAlign: "justify", fontWeight:"500" }}>
      Choose DAM-T Company is Shipment Company for reliable, cost-effective, and efficient transportation services.
      Experience the difference of a trusted partner dedicated to your satisfaction. Contact us today to
      discuss your
      shipment needs and let us take care of the logistics while you focus on growing your business.
    </p>
    <div className="row gap-md-0 gap-5 gy-3 mt-5 py-5 py-sm-2">

      {

        data ? data.map((d, index) => {
          return (
            <div className="col-xl-4  px-4 col-md-6 col-lg-4 col-sm-5 col-xs-6  mt-5
h-auto mx-auto" key={index}>
              <div className="card choose-hover h-100 blue-dark position-relative" style={{borderRadius:"0px 0px 50% 50%"}}>
                {/* <img src={"http://localhost:500/uploads/" + d.Image} alt=""
                  className="card-img-top px-5 py-2" /> */}
               <div className="card-header border-0 bg-transparent d-flex justify-content-center" style={{marginTop:"-30px"}}>
                 <img src={`${d.Image}`} alt="choose us image "
                  className="card-img-top px-md-2 py-2 py-md-1" style={{width:"70%",height:"200px", objectFit:"fill"}} />
               </div>
                <div className="card-body text-white py-5">
                  <h3 className="choose-point font-playfair text-center">{d.Title}</h3>
                   <p className="px-4 text-center font-montserrat">
                    {d.Description}
                  </p> 
                </div>
              </div>


            </div>
          )
        }) : ""
      }
      <div className="col-xl-3 col-md-3 col-sm-6 col-xs-6"></div>

    </div>
  </div>
</div>

</section>:<Loading/>
    </>
  )
}