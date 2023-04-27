import React , {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const AboutHome = () => {
    var  bgImg =  "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

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
                            <h3 class="visible text-gray-500 opacity-100">plateforme X est un endroit digne de confiance pour trouver l{"'"}emploi de vos rêves</h3>
                            <p class="visible">Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            <p class="visible">Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua.</p>

                            <div class="row visible">
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div class="about-fun-fact">
                                        <h3>
                                            <span class="odometer" data-count="25">00</span>
                                            <span class="sign-icon">+</span>
                                        </h3>
                                        <p>Annés expériences</p>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div class="about-fun-fact">
                                        <h3>
                                            <span class="odometer" data-count="16">00</span>
                                            <span class="sign-icon">+</span>
                                        </h3>
                                        <p>PRIX GAGNÉS</p>
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