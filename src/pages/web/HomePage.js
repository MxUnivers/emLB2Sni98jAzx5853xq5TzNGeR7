import React from 'react'
import BarnerHome from '../../components/web/home/BarnerHome';
import AboutHome from '../../components/web/home/AboutHome';
import PartnerHome from '../../components/web/home/PartnerHome';
import SeekerHome from '../../components/web/home/SeekerHome';
import PlayVideoHome from '../../components/web/home/PlayVideoHome';
import JobListHome from '../../components/web/home/JobListHome';
import FeatureCandidatHome from '../../components/web/home/FeatureCandidatHome';
import OverViewHome from '../../components/web/home/OverViewHome';
import FooterWeb from '../../components/web/FooterWeb';

const HomePage = () => {
    return (
        <div>
            <BarnerHome />
            <AboutHome />
            <PartnerHome />
            <SeekerHome />
            <PlayVideoHome />
            <JobListHome />
            <FeatureCandidatHome />
            <OverViewHome />
        // Footer
            <FooterWeb />
        </div>
    )
}

export default HomePage;