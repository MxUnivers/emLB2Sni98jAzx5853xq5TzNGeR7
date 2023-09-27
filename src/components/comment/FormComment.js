import React, { useState } from 'react';

import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue, typePersonConnected } from '../../utlis/storage/localvalue';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import CommentAllPost, { AddComment } from '../../action/api/blog/CommentAction';
import LoadinButton from '../loading/LoadinButton';
import moment from 'moment';

const FormComment = ({ data }) => {

    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID) || getAndCheckLocalStorage(localvalue.recruteurID);

    var typeAdmin = getAndCheckLocalStorage(localvalue.TYPEACCESS);
    const [isOpen, setisOpen] = useState(false);

    const [content, setcontent] = useState();


    const handleClose = () => { setisOpen(false) }
    const hanaldeOpen = () => { setisOpen(true) }


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

    const handleSumbitComment = (event) => {
        event.preventDefault();

        const requiredFields = [
            "content"
        ];

        // Vérifiez chaque champ requis.
        for (const field of requiredFields) {
            if (!eval(field)) {
                showErrorToast(
                    //`${field.replace("_", " ")} requis !`
                    `votre commentaire est vide `
                );
                return; // Arrêtez le traitement si un champ est vide.
            }
        }

        dispatch(AddComment(idCandidat, data._id, data._areaPost, data.title, content, toast))



    }

    const { isLoading, errorBlog, comments } = CommentAllPost(data._id)



    return (

        <>
            <div class="flex flex-col mx-auto items-center justify-center shadow-lg mt-2 mb-4 max-w-lg">
                <form onSubmit={handleSumbitComment} class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Poster votre commentaire</h2>
                        <div class="w-full md:w-full px-3 mb-2 mt-2">
                            <textarea value={content} onChange={(e) => { setcontent(e.target.value) }} class="bg-white rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body"
                                placeholder='...' required></textarea>
                        </div>
                        <div class="w-full md:w-full flex items-start md:w-full px-3">
                            <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                                <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="text-xs md:text-sm pt-px text-red-400">Pas de vilain mot s{"'"}il vous plait.</p>
                            </div>
                            <div class="-mr-1 cursor-pointer">
                                {
                                    loading ?
                                        <LoadinButton text={"envois en cours ..."} /> :
                                        <button class="bg-white cursor-pointer py-2 px-3  text-sm text-gray-700 font-medium border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100">
                                            Envoyer
                                        </button>
                                }
                            </div>
                        </div>
                    </div>
                </form>
                <div class="mt pb-5 w-full px-5">
                    <button
                        onClick={() => {
                            hanaldeOpen();
                        }}
                        class="w-full btn btn-sm text-xs bg-blue-600 hover:bg-blue-700 active:bg-blue-800   text-white">
                        Toutes les commentaires
                    </button>
                </div>
            </div>


            {isOpen &&

                (
                    <div className="fixed z-50 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center h-screen">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                            <div className="inline-block w-full sm:w-1/2 mx-auto align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                                <div className="bg-gray-50 px-4 py-3 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Liste de Commentaires</h3>
                                </div>
                                <div className="px-4 py-4">
                                    <div className="max-h-60 overflow-y-auto">

                                        {
                                            isLoading ?
                                                (
                                                    <div class="flex justify-center item-center py-5 px-5">
                                                        <LoadinButton text={"Charement des commentaire en cous "} />
                                                    </div>
                                                ) :
                                                errorBlog ?
                                                    <div class="flex justify-center py-5"> Une erreur est survene </div> :
                                                    <ul className="divide-y divide-gray-200">
                                                        {comments && comments.length > 0 ?
                                                            comments.map((comment) => {
                                                                return (
                                                                    <li className="py-4">
                                                                        <div className="flex space-x-3">
                                                                            <div className="flex-shrink-0">
                                                                                <img
                                                                                    className="h-6 w-6 rounded-full"
                                                                                    src={comment.customerPhoto}
                                                                                    alt="Photo du commentateur"
                                                                                />
                                                                            </div>
                                                                            <div className="space-y-1">
                                                                                <div className="text-sm leading-5 font-medium text-gray-900">{comment.customerName}</div>
                                                                                <div className="text-xs leading-5 text-gray-500">
                                                                                    {moment(comment.createdAt).format("DD/MM/YYYY")} {moment(comment.createdAt).format("HH:MM")}
                                                                                </div>
                                                                                <p className="text-sm leading-5 text-gray-700">{comment.content}</p>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })
                                                            :
                                                            <div class=" flex justify-center items-center py-5 px-5 ">
                                                                <p>Acun commentaires </p>
                                                            </div>
                                                        }
                                                    </ul>
                                        }
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring-blue-500 active:bg-blue-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                            onClick={() => { handleClose() }}
                                        >
                                            Fermer
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                )

            }



        </>
    )
}

export default FormComment;