import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";


const WeeksEdit = () => {

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
                                        <h3>Update Week: Dumbbell Only Half Hour PowHer - Week 12</h3>

                                    </div>
                                </div>
                            </div>

                            <div className="createprogrameformbox">
                                <form action="javascript:;">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Title *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="text" className="form-control" name="title" placeholder="Title" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Program Image</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <label className="upload">
                                                    <input type="file" name="program_image_upload" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row prmemium align-items-center">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Live?</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="checkbox" name="Live" />

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Program *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select data-testid="programs-select" dusk="program" class="w-full block form-control form-select form-select-bordered">
                                                    <option disabled="" value="">—</option>
                                                    <option value="21">Advanced Nutrition 1.0</option>
                                                    <option value="22">Bikini Body - Home - Beginner</option>
                                                    <option value="25">Bikini Body - Gym - Advanced</option>
                                                    <option value="24">Bikini Body - Gym - Beginner</option>
                                                    <option value="3">Bikini Body - Gym - Intermediate</option>
                                                    <option value="23">Bikini Body - Home - Advanced</option>
                                                    <option value="4">Bikini Body - Home Intermediate</option>
                                                    <option value="38">Booty + ABS - GYM - Intermediate</option>
                                                    <option value="10">Booty + ABS - Home - Intermediate</option>
                                                    <option value="29">Building the "X" Shape: Gym Advanced</option>
                                                    <option value="27">Building the "X" Shape: Gym Beginner</option>
                                                    <option value="28">Building the "X" Shape: Gym Intermediate</option>
                                                    <option value="26">Building the "X" Shape: Home Advanced</option>
                                                    <option value="5">Building the "X" Shape: Home Beginner</option>
                                                    <option value="30">Building the "X" Shape: Home Intermediate</option>
                                                    <option value="41">Dumbbell Only Half Hour PowHer</option>
                                                    <option value="39">Half Hour PowHer</option>
                                                    <option value="6">PostPartum HealHer - Home or Gym</option>
                                                    <option value="34">PowHER 1.0 - Home - Advanced</option>
                                                    <option value="7">PowHer 1.0 - Gym - Beginner</option>
                                                    <option value="35">PowHer 1.0 - Gym - Intermediate</option>
                                                    <option value="8">PowHer 1.0 - Home - Beginner</option>
                                                    <option value="33">PowHer 1.0 - Home - Intermediate</option>
                                                    <option value="32">PowHer Push - Pull Program</option>
                                                    <option value="36">Powher 1.0 - Gym - Advanced</option>
                                                    <option value="11">Pump Your Bump - Home or Gym</option>
                                                    <option value="17">Strength 1.0 - GYM - Advanced</option>
                                                    <option value="16">Strength 1.0 - GYM - Intermediate</option>
                                                    <option value="2">Strength 1.0 - Gym - Beginner</option>
                                                    <option value="14">Strength 1.0 - Home - Advanced</option>
                                                    <option value="1">Strength 1.0 - Home - Beginner</option>
                                                    <option value="15">Strength 1.0 - Home - Intermediate</option>
                                                    <option value="31">Strength 2.0 Gym - Advanced</option>
                                                    <option value="12">Strength 2.0 Gym - Intermediate</option>
                                                    <option value="18">TEST - LAURA - Program</option>
                                                    <option value="37">Tabata 4 Week</option>
                                                    <option value="13">ZERO EQUIPMENT Anywhere Program</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                            <div className='btnlist'>
                                                <button className="cancel">Cancel</button>
                                                <button className="create">Update & Continue Editing</button>
                                                <button className="create">Update Weeks</button>
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



export default WeeksEdit;