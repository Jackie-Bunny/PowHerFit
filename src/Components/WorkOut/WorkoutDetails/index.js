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

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MobileView from '../../../Assets/Images/img.jpg'


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

    // add method to workout
    const [selectedMethodData, setSelectedMethod] = useState('');
    const [methodWorkoutData, setWorkoutData] = useState('');

    const handleMethodChange = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const selectedValue = selectedOption.value;
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
                setSelectedMethod(response.data.data); // Assuming data.data contains the methods array
                setWorkoutData(response.data.data)
                // window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    // attach exercise with workout 
    const [methodExecisesData, setExerciseData] = useState('');
    const handleExerciseChange = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const selectedValue = selectedOption.value;
        setExerciseId(selectedValue); // Setting value in state
    };
    const [exerciseId, setExerciseId] = useState('');
    // add exercise to method and workout
    const addExerciseToMethod = async (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "exerciseId": exerciseId,
        });
        console.log("Selected exercise id", exerciseId, "Builder id", methodWorkoutData._id);
        // return
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://appsdemo.pro/Pawherfit/method-exercise/new-update-workout-builder/${methodWorkoutData._id}/${exerciseId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };
        axios.request(config)
            .then((response) => {
                console.log("Exercise added to method successfuly", response.data);
                setExerciseData(response.data); // Assuming data.data contains the methods array
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };


    // get exercises with methods of workout
    const [exerciseWorkoutData, setExWorkoutData] = useState([]);
    const [sets, setSets] = useState([]);
    const [reps, setReps] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([]);
    const [restTime, setRestTime] = useState([]);
    useEffect(() => {
        console.log('Full Workout id', workoutId);
        // return
        const fetchData = async () => {
            try {
                const config = {
                    method: 'get',
                    url: `https://appsdemo.pro/Pawherfit/method-exercise/allExercise-workoutId/${workoutId}`,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                };
                const response = await axios.request(config);
                console.log("Exercise and method workout builder data", response.data);
                setExWorkoutData(response.data);
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
    }, [workoutId, token]);

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

            console.log("Exercise updating data", data, "Exercise builder id", exercise_ID)
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
                    // return
                    // Update the state variables after successful update
                    const updatedExerciseData = response.data.data;
                    console.log("Workout builder updated data", updatedExerciseData);
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

                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error);
                });

        } catch (error) {
            console.log(error);
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
                                            {/* new workout flow  */}
                                            <div className="userlist pt-5">
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <h3>Workout Builder</h3>
                                                    {!selectedMethodData.methodTitle && (
                                                        <div className="createprogrameformbox" id="methodremove">
                                                            <form onSubmit={addMethodToWorkout}>
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                                        <input type="text" className="form-control" placeholder="Select Exercise Method" readOnly />
                                                                    </div>
                                                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                                        <select class="form-select" aria-label="Default select example" name='methodId' className="form-select" onChange={handleMethodChange}>
                                                                            <option value="">-- Choose Method --</option>
                                                                            {/* {methods.map(method => (
                                                                                <option key={method._id} value={method._id}>{method.methodName}</option>
                                                                            ))} */}
                                                                            {methods.map(method => {
                                                                                if (method.methodName !== 'EMOM' && method.methodName !== 'AMRAP (As Many Rounds As Possible)' && method.methodName !== 'Supersets/Circuits') {
                                                                                    return (
                                                                                        <option key={method._id} value={method._id}>{method.methodName}</option>
                                                                                    );
                                                                                } else {
                                                                                    return null; // Skip this option
                                                                                }
                                                                            })}
                                                                        </select>
                                                                        <div className="addExersise pt-5">
                                                                            <button type='submit'>Add</button>
                                                                            <Link to='/WorkOut/WorkContent/'><button type='submit' className='mx-2'>Add Series</button></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    )}
                                                    {selectedMethodData.methodTitle && (
                                                        <div className="createprogrameformbox mt-5" id='excersisemethod'>
                                                            <form onSubmit={addExerciseToMethod}>
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                                        <input type="text" className="form-control" name="methodId" placeholder="Select Exercise Method" id="Exersisemothod" value={selectedMethodData.methodTitle} readOnly />
                                                                    </div>
                                                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                                        <select class="form-select" aria-label="Default select example" name="exerciseId" id="Exersiselist" onChange={handleExerciseChange}>
                                                                            <option value="">-- Select Exercise --</option>
                                                                            {exercises.map((exercise, index) => (
                                                                                <option key={index} data-id={exercise.title} value={exercise._id}>{exercise.title}</option>
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
                                                </div>
                                            </div>
                                            {exerciseWorkoutData?.data && (
                                                <div className="table">
                                                    <form action='javascript::void(0);'>
                                                        <table className="table table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">ID</th>
                                                                    <th scope="col">Exercise</th>
                                                                    <th scope="col">Sets</th>
                                                                    <th scope="col">Reps</th>
                                                                    <th scope="col">Intervals</th>
                                                                    <th scope="col">Exercise Time</th>
                                                                    <th scope="col">Rest Time</th>
                                                                    <th scope="col" colSpan={3}>Method</th>
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
                                                                                        name="intervals"
                                                                                        value={exerciseWorkoutAll.exerciseIntervals}
                                                                                        placeholder="# of intervals" />
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
                                                                            <td colSpan={3}><span className='smallbox' style={{ 'color': '#EA4AA6' }}>{exerciseWorkoutAll.methodTitle}</span></td>
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
                                            <div className='mobileappsec'>
                                                <div className='row'>
                                                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                                                        <div className='mobileapptext'>
                                                            <h3>Mobile App Preview</h3>
                                                        </div>
                                                        <Swiper
                                                            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]} // Add EffectCoverflow to modules
                                                            spaceBetween={20}
                                                            slidesPerView={3.5}
                                                            navigation={true}
                                                            effect="coverflow" // Set the effect to coverflow
                                                            coverflowEffect={{
                                                                rotate: 30, // Set rotation angle (in degrees)
                                                                stretch: 0, // Stretch space between slides (in pixels)
                                                                depth: 50, // Depth offset (in pixels)
                                                                modifier: 1, // Effect multiplier
                                                                slideShadows: true, // Enable slide shadows
                                                            }}
                                                            onSwiper={(swiper) => console.log(swiper)}
                                                            onSlideChange={() => console.log('slide change')}
                                                        >
                                                            <SwiperSlide>
                                                                <div className='mobilebox'>
                                                                    <img src={MobileView} className='img-fluid' />
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className='mobilebox'>
                                                                    <img src={MobileView} className='img-fluid' />
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className='mobilebox'>
                                                                    <img src={MobileView} className='img-fluid' />
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className='mobilebox'>
                                                                    <img src={MobileView} className='img-fluid' />
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <div className='mobilebox'>
                                                                    <img src={MobileView} className='img-fluid' />
                                                                </div>
                                                            </SwiperSlide>
                                                            {/* Add more SwiperSlides here */}
                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </div>
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