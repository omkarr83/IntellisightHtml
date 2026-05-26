import React, { useState } from "react";

const ReawardsTable = () => {
  // Sample JSON data
  const [rewardsData, setrewards] = useState([
    {
      projectid: "Online Condition Monitoring of HT Transformer",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Electrical & Automation",
      qualification: {"doc": "bi bi-check-circle"},
      projectmanager: "Ajay Kumar/ ",
      projectmanagerRewards : "500",
      teamMembers: "Hanumanthappa; Holagundi Yogananda /",
      teamMembersMoreDetails1 : "250",
      teamMembersMoreDetails2 : "SP Each",
    },
    {
      projectid: "Intensification of Sintering Process using..",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Sinter",
      qualification: {"doc": "bi bi-check-circle"},
      projectmanager: "Manjunath M B/",
      projectmanagerRewards : "750",
      teamMembers: "Palleda Baburaja; Rohit Kumar; Vinodkumar T /",
      teamMembersMoreDetails1 : "250",
      teamMembersMoreDetails2 : "SP Each",  
    },
    {
      projectid: "Enhancement of Racking Plate life",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Refractory",
      qualification: {"doc": "bi bi-check-circle"},
      projectmanager: "Mohsin Hossain /",
      projectmanagerRewards : "500",
      teamMembers: "Ajit Shripad Athavale; Faisal Yunus Dhanshe; Nawaz Azim Dakhway /",
      teamMembersMoreDetails1 : "167",
      teamMembersMoreDetails2 : "SP Each",
    },
    {
       projectid: "Installation of Level transmitter to DG Cooling ",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "SIP",
      qualification: {"doc": "bi bi-check-circle"},      
      projectmanager: "Sunil Dattatraya Lonkar /",
      projectmanagerRewards : "500",
      teamMembers: "Hanumanthappa; Holagundi Yogananda/ 250 SP Each",
      teamMembersMoreDetails1 : "250",
      teamMembersMoreDetails2 : "SP Each",
    },
   
     {
       projectid: "Laser based Stripper car position sensor",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Mills",
      qualification: {"doc": "bi bi-check-circle"},      
      projectmanager: "Sunil Dattatraya Lonkar /",
      projectmanagerRewards : "500",
      teamMembers: "Amit Kumar /",
      teamMembersMoreDetails1 : "500",
      teamMembersMoreDetails2 : "SP Each",
    },
     {
      projectid: "Reduction of coke fines generation",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Cake Oven",
      qualification: {"doc": "bi bi-check-circle"},      
      projectmanager: "Tapan Kumar Singh /",
      projectmanagerRewards : "550",
      teamMembers: "Abhinava Saran /",
      teamMembersMoreDetails1 : "500",
      teamMembersMoreDetails2 : "SP Each",
    },
     {
      projectid: "Installation and replacement of steam traps",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Cake Oven",
      qualification: {"doc": "bi bi-check-circle"},      
      projectmanager: "Gopal Saha/",
      projectmanagerRewards : "750",
      teamMembers: "Supipta Maity /",
      teamMembersMoreDetails1 : "375",
      teamMembersMoreDetails2 : "SP Each",
    },
     {
      projectid: "Installation of Linear Heat Sensing cable ",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Cake Oven",
      qualification: {"doc": "bi bi-check-circle"},      
      projectmanager: "Srisuman Kanamarlapudi/",
      projectmanagerRewards : "500",
      teamMembers: "Shankar J /",
      teamMembersMoreDetails1 : "250",
      teamMembersMoreDetails2 : "SP Each",
    },
     {
      projectid: "Online gas line cleaning",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Pellet",
      qualification: {"doc": "bi bi-check-circle"},      
      projectmanager: "DV Manjunatha Reddy/",
      projectmanagerRewards : "500",
      teamMembers: "DV Manjunath Reddy /",
      teamMembersMoreDetails1 : "500",
      teamMembersMoreDetails2 : "SP Each",
    }
  ]);



  return (
    <div className="table-responsive" id="rewards_table_div">
      <table className="table table-bordered align-middle" id="rewards_table">
        <thead className="table-light">
          <tr>
            <th className="heading_1">Project ID</th>
            <th className="heading_2">Cluster</th>
            <th className="heading_3">Qualification Charter Approval</th>
            <th className="heading_4">Project Manager</th>
            <th className="heading_5">Team Members</th>
          </tr>
        </thead>
       <tbody>
            {rewardsData.map((rewards, index) => (
                <tr key={index}>
                <td>{rewards.projectid} <p className="text-gray">{rewards.projectSubDetails}</p> </td>
                <td><span className="text-gray">{rewards.cluster}</span></td>
                <td className="text-center check_icon"><i className={rewards.qualification.doc}></i></td>
                <td>{rewards.projectmanager} <span className="rewards_points" style={{
                  color: Number(rewards.projectmanagerRewards) === 500 ? "#FFA125" : "#1865D9"}}>{rewards.projectmanagerRewards}</span></td> 
                <td>{rewards.teamMembers} <span className="normal-rewards-points">{rewards.teamMembersMoreDetails1}</span> <span className="text-gray small-text">{rewards.teamMembersMoreDetails2}</span></td>
                </tr>
            ))}
            </tbody>
      </table>
    </div>
  );
};

export default ReawardsTable;
