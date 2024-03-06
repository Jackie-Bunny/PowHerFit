import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";


const CreateSubscription = () => {
    const [purchaseDateTime, setPurchaseDateTime] = useState('');
    const handleDateTimeChange = (e) => {
        setPurchaseDateTime(e.target.value);
    };
    return (
        <>
            <SideBar />
            <div className="dashbordcontent">
                <div className="container-fluid">
                    <div className="row">
                        <SideNav></SideNav>
                        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="userlist">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <h3>Create Subscription</h3>

                                    </div>

                                </div>
                            </div>
                            <form action='javascript:;'>
                                <div className="createprogrameformbox">


                                    <div className="line"></div><br></br>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>User *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select class="form-select" aria-label="Default select example" className="form-select">
                                                    <option disabled="">Brianna</option>

                                                </select>
                                            </div>


                                        </div>
                                    </div>
                                    <hr className="line"></hr>
                                    <div className="row pb-3 pt-3">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Subscription Tier</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist ">
                                                <select class="form-select" aria-label="Default select example" className="form-select">
                                                    <option disabled="" value="">Choose an option</option>
                                                    <option value="Entry">Entry</option>
                                                    <option value="Standard">Standard</option>
                                                    <option value="Empowerment">Empowerment</option>

                                                </select>

                                            </div>

                                        </div>
                                    </div>
                                    <hr className="line"></hr>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label htmlFor="purchasedate_time">Purchase Datetime</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist d-flex align-items-center newlabel1s">
                                                <input type="datetime-local" className="form-control" name="purchasedate_time" />
                                                <small>UTC</small>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className="line"></hr>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Expiry Datetime</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist d-flex align-items-center newlabel1s">
                                                <input type="datetime-local" className="form-control" name="expirydate_time" />
                                                <small>UTC</small>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                        <div className='btnlist'>
                                            <button className="cancel">Cancel</button>
                                            <button className="create">Attach & Attach Another</button>
                                            <button className="create">Create Subscription</button>
                                        </div>

                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )

}


export default CreateSubscription;