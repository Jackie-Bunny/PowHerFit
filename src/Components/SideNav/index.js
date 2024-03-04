import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';



const SideNav = () => {

    const userData = useSelector(state => state.data.data);
    const dispatch = useDispatch();

    const token = userData.token;
    console.log(token);

    return (

        <>

            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="sidebar">
                    <ul>
                        <li>
                            <div className="accordion" id="accordionExample">

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <i className="fa-regular fa-user"></i> Customers
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li><Link to="/Users" className="active">Users</Link></li>
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
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <i className="fa-solid fa-scale-balanced"></i> Workout Builder
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li><Link to="/Programs">Programs</Link></li>
                                                <li><Link to="/Weeks">Weeks</Link></li>
                                                <li><Link to="/Method">Method</Link></li>
                                                <li><Link to="/Workout">Workout</Link></li>
                                                <li><Link to="/Exercises">Exercises</Link></li>
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