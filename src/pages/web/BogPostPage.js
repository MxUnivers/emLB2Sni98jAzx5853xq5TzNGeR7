import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { areaPostList } from '../../utlis/options/optionDivers';
import { toast } from 'react-toastify';
import { BlogAdd } from '../../action/api/blog/BlogAction';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import { useEffect } from 'react';

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import axios from 'axios';
import { baseurl } from '../../utlis/url/baseurl';
import { handleImageUploadCloudOnly } from '../../action/upload/UploadFileCloud';





const BogPostPage = () => {

    var idCandidat = getAndCheckLocalStorage(localvalue.candidatID);

    const [title, settitle] = useState();
    const [areaPost, setareaPost] = useState();
    const [content, setcontent] = useState();
    const [coverPicture, setcoverPicture] = useState();

    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                const htmlContent = quill.root.innerHTML;
                setcontent(htmlContent);
            });
        }
    }, [quill]);


    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);
    const error = useSelector((state) => state.reducer.error);


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
            "title", "content", "areaPost", "content"
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



    const [LoadingPhoto, setLoadingPhoto] = useState(false);
    
    const HandleFileInputChangePhoto = async (event) => {
        setLoadingPhoto(true);
        const files = event.target.files[0];
        console.log(files.length);
        if (files.length === 1) {
            const photoUplaod = handleImageUploadCloudOnly(files, toast);
            setcoverPicture(photoUplaod);
            setLoadingPhoto(false);
        }
        setLoadingPhoto(false);
    }

    return (
        <div className="main-content">
            <div className="page-content mt-28">

                <div className="h-min-screem heading  text-center font-bold text-2xl m-5 text-gray-800">Poster votre publication</div>
                <form onSubmit={hanldePostCandidat} className="editor mx-auto mb-28 my-auto w-10/12 flex flex-col text-gray-800  p-4 shadow-lg max-w-2xl">

                    <input type={"text"} required={true} value={title} onChange={(e) => { settitle(e.target.value) }} name="title" id="new-password"
                        className="fzhbbDQ686T8arwvi_bJ jtAJHOc7mn7b4IKRO59D pXhVRBC8yaUNllmIWxln vpDN1VEJLu5FmLkr5WCk __9sbu0yrzdhGIkLWNXl gx_pYWtAG2cJIqhquLbx mveJTCIb2WII7J4sY22F GdTcGtoKP5_bET3syLDl LceKfSImrGKQrtDGkpBV _Vb9igHms0hI1PQcvp_S t6gkcSf0Bt4MLItXvDJ_ olxDi3yL6f0gpdsOFDhx jqg6J89cvxmDiFpnV56r Mmx5lX7HVdrWCgh3EpTP H7KQDhgKsqZaTUouEUQL OyABRrnTV_kvHV7dJ0uE KpCMWe32PQyrSFbZVput q6szSHqGtBufkToFe_s5"
                        placeholder="titre de votre publication " />

                    <div className=" flex flex-col justify-between">
                        <div className="my-5">
                            <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="role">Catégorie du poste<span className="cvmpf">*</span></label>
                            <select required={true} onChange={(e) => { setareaPost(e.target.value) }} id="commitment" className="c033a c9csv coz82 cxa4q" >
                                <option >-- Choix Categorie --</option>
                                {
                                    areaPostList.map((item) => {
                                        return (
                                            <option selected={areaPost == item ? true : false} value={item}>{item}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="my-2">
                            <label className="ckncn c9csv cfkm3 ckcgr" for="file">Image<span className="clvg0">(optional)</span></label>
                            <div className="czlxp crp1m">
                                <div className="cyzlo cy9uk">
                                    <img defaultValue={"https://img.freepik.com/vecteurs-premium/appareil-photo-instantane-images-dans-style-plat-fond-abstrait_668430-117.jpg?w=740"}
                                        className="cuiwd c59v3 csm78 ciwnj c7htb cf986"
                                        src={`${coverPicture}`}
                                        alt="Upload" />
                                </div>
                                <div>
                                    <input id="file" type="file" accept='.JPG,.PNG,.JPEG' onChange={HandleFileInputChangePhoto} className="cy5z7 cgbhm cudou ch9ub c5c82 cjgxk ck6se clvg0 cp7ke cgtgg c04ox c94my caxg1 cvzfu cjhjm c9csv coz82 cfkm3" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*<textarea value={content} onChange={(e) => { setcontent(e.target.value) }} className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"/>*/}

                    <div ref={quillRef} style={{ height: "200px" }}></div>

                    {/*<!-- buttons -->*/}
                    <div className="buttons flex mt-5">
                        <div type="button" className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
                        {
                            LoadingPhoto ?
                                <p className="text-gray-500 animate-puls"> en cours</p>
                                :
                                loading ?
                                    <p>en cours ...</p> :
                                    <button type="submit" className="btn text-white border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
                                        Poster
                                    </button>
                        }
                    </div>
                </form>






            </div>
        </div>
    )
}

export default BogPostPage;
