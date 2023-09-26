import React from 'react'
import { useNavigate } from 'react-router-dom';
import { setWithExpiration } from '../../utlis/storage/localvalueFunction';
import { dureeDeVie, localvalue } from '../../utlis/storage/localvalue';
import { routing } from '../../utlis/routing';

const JobCard2 = ({data}) => {
    const navigate=  useNavigate();


  return (
    <div onClick={() => {
        setWithExpiration(localvalue.JobID, data._id, dureeDeVie);
        navigate(`/${routing.job_details}`, { state: { data } });
    }}
        class="job-box card  cursor-pointer mt-4 flex flex-wrap justify-between rounded-lg border ">

        <div class="p-4">

            <div class="row flex justify-between space-x-2">
                <div class="col-lg-1">
                    <img src={data.coverPicture} alt=""
                        class="img-fluid h-10 w-10 rounded-xl" />
                </div>
                <div class="col-lg-10">
                    <div class="mt-3 mt-lg-0">
                        <h5 class="fs-17 mb-1"><a href={`/${routing.job_details}`}
                            onClick={() => {
                                setWithExpiration(localvalue.JobID, data._id, dureeDeVie)
                            }}
                            class="text-dark text-lg font-semibold">{data.title}</a></h5>
                        <ul class="list-inline mb-0 flex flex-wrap space-x-2">
                            <li class="list-inline-data">
                                <p class="text-muted fs-14 mb-0">
                                <i class="mdi mdi-work"></i>
                                {data.company}</p>
                            </li>
                            <li class="list-inline-data">
                                <p class="text-muted fs-14 mb-0">
                                <i class="mdi mdi-map-marker"></i> {data.addresse}</p>
                            </li>
                            <li class="list-inline-data">
                                <p class="text-muted fs-14 mb-0"><i
                                    class="uil uil-wallet"></i> {data.salaire} / mois
                                </p>
                            </li>
                        </ul>
                        <div class="mt-2">
                            {
                                data.typeContrat ?
                                    <span class="badge bg-success-subtle bg-green-600 py-1 px-2 rounded-lg text-white mt-1">{data.typeContrat}</span> :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div class="favorite-icon">
                <a href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></a>
            </div>
        </div>
        <div class="p-3 bg-light">
            <div class="flex justify-between datas-center">
                <div class="col-md-3">
                    <div class="text-md-end btn ">
                        <a href={`/${routing.job_details}`} onClick={() => {
                            setWithExpiration(localvalue.JobID, data._id, dureeDeVie)
                        }} class="primary-link">Details
                            <i class="mdi mdi-chevron-double-right"></i></a>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default JobCard2
