import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Outlet,Link } from "react-router-dom";






const Login = ()=>{
   
    
return(

<>
<div className="loginsec">
<div className="container">
<div className="row justify-content-center">
<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<h3>PowHer Fit</h3>
<div className="loginform">

<form>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
        <div className="logininput">
          <label>Email</label>
          <input type="email"  name="email" className="form-control"/>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
        <div className="logininput">
          <label>Password</label>
          <input type="password"  name="email" className="form-control" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
        <div className="logininput">
          <label>
            <input type="checkbox"  name="rememberme"/>
            Remember me
          </label>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
        <div className="loginbtn">
          <Link to="/Users">Forget your password?</Link>
          <Outlet/>
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
</form>
</div>
</div>
</div>
</div>
</div>

</>


)




}



export default Login;