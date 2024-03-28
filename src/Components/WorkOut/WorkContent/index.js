import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";
import { Link } from "react-router-dom";



const WorkContent = ()=>{
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
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                      <h3>Workout Details</h3>
  
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                      <div className="updatedelete">
                        <ul>
                          <li>
                            <Link><i class="fa-regular fa-ellipsis"></i></Link>
                          </li>
                          <li>
                            <Link to="/WorkOut/WorkoutEdit"><i class="fa-regular fa-pen-to-square"></i></Link>
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
                        <p>3390</p>
                      </div>
                    </div>
                  </div>
                  <div className="detaillist">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <h5>Title</h5>
                      </div>
                      <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                        <p>Day 1 - Ab Day</p>
                      </div>
                    </div>
                  </div>
                  <div className="detaillist">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <h5>week</h5>
                      </div>
                      <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                        <p> Week 1</p>
                      </div>
                    </div>
                  </div>
                  <div className="detaillist">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <h5>Description</h5>
                      </div>
                      <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                        <p>test</p>
  
                      </div>
                    </div>
                  </div>
  
                </div>
                <form action="javascript:;">
                <div className="userlist pt-5">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h3>Workout Content</h3>
                  
                    <div className="table" id="showexrcise">
                                  <table class="table table-hover">
                                      <thead>
                                          <tr>
                                             
                                              <th scope="col">ID</th>
                                              <th scope="col">Title</th>
                                              <th scope="col">Sets</th>
                                              <th scope="col">Reps</th>
                                              <th scope="col">Excersise Time</th>
                                              <th scope="col">Rest Time</th>
                                              <th scope="col">Method</th>
                                              <th scope="col"></th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                       <tr>
                                          
                                       <td className="idno">453</td>
                                          <td>Butt Kicks</td>
                                          <td>
                                           <div className="inputlist">
                                          <input type="text" className="form-control" name="sets" placeholder="3"/></div></td>
                                          <td><div className="inputlist">
                                          <input type="text" className="form-control" name="reps" placeholder="15"/></div></td>
                                          <td><div className="inputlist">
                                          <input type="text" className="form-control" name="exersisetime" placeholder="01:30"/></div></td>
                                          <td><div className="inputlist">
                                          <input type="text" className="form-control" name="resttime" placeholder="00:30"/></div></td>
                                          <td><span className='smallbox'>Regular</span></td>
                                          <td><i class="fa-regular fa-trash"></i></td>
                                          
                                       </tr>
                                       <tr>
                                          
                                       <td className="idno">1235</td>
                                          <td>Series 1</td>
                                          <td>
                                           <div className="inputlist">
                                          <input type="text" className="form-control" name="sets" placeholder="3"/></div></td>
                                          <td><div className="inputlist">
                                          <input type="text" className="form-control" name="reps" placeholder="20"/></div></td>
                                          <td><div className="inputlist">
                                          <input type="text" className="form-control" name="exersisetime" placeholder="01:00"/></div></td>
                                          <td><div className="inputlist">
                                          <input type="text" className="form-control" name="resttime" placeholder="00:20"/></div></td>
                                          <td><span className='smallbox'>AMRAP</span></td>
                                          <td><i class="fa-regular fa-trash"></i></td>
                                          
                                       </tr>
                                       <tr>
                                          
                                       <td className="idno">7001</td>
                                          <td>Glute Bridge Holds</td>
                                          <td>
                                           <div className="inputlist">
                                          <input type="text" className="form-control" name="sets" placeholder="1"/></div></td>
                                          <td><div className="inputlist">
                                          <input type="text" className="form-control" name="reps" placeholder="50"/></div></td>
                                          <td><div className="inputlist">
                                          <input type="text" className="form-control" name="exersisetime" placeholder="01:00"/></div></td>
                                          <td><div className="inputlist">
                                          <input type="text" className="form-control" name="resttime" placeholder="00:25"/></div></td>
                                          <td><span className='smallbox'>Emom</span></td>
                                          <td><i class="fa-regular fa-trash"></i></td>
                                          
                                       </tr>
                                      </tbody>
                                  </table>
                                  <Link to='/WorkOut/WorkOutDetails'> Add More to WorkOut</Link>
                                  <button> I'm Done</button>
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



export default WorkContent;