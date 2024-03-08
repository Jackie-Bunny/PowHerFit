import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import SideBar from "../../SideBar";
import SideNav from "../SideNav";
import Footer from "../../Footer";
import { Link,Outlet } from "react-router-dom";


const CoursesWeek=()=>{
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
                                       <h3>Course Weeks</h3>
                                       <form>
                                           <div className="formlist userform">
                                               <input type="text" placeholder="Search" />
                                               <i classNam="fa-regular fa-magnifying-glass"></i>
                                           </div>
                                       </form>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                       <div className="usersbtn">
                                           <Link to="/CoursesWeek/CreateCourseWeek">Create Courses Weeks</Link>
                                           <Outlet/>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className="table">
                               <table class="table table-hover">
                                   <thead>
                                       <tr>
                                           <th scope="col"></th>
                                           <th scope="col">ID</th>
                                           <th scope="col">Title</th>
                                           <th scope="col">APPLE PRODUCT ID</th>
                                           <th scope="col">INDIE PRODUCT ID</th>
                                           <th scope="col">PUBLISH STATUS</th>
                                           <th scope="col"></th>
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
                                       <td className="idno">4</td>
                                       <td><Link to="/Course/CourseDetails/">All PowHer Recipe Bundles</Link></td>
                                       <td>6444570327</td>
                                       <td>87499</td>
                                       <td>Published</td>
                                       <td><i class="fa-solid fa-ellipsis"></i></td>
                                       <td><i class="fa-regular fa-eye"></i></td>
                                       <td><i class="fa-regular fa-trash"></i></td>
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
                                       <td><Link to="/Course/CourseDetails/">All PowHer Recipe Bundles</Link></td>
                                       <td>6444570327</td>
                                       <td>87499</td>
                                       <td>Published</td>
                                       <td><i class="fa-solid fa-ellipsis"></i></td>
                                       <td><i class="fa-regular fa-eye"></i></td>
                                       <td><i class="fa-regular fa-trash"></i></td>
                                    </tr>
                                  
                                  
                                    
                                   </tbody>
                               </table>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        <Footer/>
       </>
    )
}


export default CoursesWeek;