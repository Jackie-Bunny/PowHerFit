import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";
import { Link } from "react-router-dom";

const NutritionDetails =()=>{
    return(
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
                                        <h3>Nutrition Details: 41</h3>

                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div className="updatedelete">
                                            <ul>
                                                <li>
                                                    <Link><i className="fa-regular fa-ellipsis"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="/Nutrition/NutritionEdit"><i className="fa-regular fa-pen-to-square"></i></Link>
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
                                            <p>41</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Title</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>February Recipe Book</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Type</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>Nutrition<i class="fa-regular fa-circle-check"></i></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Publish Status</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>Published<i class="fa-regular fa-circle-check"></i></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Public</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p><i class="fa-regular fa-circle-check"></i></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Content</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>Access Your Content Below</p>

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


export default NutritionDetails;