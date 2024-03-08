import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
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

import ProgramDetails from '../Components/Programs/ProgramDetails'
import ProgramsEdit from "../Components/Programs/ProgramEdit"

import WeeksDetails from "../Components/Weeks/WeekDetails";
import WeeksEdit from "../Components/Weeks/WeekEdit";

import WorkOutDetails from "../Components/WorkOut/WorkoutDetails";
import WorkoutEdit from "../Components/WorkOut/WorkoutEdit";


import CoachDetails from "../Components/RecommendedCoaches/CoachDetails";
import CoachEdit from "../Components/RecommendedCoaches/CoachEdit";

import RecommendedCoaches from "../Components/RecommendedCoaches";
import RecommendedPrograms from "../Components/RecommendedPrograms";


import UsersDetails from "../Components/Users/UsersDetails";
import UsersEdit from "../Components/Users/UsersEdit";
import AttachCoach from "../Components/Users/AttachCoach";

import CreateSubscription from "../Components/Subscription/CreateSubscription";

import ExercisesDetails from "../Components/Exercises/ExercisesDetails";
import ExercisesEdit from "../Components/Exercises/ExercisesEdit";

function AppRouter() {

   return (

      <>

         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Login />}></Route>
               <Route path="/Dashboard" element={<Dashboard />}></Route>
               <Route path="/Users" element={<Users />}></Route>
               <Route path="/Programs" element={<Programs />}></Route>
               <Route path="/CreatePrograms" element={<CreatePrograms />}></Route>
               <Route path="/Weeks" element={<Weeks />}></Route>
               <Route path="/Weeks/CreateWeeks/:id" element={<CreateWeeks />} />
               <Route path="/Weeks/CreateWeeks" element={<CreateWeeks />} />
               <Route path="WorkOut" element={<WorkOut />}></Route>
               <Route path="/WorkOut/CreateWorkOut" element={<CreateWorkOut />}></Route>
               <Route path="/Exercises" element={<Exercises />}></Route>
               <Route path="/Exercises/CreateExercise" element={<CreateExercise />}></Route>
               <Route path="/Users/CreateUsers" element={<CreateUsers />}></Route>
               <Route path="/Method" element={<Method />}></Route>
               <Route path="/Method/CreateMethod" element={<CreateMethod />}></Route>
               <Route path="/Programs/ProgramDetails/:id" element={<ProgramDetails />}></Route>
               <Route path="/Programs/ProgramsEdit" element={<ProgramsEdit />}></Route>
               <Route path="/Weeks/WeeksDetails" element={<WeeksDetails />}></Route>
               <Route path="/Weeks/WeeksEdit" element={<WeeksEdit />}></Route>
               <Route path="/WorkOut/WorkOutDetails/:id" element={<WorkOutDetails />}></Route>
               <Route path="/WorkOut/WorkoutEdit" element={<WorkoutEdit />}></Route>

               <Route path="/RecommendedCoaches" element={<RecommendedCoaches />}></Route>
               <Route path="/RecommendedCoaches/CoachDetails" element={<CoachDetails />}></Route>
               <Route path="/RecommendedCoaches/CoachEdit" element={<CoachEdit />}></Route>
               <Route path="/RecommendedPrograms" element={<RecommendedPrograms />}></Route>

               <Route path="/Users/UsersDetails/:id" element={<UsersDetails />}></Route>
               <Route path="/Users/UsersEdit/:id" element={<UsersEdit />}></Route>
               <Route path="/Users/AttachCoach" element={<AttachCoach />}></Route>

               <Route path="/Subscription/CreateSubscription" element={<CreateSubscription />}></Route>

               <Route path="/Exercises/ExercisesDetails/:id" element={<ExercisesDetails />}></Route>
               <Route path="/Exercises/ExercisesEdit/:id" element={<ExercisesEdit />}></Route>


            </Routes>
         </BrowserRouter>



      </>


   )


}


export default AppRouter;