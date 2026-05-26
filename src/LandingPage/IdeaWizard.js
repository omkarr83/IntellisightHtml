

import React from "react";
import "../CSS/Rewards.css";

const RewardsHeader = ({
  title,
  description,
  icon,
  projectsCount,
  rewardPoints,
  className
}) => {
  return (
    <div className="rewards_main_div">
      
      <div className="first_div_rewards">
        <div className="empty_box">
          <img src={icon} className={`rewards_tube_image ${className || ""}`} alt="icon" />
        </div>

        <div className="first_div_rewards_heading">
          <span>{title}</span>
          <p>{description}</p>
        </div>
      </div>

      <div className="second_div_rewards">
        <div className="number_of_projects">
          <span> <i className="bi bi-graph-up-arrow"></i> {projectsCount}</span>
          <span> Total Projects</span>
        </div>

        <div className="number_of_rewards_points">
          <span><i className="bi bi-star-fill"></i> {rewardPoints}</span>
          <span> Rewards Point</span>
        </div>
      </div>

    </div>
  );
};

export default RewardsHeader;