import React from "react";
import "./booking.css";

function Booking() {
  return (
    <>
      <div className="container">
        <div className="for_pd">
        <section className="for_bgform mb-5">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center for_align">
              <h3 className="tour_detail">Tour Details</h3>
              <p className="for_xmark">
                <i className="fa-solid fa-xmark"></i>
              </p>
            </div>
          </div>
          <hr className="for_hr" />
          <div className="container">
            <h5 className="for_tourdate for_align">Tour Date</h5>

            <select
              className="form-select for_select"
              aria-label="select example"
            >
              <option selected>Select Option</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <div className="package_type mt-3 ">
              <h3 className="heading_package">Package Type</h3>

              <div className="row mt-5">
                <div className="col-sm-12 col-lg-6 col-md-4 col-12">
                  <div className="for_justify">
                    <h5 className="for_font">Type</h5>
                    <h5 className="mt-3">4X4 Gypsy</h5>
                    <h5>Tempo Traveller</h5>
                    <h5>Seat In Coach</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>Price Per Person</h5>
                    <h5 className="mt-3">₹19,000</h5>
                    <h5>₹19,000</h5>
                    <h5>₹19,000</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-2 col-md-4 col-12">
                  <i className="fa-solid fa-user for_user"></i>

                  <h5 className="for_number mt-3">
                    <span className="for_minus mx-1">-</span> 1{" "}
                    <span className="for_plus mx-1">+</span>
                  </h5>
                  <h5 className="for_number">
                    <span className="for_minus mx-1">-</span> 2 {" "}
                     <span className="for_plus mx-1">+</span>
                  </h5>
                  <h5 className="for_number">
                    <span className="for_minus mx-1">-</span> 3{" "}
                    <span className="for_plus mx-1">+</span>
                  </h5>
                </div>
              </div>
              <hr className="for_hr" />

              <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>Total : Adults</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4 col-12"></div>
                <div className="col-sm-12 col-lg-2 col-md-4 col-12">
                  <h5>6</h5>
                </div>
              </div>

              <hr className="for_hr" />

              <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>Kids ( Age 3-10 )</h5>
                    <h5>Infant ( 0-2 )</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>₹2,500</h5>
                    <h5>₹1,500</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-2 col-md-4 col-12">
                  <h5>
                    <span className="for_minus mx-1">-</span> 1{" "}
                    <span className="for_plus mx-1">+</span>
                  </h5>
                  <h5>
                    <span className="for_minus mx-1">-</span> 1{" "}
                    <span className="for_plus mx-1">+</span>
                  </h5>
                </div>
              </div>
              <hr className="for_hr" />
              <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>Total : Kids</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4 col-12"></div>
                <div className="col-sm-12 col-lg-2 col-md-4 col-12">
                  <h5>2</h5>
                </div>
              </div>
              <h5 className="for_note">
                Note: Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </h5>
              <hr className="for_hr" />

              <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>Total Number Of Traveller</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4 col-12"></div>
                <div className="col-sm-12 col-lg-2 col-md-4 col-12">
                  <h5>8</h5>
                </div>
              </div>
              <hr className="for_hr" />
            </div>
          </div>

          <div className="container">
            <div className="package_type mt-3 ">
              <h3 className="heading_package">Room Sharing</h3>

              <div className="row mt-5">
                <div className="col-sm-12 col-lg-6 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>Type</h5>
                    <h5 className="mt-3">Triple/ Quad Sharing</h5>
                    <h5>Double Sharingr</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>Price Per Person</h5>
                    <h5 className="mt-3">₹0</h5>
                    <h5>₹1500</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-2 col-md-4 col-12">
                  <i className="fa-solid fa-user for_user"></i>

                  <h5 className="mt-3">
                    <span className="for_minus mx-1">-</span> 1{" "}
                    <span className="for_plus mx-1">+</span>
                  </h5>
                  <h5>
                    <span className="for_minus mx-1">-</span> 1{" "}
                    <span className="for_plus mx-1">+</span>
                  </h5>
                </div>
              </div>
              <hr className="for_hr" />

              <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>Total Number Of Traveller</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4 col-12"></div>
                <div className="col-sm-12 col-lg-2 col-md-4 col-12">
                  <h5>1</h5>
                </div>
              </div>

              <hr className="for_hr" />

              <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>Kids ( Age 3-10 )</h5>
                    <h5>Infant ( 0-2 )</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>₹2,500</h5>
                    <h5>₹1,500</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-2 col-md-4 col-12">
                  <h5>
                    <span className="for_minus mx-1">-</span> 1{" "}
                    <span className="for_plus mx-1">+</span>
                  </h5>
                  <h5>
                    <span className="for_minus mx-1">-</span> 1{" "}
                    <span className="for_plus mx-1">+</span>
                  </h5>
                </div>
              </div>
              <hr className="for_hr" />
              <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>Total : Kids</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4 col-12"></div>
                <div className="col-sm-12 col-lg-2 col-md-4 col-12">
                  <h5>2</h5>
                </div>
              </div>
              <h5 className="for_note">
                Note: Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </h5>
              <hr className="for_hr" />

              <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-4 col-12">
                  <div className="for_justify">
                    <h5>Total Number Of Traveller</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4 col-md-4 col-12"></div>
                <div className="col-sm-12 col-lg-2 col-md-4 col-12">
                  <h5>1</h5>
                </div>
              </div>
              <hr className="for_hr" />
            </div>
            <div className="container">
              <h3 className="for_tourdate for_align">Boarding Point</h3>

              <select
                className="form-select for_select"
                aria-label="select example"
              >
                <option selected>Select Option</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
             
                <div className="row">
                  <div className="col-sm-12 col-lg-6 col-md-4 col-12">
                    
                      <h5 className="total_amount">Total Amount</h5>
                  </div>
                  <div className="col-sm-12 col-lg-4 col-md-4 col-12"></div>
                  <div className="col-sm-12 col-lg-2 col-md-4 col-12">
                    <h5 className="total_bill">₹0</h5>
                  </div>
                  <div className="container">
                  <hr className="for_hr2" />
                  </div>
                </div>
                <button className="for_tourbutton">Book my Tour</button>
              </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}

export default Booking;
