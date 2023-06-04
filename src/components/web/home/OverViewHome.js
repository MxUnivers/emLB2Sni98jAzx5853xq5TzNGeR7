import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { localvalue } from '../../../utlis/storage/localvalue';
import { typeadmin } from '../../../utlis/storage/account';
import { routing } from '../../../utlis/routing';


const OverViewHome = () => {
    var typeAdmin  =  localStorage.getItem(localvalue.typeAdmin);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-back',
            once: true
        });
    }, []);
    return (
        <div class="overview-area pb-100" data-oas="fade-up">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="overview-content">
                            <h3>Construisez votre CV professionnel avec l'aide d'un expert</h3>
                            <p>
                                Créez votre CV professionnel et donnez un coup de pouce à votre carrière ! Notre application vous offre l'aide d'un expert pour construire un CV qui mettra en valeur vos compétences et vos expériences professionnelles. Optimisez vos chances de décrocher le poste de vos rêves grâce à notre outil de création de CV facile à utiliser et efficace.
                            </p>

                            {
                                typeAdmin == typeadmin.candidat ?
                                <div class="overview-btn">
                                <a href={`/${routing.candidatCv.path}`} class="default-btn">Envoyer votre cv<i class="flaticon-list-1"></i></a>
                            </div>
                            :
                            null
                            }
                            
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="overview-image">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                                    <div class="image" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500">
                                        <img src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                         alt="image" />
                                    </div>
                                </div>

                                <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                                    <div class="image" data-aos="fade-down" data-aos-delay="70" data-aos-duration="700">
                                        <img src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                         alt="image" />
                                    </div>
                                </div>

                                <div class="col-lg-4 col-sm-4 col-md-4 col-4">
                                    <div class="image" data-aos="fade-left" data-aos-delay="90" data-aos-duration="900">
                                        <img src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                                        alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overview-shape">
                <img src="assets/images/overview/shape.png" alt="image" />
            </div>
        </div>
    )
}

export default OverViewHome