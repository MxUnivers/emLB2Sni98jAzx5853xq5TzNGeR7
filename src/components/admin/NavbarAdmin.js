import React from 'react'
import NavbarItemCandidat from './candidat/NavbarItemCandidat';

const NavbarAdmin = () => {
    return (


        <div class="navbar-area visible">
            <div class="main-responsive-nav visible">
                <div class="main-responsive-menu visible">
                    <div class="responsive-burger-menu d-lg-none d-block visible">
                        <span class="top-bar visible"></span>
                        <span class="middle-bar visible"></span>
                        <span class="bottom-bar visible"></span>
                    </div>
                </div>
            </div>

            <div class="main-navbar visible">
                <nav class="navbar navbar-expand-md navbar-light ">
                    <div class="collapse navbar-collapse mean-menu visible" id="navbarSupportedContent">
                        <ul class="navbar-nav mean-auto visible">
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="contact.html" class="nav-link"></a>
                            </li>
                        </ul>

                        {
                            /* Profile candidat */
                        }
                        <NavbarItemCandidat/>


                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavbarAdmin;