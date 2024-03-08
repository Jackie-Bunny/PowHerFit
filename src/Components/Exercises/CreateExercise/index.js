import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link, Outlet } from "react-router-dom";


const CreateExercise = () => {

    const [circuit, setCircuit] = useState(0); // Initialize circuit state with 0
    const handleCheckboxChange = () => {
        const newValue = circuit ? 0 : 1; // Toggle between 0 and 1
        setCircuit(newValue);
    };

    const [exercise, setExercise] = useState([]);
    const [methods, setMethods] = useState([]);
    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    // post week data
    // State variables initialization
    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');
    const [videoUrl, setvideoUrl] = useState('');
    const [exerciseType, setexerciseType] = useState('');
    const [location, setlocation] = useState('');

    const handleChange = (setStateFunction) => (e) => setStateFunction(e.target.value);

    // Usage:
    const handleTitleChange = handleChange(setTitle);
    const handleDescriptionChange = handleChange(setdescription);
    const handleVideoUrlChange = handleChange(setvideoUrl);
    const handleLocationChange = handleChange(setlocation);
    const handleExerciseType = handleChange(setexerciseType);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "title": title,
            "description": description,
            "videoUrl": videoUrl,
            "exerciseType": exerciseType,
            "location": location,
            "superset_circuit": circuit,
        });
        console.log(data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://appsdemo.pro/Pawherfit/method-exercise/add-exercise',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };
        axios.request(config)
            .then((response) => {
                console.log("Excercise added data ", JSON.stringify(response.data));
                // window.location.href = '/Exercises';
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-method';
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                console.log("Response from server:", data); // Log the entire response
                if (data.succes) { // Corrected property name
                    setMethods(data.message); // Assuming data.message contains the methods array
                    console.log("Methods data", data.message);
                } else {
                    console.error('Failed to fetch Methods:', data.message);
                }
            } catch (error) {
                console.error('Error fetching Methods:', error);
            }
        };
        fetchData();
    }, [token]);


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
                                        <h3>Create Exercises</h3>
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
                                                <input type="text" className="form-control" name="title" onChange={handleTitleChange} value={title} placeholder="Title" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row prmemium align-items-center">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Description *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <textarea placeholder="Description" name="description" onChange={handleDescriptionChange} value={description} className="form-control"></textarea>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Video Url</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="text" className="form-control" name="videoUrl" onChange={handleVideoUrlChange} value={videoUrl} placeholder="Video Url" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Exercise Method *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select class="form-select" aria-label="Default select example" name='exerciseType' className="form-select" onChange={handleExerciseType} value={exerciseType}>
                                                    {Array.isArray(methods) ? (
                                                        <>
                                                            <option value="">-- Choose Method --</option>
                                                            {methods.map(method => (
                                                                <option key={method._id} value={method.methodName}>{method.methodName}</option>
                                                            ))}
                                                        </>
                                                    ) : (
                                                        <option key={methods._id} value={methods.methodName}>{methods.methodName}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Location </label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select class="form-select" aria-label="Default select example" name='location' onChange={handleLocationChange} value={location}>
                                                    <option value="">Choose an option</option>
                                                    <option value="Home">Home</option>
                                                    <option value="gym">Gym</option>
                                                    <option value="emom">Home & Gym</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Superset / Circuit</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="checkbox" name="circuit" onChange={handleCheckboxChange} checked={circuit} />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                            <div className='btnlist'>
                                                <Link to="/Exercises"><button className="cancel">Cancel</button></Link>
                                                <button type='submit' className="create">Create & Add Another</button>
                                                <button type='submit' className="create">Create Exercise</button>
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

    )


}



export default CreateExercise;