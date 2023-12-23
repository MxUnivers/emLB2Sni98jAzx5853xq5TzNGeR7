import React, { useState } from 'react';
import { competences, level_School } from '../../utlis/options/candidatOption';
import Select from 'react-select';
import { optionPays } from '../../utlis/options/optionDivers';
import { routing } from '../../utlis/routing';
import { toast } from 'react-toastify';
import { CandidatConnexion } from '../../action/api/candidat/CandidatAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoadinButton from '../../components/loading/LoadinButton';



const SignInPage = () => {


    const navigate= useNavigate();

    const [candidats, setcandidats] = useState([
        {
            _id: "1",
            name: "Bly Bi Gohi Aymar ",
            active: true,
            coverPicture: "https://img.freepik.com/photos-premium/homme-etudiant-afro-americain-fond-jaune-isole-lunettes-heureux_1368-222691.jpg?w=900",
            profession: "Developpeur full stack , Animateur , Modlisateur 3d ",
            description: "Je suis vraiment content de cette , Plateformfe j'ai eu un meilleur influence grace à cela dans ma filière"
        },
        {
            _id: "1",
            name: "Alicia Touré ",
            coverPicture: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            active: true,
            profession: "Etudiant en Informatique et marketing ",
            description: "Je suis vraiment content de cette , Plateformfe j'ai eu un meilleur influence grace à cela dans ma filière"
        },
        {
            _id: "1",
            name: "Cédric ",
            coverPicture: "https://img.freepik.com/photos-gratuite/etudiant-positif-peau-foncee-porte-dossiers-livre-pointe-expression-joyeuse-cote-sourire-pleines-dents_273609-23704.jpg?w=900&t=st=1693235710~exp=1693236310~hmac=2afd47b244941ca069e099779258dc77df9a96f3aedddf1511fdfd8d8e8c5479",
            active: true,
            profession: "Etudiant en Informatique et marketing ",
            description: "Je suis vraiment content de cette , Plateformfe j'ai eu un meilleur influence grace à cela dans ma filière"
        }
    ]);



    const [email, setemail] = useState();
    const [password, setpassword] = useState();



    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectChange = selectedOptions => {
        setSelectedOptions(selectedOptions);
    };

    // state de redux
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    //valdation de formulaire
    // valider inscription 
    const hanldeSubmitCandidat = (event) => {
        if (email == "") {
            return toast.error("Email  requis !");
        }
        if (password == "") {
            return toast.error("Mot de passe  requis !");
        }
        event.preventDefault();
        dispatch(CandidatConnexion(email, password,navigate, toast));

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

                        <div className="cmdkn cggc7">

                            <div className="cjplb">
                                <h1 className="cukoz c4q7l ca00q c7csb">Connexion </h1>
                                <div className="clvg0">Veilleur renseigner vos information pour vous connectez</div>
                            </div>
                            <form onSubmit={hanldeSubmitCandidat}>

                                <div className="cz2ao">

                                    <div className="chva6">
                                        <div>
                                            <label className="ckncn c9csv cfkm3 ckcgr" for="email">Email <span className="cvmpf">*</span></label>
                                            <input className="cvac0 coz82" value={email} onChange={(e) => { setemail(e.target.value) }} type="email" required={true} />
                                        </div>
                                    </div>
                                    <div className="chva6">
                                        <div>
                                            <label className="ckncn c9csv cfkm3 ckcgr" for="email">Mot de passe <span className="cvmpf">*</span></label>
                                            <input className="cvac0 coz82" value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" required={true} />
                                        </div>
                                    </div>

                                </div>

                                <div className="cq38v">
                                    {
                                        loading ?
                                        <LoadinButton text={"Connexion en cours ..."} />
                                            :
                                            <button type="submit" className="bg-blue-600 cd99b croe6 cday3 c8dh7 coz82 chkpc ct2sf">
                                                Se Connecter <span className="cls93 cv1su cwp6w c8h2n c04ox c94my cg4yh">-&gt;</span>
                                            </button>
                                    }
                                </div>

                            </form>


                            <div className="czlxp cp545 crp1m">
                                <div className="cuiwd ch0ai conht cyy4k" aria-hidden="true"></div>
                                <div className="clvg0 c9csv cqaaz">Or</div>
                                <div className="cuiwd ch0ai ca1o4 cyy4k" aria-hidden="true"></div>
                            </div>


                            <a href={`/${routing.inscription}`}>
                                <button className="c6hhw c9dke cf8q3 cday3 cpsdf c9csv co11h coz82 chkpc crp1m">
                                    <span className="cp8dt cupxg ca92d">
                                        S{"'"}inscire
                                        <span className="cls93 cv1su cwp6w c52y5 c04ox ctziu c94my cg4yh">-&gt;</span>
                                    </span>
                                </button>
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

export default SignInPage;
