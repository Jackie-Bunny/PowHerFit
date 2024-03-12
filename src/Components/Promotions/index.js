import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import SideBar from '../../SideBar';
import SideNav from '../SideNav';
import Footer from '../../Footer';
import { Link,Outlet } from 'react-router-dom';
function Promotions() {
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
                                   <h3>Promotions</h3>
                                   <form>
                                       <div className="formlist userform">
                                           <input type="text" placeholder="Search" />
                                           <i classNam="fa-regular fa-magnifying-glass"></i>
                                       </div>
                                   </form>
                               </div>
                               <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                   <div className="usersbtn">
                                       <Link to="/Promotions/CreatePromotion">Create Promotions</Link>
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
                                       <th scope="col">	DESCRIPTION</th>
                                       <th scope="col">	LIVE?</th>
                                       <th scope="col">START DATE</th>
                                       <th scope="col">END DATE</th>
                                       <th></th>
                                       <th></th>
                                       <th></th>
                                      
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
                                   <td >1</td>
                                   <td><Link to="/Promotions/PromotionDetails">50k Challenge</Link></td>
                                   <td>	<i class="fa-regular fa-minus"></i></td>
                                   <td><i class="fa-regular fa-circle-xmark"></i></td>
                                   <td>12/01/2022</td>
                                   <td><i class="fa-regular fa-minus"></i></td>
                                   <td><i class="fa-solid fa-ellipsis-stroke"></i></td>
                                   <td><i class="fa-regular fa-eye"></i></td>
                                   <td><i class="fa-regular fa-pen-to-square"></i></td>
                                  
                                </tr>
                                <tr>
                                   <td>
                                       <div className="checklist">
                                         <form>
                                           <input type="checkbox" />
                                         </form> 
                                       </div>
                                   </td>
                                   <td >1</td>
                                   <td><Link to="/Promotions/PromotionDetails">50k Challenge</Link></td>
                                   <td>	<i class="fa-regular fa-minus"></i></td>
                                   <td><i class="fa-regular fa-circle-xmark"></i></td>
                                   <td>12/01/2022</td>
                                   <td><i class="fa-regular fa-minus"></i></td>
                                   <td><i class="fa-solid fa-ellipsis-stroke"></i></td>
                                   <td><i class="fa-regular fa-eye"></i></td>
                                   <td><i class="fa-regular fa-pen-to-square"></i></td>
                                  
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

export default Promotions;