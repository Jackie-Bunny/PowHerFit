import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import SideNav from '../SideNav';
import SideBar from '../../SideBar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

function Purchases() {
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
                                   <h3>Purchases</h3>
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
                                       <th scope="col">ORDER ID</th>
                                       <th scope="col">ORDER DATE</th>
                                       <th scope="col">PRODUCT NAME</th>
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
                                   <td className="idno">3470</td>
                                   <td><Link to="/Users/UsersDetails/">Megan Doucet</Link></td>
                                   <td>	26833</td>
                                   <td>07/14/2020, 09:04 PM UTC</td>
                                   <td>Kait X PowHer.fit Nutrition</td>
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
                                   <td className="idno">3470</td>
                                   <td><Link to="/Users/UsersDetails/">Megan Doucet</Link></td>
                                   <td>	26833</td>
                                   <td>07/14/2020, 09:04 PM UTC</td>
                                   <td>Kait X PowHer.fit Nutrition</td>
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

export default Purchases