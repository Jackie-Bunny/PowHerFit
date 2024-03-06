import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../SideBar";
import SideNav from "../SideNav";
import { Link, Outlet } from "react-router-dom";



const Exercises = () =>{

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
                                        <h3>Exercises</h3>
                                        <form>
                                            <div className="formlist userform">
                                                <input type="text" placeholder="" />
                                                <i className="fa-regular fa-magnifying-glass"></i>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="usersbtn">
                                        <Link to="CreateExercise">Create Exercises</Link>
                                            <Outlet/>
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
                                            <th scope="col">EXERCISE TYPE</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Superset/Circuit</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                     <tr>
                                        <td>
                                            <div className="checklist">
                                              <form>
                                                <input type="checkbox" />
                                              </form> 
                                            </div>
                                        </td>
                                        <td className="idno">2436</td>
                                        <td><Link to="/Exercises/ExercisesDetails">Bench Tricep Dips</Link></td>
                                        <td>Tabata</td>
                                        <td>Gym</td>
                                        <td><i className="fa-light fa-circle-xmark"></i></td>
                                        <td><i className="fa-regular fa-eye"></i></td>
                                        <td></td>
                                        
                                     </tr>
                                     <tr>
                                        <td>
                                            <div className="checklist">
                                              <form>
                                                <input type="checkbox" />
                                              </form> 
                                            </div>
                                        </td>
                                        <td className="idno">2436</td>
                                        <td>Bench Tricep Dips</td>
                                        <td>Tabata</td>
                                        <td>Gym</td>
                                        <td><i className="fa-light fa-circle-xmark"></i></td>
                                        <td><i className="fa-regular fa-eye"></i></td>
                                        <td></td>
                                        
                                     </tr>
                                     <tr>
                                        <td>
                                            <div className="checklist">
                                              <form>
                                                <input type="checkbox" />
                                              </form> 
                                            </div>
                                        </td>
                                        <td className="idno">2436</td>
                                        <td>Bench Tricep Dips</td>
                                        <td>Tabata</td>
                                        <td>Gym</td>
                                        <td><i className="fa-light fa-circle-xmark"></i></td>
                                        <td><i className="fa-regular fa-eye"></i></td>
                                        <td></td>
                                        
                                     </tr>
                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </>


)


}


export default Exercises;