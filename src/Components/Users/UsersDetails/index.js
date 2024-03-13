import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";
import { Link, Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../Loader/loader';


const UsersDetails = () => {

    const { id } = useParams();
    const [user, setUser] = useState([]);
    const userData = useSelector(state => state.data.data);
    const token = userData.token;
    const [loading, setLoading] = useState(true); // State variable to track loading state

    // get programs
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://appsdemo.pro/Pawherfit/user/get-user-by-id/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    console.log("User data", data.data);
                    setUser(data.data);
                } else {
                    console.error('Failed to fetch user data:', data.data);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                setLoading(false); // Set loading state to false regardless of success or error
            }
        };
        fetchData();
    }, [id, token]); // Run only once on component mount

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
                                                <h3>User Details: {user.name}</h3>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                <div className="updatedelete">
                                                    <ul>
                                                        <li>
                                                            <Link><i className="fa-regular fa-ellipsis"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Users/UsersEdit/:id"><i className="fa-regular fa-pen-to-square"></i></Link>
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
                                                    <p>{user._id}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Name</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>{user.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Email</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>{user.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Active</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">                                                    
                                                    <p>                                                    
                                                        <i class="fa-regular fa-circle-check"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Gender</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>{user.gender}</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Avatar</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">

                                                    <p>
                                                        <div className="imgbox"><button download=""><i className="fa-regular fa-download"></i>download</button></div>
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Account Type</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>Coach</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>UserType</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>Advanced</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Referral Code</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>ANNA10</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Referral by</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>User</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Recommended</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p><i class="fa-regular fa-circle-check"></i></p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Indie Id</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>22553</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>User linked Indie Account?</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p><i className="fa-regular fa-circle-check"></i></p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Bio</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>Mom. Fitness. Nutrition. Military family. Helping woman reach their goals one small step at a time for the giant leap of LIFE.</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Social Links</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p><i className="fa-solid fa-minus"></i></p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Current Coach</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p><i className="fa-solid fa-minus"></i></p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Community Handle</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>annarothenberger</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Default Followed Account?</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p><i className="fa-regular fa-circle-check"></i></p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Created At</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>09/06/2022, 06:00 PM UTC</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Updated At</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>01/02/2024, 05:49 PM UTC</p>

                                                </div>
                                            </div>
                                        </div>






                                    </div>
                                    <div className="userlist mt-5">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                <h3>Personal Information</h3>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="createprogrameformbox">
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Birthday</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>03/14/1997</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Preferred Weight Unit</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>Lbs</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Weight</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>100</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Weight Goal</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>Weight Goal</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Share with Community</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p><i className="fa-regular fa-circle-xmark"></i></p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Preferred Height Unit</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">

                                                    <p>
                                                        Feet Inches
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Height</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p>160</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Activity Level</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p><i className="fa-solid fa-minus"></i></p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Workout Location</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p><i className="fa-solid fa-minus"></i></p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="detaillist">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                                    <h5>Goal</h5>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <p><i className="fa-solid fa-minus"></i></p>

                                                </div>
                                            </div>
                                        </div>







                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"></div>
                                <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                    <div className="userlist">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <h3>Referrals</h3>
                                                <form>
                                                    <div className="formlist userform">
                                                        <input type="text" placeholder="search" />
                                                        <i className="fa-regular fa-magnifying-glass"></i>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div className="usersbtn">
                                                    <Link to="/Users/CreateUsers">Create User</Link>
                                                    <Outlet />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Active</th>
                                                    <th scope="col">Avatar</th>
                                                    <th scope="col">Account Type</th>
                                                    <th scope="col">Current Coach</th>
                                                    <th scope="col">Default Followed Account</th>
                                                    <th scope="col">START DATE</th>
                                                    <th scope="col">END DATE</th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="checklist">
                                                            <form><input type="checkbox" /></form>
                                                        </div>
                                                    </td>
                                                    <td className="idno">5417</td>
                                                    <td>Lindsey Wilkinson</td>
                                                    <td><i className="fa-regular fa-circle-check"></i></td>
                                                    <td><i className="fa-regular fa-minus"></i></td>
                                                    <td>Regular</td>
                                                    <td><i className="fa-regular fa-minus"></i></td>
                                                    <td><i className="fa-regular fa-circle-xmark"></i></td>
                                                    <td><i className="fa-regular fa-minus"></i></td>
                                                    <td><i className="fa-regular fa-minus"></i></td>
                                                    <td><i className="fa-solid fa-ellipsis"></i></td>
                                                    <td><i className="fa-regular fa-pen-to-square"></i></td>
                                                    <td><i className="fa-regular fa-trash"></i></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="checklist">
                                                            <form><input type="checkbox" /></form>
                                                        </div>
                                                    </td>
                                                    <td className="idno">5417</td>
                                                    <td>Lindsey Wilkinson</td>
                                                    <td><i className="fa-regular fa-circle-check"></i></td>
                                                    <td><i className="fa-regular fa-minus"></i></td>
                                                    <td>Regular</td>
                                                    <td><i className="fa-regular fa-minus"></i></td>
                                                    <td><i className="fa-regular fa-circle-xmark"></i></td>
                                                    <td><i className="fa-regular fa-minus"></i></td>
                                                    <td><i className="fa-regular fa-minus"></i></td>
                                                    <td><i className="fa-solid fa-ellipsis"></i></td>
                                                    <td><i className="fa-regular fa-pen-to-square"></i></td>
                                                    <td><i className="fa-regular fa-trash"></i></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="checklist">
                                                            <form><input type="checkbox" /></form>
                                                        </div>
                                                    </td>
                                                    <td className="idno">5417</td>
                                                    <td>Lindsey Wilkinson</td>
                                                    <td><i className="fa-regular fa-circle-check"></i></td>
                                                    <td><i className="fa-regular fa-minus"></i></td>
                                                    <td>Regular</td>
                                                    <td><i className="fa-regular fa-minus"></i></td>
                                                    <td><i className="fa-regular fa-circle-xmark"></i></td>
                                                    <td><i className="fa-regular fa-minus"></i></td>
                                                    <td><i className="fa-regular fa-minus"></i></td>
                                                    <td><i className="fa-solid fa-ellipsis"></i></td>
                                                    <td><i className="fa-regular fa-pen-to-square"></i></td>
                                                    <td><i className="fa-regular fa-trash"></i></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"></div>
                                <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                    <div className="userlist">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <h3>Coach Assignments History</h3>
                                                <form>
                                                    <div className="formlist userform">
                                                        <input type="text" placeholder="search" />
                                                        <i className="fa-regular fa-magnifying-glass"></i>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div className="usersbtn">
                                                    <Link to="/Users/AttachCoach/">Attach Coach</Link>
                                                    <Outlet />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="createprogrameformbox attachcoach pt-5 mt-5">
                                        <div className="detaillist"></div>
                                        <i class="fa-light fa-calendar-days"></i>
                                        <p>No User matched the given criteria.</p>
                                        <Link to='/Users/AttachCoach/'>Attach Coach</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"></div>
                                <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                    <div className="userlist">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <h3>Subscriptions</h3>
                                                <form>
                                                    <div className="formlist userform">
                                                        <input type="text" placeholder="search" />
                                                        <i className="fa-regular fa-magnifying-glass"></i>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div className="usersbtn">
                                                    <Link to="/Subscription/CreateSubscription/">Create Subscription</Link>
                                                    <Outlet />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="createprogrameformbox attachcoach pt-5 mt-5">
                                        <div className="detaillist"></div>
                                        <i class="fa-light fa-calendar-days"></i>
                                        <p>No User matched the given criteria.</p>
                                        <Link to='/Subscription/CreateSubscription/'>Create Subscription</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"></div>
                                <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                    <div className="userlist">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <h3>Purchases</h3>
                                                <form>
                                                    <div className="formlist userform">
                                                        <input type="text" placeholder="search" />
                                                        <i className="fa-regular fa-magnifying-glass"></i>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="createprogrameformbox attachcoach pt-5 mt-5">
                                        <div className="detaillist"></div>
                                        <i class="fa-light fa-calendar-days"></i>
                                        <p>No User matched the given criteria.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"></div>
                                <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                    <div className="userlist">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <h3>Progress</h3>
                                                <form>
                                                    <div className="formlist userform">
                                                        <input type="text" placeholder="search" />
                                                        <i className="fa-regular fa-magnifying-glass"></i>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="createprogrameformbox attachcoach pt-5 mt-5">
                                        <div className="detaillist"></div>
                                        <i class="fa-light fa-calendar-days"></i>
                                        <p>No User matched the given criteria.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"></div>
                                <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                    <div className="userlist">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <h3>Nutrition Logs</h3>
                                                <form>
                                                    <div className="formlist userform">
                                                        <input type="text" placeholder="search" />
                                                        <i className="fa-regular fa-magnifying-glass"></i>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="createprogrameformbox attachcoach pt-5 mt-5">
                                        <div className="detaillist"></div>
                                        <i class="fa-light fa-calendar-days"></i>
                                        <p>No User matched the given criteria.</p>

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



export default UsersDetails;