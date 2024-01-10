import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Smilygirl from "../../assets/images/Smilygirl.png";
import France from "../../assets/images/France.png";
import Jordan from "../../assets/images/jordan.png";
import Italy from "../../assets/images/Italy.png";
import Bali from "../../assets/images/Bali.png";
import Vietnam from "../../assets/images/Vietnam.png";
import Sydney from "../../assets/images/Sydney.png";
import Kashmir from "../../assets/images/Kashmir.png";
import Manali from "../../assets/images/Manali.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Under from "../../assets/images/Under.png";
import Udaipur from "../../assets/images/Udaipur.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../home/home.css";
import Reactangle from "../../assets/images/Reactangle.png";
import Flight from "../../assets/images/flight.png";
import Yellogirl from "../../assets/images/yellogirl.png";
import Udraw from "../../assets/images/Udraw.png";
import Uphoto from "../../assets/images/Uphoto.png";
import Dubai from "../../assets/images/Dubai.png";
import Thailand from "../../assets/images/Thiland.png";
import Indonesia from "../../assets/images/iNDONESIA.png";
import Vieatnam from "../../assets/images/VIEATNAM.png";
import Weekand from "../../assets/images/Weekand.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

import Familytrip from "../../assets/images/Familytrips.png";
import collegetrip from "../../assets/images/Collegetrips.png";
import corporate from "../../assets/images/corporatetrips.png";
import solotrip from "../../assets/images/Solotrip.png";
import Kashmirimg from "../../assets/images/Kashmirimg.png";
import Kerala from "../../assets/images/Keralaimg.png";
import Himachalimg from "../../assets/images/Himachalimg.png";
import Andmanimg from "../../assets/images/Adman.png";
import Background from "../../assets/images/background.png";
import Backyellow from "../../assets/images/backyellow.png";
import News from "../../assets/images/news.png";
import Goatrip from "../../assets/images/Goatriip.png";
import indiagate from "../../assets/images/indiagate.png";
import secondgate from "../../assets/images/secondgate.png";
import Rohitsharma from "../../assets/images/Rohitsharma.png";
import Carouselitem from "../../assets/images/carouselitem.png";
import subtract from "../../assets/images/Subtract (1).png";
import subtract22 from "../../assets/images/subtract22.png";
import shivpali3 from "../../assets/images/shivpali3.png";
import delhi from "../../assets/images/delhigate.png";
import secondd from "../../assets/images/seconddd.png";

import "./home.css";
function Home() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex mt-3">
          <div className="col-sm-12 col-lg-4 col-12 col-md-12 text-justify">
            <h3
              className="text-start"
              style={{ color: "#DC1B5E", fontWeight: "700" }}
            >
              BEST DESTINATIONS IN INDIA{" "}
            </h3>
            <h1
              className="for_heading text-start"
              style={{ fontWeight: "700" }}
            >
              Travel, enjoy and live a new and full life
            </h1>
            <p className="for_first_about">
              Embark on an unforgettable journey with our travel website and
              discover the world's most enchanting destinations
            </p>
            <div className="for_btn_btn">
              <button className="for_find_btn">FIND OUT MORE</button>
            </div>
          </div>
          <div className="col-sm-12 col-lg-8 col-12 col-md-12">
            <div className="for_bgdiv">
              <div>
                <img src={Smilygirl} className="img-fluid" />
              </div>
            </div>
          </div>
          <div
            style={{
              border: "1.5px solid #FFCB7A",
              boxShadow: "0px 0px 10px 1px #00000040",
            }}
          >
            <h3 style={{ padding: "15px 0 0 15px", fontWeight: "700" }}>
              Find perfect trip for yourself
            </h3>
            <div className="row mt-4 justify-content-center">
              <div className="col-12 col-lg-3">
                <select
                  className="form-select form-select-lg mb-3 for_select"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Categories</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 col-lg-3">
                <select
                  className="form-select form-select-lg mb-3 for_select"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Adventure Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 col-lg-3">
                <select
                  className="form-select form-select-lg mb-3 for_select"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Month</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 col-lg-3">
                <button className="find_tourbtn">find Tours</button>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-5">
          <div className="">
            <h3 className="for_headingedit">Featured Tours</h3>
            <h3 className="for_places">Beautiful Places Around The World</h3>

            <div className="mt-4">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                  <div className="card card border-0 for_cards">
                    <img src={France} className="card-img-top" alt="..." />
                    <div className="for_content_inner2">
                      <h5 className="for_cityname">France</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card border-0 for_cards">
                    <img src={Jordan} className="card-img-top" alt="..." />
                    <div className="for_content_inner2">
                      <h5 className="for_cityname">Jordan</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card border-0 for_cards">
                    <img src={Italy} className="card-img-top" alt="..." />
                    <div className="for_content_inner2">
                      <h5 className="for_cityname">Italy</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card border-0 for_cards">
                    <div className="card card border-0 for_cards">
                      <img src={Vietnam} className="card-img-top" alt="..." />
                      <div className="for_content_inner2">
                        <h5 className="for_cityname">Vietnam</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                  <div className="card card border-0 for_cards">
                    <img src={Vietnam} className="card-img-top" alt="..." />
                    <div className="for_content_inner2">
                      <h5 className="for_cityname">Vietnam</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card border-0 for_cards">
                    <img src={Italy} className="card-img-top" alt="..." />
                    <div className="for_content_inner2">
                      <h5 className="for_cityname">Italy</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card border-0 for_cards">
                    <img src={Sydney} className="card-img-top" alt="..." />
                    <div className="for_content_inner2">
                      <h5 className="for_cityname">Sydney</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card border-0 for_cards">
                    <img src={Kashmir} className="card-img-top" alt="..." />
                    <div className="for_content_inner2">
                      <h5 className="for_cityname">Kashmir</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-6 col-md-6">
              <div>
                <img src={Yellogirl} className="img-fluid Yellowgirl" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 col-md-6 mt-5">
              <h3 className="mt-5 for_content">
                <span style={{ color: "#DC1B5E" }}>Explore</span> all corners of
                the india with us
              </h3>
              <p className="for_content2">
                Embark on a journey to explore India's diverse beauty, from the
                Himalayas to Kerala's backwaters, Mumbai's vibrant streets to
                Kolkata's rich culture, unveiling a tapestry of enchanting
                experiences. Let us be your guide to this unforgettable
                adventure Embark on a journey to explore India's diverse beauty,
                from the Himalayas to Kerala's backwaters, Mumbai's vibrant
                streets to Kolkata's rich culture, unveiling a tapestry of
                enchanting experiences. Let us be your guide to this
                unforgettable adventure.
              </p>
              <div className="text-start">
                <img src={Flight} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="">
            <h3 className="for_headingedit">Upcoming Trips</h3>
            <h4 className="for_places">Explore Popular Recommendations</h4>
            <div className="mt-4">
              <button className="for_button mx-3">SEPT 2023</button>
              <button className="for_button mx-3">OCT 2023</button>
              <button
                className="for_button mx-3"
                style={{ backgroundColor: "#FFA923", color: "white" }}
              >
                NOV 2023
              </button>
              <button className="for_button mx-3">DEC 2023</button>
              <button className="for_button mx-3">JAN 2024</button>
            </div>
          </div>

          <div className="mt-5">
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              showDots={true}
              ssr={true}
              infinite={true}
              autoPlaySpeed={1000}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div>
                <img src={Carouselitem} />
              </div>
              <div>
                <img src={Carouselitem} />
              </div>
              <div>
                <img src={Carouselitem} />
              </div>
              <div>
                <img src={Carouselitem} />
              </div>
              <div>
                <img src={Carouselitem} />
              </div>
              <div>
                <img src={Carouselitem} />
              </div>
              <div>
                <img src={Carouselitem} />
              </div>
              <div>
                <img src={Carouselitem} />
              </div>
            </Carousel>
          </div>
        </section>

        <section className="mt-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-3 col-md-12 mt-5">
              <h3 className="for_treaking">TREKKING</h3>
              <h3 className="for_treaking2">Experiences </h3>
              <h4 className="for_treakingfeature">
                Find your perfect place for treking
              </h4>
              <p className="travel_content">
                Travel is the movement of people between distant geographical
                location. Travel can be done by foot, bicycle.Travel is the
                movement of people between distant geographical location.{" "}
              </p>
              <div className="for_package">
                <p>Kullu Manali Trip</p>
                <p>5 NIGHT/6 DAYS</p>
                <p>₹16,000</p>
              </div>
              <div className="for_viewmore mt-4">
                <button className="for_viewMore">View More Trips</button>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-5 col-md-12 mt-4">
              <div className="ParentUdraw">
                <img src={Udraw} className="img-fluid" />
                <div className="ChildUdraw">
                  <img src={Under} className="img-fluid Under_img" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 col-md-12">
              <Swiper
                slidesPerView={3}
                direction={"vertical"}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {/* <img src={Goatrip} /> */}
                  slide 1
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h3 className="for_departure">
                <span className="for_departure2">INTERNATIONAL</span> DEPARTURES
              </h3>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h3 style={{ textAlign: "right" }}>
                Explore More{" "}
                <span style={{ color: "#FFA923" }}>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </h3>
            </div>
          </div>

          <div className="mt-4">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="col">
                <div className="card card border-0 for_cards">
                  <img
                    src={Dubai}
                    className="card-img-top img-fluid International_img"
                    alt="..."
                  />
                  <div
                    className="for_content_inner"
                    style={{ backgroundColor: "#00000040" }}
                  >
                    <h4>DUBAI</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card border-0 for_cards">
                  <img
                    src={Thailand}
                    className="card-img-top img-fluid International_img"
                    alt="..."
                  />
                  <div
                    className="for_content_inner"
                    style={{ backgroundColor: "#00000040" }}
                  >
                    <h4>THILAND</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card border-0 for_cards">
                  <img
                    src={Indonesia}
                    className="card-img-top img-fluid International_img"
                    alt="..."
                  />
                  <div
                    className="for_content_inner"
                    style={{ backgroundColor: "#00000040" }}
                  >
                    <h4>INDONESIA</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card border-0 for_cards">
                  <img
                    src={Vieatnam}
                    className="card-img-top img-fluid International_img"
                    alt="..."
                  />
                  <div
                    className="for_content_inner"
                    style={{ backgroundColor: "#00000040" }}
                  >
                    <h4>VIETNAM</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        

      </div>
{/*         
      <div className="container-fluid mainbox">
        <div className="back">
          <div className="backheading">
            Backpacking <span className="trip">Trips</span>
          </div>

          <div className="maincard">
            <Card className="carddiv">
              <Card.Img variant="top" src={delhi} />
              <Card.Body>
                <Card.Title className="delhitrip">Delhi Trip</Card.Title>
                <Card.Title className="night">1NIGHT / 2 DAYS</Card.Title>
                <Card.Title className="rupee">₹12,000</Card.Title>
              </Card.Body>
            </Card>

            <Card className="carddiv">
              <Card.Img variant="top" src={secondd} />
              <Card.Body>
                <Card.Title className="delhitrip">Delhi Trip</Card.Title>
                <Card.Title className="night">1NIGHT / 2 DAYS</Card.Title>
                <Card.Title className="rupee">₹12,000</Card.Title>
              </Card.Body>
            </Card>

            <Card className="carddiv">
              <Card.Img variant="top" src={shivpali3} />
              <Card.Body>
                <Card.Title className="delhitrip">Delhi Trip</Card.Title>
                <Card.Title className="night">1NIGHT / 2 DAYS</Card.Title>
                <Card.Title className="rupee">₹12,000</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div> */}

          

       <div className="container">
        <section className="mt-4">
          <h3 className="mt-5">
            <span
              style={{
                color: "#DC1B5E",
                fontWeight: "700",
                lineHeight: "48.41px",
              }}
            >
              WEEKENED
            </span>{" "}
            TRIPS
            <hr className="m-auto w-25 for_hr" />
          </h3>
          <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
            <div className="col">
              <div className="card card border-0 for_cards">
                <img
                  src={Weekand}
                  className="img-fluid Weekend_img"
                  alt="..."
                />
                <div className="for_weekandcontent">
                  <p>Goa</p>
                  <p>₹19,000</p>
                </div>
                <button className="for_packbutton">1 Night / 2 Days </button>
              </div>
            </div>
            <div className="col">
              <div className="card card border-0 for_cards">
                <img src={Manali} className="img-fluid Weekend_img" alt="..." />
                <div className="for_weekandcontent">
                  <p>Kullu Manali</p>
                  <p>₹16,000</p>
                </div>
                <button className="for_packbutton">2 Night / 3 Days </button>
              </div>
            </div>
            <div className="col">
              <div className="card card border-0 for_cards">
                <img
                  src={Udaipur}
                  className="img-fluid Weekend_img"
                  alt="..."
                />
                <div className="for_weekandcontent">
                  <p>Udaipur</p>
                  <p>₹11,000</p>
                </div>
                <button className="for_packbutton">1 Night / 2 Days</button>
              </div>
            </div>
            <div className="col">
              <div className="card card border-0 for_cards">
                <img
                  src={Weekand}
                  className="img-fluid Weekend_img"
                  alt="..."
                />
                <div className="for_weekandcontent">
                  <p>Mount abu</p>
                  <p>₹19,000</p>
                </div>
                <button className="for_packbutton">2 Night / 3 Days </button>
              </div>
            </div>
          </div>
        </section>
      
      <section className="group-trips mb-5 mt-5">
        <div className="p-3" style={{ backgroundColor: "#FFEAC9" }}>
          <h3 className="for_grouptrip">
            <span style={{ color: "#DC1B5E", fontWeight: "700" }}>GROUP</span>{" "}
            TRIPS
          </h3>
          <p className="Stop_expoloring">NEVER STOP EXPLORING THE WORLD</p>
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
            <div className="col">
              <div className="card card border-0 for_cards">
                <img
                  src={solotrip}
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{
                    maxHeight: "400px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  className="for_content_top"
                  style={{ backgroundColor: "#00000040" }}
                >
                  <h4>Solo Trips</h4>
                </div>
                <div className="for_content_inner3">
                  <button className="for_btn_enquiry">Enquirey Now</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card border-0 for_cards">
                <img
                  src={Familytrip}
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{
                    maxHeight: "400px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  className="for_content_top"
                  style={{ backgroundColor: "#00000040" }}
                >
                  <h4>Family Trips</h4>
                </div>
                <div className="for_content_inner3">
                  <button className="for_btn_enquiry">Enquirey Now</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card border-0 for_cards">
                <img
                  src={corporate}
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{
                    maxHeight: "400px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  className="for_content_top"
                  style={{ backgroundColor: "#00000040" }}
                >
                  <h4>Corporate Trips</h4>
                </div>
                <div className="for_content_inner3">
                  <button className="for_btn_enquiry">Enquirey Now</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card border-0 for_cards">
                <img
                  src={collegetrip}
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{
                    maxHeight: "400px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  className="for_content_top"
                  style={{ backgroundColor: "#00000040" }}
                >
                  <h4>College Trips</h4>
                </div>
                <div className="for_content_inner3">
                  <button className="for_btn_enquiry">Enquirey Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     </div> 
      <div className="container">
        <hr className="for_hrline" style={{ opacity: "1" }} />
      </div>
      <div className="container">
        <section className="mb-4">
          <h2 style={{ fontWeight: "700" }} className="for_personalizedtrips">
            <span style={{ color: "#DC1B5E" }}>PERSONALIZED </span> TRIPS
            <hr
              style={{ border: "2px solid #000000", width: "36%" }}
              className="m-auto"
            />
          </h2>

          <h5>
            Didn't find what you had in mind? Personalize one just for you!
            Explore these trending destinations for customized trips!
          </h5>
          <div>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
              <div className="col">
                <div className="card card border-0 for_cards">
                  <img
                    src={Kashmirimg}
                    className="card-img-top img-fluid"
                    alt="..."
                    style={{
                      maxHeight: "400px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="for_content_top2">
                    <h4 className="for_boxcontent">KASHMIR</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card border-0 for_cards">
                  <img
                    src={Kerala}
                    className="card-img-top img-fluid"
                    alt="..."
                    style={{
                      maxHeight: "400px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="for_content_top2">
                    <h4 className="for_boxcontent2">KERALA</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card border-0 for_cards">
                  <img
                    src={Himachalimg}
                    className="card-img-top img-fluid"
                    alt="..."
                    style={{
                      maxHeight: "400px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="for_content_top2">
                    <h4 className="for_boxcontent">HIMACHAL PRADESH</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card border-0 for_cards">
                  <img
                    src={Andmanimg}
                    className="card-img-top img-fluid"
                    alt="..."
                    style={{
                      maxHeight: "400px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="for_content_top2">
                    <h4 className="for_boxcontent2">ANDAMAN</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
              <div className="col">
                <div className="card card border-0 for_cards">
                  <img
                    src={Kashmirimg}
                    className="card-img-top img-fluid"
                    alt="..."
                    style={{
                      maxHeight: "400px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="for_content_top2">
                    <h4 className="for_boxcontent">LADAKH</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card border-0 for_cards">
                  <img
                    src={Kerala}
                    className="card-img-top img-fluid"
                    alt="..."
                    style={{
                      maxHeight: "400px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="for_content_top2">
                    <h4 className="for_boxcontent">GOA</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card border-0 for_cards">
                  <img
                    src={Himachalimg}
                    className="card-img-top img-fluid"
                    alt="..."
                    style={{
                      maxHeight: "400px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="for_content_top2">
                    <h4 className="for_boxcontent2">JAIPUR</h4>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card border-0 for_cards">
                  <img
                    src={Andmanimg}
                    className="card-img-top img-fluid"
                    alt="..."
                    style={{
                      maxHeight: "400px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="for_content_top2">
                    <h4 className="for_boxcontent">SHIMLA</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mb-3">
        <div className="for_box_content_main">
          <img
            src={Background}
            className="card-img-top img-fluid"
            alt="..."
            style={{
              maxHeight: "auto",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div className="for_box_content_child">
            <div className="container">
              <h4 className="for_firstcontent">
                Didn’t Find Journey Plans and Offers as Expected?
              </h4>
              <hr />
              <p className="for_misery">Here your misery ends </p>
              <button className="for_connectbtn">CONNECT NOW</button>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="mb-5">
          <h3>TESTIMONIALS</h3>

          {/* <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              
              <div className="subtract_contain">
                <img src={subtract} className="img-fluid" />
                <div className="subtract_contain2">
                  <p className="">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="testimonial_outer">
                <p className="testimonial_content">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="d-flex">
                  <img src={Rohitsharma} />
                  <p>Rohit Sharma</p>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        <section className="mb-3">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <h2 className="chooseus">WHY CHOOSE US?</h2>
              <div className="row mt-5" style={{ textAlign: "justify" }}>
                <div className="col-lg-2 col-12">
                  <p>
                    {" "}
                    <span className="for_number"> 1</span>
                  </p>
                </div>
                <div className="col-lg-9 col-12">
                  <h5 className="for_travelpackage">
                    Comprehensive Travel Packages
                  </h5>
                  <p className="for_aboutoffer">
                    Glabol India offers end-to-end travel packages for domestic
                    destinations.
                  </p>
                </div>
              </div>
              <div className="row" style={{ textAlign: "justify" }}>
                <div className="col-lg-2 col-12">
                  <p>
                    {" "}
                    <span className="for_number"> 2</span>
                  </p>
                </div>
                <div className="col-lg-9 col-12">
                  <h5 className="for_travelpackage">
                    Group-Centric Itineraries:
                  </h5>
                  <p className="for_aboutoffer">
                    They specialize in crafting tailored travel itineraries that
                    promote group travel, bringing together like-minded
                    individuals for shared experiences.
                  </p>
                </div>
              </div>
              <div className="row" style={{ textAlign: "justify" }}>
                <div className="col-lg-2 col-12">
                  <p>
                    {" "}
                    <span className="for_number"> 3</span>
                  </p>
                </div>
                <div className="col-lg-9 col-12">
                  <h5 className="for_travelpackage">
                    Diverse Adventure Services:
                  </h5>
                  <p className="for_aboutoffer">
                    Glabol India provides a range of adventure services,
                    including road trips and trekking expeditions, catering to
                    various travel interests.
                  </p>
                </div>
              </div>
              <div className="row" style={{ textAlign: "justify" }}>
                <div className="col-lg-2 col-12">
                  <p>
                    {" "}
                    <span className="for_number"> 4</span>
                  </p>
                </div>
                <div className="col-lg-9 col-12">
                  <h5 className="for_travelpackage">Corporate Travel:</h5>
                  <p className="for_aboutoffer">
                    They also offer specialized corporate trips designed to
                    enhance team bonding and relaxation in unique settings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="for_backimgparent">
                <img src={Backyellow} className="img-fluid" alt="Background" />
                <div className="for_backimgchild">
                  <img src={News} className="img-fluid " alt="News" />
                </div>
              </div>
            </div>
          </div>
        </section>
      
       </div>
    </>
  );
}

export default Home;
