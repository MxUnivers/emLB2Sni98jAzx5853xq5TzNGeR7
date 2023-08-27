import React from 'react'
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const CandidatPage = () => {


    const [candidatList, setcandidatList] = useState([1, 1, 1, 1, 1, 1]);



    return (
        <div class="main-content">



            <div class="main-content">





                <div className='bg-white mt-24 grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] m-5 max-h-screen'>

                    <form action=''>

                        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-blue-200 p-5 shadow-greyIsh-700'>

                            <div className='flex gap-2 items-center'>
                                <AiOutlineSearch className='text-[25px] icon' />
                                <input type='text' className=' bg-white rounded-lg text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here...' />
                                {/* <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/> */}
                            </div>

                            <div className='flex gap-2 items-center'>
                                <BsHouseDoor className='text-[25px] icon' />
                                <input type='text' className=' bg-white rounded-lg text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Company...' />
                                {/* <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/> */}
                            </div>

                            <div className='flex gap-2 items-center'>
                                <CiLocationOn className='text-[25px] icon' />
                                <input type='text' className=' bg-white rounded-lg text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Location...' />
                                {/* <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/> */}
                            </div>

                            <button className=' h-full p-5 px-10 rounded-[10px] btn btn-primary text-white cursor-pointer bg-blue-600 hover:bg-blue-500'>rechercher</button>
                        </div>
                    </form>



                </div>



                <section class="section">
                    <div class="container-fluid px-5">








                        


                            <div class="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 ">



                                {
                                    candidatList.map((item) => {
                                        return (
                                            <div class="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                <div class="flex justify-end px-4 pt-4">
                                                    <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                                        <span class="sr-only">Open dropdown</span>
                                                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                        </svg>
                                                    </button>
                                                    
                                                    <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                        <ul class="py-2" aria-labelledby="dropdownButton">
                                                            <li>
                                                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="flex flex-col items-center pb-5">
                                                    <img class="w-10 h-10 mb-3 rounded-full shadow-lg"
                                                        src="assets/images/user/img-01.jpg"
                                                        alt="Bonnie image" />
                                                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                                                    <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                                    <div class="flex mt-4 space-x-3 md:mt-6">
                                                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Profile</a>
                                                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>



                    </div>
                </section>









            </div>
        </div>
    )
}

export default CandidatPage;