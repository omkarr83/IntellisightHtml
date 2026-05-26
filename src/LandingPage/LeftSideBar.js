// // const SideBar = () => {
// //     return (
// //         <div className="main_inner_sidebar">
// //             <div className="w-75"><img className="logo_image" src="/images/jsw_logo_1.png" alt="Logo" /></div>  

// //             <div className="d-flex left_collapse_div" id="toggleBtn">
// //                 <i className="bi bi-chevron-double-left" id="toggleIcon"></i>
// //                 <span>Collapse</span>
// //             </div>
// //              <div className='w-100'>
// //                   <div className="left_side_inner_div">
// //                     <ul className="nav nav-sidebar"> 
// //                       <li className='active'><a> <i className="bi bi-grid"></i> Dashboard</a></li>
// //                       <li><a> <i className="bi bi-files"></i> Projects</a></li>
// //                       <li><a> <i className="bi bi-graph-up-arrow"></i> Reports</a></li>
// //                       <li><a> <i className="bi bi-book"></i> User Guide</a></li>
// //                       <li><a> <i className="bi bi-check2-circle"></i> My Approvals</a></li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //         </div>
// //     )
// // }

// // export default SideBar;




// import React, { useState } from "react";
// // import { href, Link } from "react-router-dom";
// // import { NavLink } from "react-router-dom";
// import { NavLink, useLocation } from "react-router-dom";

// const SideBar = () => {

//   const location = useLocation();
//   const [isCollapsed, setIsCollapsed] = useState(true); // default collapsed

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const [openMenu, setOpenMenu] = useState(null);

//   const toggleMenu = (index) => {
//     setOpenMenu(openMenu === index ? null : index);
//   };

//   const menuItems = [
//     { icon: "bi bi-grid", label: "Dashboard", href:"/"},
//     { icon: "bi bi-files", label: "Projects", href:"/projects" },
//     { icon: "bi bi-graph-up-arrow", label: "Reports", href:"/Reports" },
//     { icon: "bi bi-book", label: "User Guide", href:"/UserGuide" },
//     { icon: "bi bi-check2-circle", label: "My Approvals", href:"/MyApprovals" },
//     {
//     icon: "bi bi-award",
//     label: "Rewards",
//     children: [
//       { label: "Idea Wizard", href:"/IdeaWizards" },
//       { label: "Milestone Achiever", href:"/MilestoneAchiever"},
//       { label: "Champions of Steel", href:"/ChampionsofSteel" },
//       { label: "Pride of Steel", href:"/PrideofSteel" }
//     ]
//   }
//   ];

//   return (
//     <div className={`main_inner_sidebar ${isCollapsed ? "collapsed" : "expanded"}`}>
//       {/* Logo */}
//       <div className="w-75">
//       <NavLink to="/">
//         <img className="logo_image" src="/images/jsw_logo_1.png" alt="Logo" />
//       </NavLink>
//       </div>

//       {/* Toggle Button */}
//       <div className="d-flex left_collapse_div" onClick={toggleSidebar}>
//         <i className={`bi bi-chevron-double-right toggle-icon ${!isCollapsed ? "rotated" : ""}`}></i>
//         {!isCollapsed && <span className="collapse_text">Collapse</span>}
//       </div>

//       {/* Menu */}
//       <div className="left_side_inner_div">
//         {/* <ul className="nav nav-sidebar">
//           {menuItems.map((item, index) => (
//             <li key={index} className={index === 0 ? "active" : ""}>
//               <a href={item.href || "#"}> <i className={item.icon}></i>
//                 {!isCollapsed && ` ${item.label}`}
//               </a>
//             </li>
//           ))}
//         </ul> */}

//         <ul className="nav nav-sidebar">
//         {menuItems.map((item, index) => (
//           <li key={index}  className={`${index === 0 ? "active" : ""} ${openMenu === index ? "open" : ""}`}>

//             {/* Main Menu Item */}
//             {/* <div className="menu-item" onClick={() => item.children && toggleMenu(index)} style={{ cursor: item.children ? "pointer" : "default" }}>
//               <a href={item.href || "#"}>
//                 <i className={item.icon}></i>
//                 {!isCollapsed && ` ${item.label}`}
//               </a>

//               {item.children && !isCollapsed && (
//                 <i className={`bi ${openMenu === index ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
//               )}
//             </div> */}

//             <div className="menu-item d-flex justify-content-flex-start align-items-center" onClick={() => item.children && toggleMenu(index)}
//             style={{ cursor: item.children ? "pointer" : "default" }}>

//             {/*  If NO children → navigate */}
//             {!item.children ? (
//               <NavLink to={item.href}>
//                 <i className={item.icon}></i>
//                 {!isCollapsed && ` ${item.label}`}
//               </NavLink>
//             ) : (
//               <>
//                 <i className={item.icon}></i>
//                 {!isCollapsed && ` ${item.label}`}
//               </>
//             )}

//             {/* Dropdown arrow */}
//             {item.children && !isCollapsed && (
//               <i className={`bi ${openMenu === index ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
//             )}
//           </div>

//             {/* Sub Menu */}
//             {item.children && openMenu === index && !isCollapsed && (
//               <ul className="sub-menu">
//                 {item.children.map((subItem, subIndex) => (
//                   <li key={subIndex}>
//                     {/* <a href="#">{subItem.label}</a> */}
//                     <NavLink to={subItem.href}>{subItem.label}</NavLink>
//                   </li>
//                 ))}
//               </ul>
//             )}

//           </li>
//         ))}
//       </ul>
//       </div>
//     </div>
//   );
// };

// export default SideBar;


import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const menuItems = [
    { icon: "bi bi-grid", label: "Dashboard", href: "/" },
    { icon: "bi bi-files", label: "Projects", href: "/projects" },
    { icon: "bi bi-graph-up-arrow", label: "Reports", href: "/Reports" },
    { icon: "bi bi-book", label: "User Guide", href: "/UserGuide" },
    { icon: "bi bi-check2-circle", label: "My Approvals", href: "/MyApprovals" },
    {
      icon: "bi bi-award",
      label: "Rewards",
      children: [
        { label: "Idea Wizard", href: "/IdeaWizards" },
        { label: "Milestone Achiever", href: "/MilestoneAchiever" },
        { label: "Champions of Steel", href: "/ChampionsofSteel" },
        { label: "Pride of Steel", href: "/PrideofSteel" }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenMenu(null); // close all menus
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //  AUTO OPEN SUBMENU WHEN CHILD ACTIVE
  useEffect(() => {
    menuItems.forEach((item, index) => {
      if (item.children) {
        const isChildActive = item.children.some(
          (sub) => sub.href === location.pathname
        );
        if (isChildActive) {
          setOpenMenu(index);
        }
      }
    });
  }, [location.pathname]);

  useEffect(() => {
    if (isCollapsed) {
      setOpenMenu(null);
    }
  }, [isCollapsed]);

  return (
    <>
      {!isCollapsed && (
        <div
          className="sidebar_backdrop"
          onClick={() => setIsCollapsed(true)}
        />
      )}
      <div ref={sidebarRef} className={`main_inner_sidebar ${isCollapsed ? "collapsed" : "expanded"}`}>

        {/* LOGO */}
        <div className="w-75">
          <NavLink to="/">
            <img className="logo_image" src="/images/jsw_logo_1.png" alt="Logo" />
          </NavLink>
        </div>

        {/* TOGGLE */}
        <div className="d-flex left_collapse_div" onClick={toggleSidebar}>
          <i className={`bi bi-chevron-double-right toggle-icon ${!isCollapsed ? "rotated" : ""}`}></i>
          {!isCollapsed && <span className="collapse_text">Collapse</span>}
        </div>

        {/* MENU */}
        <div className="left_side_inner_div">
          <ul className="nav nav-sidebar">

            {menuItems.map((item, index) => {

              //  CHECK ACTIVE FOR MAIN MENU
              const isActive =
                location.pathname === item.href ||
                (item.children &&
                  item.children.some(sub => sub.href === location.pathname));

              return (
                <li
                  key={index}
                  className={`${isActive ? "active" : ""} ${openMenu === index ? "open" : ""}`}
                >

                  {/* MAIN MENU */}
                  <div
                    className="menu-item d-flex justify-content-between align-items-center"
                    onClick={() => item.children && toggleMenu(index)}
                    style={{ cursor: item.children ? "pointer" : "default" }}
                  >

                    {!item.children ? (
                      <NavLink to={item.href}>
                        <i className={item.icon}></i>
                        {!isCollapsed && <span className="ms-2">{item.label}</span>}
                      </NavLink>
                    ) : (
                      <div className="d-flex align-items-center">
                        <i className={item.icon}></i>
                        {!isCollapsed && <span className="ms-2">{item.label}</span>}
                      </div>
                    )}

                    {/* ARROW */}
                    {item.children && !isCollapsed && (
                      <i className={`bi ${openMenu === index ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                    )}
                  </div>

                  {/* SUB MENU */}
                  {item.children && openMenu === index && !isCollapsed && (
                    <ul className="sub-menu">
                      {item.children.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className={location.pathname === subItem.href ? "active" : ""}
                        >
                          <NavLink to={subItem.href}>
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}

                </li>
              );
            })}

          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;