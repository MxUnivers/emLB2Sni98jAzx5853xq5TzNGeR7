import React from 'react'

const CandidatCard = ({data}) => {
    return (
        <div class="featured-candidates-box">
            <div class="row align-items-center">

                <div class="col-lg-8 col-sm-6">
                    <div class="candidates-box-content">
                        <div class="image">
                            <a href="candidates-details-#"><img src="assets/images/featured-candidates/image-8.jpg" alt="image" /></a>
                        </div>

                        <div class="content">
                            <h3>
                                <a href="candidates-details-#">{data.firstname} {data.lastname}</a>
                            </h3>
                            <span>{data.level_school}</span>

                            {
                                /*<div class="rating">
                                <i class="flaticon-star"></i>
                                <i class="flaticon-star"></i>
                                <i class="flaticon-star"></i>
                                <i class="flaticon-star"></i>
                                <i class="flaticon-star"></i>
                                <span>4.5 Rating</span>
                            </div> */
                            }

                            <ul class="job-info">
                                <li><i class="ri-map-pin-line"></i> {data.pays}</li>
                                <li><i class="ri-mail-line"></i> {data.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="featured-candidates-hire">
                        <ul class="job-other-info">
                            <li>recommandé</li>
                            {
                                /**<li class="featured">Featured</li> */
                            }
                        </ul>
                        <a href="#" class="default-btn">Profile <i class="flaticon-list-1"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidatCard;
