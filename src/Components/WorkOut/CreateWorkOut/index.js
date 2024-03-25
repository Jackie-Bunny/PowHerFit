import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Loader from '../../Loader/loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateWorkOut = () => {
    const { id: wkId } = useParams();

    const [weeks, setWeeks] = useState([]);
    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    const [loading, setLoading] = useState(true); // State variable to track loading state

    // post week data
    // State variables initialization
    const [workoutTitle, setTitle] = useState('');
    const [workoutDescription, setworkoutDescription] = useState('');
    const [weekId, setWeekId] = useState('');
    const [withDeleted, setDeleted] = useState(false);
    console.log("Week id", wkId);
    // onChange handlers for input fields
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setworkoutDescription(e.target.value);
    const handleWeekdId = (e) => setWeekId(e.target.value);
    const handleDeleted = (e) => {
        setDeleted(!withDeleted)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "weekId": weekId ? wkId : wkId,
            "workoutTitle": workoutTitle,
            "workoutDescription": workoutDescription,
            "withDeleted": withDeleted == true ? 1 : 0
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://appsdemo.pro/Pawherfit/method-exercise/add-workout',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setTitle('');
                setworkoutDescription('');
                setWeekId('');
                setDeleted(null);
                window.location.href = "/Workout";
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // get weeks
    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-week';
                // Check if ID exists in the URL
                if (wkId) {
                    console.log(wkId);
                    url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-weekId';
                    url += `/${wkId}`;
                }
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setWeeks(data.data);
                    console.log('Week data here', data.data);
                } else {
                    console.error('Failed to fetch week data:', data.message);
                }
            } catch (error) {
                console.error('Error fetching weeks:', error);
            } finally {
                setLoading(false); // Set loading state to false regardless of success or error
            }
        };
        fetchData();
    }, [token]); // Run only once on component mount

    return (

        <>
            {loading ? (
                <Loader text="Loading..." /> // Show loader if loading state is true
            ) : (
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
                                                <h3>Create Week</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="createprogrameformbox">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Title *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="workoutTitle" onChange={handleTitleChange} value={workoutTitle} placeholder="Title" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Week *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <select
                                                            name='weekId' onChange={handleWeekdId} value={weekId}
                                                            className="w-full block form-control form-select form-select-bordered"
                                                        >
                                                            {Array.isArray(weeks) ? (
                                                                <>
                                                                    <option value="">— Select a Week —</option>
                                                                    {weeks.map(week => (
                                                                        <option key={week._id} value={week._id}>{week.weekTitle}</option>
                                                                    ))}
                                                                </>
                                                            ) : (
                                                                <option key={weeks._id} value={wkId}>{weeks.weekTitle}</option>
                                                            )}
                                                        </select>
                                                        <div className="labellist1">
                                                            <label>
                                                                <input type="checkbox" name="withDeleted" onChange={handleDeleted} />
                                                                With Deleted
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Description</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <textarea className="form-control" placeholder="Description" name="workoutDescription" onChange={handleDescription} value={workoutDescription}></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <div className='btnlist'>
                                                        <button type='button' className="cancel">Cancel</button>
                                                        <button type='submit' className="create">Create & Add Another</button>
                                                        <button type='submit' className="create">Create Workout</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>


    )


}




export default CreateWorkOut