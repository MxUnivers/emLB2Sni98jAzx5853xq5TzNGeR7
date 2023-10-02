import React from 'react'
import BourseBarner from '../../components/bourses/BourseBarner';
import BoursesAvantages from '../../components/bourses/BoursesAvantages';
import BoursOthers from '../../components/bourses/BoursOthers';

const BoursesEtudePage = () => {
    return (
        <div class="main-content">
            <div class="page-content mt-16">

                <main class="space-y-40 mb-5">

                    <BourseBarner />
                    <BoursesAvantages />
                    <BoursOthers />

                </main>


            </div>
        </div>
    )
}

export default BoursesEtudePage;
