


import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom"; 

import MainCard from "./DashboardCard";
import Dashboardtable from "./DashboardTabSection";
import SideBar from "./LeftSideBar";

import RewardsHeader from "./IdeaWizard";

import ReawardsTable from "../LandingPage/RewardsTable"

import MilestoneAchiverTable from "../LandingPage/MilestoneAchiver"

import ChampionsTable from "../LandingPage/Championstable"

import PrideOfSteelTable from "../LandingPage/PrideOfSteel";


import "../CSS/LandingPage.css";

const rewardPages = [
  "/IdeaWizards",
  "/MilestoneAchiever",
  "/ChampionsofSteel",
  "/PrideofSteel"
];



//  CREATE PAGE COMPONENTS
const Dashboard = () => (
  <>
    <div className='row'>
      <div className='w-50'>
        <h4>IntelliSight</h4>
        <p>Monitor and manage all your projects from here.</p>
      </div>
    </div>
    <MainCard />
    <Dashboardtable />
  </>
);



const IdeaWizards = () => {
  return (
    <RewardsHeader
      title="Idea Wizard Page"
      description="Recognizing impactful ideas that drive operational excellence and innovation."
      icon="/images/rewards_tube.png"
      projectsCount="250+"
      rewardPoints="500-700"
      
    />
  );
};

const MilestoneAchiver = () => {
  return (
    <RewardsHeader
      title="Milestone Achiever"
      description="Celebrating key milestones achieved across projects."
      icon="/images/Target_Flat.png"
      projectsCount="105+"
      rewardPoints="1000"
      className="milestone_bg"
    />
  );
};

const ChampionsofSteel = () => {
  return(
    <RewardsHeader
      title="Champions of Steel"
      description="Honoring excellence in steel production, quality, and process innovations."
      icon="/images/trophy.png"
      projectsCount="20+"
      rewardPoints="10000"
      className="champions_bg"
    />
  )
}

const PrideofSteel = () =>{
  return(
    <RewardsHeader
      title="Pride of Steel"
      description="Recognizing transformational contributions that define industry leadership."
      icon="/images/Group.png"
      projectsCount="11+"
      rewardPoints="40000 - 60000"
      className="prideofSteel"
    />
  )
}

// const Dashboard = () => <h2>Dashboard Page</h2>;
const Projects = () => <h2>Projects Page 123</h2>;


const Layout = () => {

const location = useLocation();
const isRewardsPage = rewardPages.includes(location.pathname);

const getPageClass = () =>{
  switch(location.pathname){
    case "/":
      return "default_bg";
    case "/IdeaWizards":
      return "rewards_bg";
    case "/MilestoneAchiever":
      return "milestone_bg";
    case "/ChampionsofSteel":
      return "champions_steel_bg";
    case "/PrideofSteel":
      return "pride_of_steel_bg"
  }
}
  
  return (
    <div className="container-fluid dashboard">
      <div className="row d-flex dashboatd_main_div">

        {/* LEFT SIDEBAR */}
        <div className="col-3 dashboard_left sidebar">
          <SideBar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-9 dashboard_right">

          {/* HEADER (NO CHANGE) */}
          <div className="right_side_div">
            <div className="right_side_inner_div">
              <div className="row">

                <div className="col-9 d-flex right_side_first_div">
                  <div className="right_side_heading">
                    <div className="w-25">
                      <img className="coe_logo_image" src="/images/COE_logo.png" alt="Logo" />
                    </div>
                  </div>

                  <div className="row d-flex heading_row w-75">
                    <select className="form-select select_one" defaultValue="">
                      <option value="" disabled>Fiscal year</option>
                    </select>
                    <select className="form-select select_two" defaultValue="">
                      <option value="" disabled>Cluster</option>
                    </select>
                    <select className="form-select select_three" defaultValue="">
                      <option value="" disabled>Location</option>
                    </select>
                    <select className="form-select select_four" defaultValue="">
                      <option value="" disabled>Department</option>
                    </select>
                    <select className="form-select select_five" defaultValue="">
                      <option value="" disabled>Progress</option>
                    </select>
                    <select className="form-select select_six" defaultValue="">
                      <option value="" disabled>Stages</option>
                    </select>
                  </div>
                </div>

                <div className="col-3">
                  <div className="row d-flex w-100 heading_row user_level">
                    {/* <div className="w-50">
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-people me-2"></i>Collaboration
                      </button>
                    </div> */}

                    {/* <div className="row d-flex w-25 user_div">
                      <div className="w-25 user_icon">
                        <img src="/images/user_icon.png" className="user_icon_img" alt="" />
                      </div>
                      <div className="w-25 user_name">Admin</div>
                    </div> */}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* THIS IS THE IMPORTANT PART */}
        <div className={`right_side_div_1 ${getPageClass()}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/IdeaWizards" element={<IdeaWizards />} />
            <Route path="/MilestoneAchiever" element={<MilestoneAchiver />} />
            <Route path="/ChampionsofSteel" element={<ChampionsofSteel />} />
            <Route path="/PrideofSteel" element={<PrideofSteel />} />
          </Routes>

         {location.pathname === "/IdeaWizards" && (
            <div className="rewardsTableDiv dashboard_table_main_div table_head_left">
              <h6>Project List</h6>
              <span className="heading_p">This is a list of ongoing projects</span>
              <ReawardsTable />
            </div>
          )}

          {location.pathname === "/MilestoneAchiever" && (
            <div className="rewardsTableDiv dashboard_table_main_div table_head_left">
             <h6>Project List</h6>
              <span className="heading_p">This is a list of ongoing projects</span>
              <MilestoneAchiverTable />
            </div>
          )}

          {location.pathname === "/ChampionsofSteel" && (
            <div className="rewardsTableDiv dashboard_table_main_div table_head_left">
             <h6>Project List</h6>
              <span className="heading_p">This is a list of ongoing projects</span>
              <ChampionsTable />
            </div>
          )}

          {location.pathname === "/PrideofSteel" && (
             <div className="rewardsTableDiv dashboard_table_main_div table_head_left">
             <h6>Project List</h6>
              <span className="heading_p">This is a list of ongoing projects</span>
              <PrideOfSteelTable />
            </div>
          )}

        </div>

        </div>
      </div>
    </div>
  );
};

export default Layout;