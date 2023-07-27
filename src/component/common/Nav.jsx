import { useEffect, useState } from "react";
import "./common.css";
import { Link } from "react-router-dom";
export default function Nav() {
 
  const [scrolling, setScrolling] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
     
        {/* <nav className="navbar navbar-expand-lg blue-light fixed-top w-100 fixed-top"> */}
        <nav className={scrolling?"navbar navbar-expand-md fixed-top w-100 fixed-top  bg-dark-blue-50":"navbar navbar-expand-md fixed-top w-100 fixed-top bg-none-animation"}>
          <div className="container-fluid">
            {/* logo is remove from the below it is for animation */}
            <a className="navbar-brand d-flex align-items-center text-white font-montserrat fw-bold " href="#home">
              <img src="/3.png" style={{width:"100px", height:"auto", objectFit:"cover"}} alt="" /> DAM<span className="text-orange">-T Company</span>
            </a>
            <button
              className="navbar-toggler"
              style={{
                background: "transparent",
                border: "0px",
                outline: "none",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="bi bi-list-nested text-white"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end mx-5"
              id="navbarNav"
            >
              <ul className="navbar-nav text-center gap-4">
                <li className="nav-item">
                  <Link className="nav-link font-montserrat" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link font-montserrat"  to="/services">
                    Services
                  </Link>
                </li>


                <li className="nav-item">
                  <Link className="nav-link font-montserrat " to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link font-montserrat " to="/contact">
                    Contact
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link font-montserrat " to="/login">
                    Login
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

      
    </>
  );
}
