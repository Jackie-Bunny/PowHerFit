import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Img1 from '../Assets/Images/admin_img.jpg';
import { setLogout } from '../redux/reducers';
import { useDispatch, useSelector } from 'react-redux';


const SideBar = () => {
  const userData = useSelector(state => state.data.data);
  const dispatch = useDispatch();

  const token = userData.token;
  console.log(token);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://appsdemo.pro/Pawherfit/user/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(),
      });
      const data = await response.json();
      if (data.success) {
        // console.log(userData);
        dispatch(setLogout());
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="dashboardlist topHeader">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="logotext">
              <h2>Logo Here</h2>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <form>
              <div className="formlist">
                <input type="text" placeholder="Press / to search" />
                <i className="fa-regular fa-magnifying-glass"></i>
              </div>
            </form>
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <div className="notifationlist">
              <ul>
                <li><a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" className="inline-block" role="presentation"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></a></li>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" className="inline-block" role="presentation"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                  </a>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdownmain">
                      <img src={Img1} className="img-fluid admin_img" alt="img" />
                      {userData ? userData.name : 'Admin'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleLogout}>LogOut</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;