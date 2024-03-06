import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";
import Footer from "../../../Footer";


const ExercisesEdit = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [isChecked, setChecked] = useState(false);
    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

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
                                        <h3>Create Exercises</h3>

                                    </div>
                                </div>
                            </div>

                            <div className="createprogrameformbox">
                                <form action="javascript:;">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Title *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="text" className="form-control" name="title" placeholder="Title" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row prmemium align-items-center">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Description *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <textarea placeholder="Description" name="description" className="form-control"></textarea>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Video Url</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="text" className="form-control" name="Video_Url" placeholder="Video Url" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Exercise Type *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select class="form-select" aria-label="Default select example" className="form-select" onChange={handleSelectChange} value={selectedOption}>
                                                    <option disabled="" value="">Choose an option</option>
                                                    <option value="regular">Regular</option>
                                                    <option value="amrap">AMRAP</option>
                                                    <option value="emom">EMOM</option>
                                                    <option value="tabata">Tabata</option>
                                                    <option value="progressive overload">Progressive Overload</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Location </label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select class="form-select" aria-label="Default select example">
                                                    <option disabled="" value="">Choose an option</option>
                                                    <option value="Home">Home</option>
                                                    <option value="gym">Gym</option>
                                                    <option value="emom">Home & Gym</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Superset / Circuit</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <input type="checkbox" name="circuit" checked={isChecked} onChange={handleCheckboxChange} />

                                            </div>
                                        </div>
                                    </div>
                                    {selectedOption === 'regular' && (
                                        <div className="reqular" id="regular">
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Time (s)</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="set_time" placeholder="Exersice Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Reps *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="reps" placeholder="Reps" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="set_reset" placeholder="Set Rest" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_rest" placeholder="Exercise Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedOption === 'amrap' && (
                                        <div className="amrap" id="amrap">
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Time (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_time" placeholder="Exersice Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Reps *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="reps" placeholder="Reps" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="set_reset" placeholder="Set Rest" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_rest" placeholder="Exercise Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Progressive Reps</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="checkbox" name="progressive_reps" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedOption === 'emom' && (
                                        <div className="emom" id="emom">
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Time (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_time" placeholder="Exersice Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="Set" placeholder="Set" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Reps *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="reps" placeholder="Reps" />
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_rest" placeholder="Exercise Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    )}
                                    {selectedOption === 'tabata' && (
                                        <div className="tabata" id="tabata">
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Time (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_time" placeholder="Exersice Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="Set" placeholder="Set" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="set_rest" placeholder="Set Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_rest" placeholder="Exercise Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    )}
                                    {selectedOption === 'progressive overload' && (
                                        <div className="reqular" id="regular">
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Time (s)</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="set_time" placeholder="Exersice Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Reps *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="reps" placeholder="Reps" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="set_reset" placeholder="Set Rest" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_rest" placeholder="Exercise Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {isChecked && (
                                        <div className="circuit" id="circuit">
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Set Time (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_time" placeholder="Exersice Time" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Sets *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="Sets" placeholder="Set" />
                                                    </div>
                                                </div>
                                            </div>


                                            <hr className="line" />
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                    <div className="labellist">
                                                        <label>Exercise Rest (s) *</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                    <div className="labellist">
                                                        <input type="number" className="form-control" name="exercise_rest" placeholder="Exercise Rest (s)" />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    )}
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                            <div className='btnlist'>
                                                <button className="cancel">Cancel</button>
                                                <button className="create">Update & Continue Editing</button>
                                                <button className="create">Update Exercise</button>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )

}


export default ExercisesEdit;