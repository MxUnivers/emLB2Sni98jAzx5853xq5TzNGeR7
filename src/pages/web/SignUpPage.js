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
import LoadinButton from '../../components/loading/LoadinButton';



const SignUpPage = () => {
    // state utile  
    const navigate = useState();


    // state pour un liste candidats
    const [candidats, setcandidats] = useState(candidatsChoices);


    // state pour le bloc etape 1
    const [username, setusername] = useState();
    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [dateNaissance, setdateNaissance] = useState();
    const [email, setemail] = useState();
    const [telephone, settelephone] = useState();
    const [password, setpassword] = useState();

    // state pour le bloc etape 2
    const [level_school, setlevel_school] = useState();
    const [title_post, settitle_post] = useState();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOptionsLangues, setSelectedOptionsLangues] = useState([]);

    // state pour le bloc etape 2
    const [description, setdescription] = useState();
    const [years_experience, setyears_experience] = useState();
    const [salaire, setsalaire] = useState();

    // state pour le bloc etpape 4
    const [pays, setpays] = useState();
    const [addresse, setaddresse] = useState();

    // state pour le bloc etape 5
    const [site_web, setsite_web] = useState();
    const [facebook_url, setfacebook_url] = useState();
    const [linkedin_url, setlinkedin_url] = useState();
    const [twitter_url, settwitter_url] = useState();
    const [instagram_url, setinstagram_url] = useState();

    const [isPrivacyPolicy, setisPrivacyPolicy] = useState(false);






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
        toast.error(message, {
            position: "top-right",
            autoClose: 3000, // Durée d'affichage du toast en millisecondes
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };




    //
    const handleSelectChange1 = (selected) => {
        setSelectedOptions(selected);
    };

    const handleSelectChange2 = (selected) => {
        setSelectedOptionsLangues(selected);
        console.log(selectedOptionsLangues);
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
            "level_school", "title_post", "selectedOptions", "selectedOptionsLangues",
            "description", "years_experience", "salaire", "dateNaissance",
            "pays", "addresse", "username", "firstname", "lastname", "email",
            "telephone",
        ];

        // Vérifiez chaque champ requis.
        for (const field of requiredFields) {
            if (!eval(field)) {
                showErrorToast(
                    //`${field.replace("_", " ")} requis !`
                    `les champs avec * obligatoires`
                );
                return; // Arrêtez le traitement si un champ est vide.
            }
        }
        if (!isPrivacyPolicy) {
            toast.error("Veillez accepter les termes d'utilisation")
            return false
        }

        dispatch(CandidatSignUp(
            username, firstname, lastname, description, dateNaissance, email, title_post,
            salaire, telephone, addresse, pays, level_school, site_web, years_experience,
            selectedOptions, selectedOptionsLangues, facebook_url, linkedin_url, twitter_url,
            instagram_url, toast
        ))




    }

    return (
        <main className="crp1m">


            <div className="cjiiw cdg1p coz82">

                <div className="cyzui">

                    <div className="ckjzp c9dke c6to5 cj2th cscbh cyzui coz82 crp1m cx27s">


                        <header className="c62g5 cmdkn crp1m">
                            <div className="c7kkg czlxp cf6y5 crp1m c7htb">

                                <a className="cfkm3 chkpc" href="/" aria-label="Cruip">
                                    <img src="assets/images/logo-dark.png" class="h-[50px] w-[50px] rounded-full" />
                                </a>
                            </div>
                        </header>


                        <div className="cmdkn cggc7">

                            <div className="cjplb">
                                <h1 className="cukoz c4q7l ca00q c7csb">Inscription </h1>
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
                                                <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="role">Diplôme<span className="cvmpf">*</span></label>
                                                <select required={false} onChange={(e) => { setlevel_school(e.currentTarget.value) }} className="c033a c9csv coz82 cxa4q">
                                                    <option>-- Choisir --</option>
                                                    {level_School.map((item) => {
                                                        return (
                                                            <option selected={level_school == item.value ? true : false} value={item.value}>{item.label}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="position">Poste Occupé <span className="ctgjb">*</span></label>
                                                <input value={title_post} onChange={(e) => { settitle_post(e.target.value) }} className="cvac0 coz82" type="text" required="" placeholder="Ingenenieur" />
                                            </div>
                                            <div>
                                                <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="commitment">Compétences <span className="cvmpf">*</span></label>
                                                <Select
                                                    isMulti
                                                    options={competences}
                                                    value={selectedOptions}
                                                    onChange={handleSelectChange1}
                                                    placeholder="choix de vos compétences"
                                                />
                                            </div>
                                            <div>
                                                <label className="cax0a ckncn c9csv cfkm3 ckcgr" >Langues <span className="cvmpf">*</span></label>
                                                <Select
                                                    isMulti
                                                    options={languages_school}
                                                    value={selectedOptionsLangues}
                                                    onChange={handleSelectChange2}
                                                    placeholder="Choix de langues"
                                                />

                                            </div>


                                        </div>

                                    </div>

                                }



                                {
                                    step === 1
                                    &&
                                    <div className="cz2ao">
                                        <div className="cax0a cqnva ckpvk cbs6c"><span className="c0ndj">.</span> Votre profile</div>

                                        <div>
                                            <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="description">Description sur vous ( Importante pour les recuteurs ) <span className="cvmpf">*</span></label>
                                            <textarea value={description} onChange={(e) => { setdescription(e.target.value) }} id="description" className="cg34q c9csv coz82 cxa4q" rows="4" required=""></textarea>
                                        </div>
                                        <div>
                                            <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="role">Années d{"'"}expérience dans votre dommaine  <span className="cvmpf">*</span></label>
                                            <select onChange={(e) => { setyears_experience(e.target.value) }} id="role" className="c033a c9csv coz82 cxa4q" required="">
                                                <option>-- Choisir --</option>
                                                {years_experience_school.map((item) => {
                                                    return (
                                                        <option selected={years_experience == item ? true : false} value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="cax0a ckncn c9csv cfkm3 ckcgr" for="role">Quelle Salaire percevez vous ? ( F CFA )  <span className="cvmpf">*</span></label>
                                            <select required={false} onChange={(e) => { setsalaire(e.target.value) }} className="c033a c9csv coz82 cxa4q">
                                                <option>-- Choisir --</option>
                                                {salaires_School.map((item) => {
                                                    return (
                                                        <option selected={salaire == item ? true : false} value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
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
                                                <label className="ckncn c9csv cfkm3 ckcgr" >Pays <span className="cvmpf">*</span></label>
                                                <select onChange={(e => { setpays(e.target.value) })} className="c033a c9csv coz82 cxa4q" required="">
                                                    <option>-- Choisir --</option>
                                                    {optionPays.map((item) => {
                                                        return (
                                                            <option selected={pays == item.value} value={item.value}>{item.label}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Addresse précise <span className="cvmpf">*</span></label>
                                                <input value={addresse} onChange={(e) => { setaddresse(e.target.value) }} className="cvac0 coz82" type="text" required={false} />
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
                                        <div className="cax0a cqnva ckpvk cbs6c"><span className="c0ndj">.</span> Votre compte</div>

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
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Telephone valide <span className="cvmpf">*</span></label>
                                                <input value={telephone} onChange={(e) => { settelephone(e.target.value) }} className="cvac0 coz82" type="number" required={false} />
                                            </div>
                                        </div>
                                        <div className="chva6">
                                            <div>
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">Date de Naissance valide <span className="cvmpf">*</span></label>
                                                <input value={dateNaissance} onChange={(e) => { setdateNaissance(e.target.value) }} className="cvac0 coz82" type="date" required={false} />
                                            </div>
                                        </div>
                                        <div className="chva6 mt-5">
                                            <div class="flex justify-start space-x-3 align-center">
                                                <input className="cvac0 coz82 h-[20px] w-[20px]" checked={isPrivacyPolicy} onChange={(e) => { setisPrivacyPolicy(e.target.checked) }} type="checkbox" />
                                                <label className="ckncn c9csv cfkm3 ckcgr" for="email">J{"'"}accepte les condtions d{"'"}utilisation <a href={`/${routing.privacy_policy}`} class="">ici</a> </label>
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
                                            <button type="button" onClick={prevStep} className="bg-blue-700 cd99b croe6 cday3 c8dh7 coz82 chkpc ct2sf">
                                                Précedent <span className="cls93 cv1su cwp6w c8h2n c04ox c94my cg4yh">-&gt;</span>
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
                                error && <p className="text-red-300 mt-2 mb-1">Inscription impossible {error.message}</p>
                            }


                            <div className="czlxp cp545 crp1m">
                                <div className="cuiwd ch0ai conht cyy4k" aria-hidden="true"></div>
                                <div className="clvg0 c9csv cqaaz">Ou</div>
                                <div className="cuiwd ch0ai ca1o4 cyy4k" aria-hidden="true"></div>
                            </div>


                            <a href={`/${routing.connexion}`}>
                                <div className="cq38v">
                                    <button type="submit" className="bg-gray-100 text-gray-900 cd99b croe6 cday3 c8dh7 coz82 chkpc ct2sf">
                                        Se connecter <span className="cls93 cv1su cwp6w c8h2n c04ox c94my cg4yh"></span>
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

export default SignUpPage;
