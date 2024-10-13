import React, { useState } from 'react'
import { useStateManager } from 'react-select';
import { salaires_School } from '../../utlis/options/candidatOption';
import { typeContrats } from '../../utlis/options/optionDivers';
import { secteursActivite } from '../../utlis/options/employeurOption';
import axios from 'axios';
import { baseurl } from '../../utlis/url/baseurl';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { OffreCreate } from '../../action/api/offres/OffresAction';
import LoadinButton from '../../components/loading/LoadinButton';
import { useEffect } from 'react';
import { useFetchEntreprise } from '../../action/api/employeur/EmployeurAction';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import { statusPACKS } from '../../utlis/config';
import { handleImageUploadCloudOnly } from '../../action/upload/UploadFileCloud';

const JobPostPage = () => {


    var idEntreprise = getAndCheckLocalStorage(localvalue.recruteurID);
    const { isLoading, errorEntreprise, entreprise } = useFetchEntreprise(idEntreprise)
    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState();
    const [telephone, setTelephone] = useState();
    const [salaire, setSalaire] = useState();
    const [coverPicture, setCoverPicture] = useState('https://lespagesvertesci.net/userfiles/image/f38072ef.jpg');
    const [title_post, setTitlePost] = useState();
    const [areaOffre, setAreaOffre] = useState();
    const [expireDispobility, setExpireDispobility] = useState();
    const [typeContrat, setTypeContrat] = useState();
    const [description, setDescription] = useState();
    const [addresse, setAddresse] = useState();

    const [candidats, setCandidats] = useState([]);








    // Upload de photo

    // Uploader photo de profile
    const [LoadingPhoto, setLoadingPhoto] = useState(false);
    
    const HandleFileInputChangePhoto = async (event) => {
        
        const files = event.target.files[0];
        console.log(files.length);
        setLoadingPhoto(true)
        const url = await handleImageUploadCloudOnly(files, toast);
        if (url) {
            setCoverPicture(url);
            setLoadingPhoto(false)
            // Tu peux maintenant utiliser l'URL, par exemple l'envoyer dans une requête pour sauvegarder l'image dans ta base de données
        }
        setLoadingPhoto(false)
    };




    // toast de erreur validation de champs
    const showErrorToast = (message) => {
        toast.info(message, {
            position: "top-right",
            autoClose: 3000, // Durée d'affichage du toast en millisecondes
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);
    const error = useSelector((state) => state.reducer.error);

    const handleSumit = (event) => {
        event.preventDefault();

        const requiredFields = [
            // boc 1
            "company", "title", "email", "telephone",
            "salaire", "coverPicture", "areaOffre",
            "typeContrat", "description", "addresse"
        ];

        // Vérifiez chaque champ requis.
        for (const field of requiredFields) {
            if (!eval(field)) {
                showErrorToast(
                    //`${field.replace("_", " ")} requis !`
                    `Champs avec * sont obligatoires`
                );
                return; // Arrêtez le traitement si un champ est vide.
            }
        }


        if (entreprise &&
            (entreprise.account.pack == statusPACKS[0] ||
                entreprise.account.pack == statusPACKS[1] ||
                entreprise.account.pack == statusPACKS[2]
            )) {
            dispatch(OffreCreate(company, title, email, telephone,
                salaire, coverPicture, title_post, areaOffre, expireDispobility,
                typeContrat, description, addresse, toast
            ))
        } else {
            toast.error("Votre pack ne nous authorise pas ")
        }


    }



    return (

        <div className="main-content">

            <div className="page-content">


                <main className="crp1m mt-20">


                    <div className="cjiiw cdg1p coz82">

                        <div className="cyzui">

                            <div className="ckjzp c9dke c6to5 cj2th cscbh cyzui coz82 crp1m cx27s">


                                {
                                    /*<header className="c62g5 cmdkn crp1m">
                                    <div className="c7kkg czlxp cf6y5 crp1m c7htb">
    
                                        <a className="cfkm3 chkpc" href="index.html" aria-label="Cruip">
                                            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                <path className="c05gp" d="M13.853 18.14 1 10.643 31 1l-.019.058z"></path>
                                                <path className="crxnc" d="M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </header> */
                                }

                                <div className="cmdkn cggc7">

                                    <div className="cjplb">
                                        <h1 className="cukoz c4q7l ca00q c7csb">Nouvelle offre </h1>
                                        <div className="clvg0">Renseigner les informations pour pour avoir les meilleurs profiles </div>
                                    </div>


                                    <form className="caact" onSubmit={handleSumit}>
                                        <div className="c5cvj cmw6a cfqhd">


                                            <div className="cz2ao">
                                                <div className="cax0a cqnva ckpvk cbs6c"><span className="c0ndj">1.</span> Votre entreprise</div>
                                                <div className="chva6">
                                                    <div>
                                                        <label className="ckncn c9csv cfkm3 ckcgr" for="name">Nom entreprise<span className="ctgjb">*</span></label>
                                                        <input id="name" value={company} onChange={(e) => { setCompany(e.target.value) }} className="cvac0 coz82" type="text" required={true} placeholder="" />
                                                    </div>
                                                    <div>
                                                        <label className="ckncn c9csv cfkm3 ckcgr" for="email">Email <span className="ctgjb">*</span></label>
                                                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="cvac0 coz82" type="email" required={true} />
                                                    </div>
                                                    <div>
                                                        <label className="ckncn c9csv cfkm3 ckcgr" for="email">Telehpone <span className="ctgjb">*</span></label>
                                                        <input id="email" value={telephone} onChange={(e) => { setTelephone(e.target.value) }} className="cvac0 coz82" type="number" required={true} />
                                                    </div>

                                                    <div>
                                                        <label className="ckncn c9csv cfkm3 ckcgr" for="">Addresse de {"localisation"}<span className="ctgjb">*</span></label>
                                                        <input id="email" value={addresse} onChange={(e) => { setAddresse(e.target.value) }} className="cvac0 coz82" type="text" required={true} />
                                                    </div>
                                                    <div>
                                                        <label className="ckncn c9csv cfkm3 ckcgr" for="file">Logo entreprise <span className="clvg0">(optional)</span></label>
                                                        <div className="czlxp crp1m">
                                                            <div className="cyzlo cy9uk">
                                                                <img className="cuiwd c59v3 csm78 ciwnj c7htb cf986"
                                                                    src={`${coverPicture}`}
                                                                    alt="Upload" />
                                                            </div>
                                                            <div>
                                                                <input id="file" type="file" accept='.JPG,.PNG,.JPEG' onChange={HandleFileInputChangePhoto} className="cy5z7 cgbhm cudou ch9ub c5c82 cjgxk ck6se clvg0 cp7ke cgtgg c04ox c94my caxg1 cvzfu cjhjm c9csv coz82 cfkm3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="cz2ao">
                                                <div className="cax0a cqnva ckpvk cbs6c"><span className="c0ndj">2.</span> The role du poste</div>
                                                <div className="chva6">
                                                    <div>
                                                        <label className="ckncn c9csv cfkm3 ckcgr" for="position">Titre du poste <span className="ctgjb">*</span></label>
                                                        <input id="position" value={title} onChange={(e) => { setTitle(e.target.value) }} className="cvac0 coz82" type="text" required="" placeholder="Ingenenieur" />
                                                    </div>
                                                    <div>
                                                        <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="role">Catégorie du poste<span className="cvmpf">*</span></label>
                                                        <select onChange={(e) => { setAreaOffre(e.target.value) }} id="commitment" className="c033a c9csv coz82 cxa4q" required="">
                                                            <option >-- Choix Categorie --</option>
                                                            {
                                                                secteursActivite.map((item) => {
                                                                    return (
                                                                        <option selected={areaOffre == item.label ? true : false} value={item.label}>{item.label}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="commitment">Disponibilté / contrat <span className="cvmpf">*</span></label>
                                                        <select onChange={(e) => { setTypeContrat(e.target.value) }} id="commitment" className="c033a c9csv coz82 cxa4q" required="">
                                                            <option >-- Choix de Disponilité --</option>
                                                            {
                                                                typeContrats.map((item) => {
                                                                    return (
                                                                        <option selected={typeContrat == item.label ? true : false} value={item.label}>{item.label}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="description">Description du job <span className="cvmpf">*</span></label>
                                                        <textarea id="description" value={description} onChange={(e) => { setDescription(e.target.value) }} className="cg34q c9csv coz82 cxa4q" rows="4" required=""></textarea>
                                                    </div>
                                                    <div>
                                                        <label className="ckncn c9csv cfkm3 ckcgr" for="salary">Salaire (FCFA/ mois) <span className="clvg0">(optional)</span></label>
                                                        <select onChange={(e) => { setSalaire(e.target.value) }} id="commitment" className="c033a c9csv coz82 cxa4q" required="">
                                                            <option >-- Choix du Salaire --</option>
                                                            {
                                                                salaires_School.map((item) => {
                                                                    return (
                                                                        <option selected={salaire == item ? true : false} value={item}>{item}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                        <div className="clvg0 cwe8x cqaaz c8nfh">Example: “100,000 - 170,000 / mois”</div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="cz2ao">

                                                {
                                                    /*
                                                    <div className="cax0a cqnva ckpvk cbs6c"><span className="c0ndj">3.</span> Select add-ons and pay</div>
                                                    <div className="chva6">
                                                    <button className="cc906 c6c0t coz82 ciwnj cctbj c3myd  csoof cxcbd clg8g cuiwd">
                                                        <div className="c7kkg czlxp crp1m">
                                                            <div>
                                                                <div className="cax0a ckncn c9csv ckcgr"> your post to stay on top (+$79)</div>
                                                                <div className="clvg0 c9csv cqaaz">4x more views</div>
                                                            </div>
                                                            <div className="cuiwd c59v3 cyzlo ciwnj ca1o4">
                                                                <svg x-show="!" className="c05gp" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z"></path>
                                                                </svg>
                                                                <svg x-show="" className="c29cf" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button x-data="{ highlight: true }" className="cc906 c6c0t coz82 ciwnj cctbj c3myd highlight ? 'csoof cxcbd clg8g' : 'cuiwd'">
                                                        <div className="c7kkg czlxp crp1m">
                                                            <div>
                                                                <div className="cax0a ckncn c9csv ckcgr">Highlight your post in indigo (+$49)</div>
                                                                <div className="clvg0 c9csv cqaaz">2x more views</div>
                                                            </div>
                                                            <div className="cuiwd c59v3 cyzlo ciwnj ca1o4">
                                                                <svg x-show="!highlight" className="c05gp" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z"></path>
                                                                </svg>
                                                                <svg x-show="highlight" className="c29cf" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div> */
                                                }
                                                <div className="cq38v">
                                                    {
                                                        isLoading ?
                                                            <LoadinButton text={"..."} />
                                                            :
                                                            LoadingPhoto ?
                                                                <LoadinButton text={"photo de téléchargement ..."} />
                                                                :
                                                                loading ?
                                                                    <LoadinButton text={"En cours ..."} />
                                                                    :
                                                                    <button type='submit' className=" bg-blue-500 cd99b croe6 cday3 c8dh7 coz82 ct2sf">Appliquer</button>
                                                    }
                                                </div>
                                                {
                                                    /*<div className="cixlf">
                                                    <div className="clvg0 cwe8x">Condition <a className="c5xyh" href="#0">Terms of Service</a> and <a className="c5xyh" href="#0">Privacy Policy</a>.</div>
                                                </div> */
                                                }
                                            </div>
                                        </div>
                                    </form>

                                </div>

                            </div>

                        </div>


                        <div className="c78an cdg1p cd3zq cptbr cn73e ca2z8 cv3zt cb3sj" aria-hidden="true">


                            <div className="cp8r2 c0wb5 ch30j c5u32 clp4d cdf7d cxio3" aria-hidden="true"></div>


                            <div className="cp8r2 c6bzk c5u32 cn73e ca2z8 cxio3" aria-hidden="true">
                                <img src="images/auth-illustration.svg" className="cj4he" width="1440" height="900" alt="Page Illustration" />
                            </div>


                            <div className="chakn c5u32 cj2th cdf7d crp1m">
                                <div className="c1dhf c6tf9 cggc7">
                                    <div className="cq8kw cscbh coz82">
                                        <div className="cj473 chkpc">


                                            <div className="c7tiu ccnwv c04ox c94my ckgol c6q73 caxg1 cd9g6 ciwnj cmlda">
                                                <div className="czlxp calvf crp1m">
                                                    <div className="cpsdf cyzlo">
                                                        <img className="c59v3" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                                            width="88" height="88" alt="Testimonial 04" />
                                                        <svg className="curhz c5u32 cn73e cb3sj" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z"></path>
                                                        </svg>
                                                    </div>
                                                    <figure>
                                                        <blockquote className="cqnva cy3kw cu9ao">
                                                            <p>Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.</p>
                                                        </blockquote>
                                                        <figcaption className="ckncn c9csv">Lisa Smith, developer at <a className="c91mf c29l8" href="#0">AppyYou</a></figcaption>
                                                    </figure>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </main>



            </div>
        </div>
    )
}

export default JobPostPage;