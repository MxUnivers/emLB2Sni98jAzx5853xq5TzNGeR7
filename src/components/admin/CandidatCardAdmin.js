import React from 'react'
import { HiEye, HiLocationMarker, HiOutlineMail, HiStatusOnline } from 'react-icons/hi'
import { routing } from '../../utlis/routing'
import { useNavigate } from 'react-router-dom'
import { localvalue } from '../../utlis/storage/localvalue'

const CandidatCardAdmin = ({ item }) => {
    const navigation = useNavigate();


    return (
        <div class="col-lg-6 col-md-12">
            <div class="single-applicants-card bg-teal-100 hover:bg-teal-200 active:bg-teal-250">
                <div class="image">
                    <a href="#"><img src={item.coverPicture} alt={item.username} /></a>
                </div>

                <div class="content">
                    <h3>
                        <a href={`/${routing.candidatDetailProfileView.path}`}
                            onClick={() => {
                                localStorage.setItem(localvalue.candidat.idCandidatDetail, item._id)
                            }}
                        >{item.firstname} {item.lastname}</a>
                    </h3>
                    <span>UI/UX Designer</span>

                    <ul class="job-info">
                        <li >
                            <div class="flex flex-row space-x-2 ">
                                <HiOutlineMail size={20} />
                                <span>{item.email}</span>
                            </div>
                        </li>
                        {
                            item.ville ?
                                <li >
                                    <div class="flex flex-row space-x-2 ">
                                        <HiLocationMarker size={20} />
                                        <span>{item.ville}</span>
                                    </div>
                                </li> :
                                null
                        }
                        <li >
                            <div class="flex flex-row space-x-2 ">
                                <HiStatusOnline size={20} />
                                <span>{item.is_active ? "Connecté" : "Déconnecté"}</span>
                            </div>
                        </li>

                    </ul>

                    <div class="applicants-footer">
                        <ul class="option-list">
                            <li><button class="option-btn d-inline-block flex justify-center items-center"
                                data-bs-toggle="tooltip" data-bs-placement="top" title="View Aplication" type="button"
                                onClick={() => {
                                    localStorage.setItem(localvalue.candidat.idCandidatDetail, item._id)
                                    navigation(`/${routing.candidatDetailProfileView.path}`);
                                }}

                            ><HiEye size={22} /></button></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidatCardAdmin
