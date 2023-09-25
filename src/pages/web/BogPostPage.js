import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { areaPostList } from '../../utlis/options/optionDivers';
import { toast } from 'react-toastify';
import { BlogAdd } from '../../action/api/blog/BlogAction';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';

const BogPostPage = () => {

    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID);

    const [title, settitle] = useState();
    const [areaPost, setareaPost] = useState();
    const [content, setcontent] = useState();
    const [coverPicture, setcoverPicture] = useState();



    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);


    const showErrorToast = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000, // Durée d'affichage du toast en millisecondes
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };


    const hanldePostCandidat = (event) => {
        event.preventDefault();

        // Liste des champs obligatoires
        const requiredFields = [
            "title", "content", "areaPost"
        ];

        // Vérifiez chaque champ requis.
        for (const field of requiredFields) {
            if (!eval(field)) {
                showErrorToast(
                    //`${field.replace("_", " ")} requis !`
                    `les champs avec * obligatoire`
                );
                return; // Arrêtez le traitement si un champ est vide.
            }
        }
        dispatch(BlogAdd(idCandidat, title, coverPicture, areaPost, content, toast))


    }

    return (
        <div class="main-content">
            <div class="page-content mt-28">

                <div class="heading text-center font-bold text-2xl m-5 text-gray-800">Poster une publication</div>
                <form onSubmit={hanldePostCandidat} class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                    <input value={title} onChange={(e) => { settitle(e.target.value) }} class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text" />
                    <select onChange={(e) => { setareaPost(e.target.value) }} class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" >
                        {
                            areaPostList.map((item) => {
                                return (
                                    <option value={item} >{item}</option>
                                )
                            })
                        }
                    </select>

                    <textarea value={content} onChange={(e) => { setcontent(e.target.value) }} class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>

                    {/*<!-- icons -->*/}
                    <div class="icons flex text-gray-500 m-2">
                        <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                        <div class="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                    </div>
                    {/*<!-- buttons -->*/}
                    <div class="buttons flex">
                        <div type="button" class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
                        {
                            loading ?
                                <p>en cours ...</p>
                                :
                                <button  type="submit" class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Poster</button>
                        }
                    </div>
                </form>






            </div>
        </div>
    )
}

export default BogPostPage;
