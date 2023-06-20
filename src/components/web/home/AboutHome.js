import React , {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const AboutHome = () => {
    // var  bgImg =  "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    var  bgImg =  "https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg";

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-back',
            once: true
        });
    }, []);
  return (
    <div class="about-area ptb-100 ">
            <div class="container ">
                <div class="row align-items-center ">
                    <div class="col-lg-6 col-md-12 visible">
                        <div class="about-image visible" data-aos="fade-left"  data-aos-delay="50" data-aos-duration="500">
                            <img class="" src={bgImg} alt="image"/>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12 ">
                        <div class="about-content" data-aos="fade-right"  data-aos-delay="70" data-aos-duration="700">
                            <h3 class="visible text-gray-500 opacity-100"> Metter en valeur vos compétences, votre expérience et vos réalisations de manière claire et attrayante</h3>
                            <p class="visible">Vous êtes à la recherche d'une opportunité professionnelle qui correspond à vos aspirations et à vos compétences ? Ne cherchez pas plus loin, car notre plateforme d'emplois est là pour vous aider à trouver le travail de vos rêves.</p>
                            <p class=" text-2xl font-bold mt-5 visible">Des resultats plus que satifaisants</p>
                            
                            <div class="row visible">
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div class="about-fun-fact">
                                        <h3>
                                            <span class="odometer" data-count="25">+</span>
                                            <span class="sign-icon">30720</span>
                                        </h3>
                                        <p>Etudiants</p>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div class="about-fun-fact">
                                        <h3>
                                            <span class="odometer" data-count="16">+</span>
                                            <span class="sign-icon">2300</span>
                                        </h3>
                                        <p>Entreprises</p>
                                    </div>
                                </div>
                            </div>

                            <div class="about-btn">
                                <a href="about-us.html" class="default-btn"><i class="flaticon-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default AboutHome;