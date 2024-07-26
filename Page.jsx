import React from "react";
import Header from "./Header";

const Page = () => {
  return (
    <div>
      <Header />
      <div className="main-page">
        <img src="bg-img.png"></img>
        <div>
          <h1 id="hospital-management">Hospital Management</h1>
        </div>
        
        <div class="container">
          {/* </div><div class="header">01 Invoice Management */}
          <div class="subheader" id="sub">
            Reasons why you'll love<span id="rap"> RAPHA+</span> Practices
          </div>
          <div class="item1" id="first-circle">
            <div class="item-title1">01</div>
            <div class="item-subtitle1">Invoice Management</div>
            <div class="item-circle1"></div>
            
          </div>
          <div class="line">
            <span></span>
          </div>
          <div className="below-circle">
            <div class="item">
              <div class="item-circle"></div>
              <div class="item-title">02</div>
              <div class="item-subtitle">Staff Tracking</div>
            </div>
            <div class="item">
              <div class="item-circle"></div>
              <div class="item-title">03</div>
              <div class="item-subtitle">Booking Management</div>
            </div>
            <div class="item">
              <div class="item-circle"></div>
              <div class="item-title">04</div>
              <div class="item-subtitle">Communication Tracker</div>
            </div>
            <div class="item">
              <div class="item-circle"></div>
              <div class="item-title">05</div>
              <div class="item-subtitle">Record Storage</div>
            </div>
          </div>
        </div>
      </div>


      <div>
         <div>
          <h1 className="secondH1"><span id="how">How</span> does RAPHA<sup>+</sup>Practice <span id="work">Work</span></h1>
         </div>
      </div>
    </div>

    
  );
};

export default Page;
