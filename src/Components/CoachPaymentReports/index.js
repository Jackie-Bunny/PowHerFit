import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import SideBar from '../../SideBar';
import SideNav from '../SideNav';
import Footer from '../../Footer';
import { Link,Outlet } from 'react-router-dom';
const CoachPaymentReports = () => {
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
                                   <h3>Coach Payment Reports</h3>
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
                                       <th scope="col">Month</th>
                                       <th scope="col">Year</th>
                                       <th scope="col">Report type</th>
                                       <th scope="col">File Name</th>
                                       <th scope="col">Report Link</th>
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
                                   <td >14</td>
                                   <td>2024</td>
                                   <td><Link to="/CoachPaymentReports/CoachPaymentReportDetails">	Monthly Payment Report</Link></td>
                                   <td>	monthly_payment_report_2024-03-01_00:00:06.xlsx</td>
                                   <td><i class="fa-duotone fa-arrow-up-right"></i></td>
                                   <td><i class="fa-regular fa-eye"></i></td>
                                  
                                </tr>
                                <tr>
                                   <td>
                                       <div className="checklist">
                                         <form>
                                           <input type="checkbox" />
                                         </form> 
                                       </div>
                                   </td>
                                   <td >13</td>
                                   <td>2024</td>
                                   <td><Link to="/CoachPaymentReports/CoachPaymentReportDetails">	Monthly Payment Report</Link></td>
                                   <td>	monthly_payment_report_2024-03-01_00:00:06.xlsx</td>
                                   <td><i class="fa-duotone fa-arrow-up-right"></i></td>
                                   <td><i class="fa-regular fa-eye"></i></td>
                                  
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

export default CoachPaymentReports