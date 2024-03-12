import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from '../../../SideBar';
import SideNav from '../../SideNav';
import Footer from '../../../Footer';
function CreatePromotion() {
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
                                        <h3>Create Promotion</h3>

                                    </div>

                                </div>
                            </div>
                            <form action='javascript:;'>
                                <div className="createprogrameformbox">
                                
                                  
                                    <div className="line"></div><br></br>
                                    
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Title *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                            <input type="text" className="form-control" name="Title" placeholder='Title'/>
                                            </div>
                                            
                                          
                                        </div>
                                    </div>
                                    <hr className="line"></hr>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Description</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                            <textarea className='form-control' name='description' placeholder='Description'></textarea>
                                            </div>
                                            
                                          
                                        </div>
                                    </div>
                                    <hr className="line"></hr>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Live?</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                            <input  type='checkbox'  name='live'/>
                                            <p>Live promotions will only show in-app if the promotion in within the start and end date range. Not setting an end date will keep the promotion in the app until live is unchecked.</p>
                                            </div>
                                            
                                          
                                        </div>
                                    </div>
                                    <div className="row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                 <div className="labellist">
                                    <label>Image *</label>
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
                                    
                                    <hr className="line"></hr>
                
                                    
                                    <div className="row pb-3 pt-3">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Url *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist ">
                                            <input type="text" className="form-control" name="url" placeholder='Url'/>

                                            </div>
                                           
                                        </div>
                                    </div>
                                    <hr className="line"></hr>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label htmlFor="purchasedate_time">Start Date *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist d-flex align-items-center newlabel1s">
                                                <input type="date" className="form-control" name="Start_date"/>
                                                <small>UTC</small>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <hr className="line"></hr>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>End Date=]</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist d-flex align-items-center newlabel1s">
                                                <input type="datetime-local" className="form-control" name="expirydate_time"/>
                                                <small>UTC</small>
                                            </div>
                                           
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                        <div className='btnlist'>
                                            <button className="cancel">Cancel</button>
                                            <button className="create">Attach & Attach Another</button>
                                            <button className="create">Create  Promotion</button>
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

export default CreatePromotion;