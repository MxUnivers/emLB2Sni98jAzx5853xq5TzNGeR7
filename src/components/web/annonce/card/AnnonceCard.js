import React from 'react'
import { routing } from '../../../../utlis/routing'
import { localvalue } from '../../../../utlis/storage/localvalue'
import moment from 'moment';

const AnnonceCard = ({ data }) => {
    return (
        <div class="col-lg-4 col-md-6 w-full">
            <div class="single-job-list-card">
                <div class="job-information">
                    <div class="company-logo">
                        <a
                        ><img src="assets/images/job/job-1.png" alt="image" />
                        </a>
                    </div>
                    <h3>
                        <a href={`#`}
                        >{data.titre}</a>
                    </h3>
                    <span>{data.entreprise}</span>

                    <div class="bookmark-btn">
                        <i class="ri-bookmark-line"></i>
                    </div>

                    <div class="hover-bookmark-btn">
                        <i class="ri-bookmark-fill"></i>
                    </div>
                </div>


                <ul class="location-information">
                    <li><i class="ri-map-pin-line"></i> {data.lieu}</li>
                    <li><i class="ri-time-line"></i>{moment(data.dateDebut).format('DD/MM/YYYY')} </li>
                </ul>
                {/* 
                    }} */}
                <div class="job-btn">
                    <a href={`/${routing.detailAnnonce.path}`}
                    onClick={() => { 
                        sessionStorage.setItem(localvalue.annonceDetail.id,`${data._id}`);
                    }}
                  
                        class="default-btn">Postuler maintenant <i class="flaticon-list-1"></i></a>
                </div>
            </div>
        </div>
    )
}

export default AnnonceCard
