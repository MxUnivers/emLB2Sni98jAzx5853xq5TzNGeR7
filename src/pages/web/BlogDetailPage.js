import React, { useEffect } from 'react';
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
    const idCandidat = getAndCheckLocalStorage(localvalue.candidatID);
    const { isLoading, error, blogs, blogs2 } = BlogAll();
    const { isLoadingC, errorC, candidat } = useFetchCandidat(idCandidat);
    const location = useLocation();
    const { item } = location.state;

    return (
            <div className="page-content mt-[80px]">
                {candidat && candidat.account.pack === statusPACKS[2] ? (
                    <div className="w-full">
                        <main className="mt-10">
                            {item && item.customerName && item.customerPhoto && item.areaPost ? (
                                <div className="mb-4 md:mb-0 w-full max-w-screen relative" style={{ height: '28em' }}>
                                    <div
                                        className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-black to-transparent"
                                    ></div>
                                    <img
                                        src={item.coverPicture}
                                        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                                        alt="Blog Cover"
                                    />
                                    <div className="p-4 absolute bottom-0 left-0 z-20">
                                        <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2 rounded-md">
                                            {item.areaPost}
                                        </span>
                                        <h2 className="text-4xl font-semibold text-white leading-tight">
                                            {item.title}
                                        </h2>
                                        <div className="flex mt-3 items-center">
                                            <img
                                                src={item.customerPhoto}
                                                className="h-12 w-12 rounded-full mr-2 object-cover border-2 border-white"
                                                alt={item.customerName}
                                            />
                                            <div>
                                                <p className="font-semibold text-gray-200 text-sm">{item.customerName}</p>
                                                <p className="text-gray-400 text-xs">
                                                    {moment(item.createdAt).format('DD/MM/YYYY')} at{' '}
                                                    {moment(item.createdAt).format('HH:mm')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null}

                            <div className="px-4 lg:px-0 mt-12 max-w-screen-md mx-auto">
                                {item && item.content ? (
                                    <div className="text-gray-800 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />
                                ) : (
                                    <p className="text-gray-500">No content available for this blog post.</p>
                                )}
                            </div>

                            <div className="mt-1 max-w-screen mx-auto">
                                <FormComment data={item} />
                            </div>

                            
                        </main>
                    </div>
                ) : (
                    <ErrorPrincing
                        title="Access Premium Content"
                        message="This feature is reserved for premium users."
                        route={`${routing.pricing}`}
                    />
                )}
            </div>
    );
};

export default BlogDetailPage;
