import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from '../../SideBar';
import SideNav from '../SideNav';
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/loader';


const Weeks = () => {
    const [weeks, setWeeks] = useState([]);
    const userData = useSelector(state => state.data.data);
    const token = userData.token;
    const [loading, setLoading] = useState(true); // State variable to track loading state

    // get programs
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://appsdemo.pro/Pawherfit/method-exercise/get-week', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setWeeks(data.data);
                    console.log(data.data);
                } else {
                    console.error('Failed to fetch weeks:', data.message);
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
                                                <h3>Weeks</h3>
                                                <form>
                                                    <div className="formlist userform">
                                                        <input type="text" placeholder="" />
                                                        <i class="fa-regular fa-magnifying-glass"></i>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div className="usersbtn">
                                                    <Link to="CreateWeeks">Create Weeks</Link>
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
                                                    <th scope="col">Live ?</th>
                                                    <th scope="col">Program</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {weeks.map((week, index) => (
                                                    <tr key={week._id}>
                                                        <td>
                                                            <div className="checklist">
                                                                <form>
                                                                    <input type="checkbox" />
                                                                </form>
                                                            </div>
                                                        </td>
                                                        <td className="idno">{index + 1}</td>
                                                        <td><Link to={`WeeksDetails/${week._id}`}>{week.weekTitle}</Link></td>
                                                        <td><i class="fa-regular fa-circle-xmark"></i></td>
                                                        <td>{week.programTitle}</td>
                                                        <td><i class="fa-solid fa-ellipsis"></i></td>
                                                        <td><i class="fa-regular fa-eye"></i></td>
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

export default Weeks;