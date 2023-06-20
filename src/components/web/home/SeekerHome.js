import React from 'react'

const SeekerHome = () => {
  return (
    <div class="job-seeker-area pt-100 pb-75">
            <div class="container">
                <div class="section-title">
                    <h2>
                    Comment la plateforme fonctionne pour le demandeur d{"'"}emplois
                    </h2>
                    <p>Inscrivez-vous dès maintenant et commencez à construire votre avenir professionnel !</p>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-job-seeker-card">
                            <div class="seeker-image">
                                <img src="assets/images/job-seeker/seeker-1.png" alt="image"/>
                            </div>
                            <h3>Créer un compte</h3>
                            
                            <div class="step">Step 1</div>
                        </div>

                        <div class="seeker-arrow-icon">
                            <img src="assets/images/job-seeker/layer-1.png" alt="image"/>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-job-seeker-card">
                            <div class="seeker-image">
                                <img src="assets/images/job-seeker/seeker-2.png" alt="image"/>
                            </div>
                            <h3>Connecter nous </h3>
                            
                            <div class="step">Step 2</div>
                        </div>

                        <div class="seeker-arrow-icon">
                            <img src="assets/images/job-seeker/layer-2.png" alt="image"/>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-job-seeker-card">
                            <div class="seeker-image">
                                <img src="assets/images/job-seeker/seeker-3.png" alt="image"/>
                            </div>
                            <h3>Postuler pour le Job</h3>
                            
                            <div class="step">Step 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SeekerHome