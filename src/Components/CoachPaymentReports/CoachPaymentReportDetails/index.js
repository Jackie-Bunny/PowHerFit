import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from '../../../SideBar';
import SideNav from '../../SideNav';
import Footer from '../../../Footer';

function CoachPaymentReportDetails() {
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
                                <h3>Coach Payment Report Details: 14</h3>

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
                                    <p>14</p>
                                </div>
                            </div>
                        </div>
                        <div className="detaillist">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <h5>Month</h5>
                                </div>
                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                        <div className="detaillist">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <h5>Year</h5>
                                </div>
                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                    <p>2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="detaillist">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <h5>Report Type</h5>
                                </div>
                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                    <p>Monthly Payment Report</p>

                                </div>
                            </div>
                        </div>
                        <div className="detaillist">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <h5>File Name</h5>
                                </div>
                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                    <p>
                                        monthly_payment_report_2024-03-01_00:00:06.xlsx
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="detaillist">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <h5>Report link</h5>
                                </div>
                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">

                                    <p><i class="fa-duotone fa-arrow-up-right"></i></p>

                                </div>
                            </div>
                        </div>
                        







                    </div>
                    
                </div>
            </div>
          
        </div>
    </div>

    <Footer />


</>
  )
}

export default CoachPaymentReportDetails;