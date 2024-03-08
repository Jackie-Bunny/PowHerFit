import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Loader from '../../Loader/loader';
import { Link, Outlet } from "react-router-dom";
import { map } from 'fontawesome';
import { useParams } from 'react-router-dom';


const ExercisesEdit = () => {
    const [loading, setLoading] = useState(true); // State variable to track loading state

    const { id } = useParams();
    const [methods, setMethods] = useState([]);
    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    const [exercise, setExercise] = useState({
        title: '',
        description: '',
        videoUrl: '',
        exerciseType: '',
        location: '',
        superset_circuit: 0, // Default value for the checkbox
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExercise(prevExercise => ({
            ...prevExercise,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setExercise(prevExercise => ({
            ...prevExercise,
            [name]: checked ? 1 : 0,
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `http://appsdemo.pro/Pawherfit/method-exercise/get-exerciseId/${id}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                console.log("Response from server:", data); // Log the entire response
                if (data.success) { // Corrected property name
                    setExercise(data.data); // Assuming data.data contains the methods array
                    console.log("Exercise data", data.data);
                } else {
                    console.error('Failed to fetch Exercise:', data.data);
                }
            } catch (error) {
                console.error('Error fetching Exercises:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id, token]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'http://appsdemo.pro/Pawherfit/method-exercise/get-method';
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
                                                <h3>Create Exercises</h3>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="createprogrameformbox">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-3">
                                                    <label>Title *</label>
                                                </div>
                                                <div className="col-8">
                                                    <input type="text" className='form-control' name="title" value={exercise.title} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-3">
                                                    <label>Description *</label>
                                                </div>
                                                <div className="col-8">
                                                    <textarea name="description" className='form-control' value={exercise.description} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-3">
                                                    <label>Video URL</label>
                                                </div>
                                                <div className="col-8">
                                                    <input type="text" className='form-control' name="videoUrl" value={exercise.videoUrl} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-3">
                                                    <label>Exercise Type *</label>
                                                </div>
                                                <div className="col-8">
                                                    <select name="exerciseType" className='form-control' value={exercise.exerciseType} onChange={handleChange}>
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
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-3">
                                                    <label>Location</label>
                                                </div>
                                                <div className="col-8">
                                                    <select name="location" className='form-control' value={exercise.location} onChange={handleChange}>
                                                        <option value="">Choose an option</option>
                                                        <option value="Home">Home</option>
                                                        <option value="Gym">Gym</option>
                                                        <option value="Both">Both</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-3">
                                                    <label>Superset / Circuit</label>
                                                </div>
                                                <div className="col-8">
                                                    <input type="checkbox" className='form-check' name="superset_circuit" checked={exercise.superset_circuit === 1} onChange={handleCheckboxChange} />
                                                </div>
                                            </div>

                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                                    <div className='btnlist'>
                                                        <button className="cancel">Cancel</button>
                                                        <button className="create">Update & Continue Editing</button>
                                                        <button className="create">Update Exercise</button>
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
            )}
        </>
    )

}


export default ExercisesEdit;