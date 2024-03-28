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

import ContentPages from "../Components/ContentPages";
import ContentPagesDetails from "../Components/ContentPages/ContentPagesDetails";
import CreateContentPages from "../Components/ContentPages/CreateContentPages";
import ContentPagesEdit from "../Components/ContentPages/ContentPagesEdit";
import Nutrition from "../Components/Nutrition";
import CreateNutrition from "../Components/Nutrition/CreateNutrition";
import NutritionDetails from "../Components/Nutrition/NutritionDetails";
import NutritionEdit from "../Components/Nutrition/NutritionEdit";

import Course from "../Components/Course";
import CreateCourses from "../Components/Course/CreateCourses";
import CourseDetails from "../Components/Course/CourseDetails";
import CoursesEdit from "../Components/Course/CoursesEdit";
import CoursesWeek from "../Components/CoursesWeek";
import CourseWeekDetails from "../Components/CoursesWeek/CourseWeekDetails";
import CreateCourseWeek from "../Components/CoursesWeek/CreateCourseWeek";
import CoursesWeekEdit from "../Components/CoursesWeek/CoursesWeekEdit/indx";
import Quizzes from "../Components/Quizzes";
import CreateCoursePage from "../Components/CreateCoursePage";
import CoursePageDetails from "../Components/CreateCoursePage/CoursePageDetails";
import CoursePageEdit from "../Components/CreateCoursePage/CoursePageEdit";
import CreateQuiz from "../Components/Quizzes/CreateQuiz";


import Surveys from "../Components/Surveys";
import CreateSurvey from "../Components/Surveys/CreateSurvey";
import Payments from "../Components/Payments";
import CreatePayments from "../Components/Payments/CreatePayments";
import Purchases from "../Components/Purchases";
import Subscription from "../Components/Subscription";
import UserQuizAnswersReports from "../Components/UserQuizAnswersReports";
import UserSurveyAnswersReports from "../Components/UserSurveyAnswersReports/";
import CoachPaymentReports from "../Components/CoachPaymentReports";
import CoachPaymentReportDetails from "../Components/CoachPaymentReports/CoachPaymentReportDetails";
import Promotions from "../Components/Promotions";
import CreatePromotion from "../Components/Promotions/CreatePromotion";
import PromotionDetails from "../Components/Promotions/PromotionDetails";

import Profile from "../Components/Profile";
import NotFound from "../Components/404";

import WorkContent from "../Components/WorkOut/WorkContent";


function AppRouter() {

   return (

      <>

         <BrowserRouter>
            <Routes>

               <Route path="/Profile" element={<Profile />}></Route>
               <Route path="/NotFound" element={<NotFound />}></Route>

               <Route path="/" element={<Login />}></Route>
               <Route path="/Dashboard" element={<Dashboard />}></Route>
               <Route path="/Users" element={<Users />}></Route>
               <Route path="/Programs" element={<Programs />}></Route>
               <Route path="/CreatePrograms" element={<CreatePrograms />}></Route>
               <Route path="/Weeks" element={<Weeks />}></Route>
               <Route path="/Weeks/CreateWeeks/:id" element={<CreateWeeks />} />
               <Route path="/Weeks/CreateWeeks" element={<CreateWeeks />} />
               <Route path="WorkOut" element={<WorkOut />}></Route>
               <Route path="/WorkOut/CreateWorkOut/:id" element={<CreateWorkOut />}></Route>
               <Route path="/WorkOut/CreateWorkOut/" element={<CreateWorkOut />}></Route>
               <Route path="/Exercises" element={<Exercises />}></Route>
               <Route path="/Exercises/CreateExercise" element={<CreateExercise />}></Route>
               <Route path="/Users/CreateUsers" element={<CreateUsers />}></Route>
               <Route path="/Method" element={<Method />}></Route>
               <Route path="/Method/CreateMethod" element={<CreateMethod />}></Route>
               <Route path="/Programs/ProgramDetails/:id" element={<ProgramDetails />}></Route>
               <Route path="/Programs/ProgramsEdit/:id" element={<ProgramsEdit />}></Route>
               <Route path="/Weeks/WeeksDetails/:id" element={<WeeksDetails />}></Route>
               <Route path="/Weeks/WeeksEdit/:id" element={<WeeksEdit />}></Route>
               <Route path="/WorkOut/WorkOutDetails/:id" element={<WorkOutDetails />}></Route>
               <Route path="/WorkOut/WorkoutEdit/:id" element={<WorkoutEdit />}></Route>

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

               <Route path="/ContentPages" element={<ContentPages />}></Route>
               <Route path="/ContentPages/ContentPagesDetails" element={<ContentPagesDetails />}></Route>
               <Route path="/ContentPages/CreateContentPages" element={<CreateContentPages />}></Route>
               <Route path="/ContentPages/ContentPagesEdit" element={<ContentPagesEdit />}></Route>
               <Route path="/Nutrition" element={<Nutrition />}></Route>
               <Route path="/Nutrition/CreateNutrition" element={<CreateNutrition />}></Route>
               <Route path="/Nutrition/NutritionDetails" element={<NutritionDetails />}></Route>
               <Route path="/Nutrition/NutritionEdit" element={<NutritionEdit />}></Route>

               <Route path="/Course" element={<Course />}></Route>
               <Route path="/Course/CreateCourses" element={<CreateCourses />}></Route>
               <Route path="/Course/CourseDetails" element={<CourseDetails />}></Route>
               <Route path="/Course/CoursesEdit" element={<CoursesEdit />}></Route>
               <Route path="/CoursesWeek" element={<CoursesWeek />}></Route>
               <Route path="/CoursesWeek/CourseWeekDetails" element={<CourseWeekDetails />}></Route>
               <Route path="/CoursesWeek/CreateCourseWeek" element={<CreateCourseWeek />}></Route>
               <Route path="/CoursesWeek/CoursesWeekEdit" element={<CoursesWeekEdit />}></Route>
               <Route path="/Quizzes" element={<Quizzes />}></Route>
               <Route path="/CreateCoursePage" element={<CreateCoursePage />}></Route>
               <Route path="/CreateCoursePage/CoursePageDetails" element={<CoursePageDetails />}></Route>
               <Route path="/CreateCoursePage/CoursePageEdit" element={<CoursePageEdit />}></Route>
               <Route path="/Quizzes/CreateQuiz" element={<CreateQuiz />}></Route>

               <Route path="/Surveys" element={<Surveys />}></Route>
               <Route path="/Surveys/CreateSurvey" element={<CreateSurvey />}></Route>
               <Route path="/Payments" element={<Payments />}></Route>
               <Route path="/Payments/CreatePayments" element={<CreatePayments />}></Route>
               <Route path="/Purchases" element={<Purchases />}></Route>
               <Route path="/Subscription" element={<Subscription />}></Route>
               <Route path="/UserQuizAnswersReports" element={<UserQuizAnswersReports />}></Route>
               <Route path="/UserSurveyAnswersReports" element={<UserSurveyAnswersReports />}></Route>
               <Route path="/CoachPaymentReports" element={<CoachPaymentReports />}></Route>
               <Route path="/CoachPaymentReports/CoachPaymentReportDetails" element={<CoachPaymentReportDetails />}></Route>
               <Route path="/Promotions" element={<Promotions />}></Route>
               <Route path="/Promotions/CreatePromotion" element={<CreatePromotion />}></Route>
               <Route path="/Promotions/PromotionDetails/" element={<PromotionDetails />}></Route>

               <Route path="/WorkOut/WorkContent/" element={<WorkContent />}></Route>


            </Routes>
         </BrowserRouter>



      </>


   )


}


export default AppRouter;