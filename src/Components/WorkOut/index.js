import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from '../../SideBar';
import SideNav from '../SideNav';
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/loader';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import WorkOutDetails from './WorkoutDetails';


const WorkOut = () => {

    const [workouts, setWorkouts] = useState([]);
    const userData = useSelector(state => state.data.data);
    const token = userData.token;
    const [loading, setLoading] = useState(true); // State variable to track loading state
    // get weeks
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://appsdemo.pro/Pawherfit/method-exercise/get-workout', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setWorkouts(data.data);
                    console.log("Workouts data ", data.data);
                } else {
                    console.error('Failed to fetch workout:', data.message);
                }
            } catch (error) {
                console.error('Error fetching workout:', error);
            } finally {
                setLoading(false); // Set loading state to false regardless of success or error
            }
        };
        fetchData();
    }, [token]); // Run only once on component mount

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
                                                <h3>WorkOut</h3>
                                                <form>
                                                    <div className="formlist userform">
                                                        <input type="text" placeholder="" />
                                                        <i class="fa-regular fa-magnifying-glass"></i>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div className="usersbtn">
                                                    <Link to="CreateWorkOut">Create WorkOut</Link>
                                                    <Outlet />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Weeks</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {workouts.map((workout, index) => (
                                                    <tr>
                                                        <td>
                                                            <div className="checklist">
                                                                <form>
                                                                    <input type="checkbox" />
                                                                </form>
                                                            </div>
                                                        </td>
                                                        <td className="idno">{index + 1}</td>
                                                        <td><Link to={`/WorkOut/WorkOutDetails/${workout._id}`}>{workout.workoutTitle}</Link></td>
                                                        <td>{workout.weekTitle}</td>
                                                        <td></td>
                                                        <td><i class="fa-solid fa-ellipsis"></i></td>
                                                        <td><Link to={`/WorkOut/WorkoutEdit/${workout._id}`}><i class="fa-regular fa-pencil"></i></Link></td>
                                                        <td><Link to={`/WorkOut/WorkOutDetails/${workout._id}`}><i class="fa-regular fa-eye"></i></Link></td>
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



export default WorkOut;