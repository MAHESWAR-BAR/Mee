import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, desc, logo, to }) => {
  return (
    <div className="card">
      <img src={logo}></img>
      <Link to={to}>{title}</Link>
      <p>{desc}</p>
      <div className="svgDiv">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <circle cx="8.71902" cy="8.89676" r="8.21902" stroke="#09529D" />
          <path
            d="M12.685 5.38488C12.6834 5.10874 12.4583 4.88614 12.1822 4.88769L7.68226 4.91286C7.40612 4.91441 7.18352 5.13952 7.18507 5.41565C7.18661 5.69179 7.41172 5.91439 7.68786 5.91285L11.6878 5.89047L11.7102 9.89041C11.7117 10.1665 11.9368 10.3891 12.213 10.3876C12.4891 10.3861 12.7117 10.1609 12.7102 9.88481L12.685 5.38488ZM5.02642 13.3379L12.5405 5.73925L11.8295 5.03611L4.31537 12.6348L5.02642 13.3379Z"
            fill="#09529D"
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;
