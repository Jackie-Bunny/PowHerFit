import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";
import { Link, Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const WeeksDetails = () => {

    const { id: proId } = useParams();
    const [weekData, setWeekData] = useState([]);

    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    // get programs
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://appsdemo.pro/Pawherfit/method-exercise/get-weekId/${proId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setWeekData(data.data);
                    console.log("Week data by id", data.data);
                } else {
                    console.error('Failed to fetch programs:', data.message);
                }
            } catch (error) {
                console.error('Error fetching programs:', error);
            }
        };

        fetchData();
    }, [proId, token]);


    return (

        <>
            <SideBar />
            <div className="dashbordcontent">
                <div className="container-fluid">
                    <div className="row">
                        <SideNav></SideNav>
                        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="userlist">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                        <h3>Week Details: {weekData.weekTitle} - {weekData.programTitle}</h3>

                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div className="updatedelete">
                                            <ul>
                                                <li>
                                                    <Link><i class="fa-regular fa-ellipsis"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to={`/Weeks/WeeksEdit/${weekData._id}`}><i class="fa-regular fa-pen-to-square"></i></Link>
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
                                            <p>{weekData._id}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Title</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>{weekData.weekTitle}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Week Image</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <div className="imgbox">
                                                <img src={`https://appsdemo.pro/Pawherfit/${weekData.weekImage}`} className="img-fluid" alt="Program Image" />
                                                <br /><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Live ?</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>
                                                {weekData.weekLive === 0 ? (
                                                    <i class="fa-sharp fa-regular fa-circle-check" style={{ color: 'red' }}></i>
                                                ) : (
                                                    <i class="fa-sharp fa-regular fa-circle-check" style={{ color: 'green' }}></i>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Program</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>{weekData.programTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-1">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"></div>
                        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                            <div className="userlist">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <h3>WorkOut</h3>
                                        <form>
                                            <div className="formlist userform">
                                                <input type="text" placeholder="Search" />
                                                <i class="fa-regular fa-magnifying-glass"></i>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="usersbtn">
                                            <Link to="/WorkOut/CreateWorkOut">Create WorkOut</Link>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="checklist">
                                                    <form>
                                                        <input type="checkbox" />
                                                    </form>
                                                </div>
                                            </td>
                                            <td className="idno">3390</td>
                                            <td><Link to='/WorkOut/WorkOutDetails'>Day 1-Ab Day</Link></td>
                                            <td>Week 1</td>
                                            <td></td>
                                            <td><i class="fa-solid fa-ellipsis"></i></td>
                                            <td><i class="fa-regular fa-eye"></i></td>
                                            <td></td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="checklist">
                                                    <form>
                                                        <input type="checkbox" />
                                                    </form>
                                                </div>
                                            </td>
                                            <td className="idno">3389</td>
                                            <td>TRUE REST DAY</td>
                                            <td>Dumbbell Only Half Hour PowHer - Week 12</td>
                                            <td></td>
                                            <td><i class="fa-solid fa-ellipsis"></i></td>
                                            <td><i class="fa-regular fa-eye"></i></td>
                                            <td></td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="checklist">
                                                    <form>
                                                        <input type="checkbox" />
                                                    </form>
                                                </div>
                                            </td>

                                            <td className="idno">3388</td>
                                            <td>SPRINTS & FLEXIBILITY STRETCHING</td>
                                            <td>Dumbbell Only Half Hour PowHer - Week 12</td>
                                            <td></td>
                                            <td><i class="fa-solid fa-ellipsis"></i></td>
                                            <td><i class="fa-regular fa-eye"></i></td>
                                            <td></td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>


    )



}



export default WeeksDetails;