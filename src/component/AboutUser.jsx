import React, { useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import About from './About'
import header3 from "../assests/header3.jpg"
import Loading from "./common/loading";
function AboutUser() {
    const [intro , setIntro] = useState("With our support, you can confidently venture into international markets and expand your reach. We'll be there at every step, making the process smooth and seamless.")
    
  
  return (
  <>
  <Header bg={header3} about={intro}/>
    <About/>

<Team/>
  <Footer/>
  </>
  )
}

export default AboutUser


function Team(){
    // let users = [{
    //     Name:"Shahid Jan Amin",
    //     Position:"CEO",
    //     Email:"shahidjan@gmail.com",
    //     Whatsapp:"+923475557508",
    //     Image:"https://media.licdn.com/dms/image/D4D03AQHLA1HolDvpgw/profile-displayphoto-shrink_800_800/0/1680724580951?e=1695859200&v=beta&t=b0YP7pejuXlrznj16tDaSYd8a4Z_jNV8B5IGKhIdPiQ"
    // },
    // {
    //     Name:"Shahid Jan",
    //     Position:"Manager",
    //     Email:"shahidjan@gmail.com",
    //     Whatsapp:"+923475557508",
    //     Image:"https://media.licdn.com/dms/image/D4D03AQHLA1HolDvpgw/profile-displayphoto-shrink_800_800/0/1680724580951?e=1695859200&v=beta&t=b0YP7pejuXlrznj16tDaSYd8a4Z_jNV8B5IGKhIdPiQ"
    // },
    // {
    //     Name:"Shahid Amin",
    //     Position:"Employee",
    //     Email:"shahidjan@gmail.com",
    //     Whatsapp:"+923475557508",
    //     Image:"https://media.licdn.com/dms/image/D4D03AQHLA1HolDvpgw/profile-displayphoto-shrink_800_800/0/1680724580951?e=1695859200&v=beta&t=b0YP7pejuXlrznj16tDaSYd8a4Z_jNV8B5IGKhIdPiQ"
    // },
    // {
    //     Name:"Amin Jan",
    //     Position:"Employee",
    //     Email:"shahidjan@gmail.com",
    //     Whatsapp:"+923475557508",
    //     Image:"https://media.licdn.com/dms/image/D4D03AQHLA1HolDvpgw/profile-displayphoto-shrink_800_800/0/1680724580951?e=1695859200&v=beta&t=b0YP7pejuXlrznj16tDaSYd8a4Z_jNV8B5IGKhIdPiQ"
    // },
    // {
    //     Name:"Amin Afghan",
    //     Position:"Employee",
    //     Email:"shahidjan@gmail.com",
    //     Whatsapp:"+923475557508",
    //     Image:"https://media.licdn.com/dms/image/D4D03AQHLA1HolDvpgw/profile-displayphoto-shrink_800_800/0/1680724580951?e=1695859200&v=beta&t=b0YP7pejuXlrznj16tDaSYd8a4Z_jNV8B5IGKhIdPiQ"
    // }]
    const [users, setUsers] = useState(false);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch('localhost:500/get/users'); // Replace with your API endpoint
              if (!response) {
                throw new Error('Network response was not ok');
              }
              const jsonData = await response.json();
              setUsers(jsonData);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        window.scroll(0,0)
    },[])
    return(
        <>
        {
            users?    <div className="container py-5 py-md-3">
            <h1 className="text-center font-montserrat blue-title">
               MEET OUR TEAM
            </h1>

            <div className="row justify-content-center align-items-center g-2 py-3">
               {
                users?users.map((d, i)=>{
                    return(
                        <div className="col-lg-4 col-md-6 col-sm-10 mx-auto" key={i}>
                        <div className="card border-0 w-75 card-hover2">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <img src={`${d.Image}`}
                                style={{width:"200px", height:'auto', objectFit:"cover", borderRadius:"10%"}} className='mx-auto' alt="team member image " />
                                <h3 className="text-center blue-title font-Lumanosimo">
                                    {d.Name} <span className='font-montserrat fw-bold'>{d.Position}</span>
                                </h3>
                                {/* <p className='text-center font-montserrat'>
{d.Intro}
                                </p> */}
                                <p className='font-montserrat'>
                                  <b>Email </b>  <a href={`mailto:${d.Email}`} className="fw-bold text-decoration-none " style={{fontSize:"12px"}}>{d.Email}</a>  
                                </p>
                                <p className='font-montserrat'>
                                  <b>What's app </b>  <a href={`https://api.whatsapp.com/send?phone=${d.Number}`} className="fw-bold text-decoration-none">{d.Number} chat</a>  
                                </p>
                            </div>
                        </div>
                    </div>
                    )
                }):""
               }
               
            </div>
        </div>: <Loading/>
        }
        </>
    )
}