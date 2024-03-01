import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideNav from "../SideNav";
import SideBar from "../../SideBar";
import { Link, Outlet } from "react-router-dom";





const Programs =() =>{

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
                                        <h3>Programs</h3>
                                        <form>
                                            <div className="formlist userform">
                                                <input type="text" placeholder="Press / to search" />
                                                <i class="fa-regular fa-magnifying-glass"></i>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="usersbtn">
                                            <Link to="/CreatePrograms/">Create Programs</Link>
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
                                            <th scope="col">Recommended For</th>
                                            <th scope="col">Premimum Course</th>
                                            <th scope="col">Level</th>
                                            <th scope="col">Recommended?</th>
                                            <th scope="col">Publish Status</th>
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
                                        <td className="idno">1</td>
                                        <td>Strength 1.0 - Home - Beginner</td>
                                        <td>Home</td>
                                        <td><i class="fa-regular fa-circle-xmark"></i></td>
                                        <td>Beginner</td>
                                        <td><i class="fa-regular fa-circle-xmark"></i></td>
                                        <td>Publish</td>
                                     </tr>
                                     <tr>
                                        <td>
                                            <div className="checklist">
                                              <form>
                                                <input type="checkbox" />
                                              </form> 
                                            </div>
                                        </td>
                                        <td className="idno">2</td>
                                        <td>Strength 1.0 - Home - Beginner</td>
                                        <td>Home</td>
                                        <td><i class="fa-regular fa-circle-xmark"></i></td>
                                        <td>Beginner</td>
                                        <td><i class="fa-regular fa-circle-xmark"></i></td>
                                        <td>Publish</td>
                                     </tr>
                                     <tr>
                                        <td>
                                            <div className="checklist">
                                              <form>
                                                <input type="checkbox" />
                                              </form> 
                                            </div>
                                        </td>
                                        <td className="idno">3</td>
                                        <td>Strength 1.0 - Home - Beginner</td>
                                        <td>Home</td>
                                        <td><i class="fa-regular fa-circle-xmark"></i></td>
                                        <td>Beginner</td>
                                        <td><i class="fa-regular fa-circle-xmark"></i></td>
                                        <td>Publish</td>
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


export default Programs;