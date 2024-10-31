import React, { useState } from 'react';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import CommentAllPost, { AddComment } from '../../action/api/blog/CommentAction';
import LoadinButton from '../loading/LoadinButton';
import moment from 'moment';
import RelativeTime from '../dateTime/RelativeTime';

const FormComment = ({ data }) => {
    const idCandidat = getAndCheckLocalStorage(localvalue.candidatID) || getAndCheckLocalStorage(localvalue.recruteurID);
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);
    const { isLoading, errorBlog, comments } = CommentAllPost(data._id);

    const handleSumbitComment = (event) => {
        event.preventDefault();
        if (!content) {
            toast.error("Votre commentaire est vide.");
            return;
        }
        dispatch(AddComment(idCandidat, data._id, data._areaPost, data.title, content, toast));
        setContent(''); // Clear the comment field after submission
    };

    return (
        <div className="max-w-screen flex flex-col mx-auto items-center justify-center shadow-lg mt-6 mb-4 ">
            {/* Comment Form */}
            <form onSubmit={handleSumbitComment} className="max-w-screen bg-white rounded-lg px-4 pt-2">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg font-semibold">Poster votre commentaire</h2>
                    <div className="w-full px-3 mb-2 mt-2">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="bg-white rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                            placeholder="Écrivez votre commentaire ici..."
                            required
                        ></textarea>
                    </div>
                    <div className="w-full  flex items-start px-3">
                        <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                            <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-xs md:text-sm pt-px text-red-400">Pas de vilain mot, s{"'"}il vous plaît.</p>
                        </div>
                        <div className="-mr-1 cursor-pointer">
                            {loading ? (
                                <LoadinButton text="Envoi en cours..." />
                            ) : (
                                <button
                                    type="submit"
                                    className="bg-white cursor-pointer py-2 px-3 text-sm text-gray-700 font-medium border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                                >
                                    Envoyer
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </form>

            {/* Display Comments */}
            <div className="w-full bg-white shadow-lg rounded-lg p-6 mt-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Commentaires</h3>
                {isLoading ? (
                    <div className="flex justify-center py-5">
                        <LoadinButton text="Chargement des commentaires..." />
                    </div>
                ) : errorBlog ? (
                    <div className="flex justify-center py-5">Une erreur est survenue</div>
                ) : comments && comments.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {comments.map((comment) => (
                            <li key={comment._id} className="py-4">
                                <div className="flex space-x-3">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={comment.customerPhoto}
                                            alt="Photo du commentateur"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-sm font-semibold text-gray-900">{comment.customerName}</div>
                                        <div className="text-xs text-gray-500">
                                        {
                                            <RelativeTime date={comment.createdAt}/>
                                        }
                                        </div>
                                        <p className="text-sm text-gray-700 mt-1">{comment.content}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="flex justify-center items-center py-5">
                        <p>Aucun commentaire pour l{"'"}instant.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FormComment;
