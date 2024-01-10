import React from "react";
import "./footer.css";
import glabol from "../../../assets/images/Glabol.png"; 
function Footer() {
  return (
    <>
      <div
        className="text-light d-flex justify-content-between"
        style={{ backgroundColor: "#DC1B5E", marginBottom:'0' }}
      >
        <div className="container">
          <div className="row"></div>
          <div className="d-flex align-items-center ">
            <div>"Discover Your Next Adventure: Unleash the World Awaits"</div> 

            <div className="d-flex ms-auto pt-2 ">
              <p className="for_icons mx-2 px-2">
                <i className="fa-brands fa-facebook"></i>
              </p>
              <p className=" for_icons mx-2 px-2">
                <i className="fa-brands fa-instagram"></i>
              </p>
              <p className="for_icons mx-2 px-2">
              <i className="fa-brands fa-x-twitter"></i>
              </p>
              <p className="mx-2 px-2 for_icons">
                <i className="fa-brands fa-linkedin"></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-12 col-md-12 col-lg-6 col-12">
           
            <div className="mt-3">
              <div className="text-start">
                <img src={glabol} className="img-fluid"/>
              </div>
              <h4 className="text-start mt-3 font_heading" style={{ color: "#DC1B5E" }}>
                ABOUT US
              </h4>
              <p className="text-start fs-6 for_about text-align-justify">
                Glabol India offers comprehensive travel packages for India and
                abroad, including road trips, trekking adventures, corporate
                outings, and custom tours. We specialize in group travel
                experiences, providing top-notch accommodations, guided
                sightseeing, and budget-friendly pricing. Tell us your travel
                dates and prepare for a unique and hassle-free journey.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 col-12 mt-3">
            <h3 className="fs-5 text-start font_heading mb-3" style={{ color: "#DC1B5E" }}>
              QUICK LINKS
            </h3>
            <h5 className="text-start for_link">Home</h5>
            <h5 className="text-start for_link">Disclaimer</h5>
            <h5 className="text-start for_link">Privacy Policy</h5>
            <h5 className="text-start for_link">Cancellation Policy</h5>
            <h5 className="text-start for_link">Terms & Conditions</h5>
            <h5 className="text-start for_link">About us</h5>
            <h5 className="text-start for_link">Blog</h5>
            <h5 className="text-start for_link">Contact us</h5>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 col-12 mt-3">
            <h3 className="fs-5 text-start font_heading" style={{ color: "#DC1B5E" }}>
              TRIPS
            </h3>
            <h5 className="text-start for_link">Backpacking Trips</h5>
            <h5 className="text-start mt-1 for_link">International Departures</h5>
            <h5 className="text-start mt-1 for_link">Weekened Trips</h5>
            <h5 className="text-start mt-1 for_link">Bike Trips</h5>
            <h5 className="text-start mt-1 for_link">Treking</h5>
            <h5 className="text-start mt-1 for_link">Camping</h5>
          </div>
        </div>
      </div>
      <div className="text-light mb-0 mt-4 pb-1" style={{ backgroundColor: "#DC1B5E" }}>
        <h2 className="pt-4">GLABOL EXPEDITION PVT LTD</h2>
        <p className="fs-5 mt-3">
          {" "}
          <i className="fa-solid fa-house"></i> Address
        </p>
        <p>1881D, Above UCO Bank, Near Lucky Bakery, Sudama Nagar.</p>
        <div className="d-flex justify-content-center">
          <p>
            <i className="fa-solid fa-envelope"></i> info@glabol.com
          </p>
          <p className="px-2">
            <i className="fa-solid fa-phone"></i> +91 89622 45021
          </p>
          <p className="px-2">
            <i className="fa-solid fa-earth-americas"></i> www.glabol.com
          </p>
        </div>
        <p>Copyright © 2019 Glabol India. All rights reserved.</p>
      </div>
    </>
  );
}
export default Footer;
