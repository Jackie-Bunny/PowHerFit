import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideNav from "../SideNav";
import SideBar from "../../SideBar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Footer";
import { useSelector } from 'react-redux';
import Loader from '../Loader/loader';



const Users = () => {
    const [users, setUsers] = useState([]);

    const userData = useSelector(state => state.data.data);
    const [loading, setLoading] = useState(true); // State variable to track loading state

    const token = userData.token;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://appsdemo.pro/Pawherfit/user/get-all-users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setUsers(data.message);
                    console.log('Users data', data.message);
                } else {
                    console.error('Failed to fetch users:', data.message);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
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
                                                <h3>Users</h3>
                                                <form>
                                                    <div className="formlist userform">
                                                        <input type="text" placeholder="Search" />
                                                        <i class="fa-regular fa-magnifying-glass"></i>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div className="usersbtn">
                                                    <Link to="CreateUsers">Create User</Link>
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
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Active</th>
                                                    <th scope="col">Avatar</th>
                                                    <th scope="col">Account Type</th>
                                                    <th scope="col">Current Coach</th>
                                                    <th scope="col">Default Followed Account</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.filter(user => user.type !== "admin").map((user, index) => (
                                                    <tr key={user._id}>
                                                        <td>
                                                            <div className="checklist">
                                                                <form>
                                                                    <input type="checkbox" />
                                                                </form>
                                                            </div>
                                                        </td>
                                                        <td className="idno">{index + 1}</td>
                                                        <td><Link to={`UsersDetails/${user._id}`}>{user.name}</Link></td>
                                                        <td><i className="fa-regular fa-circle-check"></i></td>
                                                        <td><i className="fa-regular fa-minus"></i></td>
                                                        <td>{user.type}</td>
                                                        <td><i className="fa-regular fa-minus"></i></td>
                                                        <td><i className="fa-regular fa-circle-xmark"></i></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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


export default Users;