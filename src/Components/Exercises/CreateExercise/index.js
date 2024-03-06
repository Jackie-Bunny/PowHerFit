import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const CreateExercise = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [isChecked, setChecked] = useState(false);
    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    const [exercise, setExercise] = useState([]);
    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    // post week data
    // State variables initialization
    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');
    const [videoUrl, setvideoUrl] = useState('');
    const [exerciseType, setexerciseType] = useState('');
    const [location, setlocation] = useState('');
    const [circuit, setsuperset_circuit] = useState('');
    const [exerciseTime, setexerciseTime] = useState('');
    const [setTime, setSetTime] = useState(0);
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [setRest, setSetRest] = useState(0);
    const [exerciseRest, setExerciseRest] = useState(0);
    const [progressiveReps, setProgressiveReps] = useState(false);


    const handleChange = (setStateFunction) => (e) => setStateFunction(e.target.value);

    // Usage:
    const handleTitleChange = handleChange(setTitle);
    const handleDescriptionChange = handleChange(setdescription);
    const handleVideoUrlChange = handleChange(setvideoUrl);
    const handleLocationChange = handleChange(setlocation);
    const handleSetTimeChange = (event) => {
        setSetTime(event.target.value);
    };

    const handleRepsChange = (event) => {
        setReps(event.target.value);
    };

    const handleSetRestChange = (event) => {
        setSetRest(event.target.value);
    };

    const handleExerciseRestChange = (event) => {
        setExerciseRest(event.target.value);
    };
    const handleProgressiveRepsChange = (event) => {
        setProgressiveReps(event.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "title": title,
            "description": description,
            "videoUrl": videoUrl,
            "exerciseType": exerciseType,
            "location": location,
            "superset_circuit": circuit,
            "exerciseTime": exerciseTime,
            "setTime": setTime,
            "sets": sets,
            "reps": reps,
            "setRest": setRest,
            "exerciseRest": exerciseRest,
            "progressiveReps": progressiveReps
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://appsdemo.pro/Pawherfit/method-exercise/add-exercise',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };
        axios.request(config)
            .then((response) => {
                console.log("Excercise added data ", JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                                                <input type="text" className="form-control" name="Video_Url" onChange={handleVideoUrlChange} value={videoUrl} placeholder="Video Url" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Exercise Type *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select class="form-select" aria-label="Default select example" className="form-select" onChange={handleSelectChange} value={selectedOption}>
                                                    <option disabled="" value="">Choose an option</option>
                                                    <option value="regular">Regular</option>
                                                    <option value="amrap">AMRAP</option>
                                                    <option value="emom">EMOM</option>
                                                    <option value="tabata">Tabata</option>
                                                    <option value="progressive overload">Progressive Overload</option>
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
                                                <input type="checkbox" name="circuit" checked={isChecked} onChange={handleCheckboxChange} />
                                            </div>
                                        </div>
                                    </div>
                                    {selectedOption === 'regular' && (
                                        <div className="reqular" id="regular">
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Time (s)</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="set_time" placeholder="Exercise Time" onChange={handleSetTimeChange} value={setTime} />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Reps *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="reps" placeholder="Reps" onChange={handleRepsChange} value={reps} />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="set_reset" placeholder="Set Rest" onChange={handleSetRestChange} value={setRest} />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_rest" placeholder="Exercise Rest (s)" onChange={handleExerciseRestChange} value={exerciseRest} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedOption === 'amrap' && (
                                        <div className="amrap" id="amrap">
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Time (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_time" placeholder="Exersice Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Reps *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="reps" placeholder="Reps" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="set_rest" placeholder="Set Rest" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_rest" placeholder="Exercise Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Progressive Reps</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="checkbox" name="progressiveReps" onChange={handleProgressiveRepsChange} value={progressiveReps} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {selectedOption === 'emom' && (
                                        <div className="emom" id="emom">
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Time (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_time" placeholder="Exercise Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="Set" placeholder="Set" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Reps *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="reps" placeholder="Reps" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_rest" placeholder="Exercise Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {selectedOption === 'tabata' && (
                                        <div className="tabata" id="tabata">
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Time (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_time" placeholder="Exersice Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="Set" placeholder="Set" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="set_rest" placeholder="Set Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_rest" placeholder="Exercise Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedOption === 'progressive overload' && (
                                        <div className="reqular" id="regular">
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Time (s)</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="set_time" placeholder="Exersice Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Reps *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="reps" placeholder="Reps" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="set_reset" placeholder="Set Rest" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_rest" placeholder="Exercise Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {isChecked && (
                                        <div className="circuit" id="circuit">
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Time (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_time" placeholder="Exercise Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Sets *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="Sets" placeholder="Set" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_rest" placeholder="Exercise Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                            <div className='btnlist'>
                                                <button className="cancel">Cancel</button>
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