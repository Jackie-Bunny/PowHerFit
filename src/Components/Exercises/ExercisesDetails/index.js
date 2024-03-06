import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";
import { Link, Outlet } from "react-router-dom";


const ExercisesDetails = () => {

    return (
        <>
            <SideBar></SideBar>
            <div className="dashbordcontent">
                <div className="container-fluid">
                    <div className="row">
                        <SideNav></SideNav>
                        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="userlist">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                        <h3>Exercise Details: Bench Tricep Dips (tabata) -</h3>

                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div className="updatedelete">
                                            <ul>
                                                <li>
                                                    <Link><i className="fa-regular fa-ellipsis"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="/Exercises/ExercisesEdit"><i className="fa-regular fa-pen-to-square"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="createprogrameformbox">
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>ID</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>2436</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Title</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>Bench Tricep Dips</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Description</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>Sit on the edge of bench, grip the edge next to your hips. Fingers should be pointed at your feet, your legs extended, knees bent, with the heels touching the ground. Look straight ahead with your chin up. Press into your palms to lift your body and slide forward just far enough that glutes clear the edge of the bench. Lower yourself until your elbows are bent between 45 and 90 degrees. Control the movement and push yourself back up slowly until your arms are almost straight, and repeat.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Video Url</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>https://vimeo.com/888548449</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Video Preview</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Video Poster</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">

                                            <p>
                                                <div className="imgbox"><button download=""><i className="fa-regular fa-download"></i>download</button></div>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Exercise Type</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>Tabata</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Location</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>Gym</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Superset / Circuit</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p><i class="fa-regular fa-circle-xmark"></i></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Exercise Time (s)</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>30</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Sets</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>3</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Reps</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p><i class="fa-regular fa-minus"></i></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Set Rest (s)</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>30</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Reps Per Set</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p><i class="fa-regular fa-minus"></i></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Exercise Rest (s)</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>30</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Progressive Reps</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p><i class="fa-regular fa-circle-xmark"></i></p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>

    )


}


export default ExercisesDetails;