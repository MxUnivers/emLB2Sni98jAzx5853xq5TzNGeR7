import React from 'react'
import { routing } from '../../../utlis/routing';
import { localvalue } from '../../../utlis/storage/localvalue';
import { LocaleState } from '../../../utlis/storage/localvalueFunction';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const OffreCardAdmin = ({item}) => {
    const  navigation  =  useNavigate();
    return (

        <div class="col-lg-6 col-md-12">
            <div class="dashboard-job-card">
                <div class="job-content">
                    <div class="company-logo">
                        <a href={`/${routing.dashbordDetailOffreEmplois.path}`}
                        onClick={LocaleState(localvalue.offreAdmin.id, item._id)}><img src="assets/images/job/job-1.png" alt="image" /></a>
                    </div>
                    <h3>
                        <a
                        href={`/${routing.dashbordDetailOffreEmplois.path}`}
                        onClick={LocaleState(localvalue.offreAdmin.id, item._id)}
                        >{item.titre}</a>
                    </h3>
                    <div class="bookmark-btn">
                        <i class="ri-bookmark-line"></i>
                    </div>
                    <div class="hover-bookmark-btn">
                        <i class="ri-bookmark-fill"></i>
                    </div>
                    <ul class="location-information">
                        <li><i class="ri-briefcase-line"></i> offre</li>
                        <li><i class="ri-map-pin-line"></i> {item.lieu}</li>
                        <li><i class="ri-money-dollar-circle-line"></i>  ${item.salaire}</li>
                    </ul>
                    <ul class="job-tag-list">
                        
                    </ul>
                    <ul class="option-list">
                        <li>
                        <Button
                                onClick={() => {
                                    navigation(`/${routing.employeurEditOffre.path}`, { state: item })
                                }}
                                variant="outline-primary"
                                class="option-btn d-inline-block"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="View Aplication"
                                type="button">
                                <i class="ri-edit-line"></i>
                            </Button>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OffreCardAdmin;
