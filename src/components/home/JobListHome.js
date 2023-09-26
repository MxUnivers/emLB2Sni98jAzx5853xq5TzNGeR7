import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
// import { AnnonceGetAll } from '../../action/api/annonces/AnnoncesAction';
import JobCard from '../job/JobCard';
import OffreGetAll from '../../action/api/offres/OffresAction';
import { routing } from '../../utlis/routing';
import LoadingCompo1 from '../loading/LoadingCompo1';

const JobListHome = () => {

    const { isLoading, error, offres, offres2 } = OffreGetAll();



    return (
        <section class="py-20 bg-gray-50 dark:bg-neutral-700">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-5">
                    <div class="mb-5 text-center">
                        <h3 class="mb-3 text-3xl text-gray-900 dark:text-gray-50">Job Récement postées</h3>
                        <p class="mb-5 text-gray-500 whitespace-pre-line dark:text-gray-300">Post a job to tell us
                            about your project. We{"'"}ll quickly match you with the right <br /> freelancers.</p>
                    </div>
                </div>
                <div class="nav-tabs chart-tabpill">
                    <div class="grid grid-cols-12">
                        <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                            <div
                                class="p-1.5 bg-white dark:bg-neutral-900 shadow-lg shadow-gray-100/30 rounded-lg dark:shadow-neutral-700">
                                <ul class="items-center text-sm font-medium text-center text-gray-700 nav md:flex">
                                    <li class="w-full">
                                        <a href="javascript:void(0);" data-tw-toggle="tab"
                                            data-tw-target="recent-job"
                                            class="inline-block w-full py-[12px] px-[18px] dark:text-gray-50 active"
                                            aria-current="page">Recent Jobs</a>
                                    </li>
                                    <li class="w-full">
                                        <a href="javascript:void(0);" data-tw-toggle="tab"
                                            data-tw-target="featured-jobs-tab"
                                            class="inline-block w-full py-[12px] px-[18px] dark:text-gray-50">Featured
                                            Jobs</a>
                                    </li>
                                    <li class="w-full">
                                        <a href="javascript:void(0);" data-tw-toggle="tab"
                                            data-tw-target="freelancer-tab"
                                            class="inline-block w-full py-[12px] px-[18px] dark:text-gray-50">Freelancer</a>
                                    </li>
                                    <li class="w-full">
                                        <a href="javascript:void(0);" data-tw-toggle="tab"
                                            data-tw-target="part-time-tab"
                                            class="inline-block w-full py-[12px] px-[18px] dark:text-gray-50">Part
                                            Time</a>
                                    </li>
                                    <li class="w-full">
                                        <a href="javascript:void(0);" data-tw-toggle="tab"
                                            data-tw-target="full-time-tab"
                                            class="inline-block w-full py-[12px] px-[18px] dark:text-gray-50">Full
                                            Time</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tab-content">
                        <div class="block w-full tab-pane" id="recent-job">
                            <div class="pt-8 ">
                                <div class="space-y-8">

                                    {
                                        isLoading ?
                                            <LoadingCompo1 text={"Loading ..."} />
                                            :
                                            error ?
                                                (<p>Une errue rest suvenue</p>) :
                                                offres.slice(0, 10).map((item) => {
                                                    return (
                                                        <JobCard data={item} />
                                                    )
                                                })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <div class="grid grid-cols-1">
                        <div class="text-center">
                            <a href={`/${routing.job_category}`}
                                class="text-white border-transparent bg-blue-800/70 btn focus:ring focus:ring-custom-500/20">
                                Postuler à plus d{"'"}offres ... <i class="uil uil-arrow-right ms-1">
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default JobListHome;