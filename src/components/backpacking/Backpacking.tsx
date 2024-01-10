import React from 'react'
import backtracking1 from "../../assets/images/backtracking1.png";
import backtracking2 from "../../assets/images/backtracking2.png";
import backtracking3 from "../../assets/images/backtracking3.png";
import { IoSunnyOutline } from "react-icons/io5";

import "./backpacking.css"
function Backpacking() {
  return (
    
    <>
    
    <div className="container my-5">
    <h1 className="text-center ">
        <span className="pink-text">Backpacking </span>
        <span className="black-text"> Trips</span>
    </h1>
    <div className="row row-cols-1 row-cols-sm-3 g-3 p-2">
        <div className="col">
            <div className="card border-0 for_card">
                <img src={backtracking1} className="card-img-top"/>
                <div className="card-body">
                    <div className="card-text">
                          <div className='d-flex justify-content-between'>
                           <h5>Lorem Ipsum</h5>
                           <h5>Start from ₹6,000</h5>
                           </div>
                           <div className='d-flex justify-content-between align-items-baseline mt-2'>
                                <h5>5 <span><i className="fa-solid fa-moon"></i></span> 6 <span><IoSunnyOutline /></span></h5>
                                <button className='for_booknow'>BOOK NOW</button>
                           </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={backtracking2} className="card-img-top"/>
                <div className="card-body">
                    <div className="card-text">
                        <span><b>Kasmir New Trip Trip With Gulmarg</b></span>
                        
                        <span className="">Start from Rs 6000</span>
                    </div>
                    <div className="mt-1">
                        <div className="float-start">
                            <span>5 <i className='fas'>&#xf186;</i> / 6  <i  className="fa">&#xf185;</i></span>
                        </div>
                        <div className="float-end">
                            <span>
                                <button  className="text-white rounded btnCreate">Book Now</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={backtracking3} className="card-img-top"/>
                <div className="card-body">
                    <div className="card-text">
                        <span><b>Kasmir New Trip Trip With Gulmarg</b></span>
                        
                        <span className="">Start from Rs 6000</span>
                    </div>
                    <div className="mt-1">
                        <div className="float-start">
                            <span>5 <i className='fas'>&#xf186;</i> / 6  <i className="fa">&#xf185;</i></span>
                        </div>
                        <div className="float-end">
                            <span>
                                <button  className="text-white rounded btnCreate">Book Now</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>


    <div className="row row-cols-1 row-cols-sm-3 g-3 p-2">
        <div className="col">
            <div className="card">
                <img src="images/vvv (3).png" className="card-img-top"/>
                <div className="card-body">
                    <div className="card-text">
                        <span><b>Kasmir New Trip Trip With Gulmarg</b></span>
                        
                        <span className="">Start from Rs 6000</span>
                    </div>
                    <div className="mt-1">
                        <div className="float-start">
                            <span>5 <i  className='fas'>&#xf186;</i> / 6  <i  className="fa">&#xf185;</i></span>
                        </div>
                        <div className="float-end">
                            <span>
                                <button  className="text-white rounded btnCreate">Book Now</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src="images/vvv (3).png" className="card-img-top"/>
                <div className="card-body">
                    <div className="card-text">
                        <span><b>Kasmir New Trip Trip With Gulmarg</b></span>
                        
                        <span className="">Start from Rs 6000</span>
                    </div>
                    <div className="mt-1">
                        <div className="float-start">
                            <span>5 <i  className='fas'>&#xf186;</i> / 6  <i  className="fa">&#xf185;</i></span>
                        </div>
                        <div className="float-end">
                            <span>
                                <button  className="text-white rounded btnCreate">Book Now</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src="images/vvv (3).png" className="card-img-top"/>
                <div className="card-body">
                    <div className="card-text">
                        <span><b>Kasmir New Trip Trip With Gulmarg</b></span>
                        <span className="">Start from Rs 6000</span>
                    </div>
                    <div className="mt-1">
                        <div className="float-start">
                            <span>5 <i  className='fas'>&#xf186;</i> / 6  <i  className="fa">&#xf185;</i></span>
                        </div>
                        <div className="float-end">
                            <span>
                       
                                <div>
                                    <button  className="text-white rounded btnCreate">Book Now</button>
                                  </div>
                                  

                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>

            
          
        </div>
     
      
     



    </>
  )
  
}

export default Backpacking