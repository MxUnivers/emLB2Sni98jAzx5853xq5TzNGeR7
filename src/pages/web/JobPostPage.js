import React, { useState } from 'react'
import { useStateManager } from 'react-select';

const JobPostPage = () => {

    const [entreprise, setentreprise] = useState();
    const [email, setemail] = useState();
    const [logo, setlogo] = useState();

    const [title, settitle] = useState();
    const [category, setcategory] = useState();
    const [contrat, setcontrat] = useState();
    const [salaire, setsalaire] = useState();
    const [description, setdescription] = useState();

    return (

        <div class="main-content">

            <div class="page-content">


                <main class="crp1m mt-20">


                    <div class="cjiiw cdg1p coz82">

                        <div class="cyzui">

                            <div class="ckjzp c9dke c6to5 cj2th cscbh cyzui coz82 crp1m cx27s">


                                {
                                    /*<header class="c62g5 cmdkn crp1m">
                                    <div class="c7kkg czlxp cf6y5 crp1m c7htb">
    
                                        <a class="cfkm3 chkpc" href="index.html" aria-label="Cruip">
                                            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                <path class="c05gp" d="M13.853 18.14 1 10.643 31 1l-.019.058z"></path>
                                                <path class="crxnc" d="M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </header> */
                                }

                                <div class="cmdkn cggc7">

                                    <div class="cjplb">
                                        <h1 class="cukoz c4q7l ca00q c7csb">Nouvelle offre </h1>
                                        <div class="clvg0">Renseigner les informations pour pour avoir les meilleurs profiles </div>
                                    </div>


                                    <form class="caact">
                                        <div class="c5cvj cmw6a cfqhd">


                                            <div class="cz2ao">
                                                <div class="cax0a cqnva ckpvk cbs6c"><span class="c0ndj">1.</span> Votre entreprise</div>
                                                <div class="chva6">
                                                    <div>
                                                        <label class="ckncn c9csv cfkm3 ckcgr" for="name">Nom entreprise<span class="ctgjb">*</span></label>
                                                        <input id="name" class="cvac0 coz82" type="text" required={true} placeholder="" />
                                                    </div>
                                                    <div>
                                                        <label class="ckncn c9csv cfkm3 ckcgr" for="email">Contact Email <span class="ctgjb">*</span></label>
                                                        <input id="email" class="cvac0 coz82" type="email" required={true} />
                                                    </div>
                                                    <div>
                                                        <label class="ckncn c9csv cfkm3 ckcgr" for="file">Logo entreprise <span class="clvg0">(optional)</span></label>
                                                        <div class="czlxp crp1m">
                                                            <div class="cyzlo cy9uk">
                                                                <img class="cuiwd c59v3 csm78 ciwnj c7htb cf986"
                                                                    src="https://lespagesvertesci.net/userfiles/image/f38072ef.jpg"
                                                                    alt="Upload" />
                                                            </div>
                                                            <div>
                                                                <input id="file" type="file" class="cy5z7 cgbhm cudou ch9ub c5c82 cjgxk ck6se clvg0 cp7ke cgtgg c04ox c94my caxg1 cvzfu cjhjm c9csv coz82 cfkm3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="cz2ao">
                                                <div class="cax0a cqnva ckpvk cbs6c"><span class="c0ndj">2.</span> The role du poste</div>
                                                <div class="chva6">
                                                    <div>
                                                        <label class="ckncn c9csv cfkm3 ckcgr" for="position">Titre du poste <span class="ctgjb">*</span></label>
                                                        <input id="position" class="cvac0 coz82" type="text" required="" placeholder="Ingenenieur" />
                                                    </div>
                                                    <div>
                                                        <label class="cax0a ckncn c9csv cfkm3 ckcgr" for="role">Categorie du poste<span class="cvmpf">*</span></label>
                                                        <select id="role" class="c033a c9csv coz82 cxa4q" required="">
                                                            <option>Programming</option>
                                                            <option>Design</option>
                                                            <option>Management / Finance</option>
                                                            <option>Customer Support</option>
                                                            <option>Sales / Marketing</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label class="cax0a ckncn c9csv cfkm3 ckcgr" for="commitment">Disponibilté / contrat <span class="cvmpf">*</span></label>
                                                        <select id="commitment" class="c033a c9csv coz82 cxa4q" required="">
                                                            <option>Full-time</option>
                                                            <option>Part-time</option>
                                                            <option>Intership</option>
                                                            <option>Contract / Freelance</option>
                                                            <option>Co-founder</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label class="cax0a ckncn c9csv cfkm3 ckcgr" for="description">Description du job <span class="cvmpf">*</span></label>
                                                        <textarea id="description" class="cg34q c9csv coz82 cxa4q" rows="4" required=""></textarea>
                                                    </div>
                                                    <div>
                                                        <label class="ckncn c9csv cfkm3 ckcgr" for="salary">Salaire <span class="clvg0">(optional)</span></label>
                                                        <input id="salary" class="cvac0 coz82" type="text" />
                                                        <div class="clvg0 cwe8x cqaaz c8nfh">Example: “100,000 - $170,000 USD”</div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="cz2ao">

                                                {
                                                    /*
                                                    <div class="cax0a cqnva ckpvk cbs6c"><span class="c0ndj">3.</span> Select add-ons and pay</div>
                                                    <div class="chva6">
                                                    <button class="cc906 c6c0t coz82 ciwnj cctbj c3myd  csoof cxcbd clg8g cuiwd">
                                                        <div class="c7kkg czlxp crp1m">
                                                            <div>
                                                                <div class="cax0a ckncn c9csv ckcgr"> your post to stay on top (+$79)</div>
                                                                <div class="clvg0 c9csv cqaaz">4x more views</div>
                                                            </div>
                                                            <div class="cuiwd c59v3 cyzlo ciwnj ca1o4">
                                                                <svg x-show="!" class="c05gp" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z"></path>
                                                                </svg>
                                                                <svg x-show="" class="c29cf" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button x-data="{ highlight: true }" class="cc906 c6c0t coz82 ciwnj cctbj c3myd highlight ? 'csoof cxcbd clg8g' : 'cuiwd'">
                                                        <div class="c7kkg czlxp crp1m">
                                                            <div>
                                                                <div class="cax0a ckncn c9csv ckcgr">Highlight your post in indigo (+$49)</div>
                                                                <div class="clvg0 c9csv cqaaz">2x more views</div>
                                                            </div>
                                                            <div class="cuiwd c59v3 cyzlo ciwnj ca1o4">
                                                                <svg x-show="!highlight" class="c05gp" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z"></path>
                                                                </svg>
                                                                <svg x-show="highlight" class="c29cf" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div> */
                                                }
                                                <div class="cq38v">
                                                    <button class="cd99b croe6 cday3 c8dh7 coz82 ct2sf">Publier</button>
                                                </div>
                                                <div class="cixlf">
                                                    <div class="clvg0 cwe8x">By clicking pay you agree to our <a class="c5xyh" href="#0">Terms of Service</a> and <a class="c5xyh" href="#0">Privacy Policy</a>.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>

                            </div>

                        </div>


                        <div class="c78an cdg1p cd3zq cptbr cn73e ca2z8 cv3zt cb3sj" aria-hidden="true">


                            <div class="cp8r2 c0wb5 ch30j c5u32 clp4d cdf7d cxio3" aria-hidden="true"></div>


                            <div class="cp8r2 c6bzk c5u32 cn73e ca2z8 cxio3" aria-hidden="true">
                                <img src="images/auth-illustration.svg" class="cj4he" width="1440" height="900" alt="Page Illustration" />
                            </div>


                            <div class="chakn c5u32 cj2th cdf7d crp1m">
                                <div class="c1dhf c6tf9 cggc7">
                                    <div class="cq8kw cscbh coz82">
                                        <div class="cj473 chkpc">


                                            <div class="c7tiu ccnwv c04ox c94my ckgol c6q73 caxg1 cd9g6 ciwnj cmlda">
                                                <div class="czlxp calvf crp1m">
                                                    <div class="cpsdf cyzlo">
                                                        <img class="c59v3" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                                            width="88" height="88" alt="Testimonial 04" />
                                                        <svg class="curhz c5u32 cn73e cb3sj" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z"></path>
                                                        </svg>
                                                    </div>
                                                    <figure>
                                                        <blockquote class="cqnva cy3kw cu9ao">
                                                            <p>Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.</p>
                                                        </blockquote>
                                                        <figcaption class="ckncn c9csv">Lisa Smith, developer at <a class="c91mf c29l8" href="#0">AppyYou</a></figcaption>
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