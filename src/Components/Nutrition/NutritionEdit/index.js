import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";


const NutritionEdit =()=>{
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
                                            <h3>Update Nutrition: 41</h3>
                                            
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
                                        <label>Publish Status</label>
                                     </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                    <div className="labellist">
                                    <select className="form-select" aria-label="Default select example">
                                     <option selected>Choose an option</option>
                                    <option value="Published">Published</option>
                                     <option value="Draft">Draft</option>
                                      <option value="Archived">Archived</option>
                                     
                                       </select>
                                     </div>
                                    </div>
                                   </div>
                                   <hr className="line"/>
                                   <div className="row">
                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                     <div className="labellist">
                                        <label>Public</label>
                                     </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                    <div className="labellist">
                                    <input type="checkbox"  name="public" />
                                    
                                     </div>
                                    </div>
                                   </div>
                                   <hr className="line"/>
                                   <div className="row">
                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                     <div className="labellist">
                                        <label>Content *</label>
                                     </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                    <div className="labellist">
                                     <textarea name="Content_descripotion" className="form-control"></textarea>
                                     </div>
                                    </div>
                                   </div>
                                  
                                   
                                  
                                 
                                   
                                   <div className="row">
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                  
                                      <div className='btnlist'>
                                        <button className="cancel">Cancel</button>
                                        <button className="create">Update & Continue Editing</button>
                                        <button className="create">Update Nutrition</button>
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


export default NutritionEdit;