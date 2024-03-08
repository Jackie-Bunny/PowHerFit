import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";
import { Link, Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProgramDetails = () => {

    const { id } = useParams();
    const [programs, setPrograms] = useState([]);
    const [weeksPrograms, setWeeksPrograms] = useState([]);

    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    // get programs
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://appsdemo.pro/Pawherfit/method-exercise/get-programId/${id}`, {
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
                    console.error('Failed to fetch programs:', data.message);
                }
            } catch (error) {
                console.error('Error fetching programs:', error);
            }
        };

        fetchData();
    }, [id, token]); // Run only once on component mount

    // get weeks
    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-week';
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setWeeksPrograms(data.data);
                    console.log("Week data in programs data", data.data);
                } else {
                    console.error('Failed to fetch weeks:', data.message);
                }
            } catch (error) {
                console.error('Error fetching weeks:', error);
            }
        };
        fetchData();
    }, [token]); // Run whenever token or proid changes

    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = `https://appsdemo.pro/Pawherfit/${programs.programImage}`;
        downloadLink.download = programs.programImage; // Use the filename for the download
        downloadLink.click();
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
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                        <h3>{programs.title} - {programs.recommendedFor}</h3>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div className="updatedelete">
                                            <ul>
                                                <li>
                                                    <Link><i class="fa-regular fa-ellipsis"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="/Programs/ProgramsEdit"><i class="fa-regular fa-pen-to-square"></i></Link>
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
                                            <p>{programs._id}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Title</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>{programs.title}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Description</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>{programs.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Recommended For</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>{programs.recommendedFor}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Introduction Video</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p><Link>{programs.introVideo}</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Introduction Video Preview</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            {programs.introVideo ? (
                                                <video controls>
                                                    <source src={programs.introVideo} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            ) : (
                                                <>
                                                    <strong>No Video Preview Available!</strong>
                                                    <p>Please check the video URL</p>
                                                </>
                                            )}
                                        </div>

                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Introduction Video Poster</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p><i class="fa-solid fa-minus"></i></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Premium Course</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            {programs.premiumCourse === 1 ? (
                                                <p><i className="fa-regular fa-circle-check" style={{ color: 'green' }}></i></p>
                                            ) : (
                                                <p><i className="fa-regular fa-circle-xmark" style={{ color: 'red' }}></i></p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Apple ID</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p><i class="fa-solid fa-minus"></i> {programs.appleID}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Indie ID</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p><i class="fa-solid fa-minus"></i> {programs.indieID}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Level</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>{programs.level}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Recommended ?</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            {programs.recommended === 1 ? (
                                                <p><i className="fa-regular fa-circle-check" style={{ color: 'green' }}></i></p>
                                            ) : (
                                                <p><i className="fa-regular fa-circle-xmark" style={{ color: 'red' }}></i></p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Publish Status</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>Published</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Program Image</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <div className="imgbox">
                                                <img src={`https://appsdemo.pro/Pawherfit/${programs.programImage}`} className="img-fluid" alt="Program Image" />
                                                <br /><br />
                                                <button className='btn btn-outline-primary' onClick={handleDownload}>
                                                    <i className="fa-regular fa-download"></i> Download
                                                </button>
                                            </div>
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
                                        <h3>Weeks</h3>
                                        <form>
                                            <div className="formlist userform">
                                                <input type="text" placeholder="search" />
                                                <i class="fa-regular fa-magnifying-glass"></i>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="usersbtn">
                                            <Link to={programs ? `/Weeks/CreateWeeks/${programs._id}` : '/Weeks/CreateWeeks'}>
                                                Create Weeks
                                            </Link>
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
                                            <th scope="col">Live</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {weeksPrograms.map((week, index) => (
                                            <tr key={week._id}>
                                                <td>
                                                    <div className="checklist">
                                                        <form>
                                                            <input type="checkbox" />
                                                        </form>
                                                    </div>
                                                </td>
                                                <td className="idno">{index + 1}</td>
                                                <td>{week.weekTitle}</td>
                                                <td>
                                                    {week.live === 1 ? (
                                                        <i className="fa-sharp fa-regular fa-circle-check" style={{ background: 'green' }}></i>
                                                    ) : (
                                                        <i className="fa-sharp fa-regular fa-circle-check"></i>
                                                    )}
                                                </td>
                                                <td><i class="fa-solid fa-ellipsis"></i></td>
                                                <td><i class="fa-regular fa-eye"></i></td>
                                                <td><i class="fa-sharp fa-light fa-square-pen"></i></td>
                                                <td><i class="fa-solid fa-trash"></i></td>
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
    )
}
export default ProgramDetails;