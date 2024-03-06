import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";


const AttachCoach = () => {

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
                                        <h3>Attach Coach</h3>

                                    </div>

                                </div>
                            </div>
                            <form action='javascript:;'>
                                <div className="createprogrameformbox">
                                    <div className="detaillist">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                <h5>Name</h5>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                <p>Brianna</p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="line"></div><br></br>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Coach Assignments History</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select class="form-select" aria-label="Default select example" className="form-select">
                                                    <option disabled="" value="">Choose Coach</option>
                                                    <option value="22">Anna Rothenberger</option>
                                                    <option value="23">Brooke Puckett</option>
                                                    <option value="96">Carrie Drake</option>
                                                    <option value="3553">Danielle</option>
                                                    <option value="30">Erika Lynn</option>
                                                    <option value="370">Hallie P Lucero</option>
                                                    <option value="154">Jade Higgins</option>
                                                    <option value="2163">Jenny Espinosa</option>
                                                    <option value="232">Justice</option>
                                                    <option value="98">Leah Lehman</option>
                                                    <option value="4863">Lisa Fields</option>
                                                    <option value="92">Lisa Fields</option>
                                                    <option value="25">Lori Arion</option>
                                                    <option value="4044">Lyndsay Ball</option>
                                                    <option value="26">Madeline Ferretiz</option>
                                                    <option value="5055">Melissa Khan</option>
                                                    <option value="27">Michele Kreft</option>
                                                    <option value="106">Michelle Ramsey</option>
                                                    <option value="28">Shaye Herrington</option>
                                                </select>
                                            </div>
                                            <div class="labellist1"><label><input type="checkbox" name="deleted" />With Deleted</label></div>
                                            <div className="labellist">
                                                <label><strong>Assign a coach to this user.</strong><br />
                                                    You can only see active coaches in this list.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pb-3 pt-3">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Start Date *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist d-flex align-items-center newlabel">
                                                <input type="date" className="form-control" name="start_date" />
                                                <small>UTC</small>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>End Date</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist d-flex align-items-center newlabel">
                                                <input type="date" className="form-control" name="End_date" />
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
                                            <button className="create">Attach Coach</button>
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


export default AttachCoach;