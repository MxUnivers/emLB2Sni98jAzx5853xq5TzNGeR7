import React from 'react';

function HowToPage() {
    var bgImg = "https://images.pexels.com/photos/6141084/pexels-photo-6141084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    return (
        <div>


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

            <div className="container-fluid flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className=" px-6 py-8 bg-white shadow-lg rounded-lg">

                    <h2 className="text-2xl font-semibold mb-6">Comment ça marche</h2>


                    <div class="accordion" id="accordionExample">

                        <div class="accordion-item">

                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Étape 1: Créez un compte
                                    </button>

                                </h3>
                                <div id="collapseOne" class="accordion-collapse collapse  visible" data-bs-parent="#accordionExample">
                                    <div class="accordion-body visible">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis nisi eu nunc fringilla, ut convallis tellus efficitur.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="accordion-item">
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne">
                                        Étape 2: Recherchez des offres d{"'"}emploi sur le plateforme
                                    </button>

                                </h3>
                                <div id="collapseOne2" class="accordion-collapse collapse  visible" data-bs-parent="#accordionExample">
                                    <div class="accordion-body visible">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis nisi eu nunc fringilla, ut convallis tellus efficitur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne">
                                    Étape 3: Postulez aux offres qui vous intéressent
                                    </button>
                                </h3>
                                <div id="collapseOne3" class="accordion-collapse collapse  visible" data-bs-parent="#accordionExample">
                                    <div class="accordion-body visible">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis nisi eu nunc fringilla, ut convallis tellus efficitur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne">
                                    Étape 4: Suivez l{"'"}avancement de vos candidatures
                                    </button>
                                </h3>
                                <div id="collapseOne4" class="accordion-collapse collapse  visible" data-bs-parent="#accordionExample">
                                    <div class="accordion-body visible">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis nisi eu nunc fringilla, ut convallis tellus efficitur.
                                        </p>
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
