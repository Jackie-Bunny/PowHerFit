import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../SideBar";
import SideNav from "../SideNav";

import { useDispatch, useSelector } from 'react-redux';

import { Link, Outlet } from "react-router-dom";
import Footer from "../../Footer";
import axios from 'axios';

import Loader from '../Loader/loader';



const Method = () => {

    const [methods, setMethods] = useState([]);
    const [loading, setLoading] = useState(true); // State variable to track loading state

    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'http://appsdemo.pro/Pawherfit/method-exercise/get-method',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                };
                const response = await axios.request(config);
                setLoading(false);
                setMethods(response.data);
                console.log("Methods here: ", response.data);
            } catch (error) {
                setLoading(false);
                console.log(error);
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
                                                <h3>Method</h3>
                                                <form>
                                                    <div className="formlist userform">
                                                        <input type="text" placeholder="Search" />
                                                        <i class="fa-regular fa-magnifying-glass"></i>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div className="usersbtn">
                                                    <Link to="CreateMethod">Create Method</Link>
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
                                                    <th scope="col">Details</th>
                                                    <th scope="col">Active</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {methods.message.map((method, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="checklist">
                                                                <form>
                                                                    <input type="checkbox" />
                                                                </form>
                                                            </div>
                                                        </td>
                                                        <td className="idno">{index + 1}</td>
                                                        <td>{method.methodName}</td>
                                                        <td>{method.methodDetail}</td>
                                                        <td><i class="fa-regular fa-circle-check"></i></td>
                                                        <td><i class="fa-regular fa-circle-xmark"></i></td>
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



export default Method;