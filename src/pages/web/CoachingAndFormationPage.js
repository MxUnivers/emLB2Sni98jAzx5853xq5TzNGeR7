import React from 'react'
import BarnerCoachingAndFormation from '../../components/coachingAndFormation/BarnerCoachingAndFormation';
import CoachingFormation1 from '../../components/coachingAndFormation/CoachingFormation1';
import FormationCoaching from '../../components/coachingAndFormation/FormationCoaching';

const CoachingAndFormationPage = () => {
    return (
        <div className="main-content">
            <div className="page-content mt-16">


            <BarnerCoachingAndFormation/>

            <FormationCoaching/>

            <CoachingFormation1/>
            



            </div>
        </div>
    )
}

export default CoachingAndFormationPage;
