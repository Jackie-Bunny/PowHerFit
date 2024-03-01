import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideBar from "../../../SideBar";
import SideNav from "../../SideNav";





const CreateWorkOut = () => {

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
                                        <h3>Create Week</h3>

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
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Week *</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <select data-testid="weeks-select" dusk="week" class="w-full block form-control form-select form-select-bordered">
                                                    <option disabled="" value="">—</option>
                                                    <option value="443"> - Week 1</option>
                                                    <option value="414"> - Week 1</option>
                                                    <option value="163">Bikini Body - Home - Beginner - Week 1</option>
                                                    <option value="189">Bikini Body - Home - Beginner - Week 10</option>
                                                    <option value="174">Bikini Body - Home - Beginner - Week 11</option>
                                                    <option value="190">Bikini Body - Home - Beginner - Week 12</option>
                                                    <option value="185">Bikini Body - Home - Beginner - Week 2</option>
                                                    <option value="165">Bikini Body - Home - Beginner - Week 3</option>
                                                    <option value="186">Bikini Body - Home - Beginner - Week 4</option>
                                                    <option value="167">Bikini Body - Home - Beginner - Week 5</option>
                                                    <option value="187">Bikini Body - Home - Beginner - Week 6</option>
                                                    <option value="169">Bikini Body - Home - Beginner - Week 7</option>
                                                    <option value="188">Bikini Body - Home - Beginner - Week 8</option>
                                                    <option value="172">Bikini Body - Home - Beginner - Week 9</option>
                                                    <option value="201">Bikini Body - Gym - Advanced - Week 1</option>
                                                    <option value="222">Bikini Body - Gym - Advanced - Week 10</option>
                                                    <option value="212">Bikini Body - Gym - Advanced - Week 11</option>
                                                    <option value="223">Bikini Body - Gym - Advanced - Week 12</option>
                                                    <option value="218">Bikini Body - Gym - Advanced - Week 2</option>
                                                    <option value="204">Bikini Body - Gym - Advanced - Week 3</option>
                                                    <option value="219">Bikini Body - Gym - Advanced - Week 4</option>
                                                    <option value="206">Bikini Body - Gym - Advanced - Week 5</option>
                                                    <option value="220">Bikini Body - Gym - Advanced - Week 6</option>
                                                    <option value="208">Bikini Body - Gym - Advanced - Week 7</option>
                                                    <option value="221">Bikini Body - Gym - Advanced - Week 8</option>
                                                    <option value="210">Bikini Body - Gym - Advanced - Week 9</option>
                                                    <option value="202">Bikini Body - Gym - Beginner - Week 1</option>
                                                    <option value="228">Bikini Body - Gym - Beginner - Week 10</option>
                                                    <option value="211">Bikini Body - Gym - Beginner - Week 11</option>
                                                    <option value="229">Bikini Body - Gym - Beginner - Week 12</option>
                                                    <option value="224">Bikini Body - Gym - Beginner - Week 2</option>
                                                    <option value="203">Bikini Body - Gym - Beginner - Week 3</option>
                                                    <option value="225">Bikini Body - Gym - Beginner - Week 4</option>
                                                    <option value="205">Bikini Body - Gym - Beginner - Week 5</option>
                                                    <option value="226">Bikini Body - Gym - Beginner - Week 6</option>
                                                    <option value="207">Bikini Body - Gym - Beginner - Week 7</option>
                                                    <option value="227">Bikini Body - Gym - Beginner - Week 8</option>
                                                    <option value="209">Bikini Body - Gym - Beginner - Week 9</option>
                                                    <option value="25">Bikini Body - Gym - Intermediate - Week 1</option>
                                                    <option value="34">Bikini Body - Gym - Intermediate - Week 10</option>
                                                    <option value="35">Bikini Body - Gym - Intermediate - Week 11</option>
                                                    <option value="36">Bikini Body - Gym - Intermediate - Week 12</option>
                                                    <option value="26">Bikini Body - Gym - Intermediate - Week 2</option>
                                                    <option value="27">Bikini Body - Gym - Intermediate - Week 3</option>
                                                    <option value="28">Bikini Body - Gym - Intermediate - Week 4</option>
                                                    <option value="29">Bikini Body - Gym - Intermediate - Week 5</option>
                                                    <option value="30">Bikini Body - Gym - Intermediate - Week 6</option>
                                                    <option value="31">Bikini Body - Gym - Intermediate - Week 7</option>
                                                    <option value="32">Bikini Body - Gym - Intermediate - Week 8</option>
                                                    <option value="33">Bikini Body - Gym - Intermediate - Week 9</option>
                                                    <option value="195">Bikini Body - Home - Advanced - Week 1</option>
                                                    <option value="234">Bikini Body - Home - Advanced - Week 10</option>
                                                    <option value="200">Bikini Body - Home - Advanced - Week 11</option>
                                                    <option value="235">Bikini Body - Home - Advanced - Week 12</option>
                                                    <option value="230">Bikini Body - Home - Advanced - Week 2</option>
                                                    <option value="196">Bikini Body - Home - Advanced - Week 3</option>
                                                    <option value="231">Bikini Body - Home - Advanced - Week 4</option>
                                                    <option value="197">Bikini Body - Home - Advanced - Week 5</option>
                                                    <option value="232">Bikini Body - Home - Advanced - Week 6</option>
                                                    <option value="198">Bikini Body - Home - Advanced - Week 7</option>
                                                    <option value="233">Bikini Body - Home - Advanced - Week 8</option>
                                                    <option value="199">Bikini Body - Home - Advanced - Week 9</option>
                                                    <option value="37">Bikini Body - Home Intermediate - Week 1</option>
                                                    <option value="46">Bikini Body - Home Intermediate - Week 10</option>
                                                    <option value="47">Bikini Body - Home Intermediate - Week 11</option>
                                                    <option value="48">Bikini Body - Home Intermediate - Week 12</option>
                                                    <option value="38">Bikini Body - Home Intermediate - Week 2</option>
                                                    <option value="39">Bikini Body - Home Intermediate - Week 3</option>
                                                    <option value="40">Bikini Body - Home Intermediate - Week 4</option>
                                                    <option value="41">Bikini Body - Home Intermediate - Week 5</option>
                                                    <option value="42">Bikini Body - Home Intermediate - Week 6</option>
                                                    <option value="43">Bikini Body - Home Intermediate - Week 7</option>
                                                    <option value="44">Bikini Body - Home Intermediate - Week 8</option>
                                                    <option value="45">Bikini Body - Home Intermediate - Week 9</option>
                                                    <option value="382">Booty + ABS - GYM - Intermediate - Week 1</option>
                                                    <option value="383">Booty + ABS - GYM - Intermediate - Week 2</option>
                                                    <option value="384">Booty + ABS - GYM - Intermediate - Week 3</option>
                                                    <option value="385">Booty + ABS - GYM - Intermediate - Week 4</option>
                                                    <option value="386">Booty + ABS - GYM - Intermediate - Week 5</option>
                                                    <option value="387">Booty + ABS - GYM - Intermediate - Week 6</option>
                                                    <option value="91">Booty + ABS - Home - Intermediate - Week 1</option>
                                                    <option value="92">Booty + ABS - Home - Intermediate - Week 2</option>
                                                    <option value="93">Booty + ABS - Home - Intermediate - Week 3</option>
                                                    <option value="94">Booty + ABS - Home - Intermediate - Week 4</option>
                                                    <option value="95">Booty + ABS - Home - Intermediate - Week 5</option>
                                                    <option value="96">Booty + ABS - Home - Intermediate - Week 6</option>
                                                    <option value="248">Building the "X" Shape: Gym Advanced - Week 1</option>
                                                    <option value="424">Building the "X" Shape: Gym Advanced - Week 10</option>
                                                    <option value="253">Building the "X" Shape: Gym Advanced - Week 11</option>
                                                    <option value="425">Building the "X" Shape: Gym Advanced - Week 12</option>
                                                    <option value="294">Building the "X" Shape: Gym Advanced - Week 2</option>
                                                    <option value="249">Building the "X" Shape: Gym Advanced - Week 3</option>
                                                    <option value="295">Building the "X" Shape: Gym Advanced - Week 4</option>
                                                    <option value="250">Building the "X" Shape: Gym Advanced - Week 5</option>
                                                    <option value="370">Building the "X" Shape: Gym Advanced - Week 6</option>
                                                    <option value="251">Building the "X" Shape: Gym Advanced - Week 7</option>
                                                    <option value="423">Building the "X" Shape: Gym Advanced - Week 8</option>
                                                    <option value="252">Building the "X" Shape: Gym Advanced - Week 9</option>
                                                    <option value="260">Building the "X" Shape: Gym Beginner - Week 1</option>
                                                    <option value="419">Building the "X" Shape: Gym Beginner - Week 10</option>
                                                    <option value="265">Building the "X" Shape: Gym Beginner - Week 11</option>
                                                    <option value="420">Building the "X" Shape: Gym Beginner - Week 12</option>
                                                    <option value="284">Building the "X" Shape: Gym Beginner - Week 2</option>
                                                    <option value="261">Building the "X" Shape: Gym Beginner - Week 3</option>
                                                    <option value="293">Building the "X" Shape: Gym Beginner - Week 4</option>
                                                    <option value="262">Building the "X" Shape: Gym Beginner - Week 5</option>
                                                    <option value="372">Building the "X" Shape: Gym Beginner - Week 6</option>
                                                    <option value="263">Building the "X" Shape: Gym Beginner - Week 7</option>
                                                    <option value="395">Building the "X" Shape: Gym Beginner - Week 8</option>
                                                    <option value="264">Building the "X" Shape: Gym Beginner - Week 9</option>
                                                    <option value="297">Building the "X" Shape: Gym Intermediate - Week 4</option>
                                                    <option value="254">Building the "X" Shape: Gym Intermediate - Week 1</option>
                                                    <option value="421">Building the "X" Shape: Gym Intermediate - Week 10</option>
                                                    <option value="259">Building the "X" Shape: Gym Intermediate - Week 11</option>
                                                    <option value="422">Building the "X" Shape: Gym Intermediate - Week 12</option>
                                                    <option value="296">Building the "X" Shape: Gym Intermediate - Week 2</option>
                                                    <option value="255">Building the "X" Shape: Gym Intermediate - Week 3</option>
                                                    <option value="256">Building the "X" Shape: Gym Intermediate - Week 5</option>
                                                    <option value="371">Building the "X" Shape: Gym Intermediate - Week 6</option>
                                                    <option value="257">Building the "X" Shape: Gym Intermediate - Week 7</option>
                                                    <option value="396">Building the "X" Shape: Gym Intermediate - Week 8</option>
                                                    <option value="258">Building the "X" Shape: Gym Intermediate - Week 9</option>
                                                    <option value="266">Building the "X" Shape: Home Advanced - Week 1</option>
                                                    <option value="374">Building the "X" Shape: Home Advanced - Week 10</option>
                                                    <option value="271">Building the "X" Shape: Home Advanced - Week 11</option>
                                                    <option value="375">Building the "X" Shape: Home Advanced - Week 12</option>
                                                    <option value="289">Building the "X" Shape: Home Advanced - Week 2</option>
                                                    <option value="267">Building the "X" Shape: Home Advanced - Week 3</option>
                                                    <option value="290">Building the "X" Shape: Home Advanced - Week 4</option>
                                                    <option value="268">Building the "X" Shape: Home Advanced - Week 5</option>
                                                    <option value="369">Building the "X" Shape: Home Advanced - Week 6</option>
                                                    <option value="269">Building the "X" Shape: Home Advanced - Week 7</option>
                                                    <option value="373">Building the "X" Shape: Home Advanced - Week 8</option>
                                                    <option value="270">Building the "X" Shape: Home Advanced - Week 9</option>
                                                    <option value="49">Building the "X" Shape: Home Beginner - Week 1</option>
                                                    <option value="345">Building the "X" Shape: Home Beginner - Week 10</option>
                                                    <option value="59">Building the "X" Shape: Home Beginner - Week 11</option>
                                                    <option value="346">Building the "X" Shape: Home Beginner - Week 12</option>
                                                    <option value="285">Building the "X" Shape: Home Beginner - Week 2</option>
                                                    <option value="51">Building the "X" Shape: Home Beginner - Week 3</option>
                                                    <option value="286">Building the "X" Shape: Home Beginner - Week 4</option>
                                                    <option value="53">Building the "X" Shape: Home Beginner - Week 5</option>
                                                    <option value="343">Building the "X" Shape: Home Beginner - Week 6</option>
                                                    <option value="55">Building the "X" Shape: Home Beginner - Week 7</option>
                                                    <option value="344">Building the "X" Shape: Home Beginner - Week 8</option>
                                                    <option value="57">Building the "X" Shape: Home Beginner - Week 9</option>
                                                    <option value="236">Building the "X" Shape: Home Intermediate - Week 1</option>
                                                    <option value="359">Building the "X" Shape: Home Intermediate - Week 10</option>
                                                    <option value="241">Building the "X" Shape: Home Intermediate - Week 11</option>
                                                    <option value="360">Building the "X" Shape: Home Intermediate - Week 12</option>
                                                    <option value="287">Building the "X" Shape: Home Intermediate - Week 2</option>
                                                    <option value="237">Building the "X" Shape: Home Intermediate - Week 3</option>
                                                    <option value="288">Building the "X" Shape: Home Intermediate - Week 4</option>
                                                    <option value="238">Building the "X" Shape: Home Intermediate - Week 5</option>
                                                    <option value="347">Building the "X" Shape: Home Intermediate - Week 6</option>
                                                    <option value="239">Building the "X" Shape: Home Intermediate - Week 7</option>
                                                    <option value="348">Building the "X" Shape: Home Intermediate - Week 8</option>
                                                    <option value="240">Building the "X" Shape: Home Intermediate - Week 9</option>
                                                    <option value="431">Dumbbell Only Half Hour PowHer - Week 1</option>
                                                    <option value="441">Dumbbell Only Half Hour PowHer - Week 10</option>
                                                    <option value="436">Dumbbell Only Half Hour PowHer - Week 11</option>
                                                    <option value="442">Dumbbell Only Half Hour PowHer - Week 12</option>
                                                    <option value="437">Dumbbell Only Half Hour PowHer - Week 2</option>
                                                    <option value="432">Dumbbell Only Half Hour PowHer - Week 3</option>
                                                    <option value="438">Dumbbell Only Half Hour PowHer - Week 4</option>
                                                    <option value="433">Dumbbell Only Half Hour PowHer - Week 5</option>
                                                    <option value="439">Dumbbell Only Half Hour PowHer - Week 6</option>
                                                    <option value="434">Dumbbell Only Half Hour PowHer - Week 7</option>
                                                    <option value="440">Dumbbell Only Half Hour PowHer - Week 8</option>
                                                    <option value="435">Dumbbell Only Half Hour PowHer - Week 9</option>
                                                    <option value="401">Half Hour PowHer - Week 1</option>
                                                    <option value="426">Half Hour PowHer - Week 10</option>
                                                    <option value="427">Half Hour PowHer - Week 11</option>
                                                    <option value="428">Half Hour PowHer - Week 12</option>
                                                    <option value="406">Half Hour PowHer - Week 2</option>
                                                    <option value="402">Half Hour PowHer - Week 3</option>
                                                    <option value="403">Half Hour PowHer - Week 4</option>
                                                    <option value="415">Half Hour PowHer - Week 5</option>
                                                    <option value="416">Half Hour PowHer - Week 6</option>
                                                    <option value="404">Half Hour PowHer - Week 7</option>
                                                    <option value="417">Half Hour PowHer - Week 8</option>
                                                    <option value="418">Half Hour PowHer - Week 9</option>
                                                    <option value="306">PostPartum HealHer - Home or Gym - Week 1 - Post Partum HealHer</option>
                                                    <option value="307">PostPartum HealHer - Home or Gym - Week 2 - Post Partum HealHer</option>
                                                    <option value="308">PostPartum HealHer - Home or Gym - Week 3 - Post Partum HealHer</option>
                                                    <option value="309">PostPartum HealHer - Home or Gym - Week 4 - Post Partum HealHer</option>
                                                    <option value="310">PostPartum HealHer - Home or Gym - Week 5 - Post Partum HealHer</option>
                                                    <option value="311">PostPartum HealHer - Home or Gym - Week 6 - Post Partum HealHer</option>
                                                    <option value="319">PowHER 1.0 - Home - Advanced - Week 1</option>
                                                    <option value="380">PowHER 1.0 - Home - Advanced - Week 10</option>
                                                    <option value="324">PowHER 1.0 - Home - Advanced - Week 11</option>
                                                    <option value="381">PowHER 1.0 - Home - Advanced - Week 12</option>
                                                    <option value="376">PowHER 1.0 - Home - Advanced - Week 2</option>
                                                    <option value="320">PowHER 1.0 - Home - Advanced - Week 3</option>
                                                    <option value="377">PowHER 1.0 - Home - Advanced - Week 4</option>
                                                    <option value="321">PowHER 1.0 - Home - Advanced - Week 5</option>
                                                    <option value="378">PowHER 1.0 - Home - Advanced - Week 6</option>
                                                    <option value="322">PowHER 1.0 - Home - Advanced - Week 7</option>
                                                    <option value="379">PowHER 1.0 - Home - Advanced - Week 8</option>
                                                    <option value="323">PowHER 1.0 - Home - Advanced - Week 9</option>
                                                    <option value="61">PowHer 1.0 - Gym - Beginner - Week 1</option>
                                                    <option value="71">PowHer 1.0 - Gym - Beginner - Week 11</option>
                                                    <option value="429">PowHer 1.0 - Gym - Beginner - Week 2</option>
                                                    <option value="63">PowHer 1.0 - Gym - Beginner - Week 3</option>
                                                    <option value="430">PowHer 1.0 - Gym - Beginner - Week 4</option>
                                                    <option value="65">PowHer 1.0 - Gym - Beginner - Week 5</option>
                                                    <option value="67">PowHer 1.0 - Gym - Beginner - Week 7</option>
                                                    <option value="69">PowHer 1.0 - Gym - Beginner - Week 9</option>
                                                    <option value="328">PowHer 1.0 - Gym - Intermediate - Week 1</option>
                                                    <option value="333">PowHer 1.0 - Gym - Intermediate - Week 11</option>
                                                    <option value="329">PowHer 1.0 - Gym - Intermediate - Week 3</option>
                                                    <option value="330">PowHer 1.0 - Gym - Intermediate - Week 5</option>
                                                    <option value="331">PowHer 1.0 - Gym - Intermediate - Week 7</option>
                                                    <option value="332">PowHer 1.0 - Gym - Intermediate - Week 9</option>
                                                    <option value="73">PowHer 1.0 - Home - Beginner - Week 1</option>
                                                    <option value="351">PowHer 1.0 - Home - Beginner - Week 10</option>
                                                    <option value="83">PowHer 1.0 - Home - Beginner - Week 11</option>
                                                    <option value="352">PowHer 1.0 - Home - Beginner - Week 12</option>
                                                    <option value="325">PowHer 1.0 - Home - Beginner - Week 2</option>
                                                    <option value="75">PowHer 1.0 - Home - Beginner - Week 3</option>
                                                    <option value="326">PowHer 1.0 - Home - Beginner - Week 4</option>
                                                    <option value="77">PowHer 1.0 - Home - Beginner - Week 5</option>
                                                    <option value="349">PowHer 1.0 - Home - Beginner - Week 6</option>
                                                    <option value="79">PowHer 1.0 - Home - Beginner - Week 7</option>
                                                    <option value="350">PowHer 1.0 - Home - Beginner - Week 8</option>
                                                    <option value="81">PowHer 1.0 - Home - Beginner - Week 9</option>
                                                    <option value="313">PowHer 1.0 - Home - Intermediate - Week 1</option>
                                                    <option value="357">PowHer 1.0 - Home - Intermediate - Week 10</option>
                                                    <option value="327">PowHer 1.0 - Home - Intermediate - Week 11</option>
                                                    <option value="358">PowHer 1.0 - Home - Intermediate - Week 12</option>
                                                    <option value="353">PowHer 1.0 - Home - Intermediate - Week 2</option>
                                                    <option value="314">PowHer 1.0 - Home - Intermediate - Week 3</option>
                                                    <option value="354">PowHer 1.0 - Home - Intermediate - Week 4</option>
                                                    <option value="315">PowHer 1.0 - Home - Intermediate - Week 5</option>
                                                    <option value="355">PowHer 1.0 - Home - Intermediate - Week 6</option>
                                                    <option value="316">PowHer 1.0 - Home - Intermediate - Week 7</option>
                                                    <option value="356">PowHer 1.0 - Home - Intermediate - Week 8</option>
                                                    <option value="317">PowHer 1.0 - Home - Intermediate - Week 9</option>
                                                    <option value="300">PowHer Push - Pull Program - Week 1</option>
                                                    <option value="301">PowHer Push - Pull Program - Week 2</option>
                                                    <option value="302">PowHer Push - Pull Program - Week 3</option>
                                                    <option value="303">PowHer Push - Pull Program - Week 4</option>
                                                    <option value="304">PowHer Push - Pull Program - Week 5</option>
                                                    <option value="334">Powher 1.0 - Gym - Advanced - Week 1</option>
                                                    <option value="340">Powher 1.0 - Gym - Advanced - Week 11</option>
                                                    <option value="335">Powher 1.0 - Gym - Advanced - Week 3</option>
                                                    <option value="336">Powher 1.0 - Gym - Advanced - Week 5</option>
                                                    <option value="337">Powher 1.0 - Gym - Advanced - Week 7</option>
                                                    <option value="338">Powher 1.0 - Gym - Advanced - Week 9</option>
                                                    <option value="97">Pump Your Bump - Home or Gym - Week 1</option>
                                                    <option value="106">Pump Your Bump - Home or Gym - Week 10</option>
                                                    <option value="107">Pump Your Bump - Home or Gym - Week 11</option>
                                                    <option value="108">Pump Your Bump - Home or Gym - Week 12</option>
                                                    <option value="318">Pump Your Bump - Home or Gym - Week 2</option>
                                                    <option value="99">Pump Your Bump - Home or Gym - Week 3</option>
                                                    <option value="100">Pump Your Bump - Home or Gym - Week 4</option>
                                                    <option value="101">Pump Your Bump - Home or Gym - Week 5</option>
                                                    <option value="102">Pump Your Bump - Home or Gym - Week 6</option>
                                                    <option value="103">Pump Your Bump - Home or Gym - Week 7</option>
                                                    <option value="104">Pump Your Bump - Home or Gym - Week 8</option>
                                                    <option value="105">Pump Your Bump - Home or Gym - Week 9</option>
                                                    <option value="151">Strength 1.0 - GYM - Advanced - Week 1</option>
                                                    <option value="399">Strength 1.0 - GYM - Advanced - Week 10</option>
                                                    <option value="161">Strength 1.0 - GYM - Advanced - Week 11</option>
                                                    <option value="400">Strength 1.0 - GYM - Advanced - Week 12</option>
                                                    <option value="298">Strength 1.0 - GYM - Advanced - Week 2</option>
                                                    <option value="153">Strength 1.0 - GYM - Advanced - Week 3</option>
                                                    <option value="299">Strength 1.0 - GYM - Advanced - Week 4</option>
                                                    <option value="155">Strength 1.0 - GYM - Advanced - Week 5</option>
                                                    <option value="368">Strength 1.0 - GYM - Advanced - Week 6</option>
                                                    <option value="157">Strength 1.0 - GYM - Advanced - Week 7</option>
                                                    <option value="398">Strength 1.0 - GYM - Advanced - Week 8</option>
                                                    <option value="159">Strength 1.0 - GYM - Advanced - Week 9</option>
                                                    <option value="150">Strength 1.0 - GYM - Intermediate - Week 1</option>
                                                    <option value="393">Strength 1.0 - GYM - Intermediate - Week 10</option>
                                                    <option value="160">Strength 1.0 - GYM - Intermediate - Week 11</option>
                                                    <option value="394">Strength 1.0 - GYM - Intermediate - Week 12</option>
                                                    <option value="192">Strength 1.0 - GYM - Intermediate - Week 2</option>
                                                    <option value="152">Strength 1.0 - GYM - Intermediate - Week 3</option>
                                                    <option value="194">Strength 1.0 - GYM - Intermediate - Week 4</option>
                                                    <option value="154">Strength 1.0 - GYM - Intermediate - Week 5</option>
                                                    <option value="367">Strength 1.0 - GYM - Intermediate - Week 6</option>
                                                    <option value="156">Strength 1.0 - GYM - Intermediate - Week 7</option>
                                                    <option value="392">Strength 1.0 - GYM - Intermediate - Week 8</option>
                                                    <option value="158">Strength 1.0 - GYM - Intermediate - Week 9</option>
                                                    <option value="3">Strength 1.0 - Gym - Beginner - Week 1</option>
                                                    <option value="12">Strength 1.0 - Gym - Beginner - Week 10</option>
                                                    <option value="13">Strength 1.0 - Gym - Beginner - Week 11</option>
                                                    <option value="14">Strength 1.0 - Gym - Beginner - Week 12</option>
                                                    <option value="4">Strength 1.0 - Gym - Beginner - Week 2</option>
                                                    <option value="5">Strength 1.0 - Gym - Beginner - Week 3</option>
                                                    <option value="6">Strength 1.0 - Gym - Beginner - Week 4</option>
                                                    <option value="7">Strength 1.0 - Gym - Beginner - Week 5</option>
                                                    <option value="8">Strength 1.0 - Gym - Beginner - Week 6</option>
                                                    <option value="9">Strength 1.0 - Gym - Beginner - Week 7</option>
                                                    <option value="10">Strength 1.0 - Gym - Beginner - Week 8</option>
                                                    <option value="11">Strength 1.0 - Gym - Beginner - Week 9</option>
                                                    <option value="134">Strength 1.0 - Home - Advanced - Week 1</option>
                                                    <option value="282">Strength 1.0 - Home - Advanced - Week 10</option>
                                                    <option value="142">Strength 1.0 - Home - Advanced - Week 11</option>
                                                    <option value="283">Strength 1.0 - Home - Advanced - Week 12</option>
                                                    <option value="278">Strength 1.0 - Home - Advanced - Week 2</option>
                                                    <option value="138">Strength 1.0 - Home - Advanced - Week 3</option>
                                                    <option value="279">Strength 1.0 - Home - Advanced - Week 4</option>
                                                    <option value="139">Strength 1.0 - Home - Advanced - Week 5</option>
                                                    <option value="280">Strength 1.0 - Home - Advanced - Week 6</option>
                                                    <option value="140">Strength 1.0 - Home - Advanced - Week 7</option>
                                                    <option value="281">Strength 1.0 - Home - Advanced - Week 8</option>
                                                    <option value="141">Strength 1.0 - Home - Advanced - Week 9</option>
                                                    <option value="1">Strength 1.0 - Home - Beginner - Week 1</option>
                                                    <option value="22">Strength 1.0 - Home - Beginner - Week 10</option>
                                                    <option value="23">Strength 1.0 - Home - Beginner - Week 11</option>
                                                    <option value="24">Strength 1.0 - Home - Beginner - Week 12</option>
                                                    <option value="2">Strength 1.0 - Home - Beginner - Week 2</option>
                                                    <option value="15">Strength 1.0 - Home - Beginner - Week 3</option>
                                                    <option value="16">Strength 1.0 - Home - Beginner - Week 4</option>
                                                    <option value="17">Strength 1.0 - Home - Beginner - Week 5</option>
                                                    <option value="18">Strength 1.0 - Home - Beginner - Week 6</option>
                                                    <option value="19">Strength 1.0 - Home - Beginner - Week 7</option>
                                                    <option value="20">Strength 1.0 - Home - Beginner - Week 8</option>
                                                    <option value="21">Strength 1.0 - Home - Beginner - Week 9</option>
                                                    <option value="144">Strength 1.0 - Home - Intermediate - Week 1</option>
                                                    <option value="246">Strength 1.0 - Home - Intermediate - Week 10</option>
                                                    <option value="149">Strength 1.0 - Home - Intermediate - Week 11</option>
                                                    <option value="247">Strength 1.0 - Home - Intermediate - Week 12</option>
                                                    <option value="242">Strength 1.0 - Home - Intermediate - Week 2</option>
                                                    <option value="145">Strength 1.0 - Home - Intermediate - Week 3</option>
                                                    <option value="243">Strength 1.0 - Home - Intermediate - Week 4</option>
                                                    <option value="146">Strength 1.0 - Home - Intermediate - Week 5</option>
                                                    <option value="244">Strength 1.0 - Home - Intermediate - Week 6</option>
                                                    <option value="147">Strength 1.0 - Home - Intermediate - Week 7</option>
                                                    <option value="245">Strength 1.0 - Home - Intermediate - Week 8</option>
                                                    <option value="148">Strength 1.0 - Home - Intermediate - Week 9</option>
                                                    <option value="272">Strength 2.0 Gym - Advanced - Week 1</option>
                                                    <option value="411">Strength 2.0 Gym - Advanced - Week 10</option>
                                                    <option value="277">Strength 2.0 Gym - Advanced - Week 11</option>
                                                    <option value="412">Strength 2.0 Gym - Advanced - Week 12</option>
                                                    <option value="341">Strength 2.0 Gym - Advanced - Week 2</option>
                                                    <option value="273">Strength 2.0 Gym - Advanced - Week 3</option>
                                                    <option value="342">Strength 2.0 Gym - Advanced - Week 4</option>
                                                    <option value="274">Strength 2.0 Gym - Advanced - Week 5</option>
                                                    <option value="407">Strength 2.0 Gym - Advanced - Week 6</option>
                                                    <option value="275">Strength 2.0 Gym - Advanced - Week 7</option>
                                                    <option value="409">Strength 2.0 Gym - Advanced - Week 8</option>
                                                    <option value="276">Strength 2.0 Gym - Advanced - Week 9</option>
                                                    <option value="109">Strength 2.0 Gym - Intermediate - Week 1</option>
                                                    <option value="410">Strength 2.0 Gym - Intermediate - Week 10</option>
                                                    <option value="119">Strength 2.0 Gym - Intermediate - Week 11</option>
                                                    <option value="413">Strength 2.0 Gym - Intermediate - Week 12</option>
                                                    <option value="361">Strength 2.0 Gym - Intermediate - Week 2</option>
                                                    <option value="111">Strength 2.0 Gym - Intermediate - Week 3</option>
                                                    <option value="362">Strength 2.0 Gym - Intermediate - Week 4</option>
                                                    <option value="113">Strength 2.0 Gym - Intermediate - Week 5</option>
                                                    <option value="405">Strength 2.0 Gym - Intermediate - Week 6</option>
                                                    <option value="115">Strength 2.0 Gym - Intermediate - Week 7</option>
                                                    <option value="408">Strength 2.0 Gym - Intermediate - Week 8</option>
                                                    <option value="117">Strength 2.0 Gym - Intermediate - Week 9</option>
                                                    <option value="136">TEST - LAURA - Program - TEST week 2</option>
                                                    <option value="137">TEST - LAURA - Program - TEST week 3</option>
                                                    <option value="135">TEST - LAURA - Program - TEST week one</option>
                                                    <option value="363">Tabata 4 Week - Week 1</option>
                                                    <option value="364">Tabata 4 Week - Week 2</option>
                                                    <option value="365">Tabata 4 Week - Week 3</option>
                                                    <option value="366">Tabata 4 Week - Week 4</option>
                                                    <option value="121">ZERO EQUIPMENT Anywhere Program - Week 1</option>
                                                    <option value="131">ZERO EQUIPMENT Anywhere Program - Week 10</option>
                                                    <option value="132">ZERO EQUIPMENT Anywhere Program - Week 11</option>
                                                    <option value="133">ZERO EQUIPMENT Anywhere Program - Week 12</option>
                                                    <option value="122">ZERO EQUIPMENT Anywhere Program - Week 2</option>
                                                    <option value="123">ZERO EQUIPMENT Anywhere Program - Week 3</option>
                                                    <option value="124">ZERO EQUIPMENT Anywhere Program - Week 4</option>
                                                    <option value="125">ZERO EQUIPMENT Anywhere Program - Week 5</option>
                                                    <option value="126">ZERO EQUIPMENT Anywhere Program - Week 6</option>
                                                    <option value="127">ZERO EQUIPMENT Anywhere Program - Week 7</option>
                                                    <option value="128">ZERO EQUIPMENT Anywhere Program - Week 8</option>
                                                    <option value="130">ZERO EQUIPMENT Anywhere Program - Week 9</option>
                                                </select>
                                                <div className="labellist1">
                                                <label>
                                                <input type="checkbox" name="deleted" />
                                                  With Deleted
                                                </label>

                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                   
                                    <hr className="line" />
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="labellist">
                                                <label>Description</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                            <div className="labellist">
                                                <textarea className="form-control" placeholder="Description" name="description"></textarea>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                            <div className='btnlist'>
                                                <button className="cancel">Cancel</button>
                                                <button className="create">Create & Add Another</button>
                                                <button className="create">Create Weeks</button>
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




export default CreateWorkOut