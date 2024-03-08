import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../Loader/loader';

import axios from 'axios';
import { wind } from 'fontawesome';

const WorkOutDetails = () => {
    const workoutId = window.location.pathname.split('/').pop();
    console.log(workoutId);
    const [loading, setLoading] = useState(true); // State variable to track loading state

    const { id: proid } = useParams();
    const [workout, setWorkout] = useState([]);

    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    // get workout by id
    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-workoutId';
                // Check if ID exists in the URL
                if (proid) {
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
                    setWorkout(data.data);
                    console.log("Workout id data", data.data);
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
    }, [token, proid]); // Run only once on component mount

    // get exercises
    const [exercises, setExercise] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-exercise';
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
                    console.log("Exercises data", data.data);
                } else {
                    console.error('Failed to fetch Exercises:', data.data);
                }
            } catch (error) {
                console.error('Error fetching Exercises:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [token]);

    // attach exercise with workout 
    const [selectedExercise, setSelectedExercise] = useState('');
    const handleExerciseChange = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const selectedDataId = selectedOption.dataset.id;
        const selectedValue = selectedOption.value;
        setSelectedExercise(selectedDataId); // Setting data-id in state
        setExerciseId(selectedValue); // Setting value in state
    };
    const [exerciseId, setExerciseId] = useState('');
    const addWorkout = async (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "exerciseId": exerciseId,
            "workoutId": workout._id,
        });
        console.log("Selected data", data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://appsdemo.pro/Pawherfit/method-exercise/workout-builder',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };
        axios.request(config)
            .then((response) => {
                console.log("Workout Submitted successfuly", JSON.stringify(response.data));
                setExerciseId(data.data); // Assuming data.data contains the methods array
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // get exercise with workoutbuilder
    const [exerciseWorkoutData, setExWorkoutData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `https://appsdemo.pro/Pawherfit/method-exercise/allExercise-workoutId/${workoutId}`,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                };
                const builderResponse = await axios.request(config);
                console.log("Workout builder data", builderResponse.data);
                // return
                setExWorkoutData(builderResponse.data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [token]);


    // update workout sets reps
    const [exWorkouts, setExWorkout] = useState([]);

    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [exerciseTime, setExerciseTime] = useState('');
    const [restTime, setRestTime] = useState('');

    // onChange handlers for input fields
    const handleSetsChange = (e) => setSets(e.target.value);
    const handleRepsChange = (e) => setReps(e.target.value);
    const handleExTimeChange = (e) => setExerciseTime(e.target.value);
    const handleRestTimeChange = (e) => setRestTime(e.target.value);

    const updateWorkout = async (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "exerciseSets": sets,
            "exerciseReps": reps,
            "exerciseTime": exerciseTime,
            "exerciseRestTime": restTime,
        });
        console.log("Selected sets data", data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://appsdemo.pro/Pawherfit/method-exercise/update-workout-builder/${workoutId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };
        axios.request(config)
            .then((response) => {
                console.log("Workout updated successfuly", JSON.stringify(response.data));
                setExWorkout(data.data); // Assuming data.data contains the methods array
                // window.location.href = "/WorkOut";
            })
            .catch((error) => {
                console.log(error);
            });
    };


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
                                                <h3>{workout.workoutTitle} - {workout.weekTitle}</h3>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                <div className="updatedelete">
                                                    <ul>
                                                        <li>
                                                            <Link><i class="fa-regular fa-ellipsis"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/WorkOut/WorkoutEdit"><i class="fa-regular fa-pen-to-square"></i></Link>
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
                                                    <p>{workout._id}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Title</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>{workout.workoutTitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>week</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>{workout.weekTitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Description</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>{workout.workoutDescription}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="userlist pt-5">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <form onSubmit={addWorkout}>
                                                <h3>Workout Builder</h3>
                                                <div className="createprogrameformbox">
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                            <input type="text" className="form-control" name="exersise_method" placeholder="Select Exercise Method" id="Exersisemothod" value={selectedExercise} readOnly />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                            <select class="form-select" aria-label="Default select example" name="exerciseId" id="Exersiselist" onChange={handleExerciseChange}>
                                                                <option value="">-- Select Exercise --</option>
                                                                {exercises.map((exercise, index) => (
                                                                    <option key={index} data-id={exercise.title} value={exercise._id}>{exercise.title}</option>
                                                                ))}
                                                            </select>
                                                            <div className="addExersise pt-5">
                                                                <button type='submit'>Add Excersise</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            {exerciseWorkoutData && (
                                                <div className="table">
                                                    <form onSubmit={updateWorkout}>
                                                        <table className="table table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">ID</th>
                                                                    <th scope="col">Title</th>
                                                                    <th scope="col">Sets</th>
                                                                    <th scope="col">Reps</th>
                                                                    <th scope="col">Exercise Time</th>
                                                                    <th scope="col">Rest Time</th>
                                                                    <th scope="col"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="idno"></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <div className="inputlist">
                                                                            <input type="text" className="form-control" name="sets" placeholder="# of Sets" value={sets} onChange={handleSetsChange} />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="inputlist">
                                                                            <input type="text" className="form-control" name="reps" placeholder="# of Sets" value={reps} onChange={handleRepsChange} />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="inputlist">
                                                                            <input type="text" className="form-control" name="exercisetime" placeholder="Add Time" value={exerciseTime} onChange={handleExTimeChange} />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="inputlist">
                                                                            <input type="text" className="form-control" name="resttime" placeholder="Add Time" value={restTime} onChange={handleRestTimeChange} />
                                                                        </div>
                                                                    </td>
                                                                    <td><i className="fa-regular fa-trash"></i></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div className='btnlist'>
                                                            <button type='button' className="cancel">Cancel</button>
                                                            <button type='submit' className="create">Add to Workout</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Footer />
                </>
            )
            }
        </>


    )



}


export default WorkOutDetails;