import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";


const UsersEdit = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [socialLinks, setSocialLinks] = useState([{ id: 1, type: 'title' }]);
    const addField = () => {
        const newId = socialLinks.length + 1;
        const newType = socialLinks.length % 2 === 0 ? 'title' : 'link';
        setSocialLinks([...socialLinks, { id: newId, type: newType }]);
    };
    const removeField = () => {
        if (socialLinks.length > 1) {
            const updatedLinks = [...socialLinks];
            updatedLinks.pop();
            setSocialLinks(updatedLinks);
        }
    };
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
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <h3>Update User: Lisa</h3>

                                    </div>
                                </div>
                            </div>
                            <form action='javascript:;'>
                                <div className="createprogrameformbox">

                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Name *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="text" className="form-control" name="name" placeholder="Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row prmemium align-items-center">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Email *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="email" className="form-control" name="email" placeholder="Email" />

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Password *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="password" className="form-control" name="password" placeholder="Password" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Active *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="checkbox" name="active" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Gender *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select className="form-select" aria-label="Default select example">
                                                    <option disabled="" value="">Choose an option</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>

                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Avatar</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <label className="upload">
                                                    <input type="file" name="avatar" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Account Type *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select className="form-select" aria-label="Default select example" onChange={handleSelectChange} value={selectedOption}>
                                                    <option disabled="" value="">Choose an option</option>
                                                    <option value="Admin">Admin</option>
                                                    <option value="Coach">Coach</option>
                                                    <option value="Regular">Regular</option>
                                                    <option value="Influencer">Influencer</option>
                                                    <option value="Super Influencer">Super Influencer</option>
                                                    <option value="Affiliate">Affiliate</option>
                                                    <option value="Tester">Tester</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>User Type *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select className="form-select" aria-label="Default select example">
                                                    <option disabled="" value="">Choose an option</option>
                                                    <option value="User Regular">Regular</option>
                                                    <option value="Advanced">Advanced</option>

                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    {selectedOption === 'Admin' && (
                                        <div className="advance" id="accounttypeadvance">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Referral Code</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Referral_Code" placeholder="Referral Code" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Indie Id</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Indie_Id" placeholder="Indie Id" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Bio</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <textarea className="form-control" name="bio" placeholder="Bio"></textarea>

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Community Handle</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="community_handle" placeholder="Community Handle" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Default Followed Account?</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="checkbox" name="default_followed_account?" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedOption === 'Coach' && (
                                        <div className="Coach" id="Coachtypeadvance">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Referral Code</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Referral_Code" placeholder="Referral Code" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Recommended</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="checkbox" name="Recommended" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Indie Id</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Indie_Id" placeholder="Indie Id" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Bio</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <textarea className="form-control" name="bio" placeholder="Bio"></textarea>

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Social Links</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist socailbody">
                                                        <div className="row">
                                                            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 p-0">
                                                                <label className="headbody TITLE">TITLE</label>
                                                                {socialLinks.map((link) => (
                                                                    <div key={link.id} className={`fieldinput ${link.type.toUpperCase()}`}>
                                                                        <input type="text" className="form-control" name={link.type} />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7 p-0">
                                                                <label className="headbody LINK">LINK</label>
                                                                {socialLinks.map((link) => (
                                                                    <div key={link.id} className={`fieldinput ${link.type.toUpperCase()}`}>
                                                                        <input type="text" className="form-control" name={link.type} />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <button id="socaillinksadd" onClick={addField}>
                                                            <i className="fa-light fa-circle-plus"></i>Add Row
                                                        </button>
                                                        <button id="socaillinksremove" className="socaillinksremove" onClick={removeField}>
                                                            <i className="fa-light fa-circle-minus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Community Handle</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="community_handle" placeholder="Community Handle" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Default Followed Account?</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="checkbox" name="default_followed_account?" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedOption === 'Regular' && (
                                        <div className="regular" id="regulartypeadvance">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Referral Code</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Referral_Code" placeholder="Referral Code" />

                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Indie Id</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Indie_Id" placeholder="Indie Id" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Bio</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <textarea className="form-control" name="bio" placeholder="Bio"></textarea>

                                                    </div>
                                                </div>
                                            </div>


                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Community Handle</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="community_handle" placeholder="Community Handle" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Default Followed Account?</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="checkbox" name="default_followed_account?" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedOption === 'Influencer' && (
                                        <div className="Influencer" id="Influencertypeadvance">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Referral Code</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Referral_Code" placeholder="Referral Code" />

                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Indie Id</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Indie_Id" placeholder="Indie Id" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Bio</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <textarea className="form-control" name="bio" placeholder="Bio"></textarea>

                                                    </div>
                                                </div>
                                            </div>


                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Community Handle</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="community_handle" placeholder="Community Handle" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Default Followed Account?</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="checkbox" name="default_followed_account?" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedOption === 'Super Influencer' && (
                                        <div className="Influencer" id="Superinfluencertypeadvance">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Referral Code</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Referral_Code" placeholder="Referral Code" />

                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Indie Id</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Indie_Id" placeholder="Indie Id" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Bio</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <textarea className="form-control" name="bio" placeholder="Bio"></textarea>

                                                    </div>
                                                </div>
                                            </div>


                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Community Handle</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="community_handle" placeholder="Community Handle" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Default Followed Account?</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="checkbox" name="default_followed_account?" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedOption === 'Affiliate' && (
                                        <div className="Influencer" id="Superinfluencertypeadvance">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Referral Code</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Referral_Code" placeholder="Referral Code" />

                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Indie Id</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Indie_Id" placeholder="Indie Id" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Bio</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <textarea className="form-control" name="bio" placeholder="Bio"></textarea>

                                                    </div>
                                                </div>
                                            </div>


                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Community Handle</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="community_handle" placeholder="Community Handle" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Default Followed Account?</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="checkbox" name="default_followed_account?" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedOption === 'Tester' && (
                                        <div className="Influencer" id="Superinfluencertypeadvance">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Referral Code</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Referral_Code" placeholder="Referral Code" />

                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Indie Id</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="Indie_Id" placeholder="Indie Id" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Bio</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <textarea className="form-control" name="bio" placeholder="Bio"></textarea>

                                                    </div>
                                                </div>
                                            </div>


                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Community Handle</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="text" className="form-control" name="community_handle" placeholder="Community Handle" />

                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Default Followed Account?</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="checkbox" name="default_followed_account?" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                    <hr className="line" />



                                </div>
                                <div className="userlist pt-5">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <h3>Personal Information</h3>

                                        </div>
                                    </div>
                                </div>
                                <div className="createprogrameformbox">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Birthday *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="date" className="form-control" name="birthday_date" placeholder="Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Weight</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="number" className="form-control" name="weight" placeholder="Weight" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Weight Goal</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="number" className="form-control" name="Weight_goal" placeholder="Weight Goal
                                        " />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Share with Community</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="checkbox" name="Share_with_community" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Height</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="text" className="form-control" name="Weight_goal" placeholder="Weight Goal
                                        " />
                                                <br />
                                                <small>Example: 175</small>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Activity Level</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select className="form-select" aria-label="Default select example">
                                                    <option disabled="" value="">Choose an option</option>
                                                    <option value="inactive">Inactive</option>
                                                    <option value="moderately_active">Moderately Active</option>
                                                    <option value="daily">Daily</option>
                                                    <option value="highly_active">Highly Active</option>

                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Workout Location</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select className="form-select" aria-label="Default select example">
                                                    <option disabled="" value="">Choose an option</option>
                                                    <option value="Home">Home</option>
                                                    <option value="Gym">Gym</option>
                                                    <option value="Both">Both</option>


                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Goal</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select className="form-select" aria-label="Default select example">
                                                    <option disabled="" value="">Choose an option</option>
                                                    <option value="Lose Body Fat">Lose Body Fat</option>
                                                    <option value="build_muscle">Build Muscle</option>
                                                    <option value="both">Loose Body Fat &amp; Build Muscle</option>
                                                    <option value="maintain">Maintain My Fit Figure</option>



                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                        <div className='btnlist'>
                                            <button className="cancel">Cancel</button>
                                            <button className="create">Update & Continue Editing</button>
                                            <button className="create">Update Recommended Users</button>
                                        </div>

                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )

}




export default UsersEdit;