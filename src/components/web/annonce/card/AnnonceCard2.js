import React from 'react'
import { routing } from '../../../../utlis/routing';
import { localvalue } from '../../../../utlis/storage/localvalue';
import moment from 'moment';
import { imageIcons } from '../../../../utlis/imageFile';

const AnnonceCard2 = ({ item }) => {
    return (
        <div class="job-block-item">
            <div class="row align-items-center">
                <div class="col-lg-2 col-sm-2">
                    <div class="company-box-logo">
                        <a href="job-details-1.html">
                            <img src={item.logo ?
                                imageIcons.annonce.logo
                                :
                                imageIcons.annonce.logo
                            } alt="image" />
                        </a>
                    </div>
                </div>

                <div class="col-lg-10 col-sm-10">
                    <div class="job-list-inner-box">
                        <div class="row align-items-center">
                            <div class="col-lg-9">
                                <div class="job-list-box">
                                    <div class="job-information">
                                        <div class="title-box">
                                            <h3>
                                                <a href={`/${routing.detailAnnonce.path}`}
                                                    onClick={() => {
                                                        sessionStorage.setItem(localvalue.annonceDetail.id, `${item._id}`);
                                                    }}
                                                >{item.titre}</a>
                                            </h3>
                                            <span>{item.titre}</span>
                                        </div>

                                        <ul class="job-tag-list opacity-0">
                                            <li></li>
                                            <li class="urgent">Urgent</li>
                                            <li class="private"></li>
                                        </ul>
                                    </div>

                                    <ul class="location-information">
                                        <li><i class="ri-time-line"></i> {moment(item.dateDebut).format('DD/MM/YYYY')}</li>
                                        <li><i class="ri-map-pin-line"></i> {item.lieu}</li>
                                        <li><i class="ri-time-line"></i> Part Time</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-3">
                                <div class="job-list-optional">
                                    <a href={`/${routing.detailAnnonce.path}`} class="default-btn visible bg-blue-600"
                                        onClick={() => {
                                            sessionStorage.setItem(localvalue.annonceDetail.id, `${item._id}`);
                                        }}
                                    >Postuler maintenant <i class="flaticon-list-1"></i></a>

                                    {
                                        /*
                                        <div class="save-text">
                                        <span>Enregistrer</span>
                                    </div>
                                        */
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnonceCard2
