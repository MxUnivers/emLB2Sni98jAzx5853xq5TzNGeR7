import React from 'react'
import BourseBarner from '../../components/bourses/BourseBarner';
import BoursesAvantages from '../../components/bourses/BoursesAvantages';
import BoursOthers from '../../components/bourses/BoursOthers';

const BoursesEtudePage = () => {
    return (
        <div className="main-content">
            <div className="page-content mt-16">

                <main className="space-y-40 mb-5">

                    <BourseBarner />
                    <BoursesAvantages />
                    <BoursOthers />

                </main>


            </div>
        </div>
    )
}

export default BoursesEtudePage;
