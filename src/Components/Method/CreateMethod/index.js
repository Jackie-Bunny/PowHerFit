import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const CreateMethod = () => {

    const userData = useSelector(state => state.data.data);
    const token = userData.token;

    // State variables initialization
    const [methodName, setmethodName] = useState('');
    const [methodDetail, setmethodDetail] = useState('');

    // onChange handlers for input fields
    const handleTitleChange = (e) => setmethodName(e.target.value);
    const handleDescriptionChange = (e) => setmethodDetail(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = JSON.stringify({
            "methodName": methodName,
            "methodDetail": methodDetail
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://appsdemo.pro/Pawherfit/method-exercise/add-method',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log('Method Form submitted successfully:', JSON.stringify(response.data));
                setmethodName('');
                setmethodDetail('');
                window.location.href = '/Method';
            })
            .catch((error) => {
                console.log(error);
            });
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
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <h3>Create Method</h3>

                                    </div>
                                </div>
                            </div>
                            <div className="createprogrameformbox">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Method Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="text" className="form-control" name="methodName" onChange={handleTitleChange} value={methodName} placeholder="Method" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Method Description</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <textarea placeholder="Method Description" name="methodDetail" onChange={handleDescriptionChange} value={methodDetail} className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <div className='btnlist'>
                                                <button className="cancel">Cancel</button>
                                                <button type="submit" className="create">Create Method</button>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>


    )


}



export default CreateMethod;