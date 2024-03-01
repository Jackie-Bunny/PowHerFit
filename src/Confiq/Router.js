import React from "react";
import { BrowserRouter ,Routes, Route, } from "react-router-dom";
import Dashboard from "../Dashboard";
import Users from "../Components/Users";
import Programs from "../Components/Programs";
import CreatePrograms from "../Components/CreatePrograms";
import Weeks from "../Components/Weeks";
import CreateWeeks from "../Components/Weeks/CreateWeeks";
import WorkOut from "../Components/WorkOut";
import CreateWorkOut from "../Components/WorkOut/CreateWorkOut";
import Exercises from "../Components/Exercises";
import CreateExercise from "../Components/Exercises/CreateExercise";
import CreateUsers from "../Components/Users/CreateUsers";
import Login from "../Login";
import Method from "../Components/Method";
import CreateMethod from "../Components/Method/CreateMethod";



function AppRouter(){

 return(

<>

<BrowserRouter>
   <Routes>
    <Route path ="/" element={<Login/>}></Route>
    <Route path ="/Dashboard" element={<Dashboard/>}></Route>
    <Route path ="/Users" element={<Users/>}></Route>
    <Route path ="/Programs" element={<Programs/>}></Route>
    <Route path ="/CreatePrograms" element={<CreatePrograms/>}></Route>
    <Route path ="/Weeks" element={<Weeks/>}></Route>
    <Route path ="/Weeks/CreateWeeks" element={<CreateWeeks/>}></Route>
    <Route path ="WorkOut" element={<WorkOut/>}></Route>
    <Route path ="/WorkOut/CreateWorkOut" element={<CreateWorkOut/>}></Route>
    <Route path ="/Exercises" element={<Exercises/>}></Route>
    <Route path ="/Exercises/CreateExercise" element={<CreateExercise/>}></Route>
    <Route path ="/Users/CreateUsers" element={<CreateUsers/>}></Route>
    <Route path ="/Method" element={<Method/>}></Route>
    <Route path ="/Method/CreateMethod" element={<CreateMethod/>}></Route>
    </Routes>
 </BrowserRouter>



</>


 )


}


export default AppRouter;