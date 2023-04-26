
import React ,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const PlayVideoHome = () => {
    var bgImg = "https://images.pexels.com/photos/5537941/pexels-photo-5537941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    useEffect(() => {
        Aos.init({
            duration: 3000,
            easing: 'ease-in-out-back',
            once: true
        });
    }, []);
  return (
    <div class="play-video-area pb-100" data-aos="fade-up">
            <div class="container">
                <div class="play-video-inner-box-image">
                    <img src={bgImg} alt="image"/>

                    <div class="video-content">
                        <div class="play-btn">
                            <a href="https://www.youtube.com/watch?v=ODfy2YIKS1M" class="video-btn popup-youtube">
                                <i class="flaticon-play-button-arrowhead"></i>
                            </a>
                        </div>
                        <h3> <br/> Découvrez comment Notre plateforme <br/> vous aide
                        à recruter des talents</h3>

                        <div class="layer-shape">
                            <img src="assets/images/play-video/layer.png" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PlayVideoHome