import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import { Link } from "react-router-dom";
import Footer from "../../../Footer";



const ContentPagesDetails =()=>{
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
                                        <h3>Content Page Details:</h3>

                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div className="updatedelete">
                                            <ul>
                                                <li>
                                                    <Link><i className="fa-regular fa-ellipsis"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="/ContentPages/ContentPagesEdit"><i className="fa-regular fa-pen-to-square"></i></Link>
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
                                            <p>1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Title</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>Terms & Conditions</p>
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
                                            <p>These Terms & Conditions are effective as of December 5, 2022.</p>
                                            <strong>PLEASE READ TERMS & CONDITIONS THOROUGHLY. <br/> These Terms & Conditions cover important information and any applicable fees. The following additional terms & conditions may also apply:</strong>
                                              <p>Welcome to the PowHerfit community! <br/>These terms of use and any other terms and documents expressly incorporated herein, each as may be amended, supplemented or replaced from time to time (together, the "Terms of Use") apply to your use of (and subscription to) the PowHer.fit website, PowHerfit mobile application (“the “PowHerfit app” on the App Store), blog, community, forum, or one of our other products or services, all of which are part of the PowHer.fit company’s resources (the “Resource”).These Terms & Conditions are entered into by and between you as a user (referred to as "User", "you" or "your") and PowHer.fit, LLC (referred to as “PowHer.fit”, “PowHerfit”, “we", "us" or "our"), and supersede and replace any terms and conditions of services that you may have previously agreed with the Resource.</p>

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



export default ContentPagesDetails;