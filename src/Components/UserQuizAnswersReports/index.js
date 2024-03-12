import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from '../../SideBar';
import SideNav from '../SideNav';
import Footer from '../../Footer';
import { Link,Outlet } from 'react-router-dom';
function UserQuizAnswersReports() {
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
                                   <h3>User Quiz Answers Reports</h3>
                                   <form>
                                       <div className="formlist userform">
                                           <input type="text" placeholder="Search" />
                                           <i classNam="fa-regular fa-magnifying-glass"></i>
                                       </div>
                                   </form>
                               </div>
                             
                              
                           </div>
                       </div>
                       <div className="table">
                           <table class="table table-hover">
                               <thead>
                                   <tr>
                                       <th scope="col"></th>
                                       <th scope="col">ID</th>
                                       <th scope="col">USER</th>
                                       <th scope="col">QUIZ QUESTION</th>
                                       <th scope="col"></th>
                                       <th scope="col"></th>
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
                                   <td className="idno">36</td>
                                   <td><Link to="/Users/UsersDetails/">Michelle Ramsey</Link></td>
                                   <td>	What’s the best fiber choice for building a balanced meal?</td>
                                   <td>	</td>
                                   <td></td>
                                   <td></td>
                                   <td></td>
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
                                   <td className="idno">35</td>
                                   <td><Link to="/Users/UsersDetails/">Michelle Ramsey</Link></td>
                                   <td>	What’s the best fiber choice for building a balanced meal?</td>
                                   <td>	</td>
                                   <td></td>
                                   <td></td>
                                   <td></td>
                                   <td></td>
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

export default UserQuizAnswersReports;