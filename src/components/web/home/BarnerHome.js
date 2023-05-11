import React from 'react';

const BarnerHome = () => {
    // var  bgImg = "home.jpg";
    var  bgImg = "https://images.pexels.com/photos/4559515/pexels-photo-4559515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    return (
        <div class="main-banner-area-with-bg-image visible  bg-gradient-to-tr from-transparent to-black" style={{backgroundImage:`url('${bgImg}')`}}>
            <div class="container-fluid">
                <div class="main-banner-content-with-search visible" data-speed="0.06" data-revert="true">
                    <h1  class="visible" data-aos-delay="50" data-aos-duration="500">
                    VOUS AVEZ DU TALENT ?
                    <br/> RENCONTREZ L{"'"}OPPORTUNITÉ</h1>

                    <form class="banner-search-form">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 col-md-6">
                                <div class="form-group">
                                    <label><i class="flaticon-edit"></i></label>
                                    <input class="form-control" type="text" placeholder="Keywords"/>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="form-control h-full">
                                    <label><i class="flaticon-placeholder"></i></label>
                                    <select class="selectize-filter form-control">
                                        <option value="1">Location</option>
                                        <option value="2">Canada</option>
                                        <option value="3">Japan</option>
                                        <option value="4">Germany</option>
                                        <option value="5">Switzerland</option>
                                        <option value="6">Australia</option>
                                        <option value="7">United States</option>
                                        <option value="8">New Zealand</option>
                                        <option value="9">United Kingdom</option>
                                        <option value="10">Sweden</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="form-control h-full">
                                    <label><i class="flaticon-list"></i></label>
                                    <select class="selectize-filter form-control">
                                        <option value="1">Category</option>
                                        <option value="2">Assurance</option>
                                        <option value="3">Banking</option>
                                        <option value="4">Copyright</option>
                                        <option value="5">Design</option>
                                        <option value="6">Finance</option>
                                        <option value="7">IT Sector</option>
                                        <option value="8">Management</option>
                                        <option value="9">Photography</option>
                                        <option value="10">Software</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <button type="submit" class="search-btn">Search A Job <i class="ri-search-line"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BarnerHome;