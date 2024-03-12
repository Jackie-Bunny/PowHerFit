import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../SideBar";
import SideNav from "../SideNav";
import Footer from "../../Footer";
import { Link,Outlet } from "react-router-dom";
const Payments =()=>{
    return(
        <>

    <SideBar></SideBar>
    <div className="dashbordcontent">
        <div className="container-fluid">
            <div className="row">
                <SideNav></SideNav>
                <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                    <div className="userlist pt-5">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <h3>Payments</h3>
                                <form>
                                    <div className="formlist userform">
                                        <input type="text" placeholder="search" />
                                        <i className="fa-regular fa-magnifying-glass"></i>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="usersbtn">
                                    <Link to="/Payments/CreatePayments">Create Payments</Link>
                                    <Outlet />
                                </div>
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
                                     <p>No User matched the given criteria.</p>
                                     <Link to='/Payments/CreatePayments'>Create Payments</Link>
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


    <Footer />


</>
    )
}


export default Payments;