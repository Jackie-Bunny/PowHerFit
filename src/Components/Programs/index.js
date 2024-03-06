import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideNav from "../SideNav";
import SideBar from "../../SideBar";
import { Link, Outlet } from "react-router-dom";
import Loader from '../Loader/loader';


import { useSelector } from 'react-redux';

const Programs = () => {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true); // State variable to track loading state


    const userData = useSelector(state => state.data.data);

    const token = userData.token;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://appsdemo.pro/Pawherfit/method-exercise/get-program', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setPrograms(data.data);
                    console.log(data.data);
                } else {
                    console.error('Failed to fetch programs sdffsdfsd:', data.message);
                }
            } catch (error) {
                console.error('Error fetching programs:', error);
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
                                                <h3>Programs</h3>
                                                <form>
                                                    <div className="formlist userform">
                                                        <input type="text" placeholder="Press / to search" />
                                                        <i class="fa-regular fa-magnifying-glass"></i>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div className="usersbtn">
                                                    <Link to="/CreatePrograms/">Create Programs</Link>
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
                                                    <th scope="col">Recommended For</th>
                                                    <th scope="col">Premimum Course</th>
                                                    <th scope="col">Level</th>
                                                    <th scope="col">Recommended?</th>
                                                    <th scope="col">Publish Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {programs.map((program, index) => (
                                                    <tr key={program._id}>
                                                        <td>
                                                            <div className="checklist">
                                                                <form>
                                                                    <input type="checkbox" />
                                                                </form>
                                                            </div>
                                                        </td>
                                                        <td className="idno">{index + 1}</td>
                                                        <td><Link to={`/Programs/ProgramDetails/${program._id}`}>{program.title}</Link></td>
                                                        <td>{program.recommendedFor}</td>
                                                        <td><i class="fa-regular fa-circle-xmark"></i></td>
                                                        <td>Beginner</td>
                                                        <td><i class="fa-regular fa-circle-xmark"></i></td>
                                                        <td>Publish</td>
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


export default Programs;