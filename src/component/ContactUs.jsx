import { useState } from "react"
import video from "../assests/video.mp4";
export default function ContactUs() {

  const [data, setData] = useState({
    Name: " ",
    Email: " ",
    Subject: " ",
    Message: " "
  })

  const [result, setResult] = useState({ value: null })
  const Handler = (e) => {
    setData(pre => ({
      ...pre,
      [e.target.name]: e.target.value
    }));
  }

  const BtnHandler = () => {
    setResult({ value: null })
  }
  const FormHandler = (e) => {
    e.preventDefault();
    setData({ Name: " ",
    Email: " ",
    Subject: " ",
    Message: " "})
    setResult({value:true})

  }

  return (
    <>
      <div className="container-fluid position-relative  vh-100">

        <div className="container vh-100" style={{ zIndex: "1" }} id="contact">
          <div className="row d-flex align-items-center justify-content-end h-100 ">
          <div className="col-lg-6 col-md-8 col-sm-10 mx-end bg-white-50">
            <div className="form flex-fill mx-auto">

              {/* displaying the error */}


              {/* for message start */}
              <div
                className="w-100 position-relative"
                style={{
                  zIndex: 1111,
                  height: "50px",
                  display: result.value === false ? "block" : "none",
                }}
              >
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Fail!</strong> Please fill are required fields.
                  <button
                    onClick={BtnHandler}
                    type="button"
                    className="btn-close"
                  ></button>
                </div>
              </div>


              {/* for success */}
              <div
                className="w-100 position-relative"
                style={{
                  zIndex: 1111,
                  height: "50px",
                  display: result.value === true ? "block" : "none",
                }}
              >
                <div
                  className="alert alert-primary alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Thanks!</strong> We will reply to your email.
                  <button
                    onClick={BtnHandler}
                    type="button"
                    className="btn-close"
                  ></button>
                </div>
              </div>

              {/* duplicate title */}
              <div
                className="w-100 position-relative"
                style={{
                  zIndex: 1111,
                  height: "50px",
                  display: result.value === "wrongEmail" ? "block" : "none",
                }}
              >
                <div
                  className="alert alert-info alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Incorrect Email!</strong> Please enter the correct Email address.
                  <button
                    onClick={BtnHandler}
                    type="button"
                    className="btn-close"
                  ></button>
                </div>
              </div>


              {/* server error */}
              <div
                className="w-100 position-relative"
                style={{
                  zIndex: 1111,
                  height: "50px",
                  display: result.value === "server" ? "block" : "none",
                }}
              >
                <div
                  className="alert alert-info alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Server Error!</strong> Please try again later. There is something wrong on server side.
                  <button
                    onClick={BtnHandler}
                    type="button"
                    className="btn-close"
                  ></button>
                </div>
              </div>




              {/* displaying the error */}

              <form onSubmit={FormHandler}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold text-white">Name</label>
                  <input type="text" className="form-control" id="name" name="Name" value={data.Name} onChange={Handler} />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold text-white">Email</label>
                  <input type="email" className="form-control" id="email" name="Email" value={data.Email} onChange={Handler} />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-bold text-white">Subject</label>
                  <input type="text" className="form-control" id="subject" name="Subject" value={data.Subject} onChange={Handler} />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-bold text-white">Message</label>
                  <textarea className="form-control" id="message" cols="30" rows="3" name="Message" value={data.Message} onChange={Handler}></textarea>
                </div>

                
                <button type="submit" className="btn btn-primary px-3 font-montserrat">Send</button>
              </form>
            </div>
            </div>

          </div>



          {/* <div className="info flex-fill mx-auto my-md-0 my-5">
            <div className="mb3">
              <h3 className="color-blue-light fs-1"><i className="bi bi-geo-alt"></i></h3>
              <p>{getData[1].Address}<a href="https://www.google.com/maps/place/Akhtar+Jan/@34.018345,71.3841106,19z/data=!4m6!3m5!1s0x38d911e06993fed1:0xaaba6b0d2e4deb86!8m2!3d34.0185447!4d71.3844064!16s%2Fg%2F11k4b5xzbc" className='text-decoration-none'>Map</a></p>
            </div>

            <div className="mb3">
              <h3 className="color-blue-light fs-1"><i className="bi bi-envelope"></i></h3>
              <p>
                {getData[1].Email}
                <a className="text-decoration-none" href="mailto:Arsalak045@gmail.com">Send us an email</a>
</p>
            </div>

            <div className="mb3">
              <h3 className="color-blue-light fs-1"><i className="bi bi-telephone"></i></h3>
              <p>                {getData[1].Number}
 <a href="tel:+93754646442" className=" text-decoration-none"> Call us now</a>
</p>
<p>+93700005936 <a href="tel:+93754646442" className=" text-decoration-none"> Call us now</a>
</p>
            </div>

            <div className="mb3">
              <h3 className="color-blue-light fs-1"><i className="bi bi-whatsapp"></i></h3>
              <p>                {getData[1].Whatsapp}
 <a className="text-decoration-none " aria-label="Chat on What's app" text="I'm%20inquiring%20about%20the%20apartment%20listing" href="https://wa.me/+93731204320"> Chat us now
</a ></p>

            </div>
        </div> */}

        </div>


        <video src={video} autoPlay={true} muted={true} loop={true} className="video-bg"></video>
      </div>

    </>
  )
}