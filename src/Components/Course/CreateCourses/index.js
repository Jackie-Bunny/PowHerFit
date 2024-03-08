import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";

const CreateCourses =()=>{
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
                                            <h3>Create Course</h3>
                                            
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
                                      <textarea placeholder="Description" className="form-control" name="description"></textarea>
                                     </div>
                                    </div>
                                   </div>
                                  
                                <hr className="line"/>
                               <div className="row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Image</label>
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
                                   <hr className="line"/>
                                   <div className="row">
                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                     <div className="labellist">
                                        <label>Apple Product ID *</label>
                                     </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                    <div className="labellist">
                                    <input type="text" className="form-control" name="apple_product_id" placeholder="Apple Product ID"/>
                                     </div>
                                    </div>
                                   </div>
                                   <hr className="line"/>
                                   <div className="row">
                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                     <div className="labellist">
                                        <label>Indie Product ID *</label>
                                     </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                    <div className="labellist">
                                    <input type="text" className="form-control" name="Indie_product_id" placeholder="Indie Product ID *"/>
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
                                    <select class="form-select" aria-label="Default select example" className="form-select">
                                                    <option disabled="" value="">Choose an option</option>
                                                    <option value="Draft">Draft</option>
                                                    <option value="Testing">Testing</option>
                                                    <option value="Published">Published</option>
                                                    <option value="Archived">Archived</option>

                                                </select>
                                     </div>
                                    </div>
                                   </div>
                                  
                                   
                                  
                                 
                                   
                                   <div className="row">
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                  
                                      <div className='btnlist'>
                                        <button className="cancel">Cancel</button>
                                        <button className="create">Create & Add Another</button>
                                        <button className="create">Create Courses</button>
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

export default CreateCourses;