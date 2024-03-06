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


const WorkOutDetails = () => {
    const [selectedExercise, setSelectedExercise] = useState('');
    const [exerciseList, setExerciseList] = useState([]);
    const [exerciseEntry, setExerciseEntry] = useState({
        sets: '',
        reps: '',
        exersiseTime: '',
        restTime: '',
    });
    const handleExerciseChange = (e) => {
        setSelectedExercise(e.target.value);
    };

    const handleAddExercise = () => {
        if (selectedExercise) {
            setExerciseList([
                ...exerciseList,
                { ...exerciseEntry, id: exerciseList.length + 1, title: selectedExercise },
            ]);
            setSelectedExercise('');
            setExerciseEntry({
                sets: '',
                reps: '',
                exersiseTime: '',
                restTime: '',
            });
        }
    };

    const [loading, setLoading] = useState(true); // State variable to track loading state

    const { id: proid } = useParams();
    const [workout, setWorkout] = useState([]);
    const [weeksPrograms, setWeeksPrograms] = useState([]);

    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    // get programs
    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'http://appsdemo.pro/Pawherfit/method-exercise/get-workoutId';
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
                                    <form action="javascript:;">
                                        <div className="userlist pt-5">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <h3>Workout Builder</h3>
                                                <div className="createprogrameformbox">

                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                            <input type="text" className="form-control" name="exersise_method" placeholder="Select Exercise Method" id="Exersisemothod" value={selectedExercise} readOnly />
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                            <select class="form-select" aria-label="Default select example" name="Excersise" id="Exersiselist" onChange={handleExerciseChange}>
                                                                <option value="">Choose an option</option>
                                                                <option value="regular">Regular </option>
                                                                <option value="HiiT">HiiT</option>
                                                                <option value="SuperSets/Circuits">SuperSets/Circuits</option>
                                                                <option value="Progressive">Progressive</option>
                                                                <option value="AMRAP">AMRAP</option>
                                                                <option value="Emom">Emom</option>
                                                            </select>
                                                            <div className="addExersise pt-5">
                                                                <button onClick={handleAddExercise}>Add Excersise</button>
                                                            </div>
                                                        </div>
                                                    </div>




                                                </div>
                                                {exerciseList.map((exercise) => (
                                                    <div className="table" id="showexrcise">
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
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </form>


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


export default WorkOutDetails;