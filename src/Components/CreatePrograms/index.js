import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../SideBar";
import SideNav from "../SideNav";
import Footer from '../../Footer';



const CreatePrograms = () =>{

const [isChecked, setChecked] = useState(false);
const handleCheckboxChange = () => {
        setChecked(!isChecked);
      };    

return(
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
                                        <h3>Create Program</h3>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="createprogrameformbox">
                              <form action="javascript:;">
                               <div className="row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Title *</label>
                                 </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="labellist">
                                    <input type="text" className="form-control" name="title" placeholder="Title"/>
                                 </div>
                                </div>
                               </div>
                               <hr className="line"/>
                               <div className="row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Description</label>
                                 </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="labellist">
                                    <textarea  className="form-control" placeholder="Description" name="description"></textarea>
                                 </div>
                                </div>
                               </div>
                               <hr className="line"/>
                               <div className="row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Recommended For</label>
                                 </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="labellist">
                                <select className="form-select" aria-label="Default select example">
                                 <option selected>Choose an option</option>
                                <option value="Home">Home</option>
                                 <option value="Gym">Gym</option>
                                  <option value="Both">Both</option>
                                  <option value="None">None</option>
                                   </select>
                                 </div>
                                </div>
                               </div>
                               <hr className="line"/>
                               <div className="row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Introduction Video</label>
                                 </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="labellist">
                                <input type="text" className="form-control" name="introduction_video" placeholder="Introduction Video"/>
                                <br/>
                                <br/>
                                <small>Example: https://vimeo.com/123456789</small>
                                 </div>
                                </div>
                               </div>
                              
                               <div className="row prmemium align-items-center">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Premium Course</label>
                                 </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="labellist">
                                <input type="checkbox" name="premium_course" checked={isChecked} onChange={handleCheckboxChange} />
                                
                                 </div>
                                </div>
                               </div>
                               {isChecked && (
                               <div className="apply" id="apply">
                               <div className="row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Apple ID *</label>
                                 </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="labellist">
                                <input type="text" className="form-control" name="Apple_id *" placeholder="Apple ID "/>
                                 </div>
                                </div>
                               </div>
                               <hr className="line"/>
                               <div className="row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Indie ID *</label>
                                 </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="labellist">
                                <input type="text" className="form-control" name="Indie_id*" placeholder="Indie ID "/>
                                 </div>
                                </div>
                               </div>
                               <hr className="line"/>
                               </div>
                               )}
                               <div className="row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Level</label>
                                 </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="labellist">
                                <select className="form-select" aria-label="Default select example">
                                 <option selected>Choose an option</option>
                                <option value="Beginner">Beginner</option>
                                 <option value="Intermediate">Intermediate</option>
                                  <option value="Advanced">Advanced</option>
                                
                                   </select>
                                 </div>
                                </div>
                               </div>
                               <hr className="line"/>
                               <div className="row prmemium align-items-center">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Recommended?</label>
                                 </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="labellist">
                                  <input type="checkbox"  name="recommended" />
                                
                                 </div>
                                </div>
                               </div>
                               <hr className="line"/>
                               <div className="row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Publish Status</label>
                                 </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="labellist">
                               
                                <select className="form-select" aria-label="Default select example">
                                 <option selected>Choose an option</option>
                                <option value="Draft">Draft</option>
                                 <option value="Testing">Testing</option>
                                  <option value="Published">Published</option>
                                  <option value="Archived">Archived</option>
                                   </select>
                                 </div>
                                </div>
                               </div>
                               <hr className="line"/>
                               <div className="row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Program Image</label>
                                 </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="labellist">
                                  <label className="upload">
                                  <input type="file"  name="program_image_upload"  />
                                  </label>
                                 </div>
                                </div>
                               </div>
                               <div className="row">
                               <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                              
                                  <div className='btnlist'>
                                    <button className="cancel">Cancel</button>
                                    <button className="create">Create & Add Another</button>
                                    <button className="create">Create Program</button>
                                  </div>
                             
                               </div>
                               </div>

                              </form>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
<Footer/>

</>


)



}




export default CreatePrograms;