import React from 'react'
import { Link } from "react-router-dom";
import {
  FaYoutube,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
  } from "react-icons/fa";
  import { IconContext } from "react-icons";
  import { FaOpencart } from "react-icons/fa";
  
  import "../Footer/Footer.scss"

const CompanyLogo = () => {
  return (
    <IconContext.Provider className="" value={{ size: "40px" }}>
      <div className="text-white">
        <FaOpencart />
      </div>
    </IconContext.Provider>
  );
};

const test = () => {
  return (
    <footer className="section-footer"> 
    <div className=""> 
    <section className="text-center text-white">
 
  <div className="social-media-container p-4 pb-0">
   
    <section className="mb-4 d-flex justify-content-center">
      
      
        <Link to={"./"} className="btn-fb">
        <IconContext.Provider className="" value={{ size: "30px" }}>
          <div className="text-white ">
            <FaFacebookF />
          </div>
        </IconContext.Provider>
      </Link>
     

     
      <Link to={"./"} className="btn-tw">
                  <IconContext.Provider className="" value={{ size: "30px" }}>
                    <div className="text-white">
                      <FaTwitter />
                    </div>
                  </IconContext.Provider>
                </Link>

     
      <Link  to={"./"} className="btn-insta">
                  <IconContext.Provider className="" value={{ size: "30px" }}>
                    <div className="text-white">
                      <FaInstagram />
                    </div>
                  </IconContext.Provider>
                </Link>

     
      
      <Link to={"./"} className="btn-youtube">
                <IconContext.Provider className="" value={{ size: "30px" }}>
                    <div className="text-white">
                      <FaYoutube />
                    </div>
                  </IconContext.Provider>
                 
                </Link>
 
      <Link to={"./"} className="btn-li">
                <IconContext.Provider className="" value={{ size: "30px" }}>
                    <div className="text-white">
                      <FaLinkedinIn />
                    </div>
                  </IconContext.Provider>
                </Link>
    </section>
    
  </div>
 

  
</section>
    
    <section className="footer-main py-5"> 
    <div className="row"> 
    <aside className="col-12 col-sm-12 col-lg-3"> 
    <article className="me-lg-4"> 
    <div className="header-img-container position-relative d-flex align-items-center justify-content-center">
              <img
                className="blackhole-footer rotatex"
                height="180px"
                src="./imagesForTest/blackhole.svg"
              ></img>
              <CompanyLogo className="" />
            </div> 
    <p className="mt-3"> © 2018- 2021 Templatemount. <br/> All rights reserved. </p> 
    </article> 
    </aside> 
    <aside className="col-6 col-sm-4 col-lg-2"> 
    <h6 className="title">Store</h6> 
    <ul className="list-menu"> 
    <li> <Link to={"./"} >About us</Link></li> 
    <li> <Link to={"./"}>Find store</Link></li> 
    <li> <Link to={"./"}>Categories</Link></li> 
    <li> <Link to={"./"}>Blogs</Link></li> 
    </ul> 
    </aside> 
    <aside className="col-6 col-sm-4 col-lg-2"> 
    <h6 className="title">Information</h6> 
    <ul className="list-menu"> 
    <li> <Link to={"./"}>Help center</Link></li> 
    <li> <Link to={"./"}>Money refund</Link></li> 
    <li> <Link to={"./"}>Shipping info</Link></li> 
    <li> <Link to={"./"}>Refunds</Link></li> 
    </ul> 
    </aside> 
    <aside className="col-6 col-sm-4 col-lg-2"> 
    <h6 className="title">Support</h6> 
    <ul className="list-menu"> 
    <li> <Link to={"./"}> Help center </Link></li> 
    <li> <Link to={"./"}> Documents </Link></li> 
    <li> <Link to={"./"}> Account restore </Link></li> 
    <li> <Link to={"./"}> My Orders </Link></li> 
    </ul> 
    </aside> 
    <aside className="col-12 col-sm-12 col-lg-3"> 
    <h6 className="title">Newsletter</h6> 
    <p>Stay in touch with latest updates about our products and offers </p> 
    <form className="mb-3"> <div className="input-group"> 
    <input className="form-control" type="text" placeholder="Email"/> 
    <button className="btn btn-light" type="submit"> Join </button> 
    </div>
    </form> 
    </aside> 
    </div>
    </section> 
    
    <hr className="my-0"/> 
    <section className="footer-bottom d-flex justify-content-lg-between"> 
    <div> 
        <i className="fab fa-lg fa-cc-visa"></i> 
        <i className="fab fa-lg fa-cc-amex"></i> 
        <i className="fab fa-lg fa-cc-mastercard"></i> 
        <i className="fab fa-lg fa-cc-paypal"></i> 
        </div> 
        <nav className="dropup"> 
        <button className="dropdown-toggle btn text-white d-flex align-items-center py-0" type="button" data-bs-toggle="dropdown"> 
        <img src="bootstrap5-ecommerce/images/flags/flag-usa.png" className="me-2" height="20"/> 
        <span>English</span> 
        </button> 
        <ul className="dropdown-menu dropdown-menu-end"> 
        <li><Link className="dropdown-item" to={"./"}>Turkish</Link></li> 
        
        </ul> 
        </nav> 
        </section> 
        </div>  
        </footer>
  )
}

export default test