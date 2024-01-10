import React from "react";
import tripdetails from "../../assets/images/Tripimage.png";
import alphakashmir from "../../assets/images/alphakashmir.png";
import "./tripDetails.css";
import Yellowrectangle from "../../assets/images/yellowrectangle.png";
import apharwatparwat from "../../assets/images/apharwat-peak-in-kashmir-barnner.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Photo from "../../assets/images/Photoshead.png";
import "react-tabs/style/react-tabs.css";
import wendromkashmir from "../../assets/images/wanderon-kashmir-3 1.png";
import Youtube from "../../assets/images/youtube.png";
import girlsimg from "../../assets/images/girlsimg2 (1).png";
import girlsimg2 from "../../assets/images/girlsimg2 (2).png";
import forvideos from "../../assets/images/Forvideos.png";
import YT1 from "../../assets/images/YT1.png";
import YT2 from "../../assets/images/YT2.png";
import YT3 from "../../assets/images/YT3.png";
import { TbShare } from "react-icons/tb";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function TripDetails() {
  return (
    <>
      {/* <section className="mt-2">
        <div className="Main_div">
          <img src={tripdetails} className="img-fluid for_tripimage" />
          <div className="container">
            <div className="for_imgcontent">
              <div className="d-flex">
                <div className="col-sm-12 col-12 col-md-6 col-lg-6">
                  <h4>Fall in Love with </h4>
                  <h2>KASHMIR</h2>
                </div>
                <div className="col-sm-12 col-12 col-md-6 col-lg-6">
                  <TbShare />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 col-sm-12">
              <div className="d-flex justify-content-between">
                <div className="col-12 col-md-6 col-lg-6 col-12 col-sm-12">
                  <div>
                    <img src={Yellowrectangle} className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-12 col-sm-12">
                  <div>
                    <img src={alphakashmir} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <img src={apharwatparwat} className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-sm-12">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-4 col-sm-12"></div>
                <div className="col-12 col-md-4 col-lg-4 col-sm-12">
                  <div className="for_justify">
                    <h5>DURATION</h5>
                    <h5 className="mt-3">STARTING PRICE</h5>
                    <h5>PICK-UP LOCATION</h5>
                    <h5>DROP-OFF LOCATION</h5>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 col-sm-12">
                  <div className="for_justify">
                    <h5>5 Night - 6 Days</h5>
                    <h5>₹28,499/-</h5>
                    <h5>Srinagar</h5>
                    <h5>Srinagar</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-sm-12"></div>
          </div>
        </div>
      </section> */}
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-8 col-md-6">
              {/* <Tabs>
                <TabList>
                  <Tab>OVERVIEW</Tab>
                  <Tab>Tour Outline</Tab>
                  <Tab>OTHER INFO</Tab>
                </TabList>

                <TabPanel>
                  <div className="for_upperdiv">
                    <div className="parentdiv">
                      <h3 className="for_head">KASHMIR</h3>
                      <h5 className="mainhead">
                        <span className="for_firsthead">
                          Unveil the enchantment of Kashmir
                        </span>{" "}
                        <span className="second_head">
                          through our meticulously curated journey, where every
                          moment unveils a tapestry woven with the finest
                          threads of nature’s splendor and cultural opulence.
                          Traverse through the Serene Embrace of Dal Lake, where
                          time stands still amid floating gardens and
                          centuries-old tales whispered by the waters.
                        </span>
                      </h5>
                      <h5 className="mainhead">
                        {" "}
                        <span className="for_firsthead">
                          Experience the grandeur of Gulmarg's snow-cloaked
                          peaks
                        </span>
                        ,
                        <span className="second_head">
                          each frame a masterpiece painted by nature herself.
                          Every sunrise is a symphony, casting hues upon the
                          valley, while each sunset whispers its own tale
                          against the majestic mountains.
                        </span>
                      </h5>
                      <h5 className="mainhead">
                        {" "}
                        <span className="for_firsthead">
                          From the intricate designs of Mughal Gardens to the
                          untouched serenity of Pahalgam
                        </span>
                        ,
                        <span className="second_head">
                          {" "}
                          embrace the heritage and stories etched in every
                          stone, every bloom, and every smile that warmly greets
                          you along the way.
                        </span>
                      </h5>
                    </div>
                    <div className="highlight_div mt-5">
                      <h4 className="heading_highlight">Highlights</h4>
                      <div className="for_highlight_content">
                        <h5>
                          <span className="for_dot px-1">.</span> Picnic lunch
                          with maggie cooking
                        </h5>
                        <h5>
                          <span className="for_dot px-1">.</span> Traditional
                          Khatak welcome in Spiti
                        </h5>
                        <h5>
                          <span className="for_dot px-1">.</span> Custom
                          Postcard at World's highest Post Office
                        </h5>
                        <h5>
                          <span className="for_dot px-1">.</span> PiHot water
                          bottles per request
                        </h5>
                        <h5>
                          <span className="for_dot px-1">.</span> Highest Post
                          office in the World
                        </h5>
                      </div>
                    </div>
                    <div className="for_note_div mt-5">
                      <h4 className="for_note_content">
                        NOTE: We can swap the Pahalgam stay with Gulmarg and
                        vice versa based on weather conditions and hotel
                        availability. This way, there will be no change in the
                        sightseeing options, as the number of nights at each
                        destination will remain the same.
                      </h4>
                      <h4 className="for_note_content mt-4">
                        NOTE: The age limit of our group departures is 16 to 42
                        years due to the power packed itineraries that we
                        provide to our travellers. We can customise trips for
                        travellers beyond the mentioned age bracket.
                      </h4>
                      <h4 className="for_note_content mt-4">
                        NOTE: The age limit of our group departures is 16 to 42
                        years due to the power packed itineraries that we
                        provide to our travellers. We can customise trips for
                        travellers beyond the mentioned age bracket.
                      </h4>
                      <h4 className="for_note_content mt-4">
                        NOTE: Kindly schedule flights arriving in Srinagar
                        before 11:30 AM as our local sightseeing tour commences
                        at 01:00 PM.
                      </h4>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs> */}
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item " role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    OVERVIEW
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Tour Outline
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    OTHER INFO
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="for_upperdiv mt-4">
                    <div className="parentdiv">
                      <h3 className="for_head">KASHMIR</h3>
                      <h5 className="mainhead">
                        <span className="for_firsthead">
                          Unveil the enchantment of Kashmir
                        </span>{" "}
                        <span className="second_head">
                          through our meticulously curated journey, where every
                          moment unveils a tapestry woven with the finest
                          threads of nature’s splendor and cultural opulence.
                          Traverse through the Serene Embrace of Dal Lake, where
                          time stands still amid floating gardens and
                          centuries-old tales whispered by the waters.
                        </span>
                      </h5>
                      <h5 className="mainhead">
                        {" "}
                        <span className="for_firsthead">
                          Experience the grandeur of Gulmarg's snow-cloaked
                          peaks
                        </span>
                        ,
                        <span className="second_head">
                          each frame a masterpiece painted by nature herself.
                          Every sunrise is a symphony, casting hues upon the
                          valley, while each sunset whispers its own tale
                          against the majestic mountains.
                        </span>
                      </h5>
                      <h5 className="mainhead">
                        {" "}
                        <span className="for_firsthead">
                          From the intricate designs of Mughal Gardens to the
                          untouched serenity of Pahalgam
                        </span>
                        ,
                        <span className="second_head">
                          {" "}
                          embrace the heritage and stories etched in every
                          stone, every bloom, and every smile that warmly greets
                          you along the way.
                        </span>
                      </h5>
                    </div>
                    <div className="highlight_div mt-5">
                      <h4 className="heading_highlight">Highlights</h4>
                      <div className="for_highlight_content">
                        <h5>
                          <span className="for_dot px-1">.</span> Picnic lunch
                          with maggie cooking
                        </h5>
                        <h5>
                          <span className="for_dot px-1">.</span> Traditional
                          Khatak welcome in Spiti
                        </h5>
                        <h5>
                          <span className="for_dot px-1">.</span> Custom
                          Postcard at World's highest Post Office
                        </h5>
                        <h5>
                          <span className="for_dot px-1">.</span> PiHot water
                          bottles per request
                        </h5>
                        <h5>
                          <span className="for_dot px-1">.</span> Highest Post
                          office in the World
                        </h5>
                      </div>
                    </div>
                    <div className="for_note_div mt-5">
                      <h4 className="for_note_content">
                        NOTE: We can swap the Pahalgam stay with Gulmarg and
                        vice versa based on weather conditions and hotel
                        availability. This way, there will be no change in the
                        sightseeing options, as the number of nights at each
                        destination will remain the same.
                      </h4>
                      <h4 className="for_note_content mt-4">
                        NOTE: The age limit of our group departures is 16 to 42
                        years due to the power packed itineraries that we
                        provide to our travellers. We can customise trips for
                        travellers beyond the mentioned age bracket.
                      </h4>
                      <h4 className="for_note_content mt-4">
                        NOTE: The age limit of our group departures is 16 to 42
                        years due to the power packed itineraries that we
                        provide to our travellers. We can customise trips for
                        travellers beyond the mentioned age bracket.
                      </h4>
                      <h4 className="for_note_content mt-4">
                        NOTE: Kindly schedule flights arriving in Srinagar
                        before 11:30 AM as our local sightseeing tour commences
                        at 01:00 PM.
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  ...
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 col-md-6">
              <div className="parentdiv2 ">
                <h4 className="for_datescosting pt-3">
                  <span style={{ color: "#DC1B5E" }}>Dates</span> & Costing
                </h4>
                <div className="mt-4">
                  <button className="for_button mx-2">JAN</button>
                  <button className="for_button2 mx-2">FEB</button>
                  <button className="for_button mx-2">MAR</button>
                </div>
                <div className="mt-3">
                  <button className="for_button mx-2">APR</button>
                  <button className="for_button mx-2">JUN</button>
                  <button className="for_button mx-2">MAY</button>

                  <div className="for_drop">
                    <select
                      className="form-select for_select"
                      aria-label="Default select example"
                    >
                      <option selected>02 Mar 2024 - 09 Mar 2024</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="d-flex mt-4">
                    <div className="for_box col-lg-4 col-md-4 col-sm-4">
                      <p className="for_box_content">Package Type</p>
                    </div>

                    <div className="for_box col-lg-4 col-md-4">
                      <p className="for_box_content">Selling Price/ Person</p>
                    </div>
                    <div className="for_box col-lg-4 col-md-4">
                      <p className="for_box_content">Discount Price/ Person</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="for_box col-lg-4 col-md-4 col-4">
                      <p className="for_box_content">4X4 Gypsy</p>
                    </div>

                    <div className="for_box2 col-lg-4 col-md-4 col-4 ">
                      <p className="for_box_content">₹ 29,000/-</p>
                    </div>
                    <div className="for_box2 col-lg-4 col-md-4 col-4">
                      <p className="for_box_content">₹ 25,000/-</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="for_box col-lg-4 col-md-4 col-4">
                      <p className="for_box_content">Tempo Traveller</p>
                    </div>

                    <div className="for_box2 col-lg-4 col-md-4 col-4">
                      <p className="for_box_content">₹ 29,000/-</p>
                    </div>
                    <div className="for_box2   col-lg-4 col-md-4 col-4">
                      <p className="for_box_content">₹ 25,000/-</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="d-flex mt-4">
                    <div className="for_box col-lg-4 col-md-6 col-6">
                      <p className="for_box_content">Room Sharing</p>
                    </div>

                    <div className="for_box col-lg-8 col-md-6 col-6">
                      <p className="for_box_content">Price/Person</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="for_box col-lg-4 col-md-6 col-6">
                      <p className="for_box_content">Room 1</p>
                    </div>

                    <div className="for_box2 col-lg-8 col-md-6 col-6">
                      <p className="for_box_content">₹ 29,000/-</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="for_box col-lg-4 col-md-6 col-6">
                      <p className="for_box_content">Room 2</p>
                    </div>

                    <div className="for_box2 col-lg-8 col-md-6 col-6">
                      <p className="for_box_content">₹ 29,000/-</p>
                    </div>
                  </div>
                </div>
                <div className="for_drop">
                  <select
                    className="form-select for_select"
                    aria-label="Default select example"
                  >
                    <option selected>Boarding Point</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="mt-3">
                  <div className="d-flex mt-4">
                    <div className="for_box col-lg-6 col-md-6 col-6">
                      <p className="for_box_content">3 AC</p>
                    </div>

                    <div className="for_box2 col-lg-6 col-md-6 col-6">
                      <p className="for_box_content">₹ 4637</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="for_box col-lg-6 col-md-6 col-6">
                      <p className="for_box_content">2 AC</p>
                    </div>

                    <div className="for_box2 col-lg-6 col-md-6 col-6">
                      <p className="for_box_content">₹ 4637</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="for_box col-lg-6 col-md-6 col-6">
                      <p className="for_box_content">1 AC</p>
                    </div>

                    <div className="for_box2 col-lg-6 col-md-6 col-6">
                      <p className="for_box_content">₹ 4637</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="for_box col-lg-6 col-md-6 col-6">
                      <p className="for_box_content">Sleeper</p>
                    </div>

                    <div className="for_box2 col-lg-6 col-md-6 col-6">
                      <p className="for_box_content">₹ 4637</p>
                    </div>
                  </div>
                </div>

                <button className="for_booknow mt-5 mb-5">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-3 mb-3">
        <div className="container">
          <div className="for_padding">
            <div className="row">
              <div className="col-lg-3 col-sm-3 col-md-3 col-12">
                <div className="photocard">
                  <img className="img-fluid" src={Photo} alt="Card image cap" />

                  <div className="photocardchild">
                    <h4>PHOTOS</h4>
                  </div>
                  <div className="svg_img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="93"
                      height="47"
                      viewBox="0 0 93 47"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_652_15835)">
                        <circle
                          cx="17.3294"
                          cy="17.3294"
                          r="17.3294"
                          transform="matrix(-1 0 0 1 87.0156 6)"
                          fill="white"
                        />
                      </g>
                      <g filter="url(#filter1_d_652_15835)">
                        <circle
                          cx="17.3294"
                          cy="17.3294"
                          r="17.3294"
                          transform="matrix(-1 0 0 1 41.0156 6)"
                          fill="white"
                        />
                      </g>
                      <path
                        d="M25.8924 20.0933C26.0567 20.1756 26.0567 20.3092 25.8924 20.3915L20.6454 23.0133L25.8924 25.6402C26.0567 25.7224 26.0567 25.8561 25.8924 25.9383C25.7281 26.0206 25.4611 26.0206 25.2969 25.9383L19.7623 23.1675C19.6802 23.1263 19.6391 23.0749 19.6391 23.0184C19.6391 22.967 19.6802 22.9104 19.7623 22.8693L25.2969 20.0985C25.4611 20.0111 25.7281 20.0111 25.8924 20.0933Z"
                        fill="white"
                        stroke="black"
                      />
                      <path
                        d="M66.1389 20.0933C65.9745 20.1756 65.9745 20.3092 66.1389 20.3915L71.3865 23.0133L66.1389 25.6402C65.9745 25.7224 65.9745 25.8561 66.1389 25.9383C66.3032 26.0206 66.5702 26.0206 66.7345 25.9383L72.2696 23.1675C72.3518 23.1263 72.3929 23.0749 72.3929 23.0184C72.3929 22.967 72.3518 22.9104 72.2696 22.8693L66.7345 20.0985C66.5702 20.0111 66.3032 20.0111 66.1389 20.0933Z"
                        fill="white"
                        stroke="black"
                      />
                      <defs>
                        <filter
                          id="filter0_d_652_15835"
                          x="46.9045"
                          y="0.548085"
                          width="45.563"
                          height="45.563"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="2.72596" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_652_15835"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_652_15835"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_d_652_15835"
                          x="0.90453"
                          y="0.548085"
                          width="45.563"
                          height="45.563"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="2.72596" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_652_15835"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_652_15835"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-sm-3 col-md-9 col-12">
                <Swiper
                  slidesPerView={3}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <SwiperSlide>
                        <img src={wendromkashmir} className="img-fluid" />
                      </SwiperSlide>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <SwiperSlide>
                        <img src={girlsimg} />
                      </SwiperSlide>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <SwiperSlide>
                        <img src={girlsimg2} />
                      </SwiperSlide>
                    </div>
                    
                      <SwiperSlide>
                        <img src={girlsimg} />
                      </SwiperSlide>
                    
                    <SwiperSlide>
                      <img src={girlsimg2} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={girlsimg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={girlsimg2} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={girlsimg} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={girlsimg2} />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-3 col-sm-12 col-md-6">
                <div className="photocard">
                  <img
                    className="img-fluid"
                    src={forvideos}
                    alt="Card image cap"
                  />
                  <div className="svg_img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="93"
                      height="47"
                      viewBox="0 0 93 47"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_652_15835)">
                        <circle
                          cx="17.3294"
                          cy="17.3294"
                          r="17.3294"
                          transform="matrix(-1 0 0 1 87.0156 6)"
                          fill="white"
                        />
                      </g>
                      <g filter="url(#filter1_d_652_15835)">
                        <circle
                          cx="17.3294"
                          cy="17.3294"
                          r="17.3294"
                          transform="matrix(-1 0 0 1 41.0156 6)"
                          fill="white"
                        />
                      </g>
                      <path
                        d="M25.8924 20.0933C26.0567 20.1756 26.0567 20.3092 25.8924 20.3915L20.6454 23.0133L25.8924 25.6402C26.0567 25.7224 26.0567 25.8561 25.8924 25.9383C25.7281 26.0206 25.4611 26.0206 25.2969 25.9383L19.7623 23.1675C19.6802 23.1263 19.6391 23.0749 19.6391 23.0184C19.6391 22.967 19.6802 22.9104 19.7623 22.8693L25.2969 20.0985C25.4611 20.0111 25.7281 20.0111 25.8924 20.0933Z"
                        fill="white"
                        stroke="black"
                      />
                      <path
                        d="M66.1389 20.0933C65.9745 20.1756 65.9745 20.3092 66.1389 20.3915L71.3865 23.0133L66.1389 25.6402C65.9745 25.7224 65.9745 25.8561 66.1389 25.9383C66.3032 26.0206 66.5702 26.0206 66.7345 25.9383L72.2696 23.1675C72.3518 23.1263 72.3929 23.0749 72.3929 23.0184C72.3929 22.967 72.3518 22.9104 72.2696 22.8693L66.7345 20.0985C66.5702 20.0111 66.3032 20.0111 66.1389 20.0933Z"
                        fill="white"
                        stroke="black"
                      />
                      <defs>
                        <filter
                          id="filter0_d_652_15835"
                          x="46.9045"
                          y="0.548085"
                          width="45.563"
                          height="45.563"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="2.72596" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_652_15835"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_652_15835"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_d_652_15835"
                          x="0.90453"
                          y="0.548085"
                          width="45.563"
                          height="45.563"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="2.72596" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_652_15835"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_652_15835"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-sm-12 col-md-6">
                <Swiper
                  slidesPerView={3}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div>
                      <img src={YT1} className="img-fluid" />
                      <div className="yt_child">
                        <img src={Youtube} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="yt">
                      <img src={YT2} />
                      <div className="yt_child">
                        <img src={Youtube} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="yt">
                      <img src={YT3} />
                      <div className="yt_child">
                        <img src={Youtube} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="yt">
                      <img src={YT1} />
                      <div className="yt_child">
                        <img src={Youtube} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="yt">
                      <img src={YT2} />
                      <div className="yt_child">
                        <img src={Youtube} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={YT3} />
                      <div className="yt_child">
                        <img src={Youtube} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={YT1} />
                      <div className="yt_child">
                        <img src={Youtube} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={YT2} />
                      <div className="yt_child">
                        <img src={Youtube} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={YT3} />
                      <div className="yt_child">
                        <img src={Youtube} />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="similar_trip">
                   <div className="container">
                  <div className="d-flex">
                          <div>
                            <h4>similar Trips</h4>
                          </div>
                          <div>
                             <hr className="w-100"/>
                          </div>
                  </div>
                  </div>
                   
       </section>
    </>
  );
}

export default TripDetails;
