import React from 'react'
import { routing } from '../../../utlis/routing'
import { localvalue } from '../../../utlis/storage/localvalue'
import { LocaleState } from '../../../utlis/storage/localvalueFunction'

export const AnnonceCardAdmin = ({ item }) => {
    return (
        <div class="col-lg-6 col-md-12">
            <div class="dashboard-job-card">
                <div class="job-content">
                    <div class="company-logo">
                        <a href={`/${routing.dashbordDetailAnnonce.path}`}
                        onClick={LocaleState(localvalue.annonceAdmin.id, item._id)}><img src="assets/images/job/job-1.png" alt="image" /></a>
                    </div>
                    <h3>
                        <a
                            href={`/${routing.dashbordDetailAnnonce.path}`}
                            onClick={LocaleState(localvalue.annonceAdmin.id, item._id)}
                        >{item.titre}</a>
                    </h3>
                    <div class="bookmark-btn">
                        <i class="ri-bookmark-line"></i>
                    </div>
                    <div class="hover-bookmark-btn">
                        <i class="ri-bookmark-fill"></i>
                    </div>
                    <ul class="location-information">
                        <li><i class="ri-briefcase-line"></i> annonce</li>
                        <li><i class="ri-map-pin-line"></i> {item.lieu}</li>
                        <li><i class="ri-money-dollar-circle-line"></i>  ${item.salaire}</li>
                    </ul>
                    <ul class="job-tag-list">
                        <li>Full Time</li>
                        <li class="urgent">Urgent</li>
                        <li class="private">Private</li>
                    </ul>
                    <ul class="option-list">
                        <li><button class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="View Aplication" type="button"><i class="ri-eye-line"></i></button></li>
                        <li><button class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Approve Aplication" type="button"><i class="ri-check-line"></i></button></li>
                        <li><button class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Reject Aplication" type="button"><i class="ri-close-line"></i></button></li>
                        <li><button class="option-btn d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Aplication" type="button"><i class="ri-delete-bin-line"></i></button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
