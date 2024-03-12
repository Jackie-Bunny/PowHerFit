import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from '../../SideBar';
import SideNav from '../SideNav';
import Footer from '../../Footer';
import { Link,Outlet } from 'react-router-dom';

function Subscription() {
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
                                   <h3>Subscriptions</h3>
                                   <form>
                                       <div className="formlist userform">
                                           <input type="text" placeholder="Search" />
                                           <i classNam="fa-regular fa-magnifying-glass"></i>
                                       </div>
                                   </form>
                               </div>
                               <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="usersbtn">
                                        <Link to="/Subscription/CreateSubscription">Create Subscriptions</Link>
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
                                       <th scope="col">USER</th>
                                       <th scope="col">SUBSCRIPTION TIER</th>
                                       <th scope="col">PURCHASE DATE</th>
                                       <th scope="col">EXPIRY DATE</th>
                                       <th scope="col">	ACTIVE</th>
                                       <th scope="col">INDIE LINK</th>
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
                                   <td className="idno">20059</td>
                                   <td><Link to="/Users/UsersDetails/">Kari</Link></td>
                                   <td>	Standard</td>
                                   <td>	03/11/2024</td>
                                   <td>03/25/2024</td>
                                   <td><i class="fa-regular fa-circle-check"></i></td>
                                   <td><i class="fa-regular fa-minus"></i></td>
                                   <td><i class="fa-light fa-eye"></i></td>
                                </tr>
                                <tr>
                                   <td>
                                       <div className="checklist">
                                         <form>
                                           <input type="checkbox" />
                                         </form> 
                                       </div>
                                   </td>
                                   <td className="idno">20059</td>
                                   <td><Link to="/Users/UsersDetails/">Kari</Link></td>
                                   <td>	Standard</td>
                                   <td>	03/11/2024</td>
                                   <td>03/25/2024</td>
                                   <td><i class="fa-regular fa-circle-check"></i></td>
                                   <td><i class="fa-regular fa-minus"></i></td>
                                   <td><i class="fa-light fa-eye"></i></td>
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

export default Subscription