import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { NavLink, Outlet } from 'react-router-dom';
const SideNav = () => {
    return (
        <>

            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="sidebar">
                    <ul>
                        <li>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            <i className="fa-regular fa-user"></i> Customers
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li>
                                                    <NavLink to="/Users" activeClassName="active">
                                                        Users
                                                    </NavLink>
                                                </li>
                                                <Outlet />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="accordion" id="accordionExample1">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            <i className="fa-solid fa-scale-balanced"></i> Workout Builder
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li>
                                                    <NavLink to="/Programs" activeClassName="active">
                                                        Programs
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/Weeks" activeClassName="active">
                                                        Weeks
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/Method" activeClassName="active">
                                                        Methods
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/Exercises" activeClassName="active">
                                                        Exercises
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/Workout" activeClassName="active">
                                                        Workouts
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/RecommendedCoaches" activeClassName="active">
                                                        Recommended Coaches
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/RecommendedPrograms" activeClassName="active">
                                                        Recommended Programs
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default SideNav;