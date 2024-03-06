import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../SideBar";
import SideNav from "../SideNav";
import Footer from '../../Footer';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';



const CreatePrograms = () => {
   const userData = useSelector(state => state.data.data);
   const token = userData.token;

   const [isChecked, setChecked] = useState(false);


   // State variables initialization
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [recommendedFor, setRecommendedFor] = useState('');
   const [introVideo, setIntroVideo] = useState('');
   const [premiumCourse, setPremiumCourse] = useState(false);
   const [appleID, setAppleID] = useState('');
   const [IndieID, setIndieID] = useState('');
   const [level, setLevel] = useState('');
   const [recommended, setRecommended] = useState(false);
   const [publishStatus, setPublishStatus] = useState('');
   const [image, setImage] = useState(null);

   // onChange handlers for input fields
   const handleTitleChange = (e) => setTitle(e.target.value);
   const handleDescriptionChange = (e) => setDescription(e.target.value);
   const handleRecommendedForChange = (e) => setRecommendedFor(e.target.value);
   const handleIntroVideoChange = (e) => setIntroVideo(e.target.value);
   const handleAppleIDChange = (e) => setAppleID(e.target.value);
   const handleIndieIDChange = (e) => setIndieID(e.target.value);
   const handleLevelChange = (e) => setLevel(e.target.value);
   const handleRecommendedChange = () => setRecommended(!recommended);
   const handlePublishStatusChange = (e) => setPublishStatus(e.target.value);
   const handlePremiumCourseChange = () => {
      setChecked(!isChecked);
   };
   const handleProgramImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
      // return
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (image) {
         const formData = new FormData();
         formData.append('title', "title");
         formData.append('description', "description");
         formData.append('recommendedFor', recommendedFor);
         formData.append('introVideo', introVideo);
         formData.append('premiumCourse', premiumCourse ? 1 : 0); // Convert boolean to number
         formData.append('appleID', appleID);
         formData.append('IndieID', IndieID);
         formData.append('level', "Beginner");
         formData.append('recommended', recommended ? 1 : 0); // Convert boolean to number
         formData.append('publishStatus', 'Draft'); // Ensure publishStatus is one of the enum values
         formData.append('programImage',  image);

         try {
            const response = await axios.post('https://appsdemo.pro/Pawherfit/method-exercise/add-program', formData, {
               headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': `Bearer ${token}`
               },
            });
            console.log('Form submitted successfully:', response.data);
            // Reset form after successful submission if needed
            setTitle('');
            setDescription('');
            setRecommendedFor('');
            setIntroVideo('');
            setPremiumCourse(false);
            setAppleID('');
            setIndieID('');
            setLevel('');
            setRecommended(false);
            setPublishStatus('');
            setImage(null);
         } catch (error) {
            console.error('Error submitting form:', error);
         }
      } else {
         console.error('No image selected');
      }
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
                              <h3>Create Program</h3>
                           </div>
                        </div>
                     </div>

                     <div className="createprogrameformbox">
                        <form onSubmit={handleSubmit}>
                           <div className="row">
                              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Title *</label>
                                 </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                 <div className="labellist">
                                    <input type="text" className="form-control" name="title" onChange={handleTitleChange} value={title} placeholder="Title" />
                                 </div>
                              </div>
                           </div>
                           <hr className="line" />
                           <div className="row">
                              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Description</label>
                                 </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                 <div className="labellist">
                                    <textarea
                                       className="form-control"
                                       placeholder="Description"
                                       onChange={handleDescriptionChange} value={description}
                                       name="description"
                                    ></textarea>
                                 </div>
                              </div>
                           </div>
                           <hr className="line" />
                           <div className="row">
                              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Recommended For</label>
                                 </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                 <div className="labellist">
                                    <select className="form-select" aria-label="Default select example" name='recommendedFor' onChange={handleRecommendedForChange} value={recommendedFor}>
                                       <option selected>Choose an option</option>
                                       <option value="Home">Home</option>
                                       <option value="Gym">Gym</option>
                                       <option value="Both">Both</option>
                                       <option value="None">None</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                           <hr className="line" />
                           <div className="row">
                              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Introduction Video</label>
                                 </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                 <div className="labellist">
                                    <input type="text" className="form-control" name="introVideo" onChange={handleIntroVideoChange} value={introVideo} placeholder="Introduction Video" />
                                    <br />
                                    <br />
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
                                    <input type="checkbox" name="premiumCourse" value={premiumCourse} onChange={handlePremiumCourseChange} checked={isChecked} />

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
                                          <input type="text" className="form-control" name="appleID" onChange={handleAppleIDChange} value={appleID} placeholder="Apple ID " />
                                       </div>
                                    </div>
                                 </div>
                                 <hr className="line" />
                                 <div className="row">
                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                       <div className="labellist">
                                          <label>Indie ID *</label>
                                       </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                       <div className="labellist">
                                          <input type="text" className="form-control" name="IndieID" onChange={handleIndieIDChange} value={IndieID} placeholder="Indie ID " />
                                       </div>
                                    </div>
                                 </div>
                                 <hr className="line" />
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
                                    <select className="form-select" onChange={handleLevelChange} value={level} aria-label="Default select example">
                                       <option selected>Choose an option</option>
                                       <option value="Beginner">Beginner</option>
                                       <option value="Intermediate">Intermediate</option>
                                       <option value="Advanced">Advanced</option>

                                    </select>
                                 </div>
                              </div>
                           </div>
                           <hr className="line" />
                           <div className="row prmemium align-items-center">
                              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Recommended ?</label>
                                 </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                 <div className="labellist">
                                    <input type="checkbox" name="recommended" onChange={handlePublishStatusChange} value={recommended} />
                                 </div>
                              </div>
                           </div>
                           <hr className="line" />
                           <div className="row">
                              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Publish Status</label>
                                 </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                 <div className="labellist">
                                    <select className="form-select" aria-label="Default select example" name='publishStatus' onChange={handleRecommendedChange} value={publishStatus}>
                                       <option selected>Choose an option</option>
                                       <option value="Draft">Draft</option>
                                       <option value="Testing">Testing</option>
                                       <option value="Published">Published</option>
                                       <option value="Archived">Archived</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                           <hr className="line" />
                           <div className="row">
                              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Program Image</label>
                                 </div>
                              </div>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                 <div className="labellist">
                                    <label className="upload">
                                       <input type="file"  name="programImage" onChange={handleProgramImageChange} />
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
         <Footer />

      </>


   )



}




export default CreatePrograms;