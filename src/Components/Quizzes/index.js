import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import SideBar from "../../SideBar";
import SideNav from "../SideNav";
import Footer from "../../Footer";
import { Link,Outlet } from "react-router-dom";


const Quizzes =()=>{
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
                                       <h3>Quizzes</h3>
                                       <form>
                                           <div className="formlist userform">
                                               <input type="text" placeholder="Search" />
                                               <i classNam="fa-regular fa-magnifying-glass"></i>
                                           </div>
                                       </form>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                       <div className="usersbtn">
                                           <Link to="/Quizzes/CreateQuiz">Create quiz</Link>
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
                                           <th scope="col">COURSEWEEK</th>
                                           <th scope="col">	QUIZ TITLE</th>
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
                                       <td className="idno">13</td>
                                       <td><Link to="/CoursesWeek/CourseWeekDetails/">Week 12 - Advanced Nutrition</Link></td>
                                       <td>	Week 12 Quiz</td>
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
                                       <td className="idno">13</td>
                                       <td><Link to="/CoursesWeek/CourseWeekDetails/">Week 12 - Advanced Nutrition</Link></td>
                                       <td>	Week 12 Quiz</td>
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


export default Quizzes;