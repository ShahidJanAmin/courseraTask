import { useEffect } from "react";
import { useSelector } from "react-redux"
export default function Work() {
 
  const data = [{
      Title:"Make Deal & Agreement", Description:"The first step is to sign a deal with us for shipping your products from and to Afghanistan. It's important to note that we're not limited to handling small orders, but can accommodate larger shipments as well. Once the deal is signed, we will collect your products and transport them to their destination."
  },{
    Title:"50% payment", Description:"According to our policy, we require a 50% advance payment for our services to ensure the safe and timely delivery of your products to their destination. However, if you have any issues with making an advance payment, please do not hesitate to contact us, and we will work with you to find an alternative solution. Our primary focus is always on customer satisfaction."
},{
  Title:"After Receiving", Description:"We take full responsibility for the safe delivery of your products, and it is your responsibility to complete the payment process afterward. Once everything is completed, we would greatly appreciate it if you could leave us a video feedback so that other customers can see it. Thank you for choosing our shipping services."
}]
  return (
    <>

      <section className="position-relative my-md-5 py-md-5 how-work">
        <h1
          className="text-center  color-blue-light"
          data-aos="zoom-out-down"
        >
          <span className="bottom-inside-border">
        Policy
          </span>
        </h1>
        <div className="container-fluid  d-md-flex justify-content-center
          align-items-center ">

          <div className="container">
            <h1 className="text-center text-white" data-aos="zoom-in">How it work</h1>
            <div className="row gap-md-0 gap-5">
              {
                data ? data.map((d, index) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12 mx-auto my-3" key={index}>
                      <div className="card card-hover blue-dark h-100 px-5 px-md-2" style={{borderRadius:"50% 50% 0 0"}}>
                        <h1 className="circle-bg-orange text-white text-center mx-auto">{index + 1}</h1>
                        <h3 className="text-white py-2 text-center font-playfair">{d.Title}</h3>
                        <p className="text-white text-center font-montserrat" >
                          {d.Description}
                        </p>
                      </div>
                      
                    </div>
                  )
                }) : ""
              }
            </div>
          </div>
        </div>
        {/* <img src="./pictures/background3.jpg" style={{width:"100%", height:"100%",
          objectFit:"cover", position:"absolute", top:"0px", zIndex:"-1"}} alt="" /> */}
      </section>

    </>
  )
}