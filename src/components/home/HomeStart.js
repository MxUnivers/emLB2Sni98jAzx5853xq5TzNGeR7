import React from 'react'
import { routing } from '../../utlis/routing'

const HomeStart = () => {
    return (
        <section class="py-20 bg-blue-600/20 dark:bg-blue-600/20">
            <div class="container mx-auto">
                <div class="nav-tabs round-pill">
                    <div class="grid items-center grid-cols-12 gap-5">
                        <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                            <div class="text-center">
                                <h2
                                    class="mb-5 text-amber-700/70 text-3xl">
                                    Consultez nos  dernières <span class="text-yellow-500 fw-bold">5 000+</span> 
                                    offres d{"'"}emploi</h2>
                                <p class=" dark:text-amber-700/70">Post a job to tell us about your
                                    project. We{"'"}ll quickly match you with
                                    the right freelancers.</p>
                                <div class="pt-2 mt-5">
                                    <a href={`/${routing.connexion}`}
                                        class="text-white border-transparent bg-blue-800/70 btn hover:-translate-y-2">
                                        S{"'"}inscrire postuler
                                        <i class="align-middle uil uil-rocket ms-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeStart