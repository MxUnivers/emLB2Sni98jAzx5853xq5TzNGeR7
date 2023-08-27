


import React from 'react'
import { BiDollarCircle, BiTimeFive } from 'react-icons/bi'
import { BsCalendarWeek, BsTelephone } from 'react-icons/bs'
import { HiLocationMarker } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import { routing } from '../../utlis/routing';




const CompanyDetailPage = () => {



    const Data = [
        {
            id: 1,
            image: "https://img.icons8.com/fluency/48/null/mac-os.png",
            title: "Web Developer",
            time: "Now",
            location: "Canada",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            company: "Netflix"
        },
        {
            id: 1,
            image: "https://img.icons8.com/fluency/48/null/mac-os.png",
            title: "Web Developer",
            time: "Now",
            location: "Canada",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            company: "Netflix"
        },
        {
            id: 1,
            image: "https://img.icons8.com/fluency/48/null/mac-os.png",
            title: "Web Developer",
            time: "Now",
            location: "Canada",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            company: "Netflix"
        },

    ]

    return (

        <div class="main-content">

            <div class="page-content">


                <section class="section mt-24">
                    <div class="container-fluid px-7 ">
                        <div class="flex  flex-col sm:flex-col md:flex-row lg:flex-row  justify-between">



                            <div class="w-full col-span-5 px-5">

                                <div class="side-bar ms-lg-4">
                                    <div class="card border rounded-lg  shadow-sm job-overview">
                                        <div class="card-body p-4 flex-col flex justify-center items-center">

                                            <div class="w-fullflex flex-col justify-center">
                                                <div class="">
                                                    <img src="assets/images/featured-job/img-10.png" alt=""
                                                        class="img-fluid rounded-full  h-32 w-32" />
                                                </div>
                                                <div class="flex mt-4 flex-col justify-center">
                                                    <i class="uil uil-user icon bg-primary-subtle text-primary"></i>
                                                    <div class="ms-3 flex ">
                                                        <h6 class="fs-14 mb-2"></h6>
                                                        <p class="text-muted mb-0 text-xl text-center ">Product Designer</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="list-unstyled mt-4 mb-0">
                                                <li>

                                                </li>
                                                <li>
                                                    <div class="d-flex mt-4">
                                                        <i
                                                            class="uil uil-star-half-alt icon bg-primary-subtle text-primary"></i>
                                                        <div class="ms-3 flex space-x-2">
                                                            <h6 class="fs-14 mb-2">Employer </h6>
                                                            <p class="text-muted mb-0"> 100-100</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex mt-4">
                                                        <i
                                                            class="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                                                        <div class="ms-3 flex space-x-2">
                                                            <h6 class="fs-14 mb-2">Localisation </h6>
                                                            <p class="text-muted mb-0"> New york</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex mt-4">
                                                        <i
                                                            class="uil uil-graduation-cap icon bg-primary-subtle text-primary"></i>
                                                        <div class="ms-3 flex space-x-2">
                                                            <h6 class="fs-14 mb-2">Qualification</h6>
                                                            <p class="text-muted mb-0 bg-green-400 text-white px-2 py-1 rounded-lg">Bachelor Degree</p>
                                                        </div>
                                                    </div>
                                                </li>



                                            </ul>

                                            <div class="mt-4">
                                                <a href="company-details.html"
                                                    class="btn btn-primary btn-hover w-100 rounded"><i
                                                        class="mdi mdi-eye"></i> View Profile</a>
                                            </div>


                                        </div>
                                    </div>



                                    <div class="mt-4">
                                        <h6 class="fs-16 mb-3 text-2xl">Carte</h6>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1628067715234!5m2!1sen!2sin"
                                            style={{ width: "100%" }} height="250" allowfullscreen="" loading="lazy"></iframe>
                                    </div>
                                </div>

                            </div>








                            <div class="col-span-6">
                                <div class="card job-detail overflow-hidden">
                                    <div>
                                        <div class="job-details-compnay-profile">
                                            <img src="assets/images/featured-job/img-10.png" alt=""
                                                class="img-fluid rounded-3 rounded-3" />
                                        </div>
                                    </div>


                                    <div class="card-body p-4">


                                        <div class="mt-4">
                                            <h5 class="mb-3 text-2xl">A propos de l{"'"}entreprise </h5>
                                            <div class="job-detail-desc">
                                                <p class="text-muted mb-0">As a Product Designer, you will work within a
                                                    Product Delivery Team fused with UX, engineering, product and data
                                                    talent. You will help the team design beautiful interfaces that
                                                    solve business challenges for our clients. We work with a number of
                                                    Tier 1 banks on building web-based applications for AML, KYC and
                                                    Sanctions List management workflows. This role is ideal if you are
                                                    looking to segue your career into the FinTech or Big Data arenas.
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="mt-4">
                                    <h5 class="text-3xl ">Offres d{"'"}emplois</h5>


                                    <main class="flex  w-full items-center mt-10 justify-center bg-white">


                                        <div className=" flex gap-5 justify-center flex-wrap items-center py-3">
                                            {
                                                Data.map((item) => {
                                                    return (
                                                        <div key={item.id} className="group  relative group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] border  hover:bg-blueColor shadow-lg  hover:shadow-3xl ">

                                                            <span className="flex justify-between items-center gap-4">
                                                                <h1 className="text-[16px] font-semibold text-textColor ">{item.title}</h1>
                                                                <span className="flex items-center gap-1 text-gray-400"><BiTimeFive />{item.time}</span>
                                                            </span>

                                                            <h6 className="text-gray-400">{item.location}</h6>
                                                            <p className="text-[13px] text-gray-500 pt-[20px] border-t-[2px] mt-[20px] line-clamp-3 ">
                                                                {item.desc}
                                                            </p>

                                                            <div className="company flex items-center gap-2">
                                                                <img src={item.image} alt="Company Logo" className="w-[10%]" />
                                                                <span className="text-[14px] py-[1rem] block ">
                                                                    {item.company}
                                                                </span>
                                                            </div>

                                                            <button onClick={() => {
                                                                    // handleShow(item);
                                                                }}
                                                                    className="border-[2px] btn btn-success rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor " >Bloquer
                                                                </button>
                                                            
                                                            <a href={`/${routing.job_details}`}>
                                                                <button
                                                                    className="border-[2px] btn btn-success rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-bleu-300 bg-blue-200 group-hover/item:text-textColor " >Details
                                                                </button>
                                                            </a>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </main>






                                </div>

                                <div class="text-center mt-4">
                                    <a href="job-list.html" class="primary-link form-text">Voire plus  <i
                                        class="mdi mdi-arrow-right"></i></a>
                                </div>

                            </div>


                        </div>
                    </div>
                </section>








            </div>
        </div>


    )
}


export default CompanyDetailPage