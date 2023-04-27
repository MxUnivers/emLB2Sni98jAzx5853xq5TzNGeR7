import React from 'react'
import BarnerEmployer from '../../../components/web/employer/BarnerEmployer';

const SignupEmployer = () => {
  return (
    <div>


            <div class="main p-10 d-flex flex-column">
            <BarnerEmployer/>
                <div class="submit-resumes-box ">
                    <form>
                        <div class="h-[300px] pt-20">

                        </div>
                        <div class="row">
                            <h3>Information sur votre entreprise</h3>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Your Name</label>
                                    <input type="text" class="form-control" placeholder="Your Name" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Your Email</label>
                                    <input type="text" class="form-control" placeholder="Your Email" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Date of Birth</label>
                                    <input type="text" class="form-control" placeholder="Date of Birth" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Your Phone</label>
                                    <input type="text" class="form-control" placeholder="Your Phone" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Address</label>
                                    <input type="text" class="form-control" placeholder="Address" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Gender</label>

                                    <select class="selectize-filter">
                                        <option value="1">Select</option>
                                        <option value="2">Male</option>
                                        <option value="3">Female</option>
                                        <option value="4">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Description</label>
                                    <textarea cols="30" rows="6" placeholder="Short description about you..." class="form-control"></textarea>
                                </div>
                            </div>

                            <h3>Education</h3>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" placeholder="Title" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Degree</label>
                                    <input type="text" class="form-control" placeholder="Degree" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Institute</label>
                                    <input type="text" class="form-control" placeholder="Institute" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Year</label>
                                    <input type="text" class="form-control" placeholder="Year" />
                                </div>
                            </div>

                            <h3>Skill</h3>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" placeholder="Title Here" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Experience</label>
                                    <input type="text" class="form-control" placeholder="Experience" />
                                </div>
                            </div>

                            <h3>Social Links</h3>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Facebook URL</label>
                                    <input type="text" class="form-control" placeholder="https://www.facebook.com/" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Twitter URL</label>
                                    <input type="text" class="form-control" placeholder="https://twitter.com/" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Linkedin URL</label>
                                    <input type="text" class="form-control" placeholder="https://www.linkedin.com/" />
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label>Instagram URL</label>
                                    <input type="text" class="form-control" placeholder="https://instagram.com/" />
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <button type="submit" class="default-btn">Submit Resumes <i class="flaticon-send"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
  )
}

export default SignupEmployer;