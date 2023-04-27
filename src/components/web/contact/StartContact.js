import React from 'react';



const StartContact = () => {

  return (
    <div class="contact-area ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12">
                        <div class="contact-address">
                            <h3>Information sur le contact</h3>

                            <ul class="address-info">
                                <li>
                                    <i class="flaticon-a"></i>
                                    32, Wales Street, New York, USA
                                </li>

                                <li>
                                    <i class="flaticon-p"></i>
                                    <a href="tel:00901361246725">(009)01361246725</a>
                                </li>

                                <li>
                                    <i class="flaticon-e"></i>
                                    <a href="mailto:eeza@gmail.com">eeza@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-8 col-md-12">
                        <div class="contact-form">
                            <h3>Prendre contact</h3>

                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Nom complet" required data-error="Please enter your name"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="email" required data-error="Please enter your email"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Sujet" required data-error="Please enter your subject"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Télephone" required data-error="Please enter your number"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea placeholder="Votre commentaire ici ..." class="form-control" required data-error="Write your message"></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <p class="form-cookies-consent">
                                            <input type="checkbox" id="test1"/>
                                            <label for="test1">j{"'"}accepte  <a href="#">Terms & Conditions</a></label>
                                        </p>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="default-btn  visible">Envoyer Message <i class="flaticon-send"></i></button>

                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.7535241766864!2d-73.90996728434231!3d40.81140973946449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5b9998bf269%3A0xbb6dd99c5d7c00ab!2sWales%20Ave%2C%20Bronx%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1625473568079!5m2!1sen!2sbd"></iframe>
                </div>
            </div>
        </div>        
  )
}

export default StartContact ;