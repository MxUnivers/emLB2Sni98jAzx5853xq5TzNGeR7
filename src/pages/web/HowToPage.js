import React from 'react';

function HowToPage() {
    var bgImg = "https://images.pexels.com/photos/6141084/pexels-photo-6141084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    return (
        <div>


            {
                /*
                <div class="page-banner-area item-bg-two" style={{ backgroundImage: `url('${bgImg}')` }}>
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="page-banner-content">
                                <h2>Nous commes la pour vous aider</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                */
            }

            <div className="container-fluid w-full flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className=" px-6 py-8 w-full  bg-white shadow-lg rounded-lg">

                    <h2 className="text-2xl font-semibold mb-6">Comment ça marche</h2>


                    <div class="accordion w-full" id="accordionExample">

                        <div class="accordion-item w-full">

                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Créez un compte
                                    </button>
                                </h3>
                                <div id="collapseOne" class="accordion-collapse collapse  visible" data-bs-parent="#accordionExample">
                                    <div class="accordion-body visible">
                                        <div className="bg-white rounded-lg shadow-lg p-6">
                                            <h2 className="text-2xl font-semibold mb-4">Connexion et Inscription</h2>
                                            <div className="mb-4">
                                                <h3 className="text-xl font-semibold mb-2">Déjà inscrit ? Connectez-vous :</h3>
                                                <p className="mb-2">
                                                    Si vous avez déjà un compte sur notre plateforme, il vous suffit de vous connecter pour accéder à toutes les
                                                    fonctionnalités.
                                                </p>
                                                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Connexion</button>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2">Nouveau sur notre plateforme ? Inscrivez-vous :</h3>
                                                <p className="mb-2">
                                                    Si vous n{"'"}avez pas encore de compte, vous pouvez vous inscrire gratuitement en quelques minutes. Remplissez le
                                                    formulaire d{"'"}inscription avec vos informations personnelles et créez un mot de passe sécurisé.
                                                </p>
                                                <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600">Inscription</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="accordion-item">
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne">
                                        Recherchez des offres d{"'"}emploi sur le plateforme
                                    </button>

                                </h3>
                                <div id="collapseOne2" class="accordion-collapse collapse  visible" data-bs-parent="#accordionExample">
                                    <div class="accordion-body visible">
                                        <div className="bg-white rounded-lg shadow-lg p-6">
                                            <h2 className="text-2xl font-semibold mb-4">Recherche d'Emplois</h2>
                                            <p className="mb-2">
                                                Pour trouver des emplois correspondant à votre profil, utilisez notre fonction de recherche avancée. Vous pouvez
                                                spécifier la localisation, le mot-clé et le secteur d'activité pour affiner vos résultats.
                                            </p>
                                            <div className="flex flex-wrap mb-4">
                                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                                                    <label htmlFor="localisation" className="font-semibold mb-1">
                                                        Localisation :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="localisation"
                                                        className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3"
                                                    />
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                                                    <label htmlFor="motcle" className="font-semibold mb-1">
                                                        Mot-clé :
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="motcle"
                                                        className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3"
                                                    />
                                                </div>
                                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                                                    <label htmlFor="secteur" className="font-semibold mb-1">
                                                        Secteur d{"'"}activité :
                                                    </label>
                                                    <select id="secteur" className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3">
                                                        <option value="">Tous</option>
                                                        <option value="informatique">Informatique</option>
                                                        <option value="finance">Finance</option>
                                                        <option value="marketing">Marketing</option>
                                                        <option value="sante">Santé</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                                                Rechercher
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne">
                                        Postulez aux offres qui vous intéressent
                                    </button>
                                </h3>
                                <div id="collapseOne3" class="accordion-collapse collapse  visible" data-bs-parent="#accordionExample">
                                    <div class="accordion-body visible">
                                        <div className="bg-white rounded-lg shadow-lg p-6">
                                            <h2 className="text-2xl font-semibold mb-4">Comment postuler ?</h2>
                                            <ol className="list-decimal ml-6 space-y-2">
                                                <li>
                                                    <p className="mb-2">
                                                        Créez un compte en vous inscrivant sur notre plateforme. Si vous n{"'"}avez pas encore de compte, vous pouvez vous
                                                        inscrire gratuitement en quelques minutes.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="mb-2">
                                                        Complétez votre profil en ajoutant des informations pertinentes, telles que votre expérience professionnelle, vos
                                                        compétences et votre formation. Téléchargez également votre CV à jour.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="mb-2">
                                                        Utilisez notre fonction de recherche pour trouver l'offre d'emploi qui vous intéresse. Utilisez des mots-clés, des
                                                        filtres de localisation et de secteur d{"'"}activité pour affiner vos résultats.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="mb-2">
                                                        Lisez attentivement les détails de l{"'"}annonce, y compris les responsabilités du poste, les qualifications requises et
                                                        les informations sur l{"'"}entreprise.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="mb-2">
                                                        Préparez une lettre de motivation personnalisée mettant en valeur votre intérêt pour le poste et expliquant pourquoi
                                                        vous êtes le candidat idéal.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="mb-2">
                                                        Postulez en ligne en cliquant sur le bouton "Postuler" et suivez les instructions fournies. Téléchargez votre CV et
                                                        saisissez les informations complémentaires demandées.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="mb-2">
                                                        Suivez l{"'"}état de votre candidature via votre tableau de bord sur notre plateforme. Vous serez informé de tout
                                                        changement d{"'"}état, tel que la réception de votre candidature ou les étapes du processus de sélection.
                                                    </p>
                                                </li>
                                            </ol>
                                            <p className="mt-4">
                                                Si vous avez des questions supplémentaires ou besoin d'assistance, n'hésitez pas à nous contacter. Nous sommes là pour
                                                vous aider tout au long de votre processus de candidature !
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne">
                                        Suivez l{"'"}avancement de vos candidatures
                                    </button>
                                </h3>
                                <div id="collapseOne4" class="accordion-collapse collapse  visible" data-bs-parent="#accordionExample">
                                    <div class="accordion-body visible">
                                    <div className="bg-white rounded-lg shadow-lg p-6">
                                    <h2 className="text-2xl font-semibold mb-4">Suivez l'avancement de vos candidatures</h2>
                                    <p className="mb-2">
                                      Grâce à notre fonction de suivi des candidatures, vous pouvez suivre facilement l'état de vos candidatures aux
                                      différentes offres d'emploi. Voici comment :
                                    </p>
                                    <ol className="list-decimal pl-6 mb-4">
                                      <li className="mb-2">
                                        Connectez-vous à votre compte et accédez à la section "Candidatures" de votre tableau de bord.
                                      </li>
                                      <li className="mb-2">
                                        Vous verrez une liste de toutes vos candidatures passées et en cours. Cliquez sur une candidature pour afficher
                                        les détails.
                                      </li>
                                      <li className="mb-2">
                                        Sur la page de détails de la candidature, vous pouvez voir l'état actuel de votre candidature, tel que "En
                                        attente d'examen", "Entretien prévu", "Offre acceptée", etc.
                                      </li>
                                      <li className="mb-2">
                                        Vous recevrez également des notifications par e-mail pour toute mise à jour importante concernant votre
                                        candidature.
                                      </li>
                                      <li className="mb-2">
                                        N{"'"}hésitez pas à contacter notre équipe de support si vous avez des questions ou des préoccupations concernant
                                        vos candidatures.
                                      </li>
                                    </ol>
                                    <p className="mb-2">
                                      Nous nous engageons à vous fournir une expérience transparente et fluide tout au long du processus de candidature.
                                      Suivez simplement ces étapes pour rester informé de l{"'"}état de vos candidatures et ne manquez aucune mise à jour
                                      importante.
                                    </p>
                                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                                      Se connecter
                                    </button>
                                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default HowToPage;
