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
                                                    <NavLink to="/Users" activeclassname="active">
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
                                                    <NavLink to="/Programs" activeclassname="active">
                                                        Programs
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/Weeks" activeclassname="active">
                                                        Weeks
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/Method" activeclassname="active">
                                                        Method
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/Workout" activeclassname="active">
                                                        Workout
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/Exercises" activeclassname="active">
                                                        Exercises
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/RecommendedCoaches" activeclassname="active">
                                                        Recommended Coaches
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/RecommendedPrograms" activeclassname="active">
                                                        Recommended Programs
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="accordion" id="accordionExample1">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            <i class="fa-regular fa-file"></i>Content
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li>
                                                    <NavLink to="/ContentPages/" activeclassname="active">
                                                        Content Pages
                                                    </NavLink></li>
                                                <li>
                                                    <NavLink to="/Nutrition/" activeclassname="active">
                                                        Nutrition
                                                    </NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="accordion" id="accordionExample4">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            <i class="fa-regular fa-file"></i>Paid Content
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li>
                                                    <NavLink to="/Course" activeclassname="active">
                                                        Courses
                                                    </NavLink></li>
                                                <li>
                                                    <NavLink to="/CoursesWeek" activeclassname="active">
                                                        Courses Week
                                                    </NavLink></li>
                                                <li>
                                                    <NavLink to="/Quizzes" activeclassname="active">
                                                        Quizzes
                                                    </NavLink></li>
                                                <li>
                                                    <NavLink to="/Surveys" activeclassname="active">
                                                        Surveys
                                                    </NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="accordion" id="accordionExample4">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            <i class="fa-solid fa-folder-open"></i>Reporting
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li>
                                                    <NavLink to="/Payments" activeclassname="active">
                                                        Payments
                                                    </NavLink></li>
                                                <li>
                                                    <NavLink to="/Purchases" activeclassname="active">
                                                        Purchases
                                                    </NavLink></li>
                                                <li>
                                                    <NavLink to="/Subscription" activeclassname="active">
                                                        Subscription
                                                    </NavLink></li>
                                                <li>
                                                    <NavLink to="/UserQuizAnswersReports" activeclassname="active">
                                                        User Quiz Answers Reports
                                                    </NavLink></li>
                                                <li>
                                                    <NavLink to="/UserSurveyAnswersReports" activeclassname="active">
                                                        User Quiz Answers Reports
                                                    </NavLink></li>
                                                <li>
                                                    <NavLink to="/CoachPaymentReports" activeclassname="active">
                                                        Coach Payment Reports
                                                    </NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="accordion" id="accordionExample4">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            <i class="fa-regular fa-star"></i>Promotions
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>
                                                    <NavLink to="/Promotions" activeclassname="active">
                                                        Promotions
                                                    </NavLink></li>
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