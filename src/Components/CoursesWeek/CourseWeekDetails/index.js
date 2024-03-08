import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";
import { Link, Outlet } from "react-router-dom";


const CourseWeekDetails = () => {
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
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                        <h3>Course Week Details: All PowHer Recipe Bundle</h3>

                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div className="updatedelete">
                                            <ul>
                                                <li>
                                                    <Link><i className="fa-regular fa-ellipsis"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to="/CoursesWeek/CoursesWeekEdit"><i className="fa-regular fa-pen-to-square"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="createprogrameformbox">
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>ID</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>16</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Courses</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>All PowHer Recipe Bundles</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Title</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>All PowHer Recipe Bundle</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Description</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p>All PowHer Recipe Bundle</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="detaillist">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <h5>Live</h5>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                            <p><i class="fa-sharp fa-light fa-circle-check"></i></p>

                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="userlist pt-5">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <h3>Course Contents</h3>
                                        <form>
                                            <div className="formlist userform">
                                                <input type="text" placeholder="search" />
                                                <i className="fa-regular fa-magnifying-glass"></i>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            <div className="table">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">MODEL</th>
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
                                            <td>
                                                <i class="fa-regular fa-bars"></i>
                                            </td>
                                            <td className="idno"><Link to='/CreateCoursePage/CoursePageDetails/'>Course Page: Vegan PowHer Recipe</Link></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><Link to='/CreateCoursePage/CoursePageEdit/'><i class="fa-regular fa-pen-to-square"></i></Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i class="fa-regular fa-bars"></i>
                                            </td>
                                            <td className="idno"><Link to='/CreateCoursePage/CoursePageDetails/'>Course Page: Vegan PowHer Recipe</Link></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><Link to='/CreateCoursePage/CoursePageEdit/'><i class="fa-regular fa-pen-to-square"></i></Link></td>
                                        </tr>



                                    </tbody>
                                </table>
                            </div>
                            <div className="userlist pt-5">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <h3>Course Pages</h3>
                                        <form>
                                            <div className="formlist userform">
                                                <input type="text" placeholder="search" />
                                                <i className="fa-regular fa-magnifying-glass"></i>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="usersbtn">
                                            <Link to="/CreateCoursePage">Create Courses Page</Link>
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
                                            <th scope="col">ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">PUBLISH STATUS</th>
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
                                            <td className="idno">4</td>
                                            <td><Link to="/CreateCoursePage/CoursePageDetails/">PowHer Smoothie Recipes</Link></td>
                                            <td>Published <i class="fa-regular fa-circle-check"></i></td>
                                            <td></td>
                                            <td></td>
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
                                            <td className="idno">4</td>
                                            <td><Link to="/CreateCoursePage/CoursePageDetails">PowHer Smoothie Recipes</Link></td>
                                            <td>Published <i class="fa-regular fa-circle-check"></i></td>
                                            <td></td>
                                            <td></td>
                                            <td><i class="fa-solid fa-ellipsis"></i></td>
                                            <td><i class="fa-regular fa-eye"></i></td>
                                            <td><i class="fa-regular fa-trash"></i></td>
                                        </tr>



                                    </tbody>
                                </table>
                            </div>
                            <div className="userlist pt-5">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <h3>Quizzes</h3>
                                        <form>
                                            <div className="formlist userform">
                                                <input type="text" placeholder="search" />
                                                <i className="fa-regular fa-magnifying-glass"></i>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="usersbtn">
                                            <Link to="/Quizzes/CreateQuiz">Create quiz</Link>
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
                                             <Link>Create Quiz</Link>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        



                                    </tbody>
                                </table>
                            </div>
                            <div className="userlist pt-5">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <h3>Surveys</h3>
                                        <form>
                                            <div className="formlist userform">
                                                <input type="text" placeholder="search" />
                                                <i className="fa-regular fa-magnifying-glass"></i>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="usersbtn">
                                            <Link to="/Quizzes/CreateQuiz">Create Surveys</Link>
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
                                             <Link>Create Surveys</Link>
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



export default CourseWeekDetails;