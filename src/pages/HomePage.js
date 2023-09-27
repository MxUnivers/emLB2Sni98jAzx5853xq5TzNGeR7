import React from 'react';
import BarnerHome from '../components/home/BarnerHome';
import CategoryHome from '../components/home/CategoryHome';
import JobListHome from '../components/home/JobListHome';
import HomeProcess from '../components/home/HomeProcess';
import HomeStart from '../components/home/HomeStart';
import HomeTestimonial from '../components/home/HomeTestimonial';
import HomeBlog from '../components/home/HomeBlog';
import HomePartenaires from '../components/home/HomePartenaires';
import HomeSubscrible from '../components/home/HomeSubscrible';
import HomeSolgan from '../components/home/HomeSolgan';
import HomePacks from '../components/home/HomePacks';

const HomePage = () => {
  return (
    <div class="main-content">
      <div class="page-content">


        <BarnerHome />
        <HomeSolgan/>
        <HomePacks/>
        <CategoryHome/>

        <HomeBlog/>
        <JobListHome/>


        <HomeProcess/>
        <HomeStart/>
        
        {
          /*
          <HomeTestimonial/>
          <HomeBlog/>
        <HomePartenaires/>
        <HomeSubscrible/> */
        }


      </div>
    </div>
  )
}

export default HomePage;