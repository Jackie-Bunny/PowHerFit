import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";

import { Link, Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const WeeksEdit = () => {

    const { id: proId } = useParams();
    const [weekData, setWeekData] = useState([]);
    const [programs, setPrograms] = useState([]);

    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    const [programId, setProgramID] = useState('');

    const handleProgramID = (e) => setProgramID(e.target.value);


    const [weekImage, setImage] = useState(null);
    const handleProgramImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        // return
    };
    // get programs
    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-program';
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setPrograms(data.data);
                    console.log("Programs data", data.data);
                } else {
                    console.error('Failed to fetch programs:', data.message);
                }
            } catch (error) {
                console.error('Error fetching programs:', error);
            }
        };
        fetchData();
    }, [token]); // Run whenever token or proid changes
    // get week by id
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://appsdemo.pro/Pawherfit/method-exercise/get-weekId/${proId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setWeekData(data.data);
                    console.log("Week data by id", data.data);
                } else {
                    console.error('Failed to fetch programs:', data.message);
                }
            } catch (error) {
                console.error('Error fetching programs:', error);
            }
        };

        fetchData();
    }, [proId, token]);

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
                                        <h3>Update Week: {weekData.programTitle} - {weekData.weekTitle}</h3>

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
                                                <input type="text" className="form-control" name="weektitle" value={weekData.weekTitle} placeholder="Title" />
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
                                                    <input type="file" name="weekImage" onChange={handleProgramImageChange} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row prmemium align-items-center">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Live ?</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="checkbox" name="weekLive" value={weekData.weekLive} />
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
                                                <select data-testid="programs-select" dusk="program" name='programId' onChange={handleProgramID} value={weekData.programId} className="w-full block form-control form-select form-select-bordered">
                                                    {Array.isArray(programs) ? (
                                                        <>
                                                            <option value="">— Select a Program —</option>
                                                            {programs.map(program => (
                                                                <option key={program._id} value={program._id}>{program.title}</option>
                                                            ))}
                                                        </>
                                                    ) : (
                                                        <option key={programs._id} value={programs._id}>{programs.title}</option>
                                                    )}
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