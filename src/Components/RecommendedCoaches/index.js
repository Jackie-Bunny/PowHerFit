import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../SideBar";
import SideNav from "../SideNav";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
const RecommendedCoaches = () => {

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
                                        <h3>Recommended Coaches</h3>
                                        <form>
                                            <div className="formlist userform">
                                                <input type="text" placeholder="search" />
                                                <i class="fa-regular fa-magnifying-glass"></i>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            <div className="table">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Active</th>
                                            <th scope="col">Avatar</th>
                                            <th scope="col">Account Type</th>
                                            <th scope="col">Current Coache</th>
                                            <th scope="col">Default Followed Account</th>
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
                                            <td className="idno">22</td>
                                            <td><Link to="CoachDetails">Anna Rothenberger</Link></td>
                                            <td><i class="fa-regular fa-circle-check"></i></td>
                                            <td></td>
                                            <td>Coach</td>
                                            <td><i class="fa-regular fa-minus"></i></td>
                                            <td><i class="fa-regular fa-circle-check"></i></td>
                                            <td><i class="fa-solid fa-ellipsis"></i></td>
                                            <td><i class="fa-regular fa-pen-to-square"></i></td>
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
                                            <td className="idno">22</td>
                                            <td>Anna Rothenberger</td>
                                            <td><i class="fa-regular fa-circle-check"></i></td>
                                            <td></td>
                                            <td>Coach</td>
                                            <td><i class="fa-regular fa-minus"></i></td>
                                            <td><i class="fa-regular fa-circle-check"></i></td>
                                            <td><i class="fa-solid fa-ellipsis"></i></td>
                                            <td><i class="fa-regular fa-pen-to-square"></i></td>
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
                                            <td className="idno">22</td>
                                            <td>Anna Rothenberger</td>
                                            <td><i class="fa-regular fa-circle-check"></i></td>
                                            <td></td>
                                            <td>Coach</td>
                                            <td><i class="fa-regular fa-minus"></i></td>
                                            <td><i class="fa-regular fa-circle-check"></i></td>
                                            <td><i class="fa-solid fa-ellipsis"></i></td>
                                            <td><i class="fa-regular fa-pen-to-square"></i></td>
                                            <td><i class="fa-regular fa-trash"></i></td>
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
export default RecommendedCoaches;