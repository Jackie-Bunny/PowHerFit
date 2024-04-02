import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../Loader/loader';
import axios from 'axios';



const WorkContent = () => {


  const workoutId = window.location.pathname.split('/').pop();
  // console.log(workoutId);
  const [loading, setLoading] = useState(true); // State variable to track loading state

  const { id: proid } = useParams();

  const userData = useSelector(state => state.data.data);
  const token = userData.token;

  // get workout by id
  const [workout, setWorkout] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-workoutId';
        // Check if ID exists in the URL
        if (proid) {
          url += `/${proid}`;
        }
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (data.success) {
          setWorkout(data.data);
          console.log("Workout id data", data.data);
        } else {
          console.error('Failed to fetch programs:', data.message);
        }
      } catch (error) {
        console.error('Error fetching programs:', error);
      } finally {
        setLoading(false); // Set loading state to false regardless of success or error
      }
    };

    fetchData();
  }, [token, proid]); // Run only once on component mount

  // get exercises
  const [exercises, setExercise] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-exercise';
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (data.success) { // Corrected property name
          setExercise(data.data); // Assuming data.data contains the methods array
          console.log("Exercises data", data.data);
        } else {
          console.error('Failed to fetch Exercises:', data.data);
        }
      } catch (error) {
        console.error('Error fetching Exercises:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);
  // get methods
  const [methods, setMethods] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://appsdemo.pro/Pawherfit/method-exercise/get-method';
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        console.log("Response from server:", data); // Log the entire response
        if (data.succes) { // Corrected property name
          setMethods(data.message); // Assuming data.message contains the methods array
          console.log("Methods data", data.message);
        } else {
          console.error('Failed to fetch Methods:', data.message);
        }
      } catch (error) {
        console.error('Error fetching Methods:', error);
      }
    };
    fetchData();
  }, [token]);


  const handleMethodChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const selectedValue = selectedOption.value;
    setMethodId(selectedValue);
  };
  const [methodId, setMethodId] = useState('');
  const handleExerciseChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const selectedValue = selectedOption.value;
    setExerciseId(selectedValue);
  };
  const [exerciseId, setExerciseId] = useState('');
  const handleSeriesTitle = (e) => {
    const selectedValue = e.target.value;
    setSeriesTitle(selectedValue);
  };
  const [seriesTitle, setSeriesTitle] = useState('');
  // add exercise to method and workout
  const [workoutSeriesData, setSeriesData] = useState([]);
  const addSeries = async (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      "workoutId": workoutId,
      "methodId": methodId,
      "exerciseId": exerciseId,
      "seriesTitle": seriesTitle
    });
    console.log("Selected exercise id", exerciseId, "Selected method id", methodId, "Workout id", workout._id, "Form data", data);
    // return
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://appsdemo.pro/Pawherfit/method-exercise/add-series-exercise`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: data
    };
    axios.request(config)
      .then((response) => {
        console.log("Series added successfuly", response.data);
        setSeriesData(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // http://localhost:3011/method-exercise/getseries-workoutid/{workoutId}

  // get workout by id
  const [seriesData, setSeries] = useState([]);
  const selectedMethodId = methodId;// Set the selected method ID here;
  const methodNameMatches = seriesData && seriesData.data && seriesData.data.some(allSeriesData => allSeriesData.methodId === selectedMethodId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://appsdemo.pro/Pawherfit/method-exercise/getseries-workoutid`;
        // Check if ID exists in the URL
        if (workoutId) {
          url += `/${workoutId}`;
        }
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (data.success) {
          console.log("Series data with workout id", data);
          setSeries(data);
        } else {
          console.error('Failed to fetch series:', data.message);
        }
      } catch (error) {
        console.error('Error fetching series:', error);
      }
    };

    fetchData();
  }, [token, workoutId]); // Run only once on component mount


  // update series sets or reps
  // Update handlers
  // const handleSetsChange = (e, index) => {
  //   const newData = [...sets];
  //   const updatedObject = { ...newData[index], sets: e.target.value };
  //   newData[index] = updatedObject;
  //   setSets(newData);
  // };
  // const handleRepsChange = (e, index) => {
  //   const newData = [...reps];
  //   const updatedObject = { ...newData[index], reps: e.target.value };
  //   newData[index] = updatedObject;
  //   setReps(newData);
  // };
  // const handleExTimeChange = (e, index) => {
  //   const newData = [...exerciseTime];
  //   const updatedObject = { ...newData[index], exerciseTime: e.target.value };
  //   newData[index] = updatedObject;
  //   setExerciseTime(newData);
  // };
  // // Update workout function
  // const updateWorkout = async (index, e,) => {
  //   const seriesId = seriesData.data[index]._id
  //   try {
  //     let data = JSON.stringify({
  //       "seriesId": seriesId,
  //       "sets": sets[index]?.sets,
  //       "reps": reps[index]?.reps,
  //       "round": exerciseTime[index]?.exerciseTime,
  //       "exerciseTime": restTime[index]?.exerciseRestTime
  //     });

  //     console.log("Exercise updating data", data, "Exercise builder id", seriesId)
  //     // return
  //     let config = {
  //       method: 'post',
  //       maxBodyLength: Infinity,
  //       url: `https://appsdemo.pro/Pawherfit/method-exercise/add-srt-series-exercise`,
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`
  //       },
  //       data: data
  //     };
  //     axios.request(config)
  //       .then((response) => {
  //         // return
  //         // Update the state variables after successful update
  //         const updatedExerciseData = response.data.data;
  //         console.log("Workout builder updated data", updatedExerciseData);
  //         const newSets = [...sets];
  //         const newReps = [...reps];
  //         const newExerciseTime = [...exerciseTime];
  //         const newRestTime = [...restTime];

  //         newSets[index] = { sets: updatedExerciseData.exerciseSets };
  //         newReps[index] = { reps: updatedExerciseData.exerciseReps };
  //         newExerciseTime[index] = { exerciseTime: updatedExerciseData.exerciseTime };
  //         newRestTime[index] = { exerciseRestTime: updatedExerciseData.exerciseRestTime };

  //         setSets(newSets);
  //         setReps(newReps);
  //         setExerciseTime(newExerciseTime);
  //         setRestTime(newRestTime);

  //         window.location.reload();
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
                    <h3>Workout Details</h3>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="updatedelete">
                      <ul>
                        <li>
                          <Link><i class="fa-regular fa-ellipsis"></i></Link>
                        </li>
                        <li>
                          <Link to="/WorkOut/WorkoutEdit"><i class="fa-regular fa-pen-to-square"></i></Link>
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
                      <p>{workout._id}</p>
                    </div>
                  </div>
                </div>
                <div className="detaillist">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                      <h5>Title</h5>
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                      <p>{workout.workoutTitle}</p>
                    </div>
                  </div>
                </div>
                <div className="detaillist">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                      <h5>week</h5>
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                      <p>{workout.weekTitle}</p>
                    </div>
                  </div>
                </div>
                <div className="detaillist">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                      <h5>Description</h5>
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                      <p>{workout.workoutDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="userlist pt-5">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <h3>Workout Builder</h3>
                  <div className="createprogrameformbox" id="methodremove">
                    <form onSubmit={addSeries}>
                      {!methodNameMatches && (
                        <div className='row mb-3'>
                          <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <div className='seriestitle'>
                              <input type='text' placeholder='Series Title' className='form-control' id='seriesTitle' readOnly />
                            </div>
                          </div>
                          <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <div className='seriesTitle'>
                              <input type='text' name='seriesTitle' onChange={handleSeriesTitle} value={seriesTitle} placeholder='Enter Series Title...' className='form-control' />
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                          <select class="form-select" aria-label="Default select example" name='methodId' className="form-select" onChange={handleMethodChange}>
                            <option value="">-- Choose Method --</option>
                            {methods.map(method => {
                              if (method.methodName !== 'Regular Exercises' && method.methodName !== 'HIIT (High Intensity Interval Training)' && method.methodName !== 'Progressive Weighted Exercises') {
                                return (
                                  <option key={method._id} value={method._id}>{method.methodName}</option>
                                );
                              } else {
                                return null;
                              }
                            })}
                          </select>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                          <select class="form-select" aria-label="Default select example" name="exerciseId" id="Exersiselist" onChange={handleExerciseChange}>
                            <option value="">-- Select Exercise --</option>
                            {exercises.map((exercise, index) => (
                              <option key={index} data-id={exercise.title} value={exercise._id}>{exercise.title}</option>
                            ))}
                          </select>
                          <div className="addExersise pt-5">
                            <button type='submit'>Add To Series</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {seriesData && (
                <div className="userlist AMRAP pt-5">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h3>Exercise In Round</h3>
                    <div className="table" id="AMRAP">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Sets</th>
                            <th scope="col">Reps</th>
                            <th scope="col">Method</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {seriesData && seriesData.data && seriesData.data.map((allSeriesData, index) => (
                            <tr key={index}>
                              <td className="idno">{index + 1}</td>
                              <td>{allSeriesData.exerciseTitle}</td>
                              <td>
                                <div className="inputlist">
                                  <input type="text" className="form-control" name="sets" placeholder="1" />
                                </div>
                              </td>
                              <td>
                                <div className="inputlist">
                                  <input type="text" className="form-control" name="reps" placeholder="10" />
                                </div>
                              </td>
                              <td><span className='smallbox' style={{ 'color': '#EA4AA6' }}>{allSeriesData.methodName}</span></td>
                              <td><i className="fa-regular fa-trash"></i></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <h3>Round Details</h3>
                    <div className="table" id="AMRAP">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Rounds</th>
                            <th scope="col">Exercise Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {seriesData && seriesData.data && seriesData.data.map((allSeriesData, index) => (
                            <tr key={index}>
                              <td>
                                <div className="inputlist">
                                  <input type="text" className="form-control" name="round" placeholder="Enter # of Rounds" /></div></td>
                              <td><div className="inputlist">
                                <input type="text" className="form-control" name="exerciseTime" placeholder="Add Time" /></div></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <button> Add New Series</button>
                      <Link>Add To WorkOut</Link>
                    </div>
                  </div>
                </div>
              )}
              <div className="userlist AMRAP pt-5" style={{ 'display': 'none' }}>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <h3>Exercise In SuperSets/Circut</h3>

                  <div className="table" id="AMRAP">
                    <table class="table table-hover">
                      <thead>
                        <tr>

                          <th scope="col">ID</th>
                          <th scope="col">Title</th>
                          <th scope="col">Sets</th>
                          <th scope="col">Reps</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>

                          <td className="idno">453</td>
                          <td>Butt Kicks</td>
                          <td>
                            <div className="inputlist">
                              <input type="text" className="form-control" name="sets" placeholder="1" /></div></td>
                          <td><div className="inputlist">
                            <input type="text" className="form-control" name="reps" placeholder="10" /></div></td>
                          <td><i class="fa-regular fa-trash"></i></td>

                        </tr>
                        <tr>

                          <td className="idno">1235</td>
                          <td>Jumping Jacks</td>
                          <td>
                            <div className="inputlist">
                              <input type="text" className="form-control" name="sets" placeholder="1" /></div></td>
                          <td><div className="inputlist">
                            <input type="text" className="form-control" name="reps" placeholder="10" /></div></td>
                          <td><i class="fa-regular fa-trash"></i></td>

                        </tr>
                        <tr>

                          <td className="idno">4</td>
                          <td>Glute Bridge Holds</td>
                          <td>
                            <div className="inputlist">
                              <input type="text" className="form-control" name="sets" placeholder="1" /></div></td>
                          <td><div className="inputlist">
                            <input type="text" className="form-control" name="reps" placeholder="Enter # of Reps" /></div></td>
                          <td><i class="fa-regular fa-trash"></i></td>

                        </tr>


                      </tbody>
                    </table>

                  </div>
                  <h3>Round Details</h3>

                  <div className="table" id="AMRAP">
                    <table class="table table-hover">
                      <thead>
                        <tr>

                          <th scope="col">Sets</th>
                          <th scope="col">Exercise Time</th>
                          <th scope="col">Rest Time</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>


                          <td>
                            <div className="inputlist">
                              <input type="text" className="form-control" name="sets" placeholder="Enter # of Sets" /></div></td>
                          <td><div className="inputlist">
                            <input type="text" className="form-control" name="addtime" placeholder="Add Time" /></div></td>
                          <td><div className="inputlist">
                            <input type="text" className="form-control" name="resttime" placeholder="00:40" /></div></td>
                        </tr>
                      </tbody>
                    </table>
                    <button> Add New Series</button>
                    <Link>Add To WorkOut</Link>
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



export default WorkContent;