import React from 'react'
import { routing } from '../../../../utlis/routing'

const AnnonceCard = ({ data }) => {
    return (
        <div class="col-lg-4 col-md-6">
            <div class="single-job-list-card">
                <div class="job-information">
                    <div class="company-logo">
                        <a href="job-details-1.html"><img src="assets/images/job/job-1.png" alt="image" /></a>
                    </div>
                    <h3>
                        <a href="job-details-1.html">{data.titre}</a>
                    </h3>
                    <span>{data.entreprise}</span>

                    <div class="bookmark-btn">
                        <i class="ri-bookmark-line"></i>
                    </div>

                    <div class="hover-bookmark-btn">
                        <i class="ri-bookmark-fill"></i>
                    </div>
                </div>

                <ul class="job-tag-list">
                    <li>Featured</li>
                    <li class="urgent">Urgent</li>
                    <li class="private">Private</li>
                    <li>Part Time</li>
                </ul>

                <ul class="location-information">
                    <li><i class="ri-time-line"></i> 3 Days Left</li>
                    <li><i class="ri-map-pin-line"></i> 32, Walsh Street, USA</li>
                    <li><i class="ri-time-line"></i> Part Time</li>
                </ul>

                <div class="job-btn">
                    <a href={`/${routing.detailAnnonce.path}`}
                    onClick={()=>{
                        
                    }}
                    class="default-btn">Postuler maintenant <i class="flaticon-list-1"></i></a>
                </div>
            </div>
        </div>
    )
}

export default AnnonceCard
