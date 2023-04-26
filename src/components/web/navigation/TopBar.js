import React from 'react'

const TopBar = () => {
  return (
    <div class="topbar-area">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6">
                        <ul class="topbar-social-list">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank"><i class="flaticon-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank"><i class="flaticon-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank"><i class="flaticon-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/" target="_blank"><i class="flaticon-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-7 col-md-6">
                        <ul class="topbar-action">
                            <li>
                                <a href="profile-authentication.html"><i class="flaticon-padlock"></i> Log In</a>
                            </li>

                            <li>
                                <a href="profile-authentication.html"><i class="flaticon-user"></i> Register</a>
                            </li>

                            <li class="dropdown language-option">
                                <button class="dropdown-toggle" type="button" id="language1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="flaticon-worldwide"></i>
                                    <span class="lang-name"></span>
                                </button>
                                <div class="dropdown-menu language-dropdown-menu" aria-labelledby="language1">
                                    <a class="dropdown-item" href="#">
                                        <img src="assets/images/uk.png" alt="flag"/>
                                        English
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        <img src="assets/images/china.png" alt="flag"/>
                                        简体中文
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        <img src="assets/images/uae.png" alt="flag"/>
                                        العربيّة
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TopBar;
