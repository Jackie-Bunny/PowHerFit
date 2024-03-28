import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";

import { useSelector } from 'react-redux';
import Loader from '../../Loader/loader';

import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


const ExercisesDetails = () => {
    // 

    const [loading, setLoading] = useState(true); // State variable to track loading state

    const { id } = useParams();
    const [exercise, setExercise] = useState([]);
    const [exerciseSets, setExerciseSets] = useState([]);
    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `https://appsdemo.pro/Pawherfit/method-exercise/get-exerciseId/${id}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `https://appsdemo.pro/Pawherfit/method-exercise/get-workoutBuilder-exerciseId/${id}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) { // Corrected property name
                    console.log("Exercise workout data", data.data);
                    setExerciseSets(data.data); // Assuming data.data contains the methods array
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
                                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                <h3>{exercise.title} - {exercise.exerciseType}</h3>

                                            </div>
                                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                <div className="updatedelete">
                                                    <ul>
                                                        <li>
                                                            <Link><i className="fa-regular fa-ellipsis"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link to={`/Exercises/ExercisesEdit/${exercise._id}`}><i className="fa-regular fa-pen-to-square"></i></Link>
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
                                                    <p>{exercise._id}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Title</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>{exercise.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Description</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>{exercise.description}</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Video Url</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>{exercise.videoUrl}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Video Preview</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <video controls>
                                                        <source src={exercise.videoUrl} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Exercise Type</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>{exercise.exerciseType}</p>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Location</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>{exercise.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Superset / Circuit</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    {exercise.superset_circuit === 1 ? (
                                                        <p><i className="fa-regular fa-circle-check" style={{ color: 'green' }}></i></p>
                                                    ) : (
                                                        <p><i className="fa-regular fa-circle-xmark" style={{ color: 'red' }}></i></p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {exerciseSets && exerciseSets.exerciseTime && (
                                            <div className="detaillist">
                                                <div className="row">
                                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                        <h5>Exercise Time (s)</h5>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                        <p>{exerciseSets.exerciseTime}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {exerciseSets && exerciseSets.exerciseSets && (
                                            <div className="detaillist">
                                                <div className="row">
                                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                        <h5>Sets</h5>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                        <p>{exerciseSets.exerciseSets}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {exerciseSets && exerciseSets.exerciseReps && (

                                            <div className="detaillist">
                                                <div className="row">
                                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                        <h5>Reps</h5>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                        <p>{exerciseSets.exerciseReps}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {exerciseSets && exerciseSets.exerciseRestTime && (
                                            <div className="detaillist">
                                                <div className="row">
                                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                        <h5>Set Rest (s)</h5>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                        <p>{exerciseSets.exerciseRestTime}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        )}
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


export default ExercisesDetails;