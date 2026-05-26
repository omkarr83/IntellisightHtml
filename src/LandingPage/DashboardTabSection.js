import React, { useState  } from "react";

import project_data from "../DashboardData/ProjectTableData.json";  // Dummy Project Data Inject

import ToggleRightPopup from '../RightOffCanvas';  // Right Side OffCanvas

import ProjectInfoModal from './ProjectInfoModal';


const [activeTab, setActiveTab] = ("My Projects"); 

const Dashboardtable = () =>{


    const handleRowAction = (row) => {
        console.log("Row clicked:", row);
    };

    // const [selectedRow, setSelectedRow] = useState(null);

    const [showModalProjectInfo, setShowModalProjectInfo] = useState(false); // Hide and Show for KPI Modal State

    return (
        <div className="dashboard_table_main_div">
            <div className="table_heading">
                <div className="row d-flex table_head_first_div">
                    <div className="w-25 table_head_left"> 
                        <h6>Project List</h6> 
                        <span>This is a list of ongoing projects.</span>
                    </div>
                    <div className=" row d-flex w-75 table_head_right">
                        <div className="w-50 search-container">
                            <input type="text" className="form-control search-input" placeholder="Search projects by title, ID, or manager..."/>
                            <i className="bi bi-search search-icon"></i>
                        </div>
                            <button className=" btn btn-danger add_new_project_btn" type="button"><i className="bi bi-plus-circle-dotted"></i>Add New Project</button>
                            <button className=" btn btn-light project_export_btn" type="button"><i className="bi bi-box-arrow-down"></i>Export</button>
                    </div>
                </div>
            </div>

            {/* Tabs Section Start*/}

            <div className="w-50 nav_tabs">
                <ul className="nav nav-tabs mt-3" id="projectTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="dashboard_table" data-bs-toggle="tab" data-bs-target="#my" type="button" role="tab">
                        My Projects
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="registered-tab" data-bs-toggle="tab" data-bs-target="#registered" type="button" role="tab">
                        Registered
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed" type="button" role="tab">
                        Completed
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="vetted-tab" data-bs-toggle="tab" data-bs-target="#vetted" type="button" role="tab">
                        Vetted
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="draft-tab" data-bs-toggle="tab" data-bs-target="#draft" type="button" role="tab">
                        Draft
                        </button>
                    </li>
                </ul>
            </div>

            {/* Tabs Section End*/}

            {/* Tabs Dashboard Section Start  */}

            <div className="tab-content mt-3" id="projectTabsContent">
                <div className="tab-pane fade show active" id="my" role="tabpanel">
                      <div className="fluid-container table_main_div mt-4" id="my">
                        <table className="table table-hover align-middle" id="dashboard_table">
                            <thead className="table-light">
                            <tr>
                                <th className="project_name_head">Project Name</th>
                                <th className="location_head">Location</th>
                                <th className="project_manager_head">Project Manager</th>
                                <th className="savings_head">Savings (Cr)</th>
                                <th className="investment_head">Investments (Cr)</th>
                                <th className="progress_status_head">Progress Status</th>
                                <th className="charter_head">Charter</th>
                                <th>Stages</th>
                            </tr>
                            </thead>
                            <tbody>
                            {project_data.map((proj, idx, row) => (
                                <tr key={proj.id || idx} row-id={proj.id}>
                                <td>{proj.projectName.project && (<div className="projectName"><a className="project_link" href=''>{proj.projectName.project}</a></div>)}{proj.projectName.projectCode && (<div className="projectCode">{proj.projectName.projectCode}</div>)}</td>
                                <td className="location">{proj.location}</td>
                                <td className="manager">{proj.manager}</td>
                                <td className="text-success savings">{proj.savings}</td>
                                <td className="investments">{proj.investments}</td>
                                <td className="progress_status">
                                    {/* Status Badge */}
                                    <div className="badge_div">
                                        <span className={`badge ${
                                            proj.progress.status === "Completed" ? "bg-success": 
                                            proj.progress.status === "Delayed" ? "bg-warning text-dark": "bg-primary"
                                            }`}>
                                            {proj.progress.status}
                                        </span>
                                    </div>    
                                    {/* Progress Bar */}
                                    <div className="d-flex align-items-center" style={{ gap: "6px" }}>
                                        <div className="progress flex-grow-1" style={{ height: "6px" }}>
                                        <div
                                            className={`progress-bar ${
                                            proj.progress.status === "On Time" ? "bg-primary": 
                                            proj.progress.status === "Completed" ? "bg-success":
                                            proj.progress.status === "Delayed" ? "bg-warning": "bg-secondary"
                                            }`}
                                            role="progressbar"
                                            style={{ width: `${proj.progress.percent}%` }}
                                        ></div>
                                        </div>
                                        {/* % progress bar */}
                                        <span className="progress_count">{proj.progress.percent}%</span>
                                    </div>
                                </td>

                                <td className="charter">
                                    <i className={proj.charter.doc}></i>
                                    <i className={`${proj.charter.approval}`}></i>
                                </td>

                                    <td className="stages stages_main_div">
                                       <div className="stages_main_div_inner">
                                         <div className="stage_name"> <i className={`bi bi-circle-fill ${
                                                proj.stages.name.includes("S1 Verification - Pending")
                                                ? "text-danger" 
                                                : proj.stages.name === "Closed"
                                                ? "text-success" 
                                                : proj.stages.name === "Execution"
                                                ? "text-purple" 
                                                : "text-secondary" }`}></i>{" "}
                                            {proj.stages.name}
                                        </div>
                                        {proj.stages.since && (<div className="text-muted small">Pending from {proj.stages.since}</div>)}
                                       </div>
                                       <div className="stages_three_dot_div">
                                            <i className="bi bi-three-dots-vertical" onClick={() => { handleRowAction(proj); setShowModalProjectInfo(true) } }></i>
                                       </div>
                                    </td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tab-pane fade" id="registered" role="tabpanel">
                    <p>Registered projects content goes here...</p>
                </div>

                <div className="tab-pane fade" id="completed" role="tabpanel">
                    <p>Completed projects content goes here...</p>
                </div>

                <div className="tab-pane fade" id="vetted" role="tabpanel">
                    <p>Vetted projects content goes here...</p>
                </div>

                <div className="tab-pane fade" id="draft" role="tabpanel">
                    <p>Draft projects content goes here...</p>
                </div>
            </div>

            {/* Tabs Dashboard Section End  */}

              <ToggleRightPopup/>
                        
            {/* Project Information Popup Function  */}
            <ProjectInfoModal show={showModalProjectInfo} onClose={() => setShowModalProjectInfo(false)} />

        </div>
        
    )
}

export default Dashboardtable