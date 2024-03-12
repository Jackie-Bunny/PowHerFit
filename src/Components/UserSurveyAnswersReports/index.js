import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from '../../SideBar';
import SideNav from '../SideNav';
import Footer from '../../Footer';
function UserSurveyAnswersReports() {
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
                                   <h3>User Survey Answers Reports</h3>
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
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                            <td className="critrialist"><i class="fa-light fa-calendar-days"></i><br/>
                                             <p>No User Survey Answers Report matched the given criteria.</p>
                                            
                                            </td>
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

export default UserSurveyAnswersReports;