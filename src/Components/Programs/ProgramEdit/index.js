import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideNav from "../../SideNav";
import SideBar from "../../../SideBar";
import Footer from "../../../Footer";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../../Loader/loader';


const ProgramsEdit = () => {

    /// State variables initialization
    const [program, setProgram] = useState({
        id: '',
        title: '',
        description: '',
        recommendedFor: '',
        introVideo: '',
        premiumCourse: false,
        appleID: '',
        IndieID: '',
        level: '',
        recommended: false,
        publishStatus: '',
        programImage: null
    });

    const [isChecked, setChecked] = useState(program.premiumCourse === 1);

    const handlePremiumCourse = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setChecked(checked);
            setProgram(prevProgram => ({
                ...prevProgram,
                premiumCourse: checked ? 1 : 0
            }));
        } else {
            setProgram(prevProgram => ({
                ...prevProgram,
                [name]: value
            }));
        }

    };
    const [loading, setLoading] = useState(true);


    const userData = useSelector(state => state.data.data);

    const token = userData.token;
    const { id: proid } = useParams();

    useEffect(() => {
        fetchData();
    }, [token, proid]);

    const fetchData = async () => {
        try {
            let url = '';
            if (proid) {
                url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-programId';
                url += `/${proid}`;
            }
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            if (data.success) {
                const updatedProgram = { ...program };
                updatedProgram.id = data.data._id;
                updatedProgram.title = data.data.title;
                updatedProgram.description = data.data.description;
                updatedProgram.recommendedFor = data.data.recommendedFor;
                updatedProgram.introVideo = data.data.introVideo;
                updatedProgram.premiumCourse = data.data.premiumCourse;
                updatedProgram.appleID = data.data.appleID;
                updatedProgram.IndieID = data.data.IndieID;
                updatedProgram.level = data.data.level;
                updatedProgram.recommended = data.data.recommended;
                updatedProgram.publishStatus = data.data.publishStatus;
                setProgram(updatedProgram);
                console.log("Program data by id here", data.data);
            } else {
                console.error('Failed to fetch programs:', data.message);
            }
        } catch (error) {
            console.error('Error fetching programs:', error);
        } finally {
            setLoading(false); // Set loading state to false regardless of success or error
        }
    };
    console.log("what is the intial program image ?", program)
    const handleProgramImageChange = (e) => {
        const file = e.target.files[0];
    };

    // update program
    const updateProgram = async (e) => {
        e.preventDefault();
        // Check if an image is selected
        const formData = new FormData();
        formData.append('title', program.title);
        formData.append('description', program.description);
        formData.append('recommendedFor', program.recommendedFor);
        formData.append('introVideo', program.introVideo);
        formData.append('premiumCourse', program.premiumCourse ? 1 : 0); // Convert boolean to number
        formData.append('appleID', program.appleID);
        formData.append('IndieID', program.IndieID);
        formData.append('level', program.level);
        formData.append('recommended', program.recommended ? 1 : 0); // Convert boolean to number
        formData.append('publishStatus', program.publishStatus); // Ensure publishStatus is one of the enum values
        if (program.programImage != null) {
            formData.append('programImage', program.programImage)
        }
        console.log(formData);
        // return
        try {
            const response = await axios.post(`https://appsdemo.pro/Pawherfit/method-exercise/program-update/${program.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            });
            console.log('Program updated successfully:', response.data);
            window.location.href = "/Programs";
            // Reset form after successful submission if needed
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            {loading ? (
                <Loader text="Loading..." /> // Show loader if loading state is true
            ) : (
                <>
                    <SideBar />
                    <div className="dashbordcontent">
                        <div className="container-fluid">
                            <div className="row">
                                <SideNav></SideNav>
                                <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                    <div className="userlist">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 labellist">
                                                <h3>Update Program: {program.title} - {program.recommendedFor} - {program.level}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="createprogrameformbox">
                                        <form onSubmit={updateProgram}>
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 labellist">
                                                    <label>Title *</label>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 labellist">
                                                    <input type="text" className="form-control" name="title" value={program.title} onChange={(e) => setProgram({ ...program, title: e.target.value })} placeholder="Title" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 labellist">
                                                    <label>Description</label>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 labellist">
                                                    <textarea className="form-control" placeholder="Description" name="description" value={program.description} onChange={(e) => setProgram({ ...program, description: e.target.value })}></textarea>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 labellist">
                                                    <label>Recommended For</label>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 labellist">
                                                    <select className="form-select" name='recommendedFor' value={program.recommendedFor} onChange={(e) => setProgram({ ...program, recommendedFor: e.target.value })} aria-label="Default select example">
                                                        <option selected>Choose an option</option>
                                                        <option value="Home">Home</option>
                                                        <option value="Gym">Gym</option>
                                                        <option value="Both">Both</option>
                                                        <option value="None">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row prmemium align-items-center">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 labellist">
                                                    <label>Premium Course</label>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 labellist">
                                                    <input type="checkbox" name="premiumCourse" checked={isChecked} onChange={handlePremiumCourse} />
                                                </div>
                                            </div>
                                            {isChecked && (
                                                <div className="apply" id="apply">
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 labellist">
                                                            <label>Apple ID *</label>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 labellist">
                                                            <input type="text" className="form-control" name="appleId" value={program.appleId} onChange={(e) => setProgram({ ...program, appleId: e.target.value })} placeholder="Apple ID " />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 labellist">
                                                            <label>Indie ID *</label>
                                                        </div>
                                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 labellist">
                                                            <input type="text" className="form-control" name="IndieId" value={program.IndieId} onChange={(e) => setProgram({ ...program, IndieId: e.target.value })} placeholder="Indie ID " />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </div>
                                            )}
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 labellist">
                                                    <label>Level</label>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 labellist">
                                                    <select className="form-select" name='level' value={program.level} onChange={(e) => setProgram({ ...program, level: e.target.value })} aria-label="Default select example">
                                                        <option selected>Choose an option</option>
                                                        <option value="Beginner">Beginner</option>
                                                        <option value="Intermediate">Intermediate</option>
                                                        <option value="Advanced">Advanced</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row prmemium align-items-center">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 labellist">
                                                    <label>Recommended?</label>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 labellist">
                                                    <input type="checkbox" name="recommended" checked={program.recommended} onChange={(e) => setProgram({ ...program, recommended: e.target.checked })} />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 labellist">
                                                    <label>Publish Status</label>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 labellist">
                                                    <select className="form-select" name='publishStatus' value={program.publishStatus} onChange={(e) => setProgram({ ...program, publishStatus: e.target.value })}>
                                                        <option value=''>Choose an option</option>
                                                        <option value="Draft">Draft</option>
                                                        <option value="Testing">Testing</option>
                                                        <option value="Published">Published</option>
                                                        <option value="Archived">Archived</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 labellist">
                                                    <label>Program Image</label>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 labellist">
                                                    <label className="upload">
                                                        <input type="file" name="programImage" onChange={handleProgramImageChange} />
                                                    </label>
                                                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                        <div className="imgbox">
                                                            {/* Display preview of the selected image */}
                                                            {/* {program?.programImage && <img src={URL?.createObjectURL(program.programImage)} className="img-fluid" alt="Program Image" />} */}
                                                            <br />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className='btnlist'>
                                                        <Link to="/Programs"><button className="cancel">Cancel</button></Link>
                                                        <button type='submit' className="create">Update & Continue Editing</button>
                                                        <button type='submit' className="create">Update Program</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
export default ProgramsEdit;