import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JobCard.css';
import { setWithExpiration , getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { dureeDeVie, localvalue } from '../../utlis/storage/localvalue';
import { routing } from '../../utlis/routing';


const JobCard = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className="job-card">
            <div className="job-image-wrapper">
                <img src={data.coverPicture} alt={data.title} className="job-image" />
            </div>
            <div className="job-content">
                <h5 className="job-title">{data.title}</h5>
                <p className="job-company">{data.company}</p>
                {data.addresse && (
                    <p className="job-address">
                        <i className="mdi mdi-map-marker"></i> {data.addresse}
                    </p>
                )}
                <p className="job-contract">{data.typeContrat}</p>
                <div className="job-details-link">
                    <a
                        href={`/${routing.job_details}`}
                        onClick={() => {
                            setWithExpiration(localvalue.JobID, data._id, dureeDeVie);
                            navigate(`/${routing.job_details}`, { state: { data } })}
                        }
                    >
                        Voir Détails
                    </a>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
