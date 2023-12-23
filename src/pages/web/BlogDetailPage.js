import React, { useEffect, useState } from 'react'
import BlogAll from '../../action/api/blog/BlogAction';
import moment from 'moment';
import BlogCard from '../../components/blog/BlogCard';
import Carousel from 'react-multi-carousel';
import LoadingBlogBarner from '../../components/loading/LoadingBlogBarner';
import LoadingBlogContainer from '../../components/loading/LoadingBlogBarner2';
import BlogBarnerCard from '../../components/blog/BlogBarnerCard';
import { useLocation } from 'react-router-dom';
import FormComment from '../../components/comment/FormComment';
import { statusPACKS } from '../../utlis/config';
import ErrorPrincing from '../../components/empty/ErrorPrincing';
import { routing } from '../../utlis/routing';
import useFetchCandidat from '../../action/api/candidat/CandidatAction';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';

const BlogDetailPage = () => {

    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID);

    const { isLoading, error, blogs, blogs2 } = BlogAll();
    const { isLoadingC, errorC, candidat } = useFetchCandidat(idCandidat)

    const location = useLocation();
    const { item } = location.state;




    return (
        <div className="main-content">
            <div className="page-content mt-18">
                {
                    candidat && candidat.account.pack == statusPACKS[2] ?
                        <div className="max-w-screen-xl mx-auto">
                            <main className="mt-10">
                                {
                                    item && item.customerName && item.customerPhoto && item.areaPost ?
                                        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: "24em" }}>
                                            <div className="absolute left-0 bottom-0 w-full h-full z-10"
                                                style={{ backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))" }}></div>
                                            <img
                                                src={item.coverPicture}
                                                className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                                            <div className="p-4 absolute bottom-0 left-0 z-20">
                                                <a href="#"
                                                    className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{item.areaPost}</a>
                                                <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                                                    {item.title}
                                                </h2>
                                                <div className="flex mt-3">
                                                    <img src={item.customerPhoto}
                                                        className="h-10 w-10 rounded-full mr-2 object-cover" />
                                                    <div>
                                                        <p className="font-semibold text-gray-200 text-sm"> {item.customerName} </p>
                                                        <p className="font-semibold text-gray-400 text-xs"> {moment(item.createdAt).format("DD/MM/YYYY")} {moment(item.createdAt).format("HH:MM")} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> :
                                        null
                                }

                                <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                                    {
                                        item && item.content ?
                                            <div className="mt-10 mb-10" dangerouslySetInnerHTML={{ __html: item.content }} />
                                            :
                                            null
                                    }
                                </div>

                                <div className=" mt-1 py-1 border-t">
                                    <FormComment data={item} />
                                </div>
                            </main>
                        </div> 
                        :
                        <ErrorPrincing title={"Voire le poste"} message={"Cette Fonctionanbilté est reservé au premium"} route={`${routing.pricing}`} />
                }

            </div>
        </div >
    )
}

export default BlogDetailPage;
