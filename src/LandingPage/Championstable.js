import React, { useState } from "react";

const ChampionsTable = () => {
  // Sample JSON data

  const [nominatedRows, setNominatedRows] = useState({});
  const [approved, setApproved] = useState({});
  const [approvedChampions, setApprovedChampions] = useState({});
  const [rewardsData, setrewards] = useState([
    {
      projectid: "Online Condition Monitoring of HT Transformer",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Electrical & Automation",
      qualification: {"doc": "bi bi-check-circle"},
      projectmanager: "8/10 ",
      teamMembers: "Ajay Kumar/",
      teamMembersMoreDetails1 : "250",
    },
    {
      projectid: "Intensification of Sintering Process using..",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Sinter",
      qualification: {"doc": "bi bi-check-circle"},
      projectmanager: "6/10 ",
      teamMembers: "Manjunath M B/",
      teamMembersMoreDetails1 : "250",
    },
    {
      projectid: "Enhancement of Racking Plate life",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Refractory",
      qualification: {"doc": "bi bi-check-circle"},
      projectmanager: "7/10 ",
      teamMembers: "Mohsin Hossain /",
      teamMembersMoreDetails1 : "167",
    },
    {
       projectid: "Installation of Level transmitter to DG Cooling ",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "SIP",
      qualification: {"doc": "bi bi-check-circle"},      
      projectmanager: "5/10 ",
      teamMembers: "Sunil Dattatraya Lonkar /",
      teamMembersMoreDetails1 : "250",
    },
   
     {
       projectid: "Laser based Stripper car position sensor",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Mills",
      qualification: {"doc": "bi bi-check-circle"},      
      projectmanager: "7/10 ",      
      teamMembers: "Amit Kumar /",
      teamMembersMoreDetails1 : "500",
    },
     {
      projectid: "Reduction of coke fines generation",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Cake Oven",
      qualification: {"doc": "bi bi-check-circle"},      
      projectmanager: "9/10 ",      
      teamMembers: "Abhinava Saran /",
      teamMembersMoreDetails1 : "500",
    },
     {
      projectid: "Installation and replacement of steam traps",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Cake Oven",
      qualification: {"doc": "bi bi-check-circle"},      
      projectmanager: "5/10 ",      
      teamMembers: "Supipta Maity /",
      teamMembersMoreDetails1 : "375",
    },
     {
      projectid: "Installation of Linear Heat Sensing cable ",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Cake Oven",
      qualification: {"doc": "bi bi-check-circle"},      
      projectmanager: "4/10 ",      
      teamMembers: "Shankar J /",
      teamMembersMoreDetails1 : "250",
    },
     {
      projectid: "Online gas line cleaning",
      projectSubDetails: "COEVJ24E&A1271N",
      cluster: "Pellet",
      qualification: {"doc": "bi bi-check-circle"},      
      projectmanager: "8/10 ",      
      teamMembers: "DV Manjunath Reddy /",
      teamMembersMoreDetails1 : "500",
    }
  ]);

    const handleNominate = (index) => {
       setNominatedRows ((prev) =>({
        ...prev, [index]:true
       }))
    };

    const handleIsApproval = (index) =>{
        setApproved ((prev) => ({
            ...prev, [index]:true
        }))
    }

    const handleIsApprovalChampions = (index) =>{
        setApprovedChampions ((prev) => ({
            ...prev, [index]:true
        }))
    }

  return (
    <div className="table-responsive" id="rewards_table_div">
      <table className="table table-bordered align-middle" id="milestone_achiever_table">
        <thead className="table-light">
          <tr>
            <th className="heading_1">Project ID</th>
            <th className="heading_2">Cluster</th>
            <th className="heading_3">Qualification Charter Approval</th>
            <th className="heading_4">Evaluation Score</th>
            <th className="heading_5">Project Manager</th>
            <th className="heading_6">Action</th>
          </tr>
        </thead>
       <tbody>
            {rewardsData.map((rewards, index) => (
                <tr key={index}>
                <td>{rewards.projectid} <p className="text-gray">{rewards.projectSubDetails}</p> </td>
                <td><span className="text-gray">{rewards.cluster}</span></td>
                <td className="text-center check_icon"><i className={rewards.qualification.doc}></i></td>
                <td>{rewards.projectmanager}</td> 
                <td>{rewards.teamMembers} <span className="normal-rewards-points">{rewards.teamMembersMoreDetails1}</span></td>
                <td> <button className={`nominate_btn ${nominatedRows[index] ? "nominated" : ""}`} onClick={() => handleNominate(index)}>
                    {nominatedRows[index] ? "Nominated" : "Nominate"}</button>
                    <button className={`coo_approval_btn ${approved[index] ? "approved" : ""}`} onClick={() => handleIsApproval(index)}>
                    {approved[index] ? "COO Approved" : "COO Approval"}</button>
                    <button className={`cfo_approval_btn ${approvedChampions[index] ? "approved" : ""}`} onClick={() => handleIsApprovalChampions(index)}>
                    {approvedChampions[index] ? "CFO Approved" : "CFO Approval"}</button>
                </td>
                </tr>
            ))}
            </tbody>
      </table>
    </div>
  );
};

export default ChampionsTable;
