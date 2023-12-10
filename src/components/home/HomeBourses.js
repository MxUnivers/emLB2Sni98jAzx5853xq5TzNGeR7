import React from 'react'

const HomeBourses = () => {
    const bgImg1 = "img/etudiant-diplome-smiley-coup-moyen.jpg";
    const bgImg2 = "img/coup-moyen-personnes-apprenant-ensemble-au-bureau.jpg"
    return (
        <section class="bg-white border-b py-8">
            <div class="container max-w-5xl mx-auto m-8">
                <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">

                </h2>
                <div class="w-full mb-4">
                    <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div class="w-full flex flex-col sm:flex-col  md:flex-row lg:flex-row xl:md:flex-row">
                    <div class="w-5/6 sm:w-1/2 p-6">
                        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                            Réalisez vos rêves grâce à notre bourse d{"'"}études à l{"'"}étranger
                        </h3>
                        <p class="text-gray-600 mb-8">
                            Le processus de candidature est simple. Visitez notre site web et suivez les instructions
                            pour soumettre votre candidature. Nous avons hâte de découvrir votre parcours, vos réalisations
                            et vos aspirations.
                            <br />
                            <br />

                            {
                                /*Images from:

                            <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a> */
                            }
                        </p>
                    </div>
                    <div class="w-full sm:w-1/2 p-6">
                        <img src={bgImg1} class="img-fluid rounded-2xl" />
                    </div>
                </div>
                <div class="flex w-full pt-32  flex-col-reverse sm:flex-col  md:flex-row lg:flex-row xl:md:flex-row">
                    <div class="w-full sm:w-1/2 p-6 mt-6">
                        <img src={bgImg2} class="rounded-2xl" />
                    </div>
                    <div class="w-full sm:w-1/2 p-6 mt-6">
                        <div class="align-middle">
                            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Développez Votre Potentiel : Découvrez Nos Séances de Coaching
                            </h3>
                            <p class="text-gray-600 mb-3">
                                Bén&ficiez de coachs expérimentés travailleront en étroite collaboration avec vous pour définir
                                vos objectifs académiques, professionnels et personnels. Chaque séance est conçue pour
                                répondre à vos besoins spécifiques.
                            </p>
                            <br />
                            <p class="text-gray-600 mb-8">
                                Nos coachs vous aideront à planifier votre avenir, que ce soit pour entrer sur le marché du travail,
                                poursuivre des études supérieures, ou explorer de nouvelles opportunités. Nous sommes là pour vous
                                guider à chaque étape.
                                <br />
                                {
                                    /*Images from:

                                <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a> */
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomeBourses;
