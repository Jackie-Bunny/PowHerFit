import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";



const CreateSurvey = () => {
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
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <h3>Create Survey</h3>

                                    </div>
                                </div>
                            </div>

                            <div className="createprogrameformbox">
                                <form action="javascript:;">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>CourseWeek *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select className="form-select" aria-label="Default select example">
                                                    <option disabled="" value="">—</option>
                                                    <option value="1">1</option>
                                                    <option value="16">All PowHer Recipe Bundle</option>
                                                    <option value="2">Kait X Powher Nutrition</option>
                                                    <option value="3">Week 1 - Advanced Nutrition</option>
                                                    <option value="13">Week 10 - Advanced Nutrition</option>
                                                    <option value="14">Week 11 - Advanced Nutrition</option>
                                                    <option value="15">Week 12 - Advanced Nutrition</option>
                                                    <option value="4">Week 2 - Advanced Nutrition</option>
                                                    <option value="5">Week 3 - Advanced Nutrition</option>
                                                    <option value="6">Week 4 - Advanced Nutrition</option>
                                                    <option value="7">Week 5 - Advanced Nutrition</option>
                                                    <option value="8">Week 6 - Advanced Nutrition</option>
                                                    <option value="9">Week 7 - Advanced Nutrition</option>
                                                    <option value="11">Week 8 - Advanced Nutrition</option>
                                                    <option value="12">Week 9 - Advanced Nutrition</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Survey Title *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="text" className="form-control" name="survey_title" placeholder="Survey Title" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />





                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                            <div className='btnlist'>
                                                <button className="cancel">Cancel</button>
                                                <button className="create">Create & Add Another</button>
                                                <button className="create">Create Surveys</button>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}


export default CreateSurvey;