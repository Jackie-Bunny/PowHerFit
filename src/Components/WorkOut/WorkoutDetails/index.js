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
import NotFound from '../../404';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import axios from 'axios';

const WorkOutDetails = () => {
    const workoutId = window.location.pathname.split('/').pop();
    // console.log(workoutId);
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
    // get methods
    const [methods, setMethods] = useState([]);
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
    // new workout flow  => // get methods
    // attach exercise with workout 
    const [methodExecisesData, setSelectedExercise] = useState('');
    const handleExerciseChange = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const selectedDataId = selectedOption.dataset.id;
        const selectedValue = selectedOption.value;
        setSelectedExercise(selectedDataId); // Setting data-id in state
        setExerciseId(selectedValue); // Setting value in state
    };
    const [exerciseId, setExerciseId] = useState('');
    // add method to workout
    const [selectedMethodData, setSelectedMethod] = useState('');
    const [methodWorkoutData, setWorkoutData] = useState('');

    const handleMethodChange = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const selectedDataId = selectedOption.dataset.id;
        const selectedValue = selectedOption.value;
        // setSelectedMethod(selectedValue); // Setting data-id in state
        setMethodId(selectedValue); // Setting value in state
    };
    const [methodId, setMethodId] = useState('');
    const addMethodToWorkout = async (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "methodID": methodId,
            "workoutId": workout._id,
        });
        console.log("Selected method data", data);
        // return
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://appsdemo.pro/Pawherfit/method-exercise/new-workout-builder',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };
        axios.request(config)
            .then((response) => {
                console.log("Method add to Workout successfuly", response.data);
                setSelectedMethod(response.data.data.methodTitle); // Assuming data.data contains the methods array
                setWorkoutData(response.data.data._id)
                // window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    // add exercise to method and workout
    const addExerciseToMethod = async (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "exerciseId": exerciseId,
        });
        console.log("Selected exercise id", exerciseId, "Builder id", methodWorkoutData);
        // return
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://appsdemo.pro/Pawherfit/method-exercise/new-update-workout-builder/${methodWorkoutData}/${exerciseId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };
        axios.request(config)
            .then((response) => {
                console.log("Exercise added to method successfuly", response.data);
                setExerciseId(data.data); // Assuming data.data contains the methods array
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // get exercises with methods of workouts
    const [exerciseWorkoutData, setExWorkoutData] = useState(null);
    const [sets, setSets] = useState([]);
    const [reps, setReps] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([]);
    const [restTime, setRestTime] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    method: 'get',
                    url: `https://appsdemo.pro/Pawherfit/method-exercise/allExercise-workoutId/${workout._id}`,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                };
                const response = await axios.request(config);
                console.log("Exercise method workout data",response.data);
                setExWorkoutData(response.data);
                console.log('Workout exercise data', response.data);
                if (response.data) {
                    const exerciseSets = []
                    response.data.data.map((item, index) => {
                        exerciseSets.push({ index: index, sets: item.exerciseSets })
                    })
                    setSets(exerciseSets)
                    const exerciseRestTime = []
                    response.data.data.map((item, index) => {
                        exerciseRestTime.push({ index: index, exerciseRestTime: item.exerciseRestTime })
                    })
                    setRestTime(exerciseRestTime)
                    const exerciseReps = []
                    response.data.data.map((item, index) => {
                        exerciseReps.push({ index: index, reps: item.exerciseReps })
                    })
                    setReps(exerciseReps)
                    const exerciseTime = []
                    response.data.data.map((item, index) => {
                        exerciseTime.push({ index: index, exerciseTime: item.exerciseTime })
                    })
                    setExerciseTime(exerciseTime)
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [workout._id, token]);

    // Update handlers
    const handleSetsChange = (e, index) => {
        const newData = [...sets];
        const updatedObject = { ...newData[index], sets: e.target.value };
        newData[index] = updatedObject;
        setSets(newData);
    };
    const handleRepsChange = (e, index) => {
        const newData = [...reps];
        const updatedObject = { ...newData[index], reps: e.target.value };
        newData[index] = updatedObject;
        setReps(newData);
    };
    const handleExTimeChange = (e, index) => {
        const newData = [...exerciseTime];
        const updatedObject = { ...newData[index], exerciseTime: e.target.value };
        newData[index] = updatedObject;
        setExerciseTime(newData);
    };
    const handleRestTimeChange = (e, index) => {
        const newData = [...restTime];
        const updatedObject = { ...newData[index], exerciseRestTime: e.target.value };
        newData[index] = updatedObject;
        setRestTime(newData);
    };
    // Update workout function
    const updateWorkout = async (index, e,) => {
        const exercise_ID = exerciseWorkoutData.data[index]._id
        try {
            let data = JSON.stringify({
                "exerciseSets": sets[index]?.sets,
                "exerciseReps": reps[index]?.reps,
                "exerciseTime": exerciseTime[index]?.exerciseTime,
                "exerciseRestTime": restTime[index]?.exerciseRestTime
            });

            console.log("Exercise updating data", data, "ex id", exercise_ID)
            // return
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `https://appsdemo.pro/Pawherfit/method-exercise/update-workout-builder/${exercise_ID}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                data: data
            };
            axios.request(config)
                .then((response) => {
                    console.log("Workout builder updated data", response.data);
                    // return

                    toast.success("Workout updated successfully", {
                        position: "top-right"
                    });
                    // Update the state variables after successful update
                    const updatedExerciseData = response.data.data;
                    const newSets = [...sets];
                    const newReps = [...reps];
                    const newExerciseTime = [...exerciseTime];
                    const newRestTime = [...restTime];

                    newSets[index] = { sets: updatedExerciseData.exerciseSets };
                    newReps[index] = { reps: updatedExerciseData.exerciseReps };
                    newExerciseTime[index] = { exerciseTime: updatedExerciseData.exerciseTime };
                    newRestTime[index] = { exerciseRestTime: updatedExerciseData.exerciseRestTime };

                    setSets(newSets);
                    setReps(newReps);
                    setExerciseTime(newExerciseTime);
                    setRestTime(newRestTime);

                    setTimeout(() => {
                        window.location.reload()
                    }, 3000);
                })
                .catch((error) => {
                    console.log(error);
                    toast.error("Failed to update workout", {
                        position: "top-right"
                    });
                });

        } catch (error) {
            console.log(error);
            toast.error("Failed to update workout", {
                position: "top-right"
            });
        }
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
                            {workout?._id === proid ? (
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
                                                                <Link to={`/WorkOut/WorkoutEdit/${workout._id}`}><i class="fa-regular fa-pen-to-square"></i></Link>
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
                                                {/* <form>
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
                                                </form> */}
                                                {/* new workout flow  */}
                                                <div className="userlist pt-5">
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                        <h3>Workout Builder</h3>
                                                        {!selectedMethodData && (
                                                            <div className="createprogrameformbox" id="methodremove">
                                                                <form onSubmit={addMethodToWorkout}>
                                                                    <div className="row">
                                                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                                            <input type="text" className="form-control" placeholder="Select Exercise Method" readOnly />
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                                            <select class="form-select" aria-label="Default select example" name='methodId' className="form-select" onChange={handleMethodChange}>
                                                                                <option value="">-- Choose Method --</option>
                                                                                {methods.map(method => (
                                                                                    <option key={method._id} value={method._id}>{method.methodName}</option>
                                                                                ))}
                                                                            </select>
                                                                            <div className="addExersise pt-5">
                                                                                <button type='submit'>Add Exercise</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        )}
                                                        {selectedMethodData && (
                                                            <div className="createprogrameformbox mt-5" id='excersisemethod'>
                                                                <form onSubmit={addExerciseToMethod}>
                                                                    <div className="row">
                                                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                                            <input type="text" className="form-control" name="methodId" placeholder="Select Exercise Method" id="Exersisemothod" value={selectedMethodData} readOnly />
                                                                        </div>
                                                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                                            <select class="form-select" aria-label="Default select example" name="exerciseId" id="Exersiselist" onChange={handleExerciseChange}>
                                                                                <option value="">-- Select Exercise --</option>
                                                                                {exercises.map((exercise, index) => (
                                                                                    <option key={index} data-id={exercise.title} value={exercise._id}>{exercise.title}</option>
                                                                                ))}
                                                                            </select>
                                                                            <div className="addExersise pt-5">
                                                                                <button type='submit'>Add to Method</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        )}
                                                        <div className="createprogrameformbox mt-5" style={{ 'display': 'none' }}>
                                                            <div className='row mb-3'>
                                                                <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                                                                    <div className='seriestitle'>
                                                                        <input type='text' placeholder='Series Title' className='form-control' name='Seriestitile' id='seriestitle' readOnly />
                                                                    </div>
                                                                </div>
                                                                <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                                                                    <div className='seriestitle'>
                                                                        <input type='text' placeholder='Enter Series Title...' className='form-control' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                                    <input type="text" className="form-control" name="exersise_method" placeholder="Select Exercise Method" id="Exersisemothod" readOnly />
                                                                </div>
                                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                                    <select class="form-select" aria-label="Default select example" name="exerciseId" id="Exersiselist" onChange={handleExerciseChange}>
                                                                        <option value="">-- Select Exercise --</option>
                                                                        {exercises.map((exercise, index) => (
                                                                            <option key={index} data-id={exercise.title} value={exercise._id}>{exercise.title}</option>
                                                                        ))}
                                                                    </select>
                                                                    <div className="addExersise pt-5">
                                                                        <button>Add To Series</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table" id="showexrcise" style={{ 'display': 'none' }}>
                                                            <table class="table table-hover">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">ID</th>
                                                                        <th scope="col">Title</th>
                                                                        <th scope="col">Sets</th>
                                                                        <th scope="col">Reps</th>
                                                                        <th scope="col">Excersise Time</th>
                                                                        <th scope="col">Rest Time</th>
                                                                        <th scope="col"></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="idno">3390</td>
                                                                        <td>Butt Kicks</td>
                                                                        <td>
                                                                            <div className="inputlist">
                                                                                <input type="text" className="form-control" name="sets" placeholder="# of Sets" /></div></td>
                                                                        <td><div className="inputlist">
                                                                            <input type="text" className="form-control" name="reps" placeholder="# of Sets" /></div></td>
                                                                        <td><div className="inputlist">
                                                                            <input type="text" className="form-control" name="exersisetime" placeholder="Add Time" /></div></td>
                                                                        <td><div className="inputlist">
                                                                            <input type="text" className="form-control" name="resttime" placeholder="Add Time" /></div></td>
                                                                        <td><i class="fa-regular fa-trash"></i></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className="idno">3390</td>
                                                                        <td>Butt Kicks</td>
                                                                        <td>
                                                                            <div className="inputlist">
                                                                                <input type="text" className="form-control" name="sets" placeholder="# of Sets" /></div></td>
                                                                        <td><div className="inputlist">
                                                                            <input type="text" className="form-control" name="reps" placeholder="# of Sets" /></div></td>
                                                                        <td><div className="inputlist">
                                                                            <input type="text" className="form-control" name="exersisetime" placeholder="Add Time" /></div></td>
                                                                        <td><div className="inputlist">
                                                                            <input type="text" className="form-control" name="resttime" placeholder="Add Time" /></div></td>
                                                                        <td><i class="fa-regular fa-trash"></i></td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td className="idno">3390</td>
                                                                        <td>Butt Kicks</td>
                                                                        <td>
                                                                            <div className="inputlist">
                                                                                <input type="text" className="form-control" name="sets" placeholder="# of Sets" /></div></td>
                                                                        <td><div className="inputlist">
                                                                            <input type="text" className="form-control" name="reps" placeholder="# of Sets" /></div></td>
                                                                        <td><div className="inputlist">
                                                                            <input type="text" className="form-control" name="exersisetime" placeholder="Add Time" /></div></td>
                                                                        <td><div className="inputlist">
                                                                            <input type="text" className="form-control" name="resttime" placeholder="Add Time" /></div></td>
                                                                        <td><i class="fa-regular fa-trash"></i></td>

                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                            <button> Add to WorkOut</button>
                                                            <Link to='/WorkOut/WorkContent/'>Total Workout Content</Link>
                                                        </div>
                                                        <div className="userlist AMRAP pt-5" style={{ 'display': 'none' }}>
                                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                <h3>Exercise In AMRAP</h3>
                                                                <div className="table" id="AMRAP">
                                                                    <table class="table table-hover">
                                                                        <thead>
                                                                            <tr>

                                                                                <th scope="col">ID</th>
                                                                                <th scope="col">Title</th>
                                                                                <th scope="col">Sets</th>
                                                                                <th scope="col">Reps</th>
                                                                                <th scope="col"></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>

                                                                                <td className="idno">453</td>
                                                                                <td>Butt Kicks</td>
                                                                                <td>
                                                                                    <div className="inputlist">
                                                                                        <input type="text" className="form-control" name="sets" placeholder="1" /></div></td>
                                                                                <td><div className="inputlist">
                                                                                    <input type="text" className="form-control" name="reps" placeholder="10" /></div></td>
                                                                                <td><i class="fa-regular fa-trash"></i></td>

                                                                            </tr>
                                                                            <tr>

                                                                                <td className="idno">1235</td>
                                                                                <td>Jumping Jacks</td>
                                                                                <td>
                                                                                    <div className="inputlist">
                                                                                        <input type="text" className="form-control" name="sets" placeholder="1" /></div></td>
                                                                                <td><div className="inputlist">
                                                                                    <input type="text" className="form-control" name="reps" placeholder="10" /></div></td>
                                                                                <td><i class="fa-regular fa-trash"></i></td>

                                                                            </tr>
                                                                            <tr>

                                                                                <td className="idno">4</td>
                                                                                <td>Glute Bridge Holds</td>
                                                                                <td>
                                                                                    <div className="inputlist">
                                                                                        <input type="text" className="form-control" name="sets" placeholder="1" /></div></td>
                                                                                <td><div className="inputlist">
                                                                                    <input type="text" className="form-control" name="reps" placeholder="Enter # of Reps" /></div></td>
                                                                                <td><i class="fa-regular fa-trash"></i></td>

                                                                            </tr>


                                                                        </tbody>
                                                                    </table>

                                                                </div>
                                                                <h3>Round Details</h3>

                                                                <div className="table" id="AMRAP">
                                                                    <table class="table table-hover">
                                                                        <thead>
                                                                            <tr>

                                                                                <th scope="col">Rounds</th>
                                                                                <th scope="col">Exercise Time</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>


                                                                                <td>
                                                                                    <div className="inputlist">
                                                                                        <input type="text" className="form-control" name="sets" placeholder="Enter # of Rounds" /></div></td>
                                                                                <td><div className="inputlist">
                                                                                    <input type="text" className="form-control" name="reps" placeholder="Add Time" /></div></td>


                                                                            </tr>



                                                                        </tbody>
                                                                    </table>
                                                                    <button> Add New Series</button>
                                                                    <Link>Add To WorkOut</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="userlist AMRAP pt-5" style={{ 'display': 'none' }}>
                                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                <h3>Exercise In SuperSets/Circut</h3>

                                                                <div className="table" id="AMRAP">
                                                                    <table class="table table-hover">
                                                                        <thead>
                                                                            <tr>

                                                                                <th scope="col">ID</th>
                                                                                <th scope="col">Title</th>
                                                                                <th scope="col">Sets</th>
                                                                                <th scope="col">Reps</th>
                                                                                <th scope="col"></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>

                                                                                <td className="idno">453</td>
                                                                                <td>Butt Kicks</td>
                                                                                <td>
                                                                                    <div className="inputlist">
                                                                                        <input type="text" className="form-control" name="sets" placeholder="1" /></div></td>
                                                                                <td><div className="inputlist">
                                                                                    <input type="text" className="form-control" name="reps" placeholder="10" /></div></td>
                                                                                <td><i class="fa-regular fa-trash"></i></td>

                                                                            </tr>
                                                                            <tr>

                                                                                <td className="idno">1235</td>
                                                                                <td>Jumping Jacks</td>
                                                                                <td>
                                                                                    <div className="inputlist">
                                                                                        <input type="text" className="form-control" name="sets" placeholder="1" /></div></td>
                                                                                <td><div className="inputlist">
                                                                                    <input type="text" className="form-control" name="reps" placeholder="10" /></div></td>
                                                                                <td><i class="fa-regular fa-trash"></i></td>

                                                                            </tr>
                                                                            <tr>

                                                                                <td className="idno">4</td>
                                                                                <td>Glute Bridge Holds</td>
                                                                                <td>
                                                                                    <div className="inputlist">
                                                                                        <input type="text" className="form-control" name="sets" placeholder="1" /></div></td>
                                                                                <td><div className="inputlist">
                                                                                    <input type="text" className="form-control" name="reps" placeholder="Enter # of Reps" /></div></td>
                                                                                <td><i class="fa-regular fa-trash"></i></td>

                                                                            </tr>


                                                                        </tbody>
                                                                    </table>

                                                                </div>
                                                                <h3>Round Details</h3>

                                                                <div className="table" id="AMRAP">
                                                                    <table class="table table-hover">
                                                                        <thead>
                                                                            <tr>

                                                                                <th scope="col">Sets</th>
                                                                                <th scope="col">Exercise Time</th>
                                                                                <th scope="col">Rest Time</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>


                                                                                <td>
                                                                                    <div className="inputlist">
                                                                                        <input type="text" className="form-control" name="sets" placeholder="Enter # of Sets" /></div></td>
                                                                                <td><div className="inputlist">
                                                                                    <input type="text" className="form-control" name="addtime" placeholder="Add Time" /></div></td>
                                                                                <td><div className="inputlist">
                                                                                    <input type="text" className="form-control" name="resttime" placeholder="00:40" /></div></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <button> Add New Series</button>
                                                                    <Link>Add To WorkOut</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {exerciseWorkoutData?.data && (
                                                    <div className="table">
                                                        <form action='javascript::void(0);'>
                                                            <table className="table table-hover">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">ID</th>
                                                                        <th scope="col">Title</th>
                                                                        <th scope="col">Sets</th>
                                                                        <th scope="col">Reps</th>
                                                                        <th scope="col">Exercise Time</th>
                                                                        <th scope="col">Rest Time</th>
                                                                        <th scope="col">Update</th>
                                                                        <th scope="col">Delete</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {exerciseWorkoutData.data.map((exerciseWorkoutAll, index) => {
                                                                        console.log("sets", sets)
                                                                        console.log("reps", reps)
                                                                        console.log("resttime", restTime)
                                                                        console.log("exersisetime", exerciseTime)
                                                                        return (
                                                                            <tr key={index}>
                                                                                <td className="idno">{index + 1}</td>
                                                                                <td>{exerciseWorkoutAll.exerciseTitle}</td>
                                                                                <td>
                                                                                    <div className="inputlist">
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            name="sets"
                                                                                            placeholder="# of Sets"
                                                                                            value={sets[index]?.sets}
                                                                                            onChange={(e) => handleSetsChange(e, index)} />
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="inputlist">
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            name="reps"
                                                                                            placeholder="# of Sets"
                                                                                            value={reps[index]?.reps}
                                                                                            onChange={(e) => handleRepsChange(e, index)} />
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="inputlist">
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            name="exercisetime"
                                                                                            placeholder="Add Time"
                                                                                            value={exerciseTime[index]?.exerciseTime}
                                                                                            onChange={(e) => handleExTimeChange(e, index)} />
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="inputlist">
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            name="resttime"
                                                                                            placeholder="Add Time"
                                                                                            value={restTime[index]?.exerciseRestTime}
                                                                                            onChange={(e) => handleRestTimeChange(e, index)} />
                                                                                    </div>
                                                                                </td>
                                                                                <td><i onClick={() => updateWorkout(index)} className="fa-regular fa-pencil" style={{ cursor: 'pointer', color: 'blue' }}></i></td>
                                                                                <td><i className="fa-regular fa-trash mx-3" style={{ cursor: 'pointer', color: 'red' }}></i></td>
                                                                            </tr>
                                                                        )
                                                                    })}

                                                                </tbody>
                                                            </table>
                                                            <div className='btnlist'>
                                                                <Link to='/WorkOut'><button type='button' className="cancel">Cancel</button></Link>
                                                            </div>
                                                        </form>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <NotFound />
                            )}
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