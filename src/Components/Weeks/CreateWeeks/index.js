import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../Loader/loader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateWeeks = () => {
    const { id: proid } = useParams();
    const [programs, setPrograms] = useState([]);
    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    const [loading, setLoading] = useState(true); // State variable to track loading state


    // post week data
    // State variables initialization
    const [weekTitle, setTitle] = useState('');
    const [weekLive, setweekLive] = useState('');
    const [programId, setProgramID] = useState('');
    const [weekImage, setImage] = useState(null);

    // onChange handlers for input fields
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleWeekLive = (e) => setweekLive(e.target.value);
    const handleProgramID = (e) => setProgramID(e.target.value);
    const handleProgramImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        // return
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (weekImage) {
            try {
                let data = new FormData();
                data.append('programId', programId ? proid : proid);
                data.append('weekTitle', weekTitle);
                data.append('weekLive', weekLive);
                data.append('weekImage', weekImage);
                console.log('Form data here', data);
                // return
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'https://appsdemo.pro/Pawherfit/method-exercise/add-week',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    data: data
                };
                axios.request(config)
                    .then((response) => {
                        console.log('Week Form submitted successfully:', JSON.stringify(response.data));
                        // Reset form after successful submission if needed
                        setTitle('');
                        setweekLive('');
                        setProgramID('');
                        setImage(null);
                        toast.success("Login successful!");
                        // Delay redirecting to the user page by 3 seconds
                        setTimeout(() => {
                            window.location.href = "/Users"; // Redirect to user page after 3 seconds
                        }, 3000); // 3000 milliseconds = 3 seconds
                        window.location.href = "/Weeks";
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setLoading(false); // Set loading state to false regardless of success or error
            }
        } else {
            console.error('No image selected');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-program';
                // Check if ID exists in the URL
                if (proid) {
                    console.log(proid);
                    url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-programId';
                    url += `/${proid}`;
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
                    setPrograms(data.data);
                    console.log("Programs data", data.data);
                } else {
                    console.error('Failed to fetch programs:', data.message);
                }
            } catch (error) {
                console.error('Error fetching programs:', error);
            } finally {
                setLoading(false); // Set loading state to false regardless of success or error
            }
        };
        fetchData();
    }, [token, proid]); // Run whenever token or proid changes

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
                                                        <input type="text" className="form-control" name="weekTitle" onChange={handleTitleChange} value={weekTitle} placeholder="Title" />
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
                                                        <input type="checkbox" name="weekLive" onChange={handleWeekLive} value={weekLive} />

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
                                                        <select
                                                            name='programId'
                                                            onInput={handleProgramID}
                                                            value={programId}
                                                            className="w-full block form-control form-select form-select-bordered"
                                                        >
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
                                                        <button type='submit' className="create">Create & Add Another</button>
                                                        <button type='submit' className="create">Create Weeks</button>
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



export default CreateWeeks;