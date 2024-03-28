import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../SideBar";
import SideNav from "../SideNav";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Loader from '../Loader/loader';

import { Link, Outlet } from "react-router-dom";
import { map } from 'fontawesome';



const Exercises = () => {
    const [loading, setLoading] = useState(true); // State variable to track loading state

    const userData = useSelector(state => state.data.data);
    const token = userData.token;
    
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
                console.log("Response from server:", data); // Log the entire response
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
                                                <h3>Exercises</h3>
                                                <form>
                                                    <div className="formlist userform">
                                                        <input type="text" placeholder="" />
                                                        <i className="fa-regular fa-magnifying-glass"></i>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div className="usersbtn">
                                                    <Link to="CreateExercise">Create Exercises</Link>
                                                    <Outlet />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Title</th>
                                                    {/* <th scope="col">EXERCISE TYPE</th> */}
                                                    <th scope="col">Location</th>
                                                    <th scope="col">Superset/Circuit</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {exercises.map((exercise, index) => (
                                                    <tr key={exercise._id}>
                                                        <td>
                                                            <div className="checklist">
                                                                <form>
                                                                    <input type="checkbox" />
                                                                </form>
                                                            </div>
                                                        </td>
                                                        <td className="idno">{index + 1}</td>
                                                        <td><Link to={`/Exercises/ExercisesDetails/${exercise._id}`}>{exercise.title}</Link></td>
                                                        {/* <td>{exercise.exerciseType}</td> */}
                                                        <td>{exercise.location}</td>
                                                        <td><i className="fa-light fa-circle-xmark"></i></td>
                                                        <td><i className="fa-regular fa-eye"></i></td>
                                                        <td></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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


export default Exercises;