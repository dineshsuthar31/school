// import React from "react";
import React, {useEffect} from "react"
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import NewAdmission from "../students/add-student";
import NewTeachers from "../teachers/add-teacher";
import GetTeachers from "../teachers/index";
import DashboardMain from "../../home";
import GetDetails from "../students";
const LeftMenu = () => {

    const accordianselect = (e) => {
        var acc = document.getElementsByClassName("accordion");
        var i;
        e.target.parentElement.classList.toggle("active")
        var panel_parent = e.target.closest(".accordian-section");
        var panel = panel_parent.querySelector(".panel");
        panel.classList.toggle("active-panel")
    }
    useEffect(() => {
        let list = []
        let accordion = document.querySelectorAll('.accordion')

        for (let child of accordion){
            child.addEventListener('click',accordianselect)
        }
        return () => {
            for (let child of accordion){
                child.removeEventListener('click',accordianselect)
            }
        }
    },[]);

    return(
        <>
            <Router>
                <div className={'left-menu'}>
                <div className={'logo'}>
                    <h2>TTQ Web Solutions</h2>
                </div>
                <div className={'nav-menu'}>
                    <div className="accordian-section">
                        <a href={'/'}><div className="accordion">Dashboard</div></a>
                    </div>
                    <div className="accordian-section">
                        <div className="accordion">Students</div>
                        <div className="panel">
                            <ul>
                                <li><Link to="/all-students">All Students</Link></li>
                                <li><Link to="/new-students">Admission Form</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="accordian-section">
                        <div className="accordion">Teachers</div>
                        <div className="panel">
                            <ul>
                                <li><Link to="/all-teachers">All Teachers</Link></li>
                                {/*<li><Link to="/teacher-details">Teacher Details </Link> </li>*/}
                                <li><Link to="/new-teacher">Add Teacher </Link> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="accordian-section">
                        <div className="accordion">Class</div>
                        <div className="panel">
                            <ul>
                                <li> All Classes </li>
                                <li> Add New Class </li>
                            </ul>
                        </div>
                    </div>

                    <div className="accordian-section">
                        <div className="accordion">Subject</div>
                        <a href={'#'}>
                        <div className="panel">
                            <ul>
                                <li> Add New Subject </li>
                                <li> All Subject </li>
                            </ul>
                        </div>
                        </a>
                    </div>

                    <div className="accordian-section">
                        <div className="accordion">Attendence</div>
                        <div className="panel">
                            <ul>
                                <li> Add New Subject </li>
                                <li> All Subject </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                <div className={'top-bar'}>
                    <div className={'profile'}>
                        <h1>hello</h1>
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<DashboardMain />} />
                    <Route path="/all-students" element={<GetDetails/>} />
                    <Route path="/new-students" element={<NewAdmission/>} />
                    <Route path="/new-teacher" element={<NewTeachers/>} />
                    <Route path="/all-teachers" element={<GetTeachers/>} />
                </Routes>
            </Router>
        </>
    )
}

export default LeftMenu;