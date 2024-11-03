import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingCompo1 from '../../components/loading/LoadingCompo1';
import ErrorPrincing from '../../components/empty/ErrorPrincing';
import BlogCard from '../../components/blog/BlogCard';
import { routing } from '../../utlis/routing';
import { statusPACKS } from '../../utlis/config';
import { AiOutlinePlus } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
import { localvalue } from '../../utlis/storage/localvalue';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import useFetchCandidat from '../../action/api/candidat/CandidatAction';
import BlogAll, { BlogGetAllCategoryCandidat } from '../../action/api/blog/BlogAction';

const BlogProfilePage = () => {
    const navigate = useNavigate();
    const idCandidat = getAndCheckLocalStorage(localvalue.candidatID);
    const { candidat } = useFetchCandidat(idCandidat);
    const { isLoadingBlog, errorBlog, blogs } = BlogAll();
    const { category } = BlogGetAllCategoryCandidat(idCandidat);

    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        telephone: '',
        coverPicture: '',
        adresse: '',
        title_post: '',
        pays: '',
    });

    useEffect(() => {
        if (candidat) {
            setUserInfo({
                username: candidat.username,
                coverPicture: candidat.coverPicture,
                adresse: candidat.adresse,
                email: candidat.email,
                telephone: candidat.telephone,
                title_post: candidat.title_post,
                pays: candidat.pays,
            });
        }
    }, [candidat]);

    const handleNavigateToPost = () => {
        navigate(`/${routing.blog_post}`);
    };

    return (
        <div className="min-h-screen mt-[30px] bg-white p-5">
            <div className="container mx-auto mt-10">
                {candidat && candidat.account.pack === statusPACKS[2] ? (
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <div className="flex flex-col items-center">
                            <img className="w-full h-48 object-cover rounded-lg" src={userInfo.coverPicture} alt="Profile Cover" />
                            <h2 className="text-2xl font-bold mt-4">{userInfo.firstname} {userInfo.lastname}</h2>
                            <ul className="list-none mt-2">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" />
                                        <path
                                            d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                    </svg>
                                    {userInfo.title_post}
                                </li>
                                <li className="flex items-center mt-2">
                                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                    {userInfo.adresse}
                                </li>
                            </ul>
                            
                        </div>

                        <hr/>
                       
                        <div className="mt-6">
                            <form className="flex items-center gap-3">
                                {/* <div className="relative flex-grow">
                                    <GrSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                    <input type="text" placeholder="Recherche..."
                                        className="pl-8 w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                </div> */}
                                
                                {
                                    idCandidat == getAndCheckLocalStorage(localvalue.candidatDetailID) &&
                                    (
                                        <button onClick={handleNavigateToPost}
                                            className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                                            <AiOutlinePlus className="mr-2" />
                                            Poster
                                        </button>
                                    )
                                }

                            </form>
                        </div>
                        <div className="w-full mt-6">

                            {
                                blogs && blogs.length > 0 ?
                                    <div className="container w-full grid md:grid-cols-3 gap-4">
                                        {blogs.map((item) => {
                                            if (getAndCheckLocalStorage(localvalue.candidatID) === item.idcustomerId) {
                                                return (
                                                    <BlogCard key={item.id} item={item} />)
                                            }
                                        })}
                                    </div>
                                    :
                                    <p class="text-center"> Aucun activité publié</p>
                            }

                        </div>
                    </div>
                ) : (
                    <ErrorPrincing title={"Profile Social"} message={"Oups vous n'êtes pas autorisé à accéder à cette fonctionnalité, elle est destinée au Premium."} route={routing.pricing} />
                )}
            </div>
        </div>
    );
};

export default BlogProfilePage;