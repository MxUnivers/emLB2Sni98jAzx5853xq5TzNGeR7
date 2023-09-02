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
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    // valider inscription 
    const hanldeSubmitCandidat = (event) => {
        if (level_School == "") {
            return toast.error("Diplôme requis !")
        }
        if (title_post == "") {
            return toast.error("profession requis !");
        }
        if (selectedOptions == []) {
            return toast.error("Compétences requis !")
        }
        if (selectedOptionsLangues == []) {
            return toast.error("Langues requis !")
        }
        if (description == "") {
            return toast.error("Description sur vous requise !")
        }
        if (years_experience == "") {
            return toast.error("Année d'expériences requise !")
        }
        if (salaire == "") {
            return toast.error("Salaire  requis !")
        }
        if (competences == []) {
            return toast.error("Compétences requis !")
        }
        if (pays == "") {
            return toast.error("Pays requis !")
        }
        if (addresse == "") {
            return toast.error("Compétences requis !")
        }
        // reseau sociaux non obligutaoire
        if (username == "") {
            return toast.error("Nom utilisateur requis !")
        }
        if (firstname == "") {
            return toast.error("Nom  requis !")
        }
        if (lastname == "") {
            return toast.error("Prénoms  requis !")
        }
        if (email == "") {
            return toast.error("Email  requis !")
        }
        if (telephone == "") {
            return toast.error("Telephone  requis !")
        }
        if (password == "") {
            return toast.error("Mot de passe  requis !")
        }

        var userData = {
            "username": username,
            "firstname": firstname,
            "lastname": lastname,
            "description": description,
            "dateNaissance": dateNaissance,
            "email": email,
            "title_post": title_post,
            "salaire": salaire,
            "telephone": telephone,
            "adresse": addresse,
            "pays": pays,
            "level_school": level_school,
            "site_web": site_web,
            "years_experience": years_experience,
            "competences": selectedOptions,
            "langues": selectedOptionsLangues,
            "facebook_url": facebook_url,
            "linkedin_url": linkedin_url,
            "twitter_url": twitter_url,
            "instagram_url": instagram_url,
            "password": password
        }

        event.preventDefault();
        dispatch(CandidatSignUp(
            username, firstname, lastname, description, dateNaissance, email, title_post,
            salaire, telephone, addresse, pays, level_school, site_web, years_experience,
            selectedOptions, selectedOptionsLangues, facebook_url, linkedin_url, twitter_url,
            instagram_url, password, toast
        ))



    }

    return (
        <main class="crp1m">


            <div class="cjiiw cdg1p coz82">

                <div class="cyzui">

                    <div class="ckjzp c9dke c6to5 cj2th cscbh cyzui coz82 crp1m cx27s">


                        <header class="c62g5 cmdkn crp1m">
                            <div class="c7kkg czlxp cf6y5 crp1m c7htb">

                                <a class="cfkm3 chkpc" href="/" aria-label="Cruip">
                                    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                        <path class="c05gp" d="M13.853 18.14 1 10.643 31 1l-.019.058z"></path>
                                        <path class="crxnc" d="M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z"></path>
                                    </svg>
                                </a>
                            </div>
                        </header>

                        <button type='button' title={"Test notiifcation"} onClick={() => { toast.success('Opération réussie !'); }}  >Test</button>
                        <div class="cmdkn cggc7">

                            <div class="cjplb">
                                <h1 class="cukoz c4q7l ca00q c7csb">Inscription </h1>
                                <div class="clvg0">Veilleur suivre les etape pour vous inscrire</div>
                            </div>
                            <form onSubmit={hanldeSubmitCandidat}>

                                {step}
                                <Stepper steps={steps} activeStep={step} />
                                {
                                    step === 0
                                    &&
                                    <div class="cz2ao">
                                        <div class="cax0a cqnva ckpvk cbs6c"><span class="c0ndj">.</span> Compétences</div>
                                        <div class="chva6">

                                            <div>
                                                <label class="cax0a ckncn c9csv cfkm3 ckcgr" for="role">Diplôme<span class="cvmpf">*</span></label>
                                                <select required={true} onChange={(e) => { setlevel_school(e.currentTarget.value) }} class="c033a c9csv coz82 cxa4q">
                                                    {level_School.map((item) => {
                                                        return (
                                                            <option value={item.value}>{item.label}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" for="position">Poste Occupé <span class="ctgjb">*</span></label>
                                                <input value={title_post} onChange={(e) => { settitle_post(e.target.value) }} class="cvac0 coz82" type="text" required="" placeholder="Ingenenieur" />
                                            </div>
                                            <div>
                                                <label class="cax0a ckncn c9csv cfkm3 ckcgr" for="commitment">Compétences <span class="cvmpf">*</span></label>
                                                <Select
                                                    isMulti
                                                    options={competences}
                                                    value={selectedOptions}
                                                    onChange={handleSelectChange1}
                                                    placeholder="choix de vos compétences"
                                                />
                                            </div>
                                            <div>
                                                <label class="cax0a ckncn c9csv cfkm3 ckcgr" >Langues <span class="cvmpf">*</span></label>
                                                <Select
                                                    isMulti
                                                    options={languages_school}
                                                    value={selectedOptionsLangues}
                                                    onChange={handleSelectChange2}
                                                    placeholder="Choix de langues"
                                                />
                                                <div>
                                                    <h3>Options 1 :</h3>
                                                    <ul>
                                                        {selectedOptionsLangues.map((option) => (
                                                            <li key={option.value}>{option.label}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>


                                        </div>

                                    </div>

                                }



                                {
                                    step === 1
                                    &&
                                    <div class="cz2ao">
                                        <div class="cax0a cqnva ckpvk cbs6c"><span class="c0ndj">.</span> Votre profile</div>

                                        <div>
                                            <label class="cax0a ckncn c9csv cfkm3 ckcgr" for="description">Description sur vous ( Importante pour les recuteurs ) <span class="cvmpf">*</span></label>
                                            <textarea value={description} onChange={(e) => { setdescription(e.target.value) }} id="description" class="cg34q c9csv coz82 cxa4q" rows="4" required=""></textarea>
                                        </div>
                                        <div>
                                            <label class="cax0a ckncn c9csv cfkm3 ckcgr" for="role">Années d{"'"}expérience dans votre dommaine  <span class="cvmpf">*</span></label>
                                            <select onChange={(e) => { setyears_experience(e.target.value) }} id="role" class="c033a c9csv coz82 cxa4q" required="">
                                                {years_experience_school.map((item) => {
                                                    return (
                                                        <option value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div>
                                            <label class="cax0a ckncn c9csv cfkm3 ckcgr" for="role">Quelle Salaire percevez vous ? ( F CFA )  <span class="cvmpf">*</span></label>
                                            <select required={true} onChange={(e) => { setsalaire(e.target.value) }} class="c033a c9csv coz82 cxa4q">
                                                {salaires_School.map((item) => {
                                                    return (
                                                        <option value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                    </div>

                                }
                                {
                                    step === 2
                                    &&
                                    <div class="cz2ao">
                                        <div class="cax0a cqnva ckpvk cbs6c"><span class="c0ndj">.</span>Localisation </div>

                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" >Pays <span class="cvmpf">*</span></label>
                                                <select onChange={(e => { setpays(e.target.value) })} class="c033a c9csv coz82 cxa4q" required="">
                                                    {optionPays.map((item) => {
                                                        return (
                                                            <option value={item.value}>{item.label}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" for="email">Addresse précise <span class="cvmpf">*</span></label>
                                                <input value={addresse} onChange={(e) => { setaddresse(e.target.value) }} class="cvac0 coz82" type="text" required={true} />
                                            </div>
                                        </div>
                                    </div>
                                }


                                {
                                    step === 3
                                    &&
                                    <div class="cz2ao">
                                        <div class="cax0a cqnva ckpvk cbs6c"><span class="c0ndj">.</span>Réseaux Sociaux </div>


                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" for="email">Site web <span class="cvmpf">*</span></label>
                                                <input value={site_web} onChange={(e) => { setsite_web(e.target.value) }} class="cvac0 coz82" type="text" required={true} placeholder="https://www.site-web.com" />
                                            </div>
                                        </div>
                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" for="email">Facebook  <span class="cvmpf">*</span></label>
                                                <input value={facebook_url} onChange={(e) => { setfacebook_url(e.target.value) }} class="cvac0 coz82" type="text" required={true} placeholder="https://www.facebook.com" />
                                            </div>
                                        </div>
                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" for="email">Linkedine  <span class="cvmpf">*</span></label>
                                                <input value={linkedin_url} onChange={(e) => { setlinkedin_url(e.target.value) }} class="cvac0 coz82" type="text" required={true} placeholder="https://www.linkedin.com" />
                                            </div>
                                        </div>
                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" for="email">Instagram  <span class="cvmpf">*</span></label>
                                                <input value={instagram_url} onChange={(e) => { setinstagram_url(e.target.value) }} class="cvac0 coz82" type="text" required={true} placeholder="https://www.instagram.com" />
                                            </div>
                                        </div>
                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" for="email">Twitter  <span class="cvmpf">*</span></label>
                                                <input value={twitter_url} onChange={(e) => { settwitter_url(e.target.value) }} class="cvac0 coz82" type="text" required={true} placeholder="https://www.twitter.com" />
                                            </div>
                                        </div>

                                    </div>
                                }



                                {
                                    step === 4
                                    &&
                                    <div class="cz2ao">
                                        <div class="cax0a cqnva ckpvk cbs6c"><span class="c0ndj">.</span> Votre compte</div>

                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" >Nom Utilisateur <span class="cvmpf">*</span></label>
                                                <input value={firstname} onChange={(e) => { setfirstname(e.target.value) }} class="cvac0 coz82" type="text" required={true} />
                                            </div>
                                        </div>
                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" >Nom <span class="cvmpf">*</span></label>
                                                <input value={username} onChange={(e) => { setusername(e.target.value) }} class="cvac0 coz82" type="text" required={true} />
                                            </div>
                                        </div>
                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" for="email">Prénoms <span class="cvmpf">*</span></label>
                                                <input value={lastname} onChange={(e) => { setlastname(e.target.value) }} class="cvac0 coz82" type="text" required={true} />
                                            </div>
                                        </div>
                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" for="email">Email valide <span class="cvmpf">*</span></label>
                                                <input value={email} onChange={(e) => { setemail(e.target.value) }} class="cvac0 coz82" type="email" required={true} />
                                            </div>
                                        </div>
                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" for="email">Telephone valide <span class="cvmpf">*</span></label>
                                                <input value={telephone} onChange={(e) => { settelephone(e.target.value) }} class="cvac0 coz82" type="number" required={true} />
                                            </div>
                                        </div>
                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" for="email">Date de Naissance valide <span class="cvmpf">*</span></label>
                                                <input value={dateNaissance} onChange={(e) => { setdateNaissance(e.target.value) }} class="cvac0 coz82" type="date" required={true} />
                                            </div>
                                        </div>
                                        <div class="chva6">
                                            <div>
                                                <label class="ckncn c9csv cfkm3 ckcgr" for="email">Mot de passe <span class="cvmpf">*</span></label>
                                                <input value={password} onChange={(e) => { setpassword(e.target.value) }} class="cvac0 coz82" type="text" required={true} />
                                            </div>
                                        </div>

                                    </div>
                                }


                                <div class="flex justify-center space-x-3">
                                    {step > 0 && (

                                        <div class="cq38v">
                                            <button type="button" onClick={prevStep} class="bg-blue-700 cd99b croe6 cday3 c8dh7 coz82 chkpc ct2sf">
                                                Précedent <span class="cls93 cv1su cwp6w c8h2n c04ox c94my cg4yh">-&gt;</span>
                                            </button>
                                        </div>
                                    )}
                                    {step < steps.length - 1 && (

                                        <div class="cq38v">
                                            <button type="button" onClick={nextStep} class="bg-blue-700 cd99b croe6 cday3 c8dh7 coz82 chkpc ct2sf">
                                                Suivant <span class="cls93 cv1su cwp6w c8h2n c04ox c94my cg4yh">-&gt;</span>
                                            </button>
                                        </div>
                                    )}
                                    {step === steps.length - 1 && (

                                        loading ?
                                            <div class="cq38v flex items-center">
                                                <p class="animate-pulse  text-gray-500">Inscription en cours ...</p>
                                            </div>
                                            :
                                            <div class="cq38v">
                                                <button type="submit" class="bg-blue-700 cd99b croe6 cday3 c8dh7 coz82 chkpc ct2sf">
                                                    Terminer <span class="cls93 cv1su cwp6w c8h2n c04ox c94my cg4yh">-&gt;</span>
                                                </button>
                                            </div>
                                    )}
                                </div>



                            </form>
                            {
                                error && <p class="text-red-300 mt-2 mb-1">Inscription impossible {error.message}</p>
                            }


                            <div class="czlxp cp545 crp1m">
                                <div class="cuiwd ch0ai conht cyy4k" aria-hidden="true"></div>
                                <div class="clvg0 c9csv cqaaz">Or</div>
                                <div class="cuiwd ch0ai ca1o4 cyy4k" aria-hidden="true"></div>
                            </div>


                            <a href={`/${routing.connexion}`}>
                                <div class="cq38v">
                                    <button class="cd99b croe6 cday3 c8dh7 coz82 chkpc ct2sf bg-gray-300 hover:bg-gray-400">
                                        Se connecter <span class="cls93 cv1su cwp6w c8h2n c04ox c94my cg4yh">-&gt;</span>
                                    </button>
                                </div>
                            </a>

                        </div>

                    </div>

                </div>

            </div>




            <div class="c78an cdg1p cd3zq cptbr cn73e ca2z8 cv3zt cb3sj" aria-hidden="true">


                <div class="cp8r2 c0wb5 ch30j c5u32 clp4d cdf7d cxio3" aria-hidden="true"></div>


                <div class="cp8r2 c6bzk c5u32 cn73e ca2z8 cxio3" aria-hidden="true">
                    <img src="images/auth-illustration.svg" class="cj4he" width="1440" height="900" alt="Page Illustration" />
                </div>


                <div class="chakn c5u32 cj2th cdf7d crp1m">
                    <div class="c1dhf c6tf9">
                        <div class="cq8kw cscbh coz82">
                            <div class="cj473 chkpc">




                                {
                                    candidats.map((item) => {
                                        return (
                                            <div key={item._id} class="c7tiu ccnwv c04ox c94my ckgol caxg1 cd9g6 ciwnj cmlda">
                                                <div class="czlxp calvf crp1m">
                                                    <div class="cpsdf cyzlo">
                                                        <img class="c59v3" src={item.coverPicture} width="88" height="88" alt="Testimonial 02" />
                                                        <svg class="curhz c5u32 cn73e cb3sj" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z"></path>
                                                        </svg>
                                                    </div>
                                                    <figure>
                                                        <blockquote class="cqnva cy3kw cu9ao">
                                                            <p>{item.description}</p>
                                                        </blockquote>
                                                        <figcaption class="ckncn c9csv">{item.name}  , {item.profession} <a class="c91mf c29l8" href="#"> emplois</a></figcaption>
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
