import React, { useState } from 'react';
import { candidatsChoices, competences, languages_school, level_School, salaires_School, years_experience_school } from '../../utlis/options/candidatOption';
import Select from 'react-select';
import { optionPays } from '../../utlis/options/optionDivers';
import { routing } from '../../utlis/routing';
import Stepper from 'react-stepper-horizontal';
import { Button, } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { CandidatSignUp } from '../../action/api/candidat/CandidatAction';
import { employers, existence_entreprise, secteursActivite } from '../../utlis/options/employeurOption';
import { EntrepriseSignUp } from '../../action/api/employeur/EmployeurAction';
import { baseurl } from '../../utlis/url/baseurl';
import axios from 'axios';
import LoadinButton from '../../components/loading/LoadinButton';



const SignUpRecruteurPage = () => {
    // state utile  
    const navigate = useState();


    // state pour un liste candidats
    const [candidats, setcandidats] = useState(candidatsChoices);


    // state pour le bloc etape 1
    const [full_name, setfull_name] = useState();
    const [dateNaissance_entreprise, setdateNaissance_entreprise] = useState();

    const [email_entreprise, setemail_entreprise] = useState();
    const [telephone_entreprise, settelephone_entreprise] = useState();








    // state pour le bloc etape 2
    const [employers_count, setemployers_count] = useState();
    const [salaire_capital, setsalaire_capital] = useState();


    // state pour le bloc etape 2
    const [pays_entreprise, setpays_entreprise] = useState();
    const [addresse_entreprise, setaddresse_entreprise] = useState();
    const [logo, setlogo] = useState("https://lespagesvertesci.net/userfiles/image/f38072ef.jpg")
    const [title_post, settitle_post] = useState();
    const [secteur_activites, setsecteur_activites] = useState([]);
    const [langues, setlangues] = useState([]);
    const [description_entreprise, setdescription_entreprise] = useState();

    // state pour le bloc etape 3

    const [maps_entreprise, setmaps_entreprise] = useState();

    // state pour le bloc etpape 4
    const [site_web, setsite_web] = useState();
    const [facebook_url, setfacebook_url] = useState();
    const [linkedin_url, setlinkedin_url] = useState();
    const [twitter_url, settwitter_url] = useState();
    const [instagram_url, setinstagram_url] = useState();

    // state pour le bloc etape 5
    const [username, setusername] = useState();
    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [email, setemail] = useState();
    const [dateNaissance, setdateNaissance] = useState();
    const [telephone, settelephone] = useState();
    const [password, setpassword] = useState();






    // state pour les etapes d'inscription
    const [step, setStep] = useState(0);
    const nextStep = () => {
        setStep(step + 1);
    };
    const prevStep = () => {
        setStep(step - 1);
    };
    const steps = [
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
    ];



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



    // Uploader photo de profile
    const [LoadingPhoto, setLoadingPhoto] = useState(false);
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader(); fileReader.readAsDataURL(file); fileReader.onload = () => { resolve(fileReader.result); };
            fileReader.onerror = (error) => { reject(error); };
        });
    }
    function uploadSinglePhoto(base64) {
        setLoadingPhoto(true);
        axios.post(`${baseurl.url}/uploadImage`, { image: base64 })
            .then((res) => {
                setlogo(res.data);
                toast.dark("Photo télécharger avec succès")
            })
            .then(() => setLoadingPhoto(false))
            .catch(() => {
                console.log("Photo ,on uploder"); toast.error("Photo non télécharger !")
                setLoadingPhoto(false);
            });
    }
    const HandleFileInputChangePhoto = async (event) => {
        const files = event.target.files;
        console.log(files.length);
        if (files.length === 1) {
            const base64 = await convertBase64(files[0]);
            uploadSinglePhoto(base64); return;
        }
        const base64s = [];
        for (var i = 0; i < files.length; i++) { var base = await convertBase64(files[i]); base64s.push(base); }
    };


    //
    const handleSelectChange1 = (selected) => {
        setsecteur_activites(selected);
    };

    const handleSelectChange2 = (selected) => {
        setlangues(selected);
        console.log(langues);
    };


    // state de redux
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);
    const error = useSelector((state) => state.reducer.error);

    // valider inscription 
    const hanldeSubmitCandidat = (event) => {
        event.preventDefault();

        // Liste des champs obligatoires
        const requiredFields = [
            // boc 1
            "title_post", "dateNaissance_entreprise",
            // bloc 2
            "full_name", "secteur_activites",
            "description_entreprise", "employers_count",
            "salaire_capital", "logo",
            // bloc 3
            "pays_entreprise", "addresse_entreprise", "maps_entreprise",
            // bloc 4 n'est pas utile a cause de la mentalité des employeurs,
            "username", "firstname", "lastname", "email", "telephone", "dateNaissance"
        ];

        // Vérifiez chaque champ requis.
        for (const field of requiredFields) {
            if (!eval(field)) {
                showErrorToast(
                    `${field.replace("_", " ")} requis !`
                    //`Champs avec * sont obligatoires`
                );
                return; // Arrêtez le traitement si un champ est vide.
            }
        }

        dispatch(EntrepriseSignUp(
            username, full_name, firstname, lastname, employers_count, description_entreprise, dateNaissance, dateNaissance_entreprise, email, title_post, logo, salaire_capital, telephone, telephone_entreprise, addresse_entreprise, pays_entreprise, maps_entreprise,
            secteur_activites, site_web, langues, facebook_url, linkedin_url, twitter_url, instagram_url, toast
        ))
        /*var userData = {
            
        } */




    }

    return (
        <main className="crp1m">


            <div className="cjiiw cdg1p coz82">

                <div className="cyzui">

                    <div className="ckjzp c9dke c6to5 cj2th cscbh cyzui coz82 crp1m cx27s">


                        <header className="c62g5 cmdkn crp1m">
                            <div className="c7kkg czlxp cf6y5 crp1m c7htb">

                                <a className="cfkm3 chkpc" href="/" aria-label="Cruip">
                                    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                        <path className="c05gp" d="M13.853 18.14 1 10.643 31 1l-.019.058z"></path>
                                        <path className="crxnc" d="M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z"></path>
                                    </svg>
                                </a>
                            </div>
                        </header>

                        {
                            /*<button type='button' title={"Test notiifcation"} onClick={() => {

                            alert("Salut");
                            toast.success('Opération réussie !');
                        }}  >Test</button>*/
                        }
                        <div className="cmdkn cggc7">

                            <div className="cjplb">
                                <h1 className="cukoz c4q7l ca00q c7csb">Inscription Recruteur </h1>
                                <div className="clvg0">Veilleur suivre les etape pour vous inscrire</div>
                            </div>
                            <form onSubmit={hanldeSubmitCandidat}>


                                <Stepper steps={steps} activeStep={step} />
                                {
                                    step === 0
                                    &&
                                    <div className="cz2ao">
                                        <div className="cax0a cqnva ckpvk cbs6c"><span className="c0ndj">.</span> Compétences</div>
                                        <div className="chva6">


                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="position">Quelle poste occupé(e) vous dans votre enteprise ? <span className="ctgjb">*</span></label>
                                                <input value={title_post} onChange={(e) => { settitle_post(e.target.value) }} className="cvac0 coz82" type="text" required="" placeholder="Ingénieur" />
                                            </div>

                                            <div className="mt-5">
                                                <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="role">Temps d{"'"}existence de votre entreprise (année) <span className="cvmpf"></span></label>
                                                <select onChange={(e) => { setdateNaissance_entreprise(e.target.value) }} id="role" className="c033a c9csv coz82 cxa4q" required="">
                                                <option>-- Choisir --</option>    
                                                {existence_entreprise.map((item) => {
                                                        return (
                                                            <option selected={dateNaissance_entreprise==item? true :false} value={item}>{item}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>



                                        </div>

                                    </div>

                                }



                                {
                                    step === 1
                                    &&
                                    <div className="cz2ao">
                                        <div className="cax0a cqnva ckpvk cbs6c"><span className="c0ndj">.</span> Votre profile entreprise</div>

                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Nom de votre entreprise <span className="cvmpf">*</span></label>
                                                <input value={full_name} onChange={(e) => { setfull_name(e.target.value) }} className="cvac0 coz82" type="text" required={false} />
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <label className="cax0a ckncn c9csv cfkm3 ckcgr" >Secteurs d{"'"}activités de votre entreprise <span className="cvmpf">*</span></label>
                                            <Select
                                                isMulti
                                                required={true}
                                                options={secteursActivite}
                                                value={secteur_activites}
                                                onChange={handleSelectChange1}
                                                placeholder="choisix du/des  secteur(s) d'activité(s)"
                                            />
                                        </div>

                                        <div className="mt-5">
                                            <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="description">Description votre entreprise <span className="cvmpf">*</span></label>
                                            <textarea value={description_entreprise} onChange={(e) => { setdescription_entreprise(e.target.value) }} id="description" className="cg34q c9csv coz82 cxa4q" rows="4" required=""></textarea>
                                        </div>
                                        <div className="mt-5">
                                            <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="role">Nombre d{"'"}employés  <span className="cvmpf">*</span></label>
                                            <select onChange={(e) => { setemployers_count(e.target.value) }} id="role" className="c033a c9csv coz82 cxa4q" required="">
                                                {employers.map((item) => {
                                                    return (
                                                        <option selected={employers_count==item? true :false} value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div className="mt-5">
                                            <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="role">Budget de votre entreprise / année ? ( F CFA )  <span className="cvmpf">*</span></label>
                                            <select required={false} onChange={(e) => { setsalaire_capital(e.target.value) }} className="c033a c9csv coz82 cxa4q">
                                                {salaires_School.map((item) => {
                                                    return (
                                                        <option selected={salaire_capital==item? true :false} value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div className="mt-5">
                                            <label className="ckncn c9csv cfkm3 ckcgr" for="file">Logo entreprise (5 mb max) <span className="cvmpf">*</span></label>
                                            <div className="czlxp crp1m">
                                                <div className="cyzlo cy9uk">
                                                    <img className="cuiwd c59v3 csm78 ciwnj c7htb cf986"
                                                        src={logo}
                                                        alt="Upload" />
                                                </div>
                                                <div>
                                                    <input id="file" type="file" onChange={HandleFileInputChangePhoto} accept=".PNG , .JPG , JPEG" className="cy5z7 cgbhm cudou ch9ub c5c82 cjgxk ck6se clvg0 cp7ke cgtgg c04ox c94my caxg1 cvzfu cjhjm c9csv coz82 cfkm3" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                }
                                {
                                    step === 2
                                    &&
                                    <div className="cz2ao">
                                        <div className="cax0a cqnva ckpvk cbs6c"><span className="c0ndj">.</span>Localisation </div>

                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" >Pays de {"'"}entreprise <span className="cvmpf">*</span></label>
                                                <select required={true} onChange={(e => { setpays_entreprise(e.target.value) })} className="c033a c9csv coz82 cxa4q" >
                                                    {optionPays.map((item) => {
                                                        return (
                                                            <option selected={pays_entreprise==item? true :false} value={item.value}>{item.label}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Addresse précise de votre entreprise <span className="cvmpf">*</span></label>
                                                <input value={addresse_entreprise} onChange={(e) => { setaddresse_entreprise(e.target.value) }} className="cvac0 coz82" type="text" required={false} placeholder="Ville ,Commnune , Quatier ..." />
                                            </div>
                                        </div>

                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Localisation sur la carte google maps <span className="cvmpf"></span></label>
                                                <input value={maps_entreprise} onChange={(e) => { setmaps_entreprise(e.target.value) }} className="cvac0 coz82" type="text" placeholder="https://www.google.ci/maps/etc..." required={false} />
                                            </div>
                                        </div>
                                    </div>
                                }


                                {
                                    step === 3
                                    &&
                                    <div className="cz2ao">
                                        <div className="cax0a cqnva ckpvk cbs6c"><span className="c0ndj">.</span>Réseaux Sociaux </div>


                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Site web <span className="cvmpf"></span></label>
                                                <input value={site_web} onChange={(e) => { setsite_web(e.target.value) }} className="cvac0 coz82" type="text" required={false} placeholder="https://www.site-web.com" />
                                            </div>
                                        </div>
                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Facebook  <span className="cvmpf"></span></label>
                                                <input value={facebook_url} onChange={(e) => { setfacebook_url(e.target.value) }} className="cvac0 coz82" type="text" required={false} placeholder="https://www.facebook.com" />
                                            </div>
                                        </div>
                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Linkedine  <span className="cvmpf"></span></label>
                                                <input value={linkedin_url} onChange={(e) => { setlinkedin_url(e.target.value) }} className="cvac0 coz82" type="text" required={false} placeholder="https://www.linkedin.com" />
                                            </div>
                                        </div>
                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Instagram  <span className="cvmpf"></span></label>
                                                <input value={instagram_url} onChange={(e) => { setinstagram_url(e.target.value) }} className="cvac0 coz82" type="text" required={false} placeholder="https://www.instagram.com" />
                                            </div>
                                        </div>
                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Twitter  <span className="cvmpf"></span></label>
                                                <input value={twitter_url} onChange={(e) => { settwitter_url(e.target.value) }} className="cvac0 coz82" type="text" required={false} placeholder="https://www.twitter.com" />
                                            </div>
                                        </div>

                                    </div>
                                }



                                {
                                    step === 4
                                    &&
                                    <div className="cz2ao">
                                        <div className="cax0a cqnva ckpvk cbs6c"><span className="c0ndj">.</span> Information de connexion (Votre compte)</div>

                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" >Nom Utilisateur <span className="cvmpf">*</span></label>
                                                <input value={firstname} onChange={(e) => { setfirstname(e.target.value) }} className="cvac0 coz82" type="text" required={false} />
                                            </div>
                                        </div>
                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" >Nom <span className="cvmpf">*</span></label>
                                                <input value={username} onChange={(e) => { setusername(e.target.value) }} className="cvac0 coz82" type="text" required={false} />
                                            </div>
                                        </div>
                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Prénoms <span className="cvmpf">*</span></label>
                                                <input value={lastname} onChange={(e) => { setlastname(e.target.value) }} className="cvac0 coz82" type="text" required={false} />
                                            </div>
                                        </div>
                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Email valide <span className="cvmpf">*</span></label>
                                                <input value={email} onChange={(e) => { setemail(e.target.value) }} className="cvac0 coz82" type="email" required={false} />
                                            </div>
                                        </div>
                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Telephone valide ( ex : +255XXXXXXXX ) <span className="cvmpf">*</span></label>
                                                <input value={telephone} onChange={(e) => { settelephone(e.target.value) }} className="cvac0 coz82" type="number" required={false} />
                                            </div>
                                        </div>
                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Date de Naissance valide <span className="cvmpf">*</span></label>
                                                <input value={dateNaissance} onChange={(e) => { setdateNaissance(e.target.value) }} className="cvac0 coz82" type="date" required={false} />
                                            </div>
                                        </div>
                                        {
                                            /*<div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Mot de passe <span className="cvmpf">*</span></label>
                                                <input value={password} onChange={(e) => { setpassword(e.target.value) }} className="cvac0 coz82" type="text" required={false} />
                                            </div>
                                        </div> */
                                        }

                                    </div>
                                }


                                <div className="flex justify-center space-x-3">
                                    {step > 0 && (

                                        <div className="cq38v">
                                            <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-800 hover:bg-gray-200 cd99b croe6 cday3 c8dh7 coz82 chkpc ct2sf">
                                                <span className="cls93 cv1su cwp6w c8h2n c04ox c94my cg4yh text-gray-800"> &larr; </span> Précedent
                                            </button>
                                        </div>
                                    )}
                                    {step < steps.length - 1 && (

                                        <div className="cq38v">
                                            <button type="button" onClick={nextStep} className="bg-blue-700 cd99b croe6 cday3 c8dh7 coz82 chkpc ct2sf">
                                                Suivant <span className="cls93 cv1su cwp6w c8h2n c04ox c94my cg4yh">-&gt;</span>
                                            </button>
                                        </div>
                                    )}
                                    {step === steps.length - 1 && (

                                        loading ?
                                            <div className="cq38v flex items-center">
                                            <LoadinButton text={"Inscription en cours ..."} />
                                            </div>
                                            :
                                            <div className="cq38v">
                                                <button type="submit" className="bg-blue-700 cd99b croe6 cday3 c8dh7 coz82 chkpc ct2sf">
                                                    Terminer <span className="cls93 cv1su cwp6w c8h2n c04ox c94my cg4yh">-&gt;</span>
                                                </button>
                                            </div>
                                    )}
                                </div>



                            </form>
                            {
                                error && <p className="text-red-300 mt-2 mb-1"></p>
                            }


                            <div className="czlxp cp545 crp1m">
                                <div className="cuiwd ch0ai conht cyy4k" aria-hidden="true"></div>
                                <div className="clvg0 c9csv cqaaz">Or</div>
                                <div className="cuiwd ch0ai ca1o4 cyy4k" aria-hidden="true"></div>
                            </div>


                            <a href={`/${routing.connexion}`}>
                                <div className="cq38v">
                                    <button className="cd99b croe6 cday3 c8dh7 coz82 chkpc ct2sf bg-gray-300 hover:bg-gray-400">
                                        Se connecter <span className="cls93 cv1su cwp6w c8h2n c04ox c94my cg4yh">-&gt;</span>
                                    </button>
                                </div>
                            </a>

                        </div>

                    </div>

                </div>

            </div>




            <div className="c78an cdg1p cd3zq cptbr cn73e ca2z8 cv3zt cb3sj" aria-hidden="true">


                <div className="cp8r2 c0wb5 ch30j c5u32 clp4d cdf7d cxio3" aria-hidden="true"></div>


                <div className="cp8r2 c6bzk c5u32 cn73e ca2z8 cxio3" aria-hidden="true">
                    <img src="images/auth-illustration.svg" className="cj4he" width="1440" height="900" alt="Page Illustration" />
                </div>


                <div className="chakn c5u32 cj2th cdf7d crp1m">
                    <div className="c1dhf c6tf9">
                        <div className="cq8kw cscbh coz82">
                            <div className="cj473 chkpc">




                                {
                                    candidats.map((item) => {
                                        return (
                                            <div key={item._id} className="c7tiu ccnwv c04ox c94my ckgol caxg1 cd9g6 ciwnj cmlda">
                                                <div className="czlxp calvf crp1m">
                                                    <div className="cpsdf cyzlo">
                                                        <img className="c59v3" src={item.coverPicture} width="88" height="88" alt="Testimonial 02" />
                                                        <svg className="curhz c5u32 cn73e cb3sj" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z"></path>
                                                        </svg>
                                                    </div>
                                                    <figure>
                                                        <blockquote className="cqnva cy3kw cu9ao">
                                                            <p>{item.description}</p>
                                                        </blockquote>
                                                        <figcaption className="ckncn c9csv">{item.name}  , {item.profession} <a className="c91mf c29l8" href="#"> emplois</a></figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </main>
    )
}

export default SignUpRecruteurPage;
