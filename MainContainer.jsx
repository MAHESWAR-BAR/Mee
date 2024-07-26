import React from "react";
import "./MainContainer.css";
import Card from "./Card";

const MainContainer = () => {
  const cardData = [
    {
      title: "Hospital Management",
      to: "/page",
      desc: "A management software that helps you manage everything in your office like staff, pharmacy, library, and more.",
      logo: "/logo-img1.gif",
    },
    {
      title: "EHS",
      desc: "Will offer all sorts of patient tracking and reminding features using AI. You can monitor each patient's overall health.",
      logo: "/logo-img2.gif",
    },
    {
      title: "Digital Clinic",
      desc: "Online site to showcase services, book your appointments, & access various doctors virtually instead of referrals.",
      logo: "/logo-img3.gif",
    },
    {
      title: "Patient Monitoring",
      desc: "Here you can view all bookings and analytics of your patients, their issues, commonly recommended medicines.",
      logo: "/logo-img4.gif",
    },
    {
      title: "Software Solutions",
      desc: "All this combined into one full management software for patients and corporate offices as well.",
      logo: "/logo-img5.gif",
    },
  ];

  return (
    <div className="maincontainer">
      <h1 className="mainletter">
        Healthcare that <span>treats</span> you right
      </h1>

      <div className="second-div">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            to={card.to}
            desc={card.desc}
            logo={card.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
