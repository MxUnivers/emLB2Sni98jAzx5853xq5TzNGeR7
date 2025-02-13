import React, { useState, useEffect } from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import { MdEmail, MdLocationCity, MdPhone, MdWeb } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { routing } from '../../utlis/routing';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import useFetchCandidat from '../../action/api/candidat/CandidatAction';
import useFetchEducation, { EducationCandidatPost , EducationCandidatDelete } from
'../../action/api/candidat/EducationAction';
import useFetchExperience, { ExperienceCandidatPost , ExperienceCandidatDelete } from
'../../action/api/candidat/ExperienceAction';
import useFetchProject, { ProjectCandidatPost , ProjectCandidatDelete } from '../../action/api/candidat/ProjectAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const CandidatDetailViewPage = () => {
const idCandidat = getAndCheckLocalStorage(localvalue.candidatDetailID);
const { isLoading, candidat } = useFetchCandidat(idCandidat);
const { isLoadingEducation, candidatEducation } = useFetchEducation(idCandidat);
const { isLoadingExperience, candidatExperience } = useFetchExperience(idCandidat);
const { isLoadingProject, candidatProject } = useFetchProject(idCandidat);

const [modalApply, setModalApply] = useState(false);
const [step, setStep] = useState(0);
const dispatch = useDispatch();
const navigate = useNavigate();

// State for form inputs
const [title_education, setTitleEducation] = useState('');
const [entreprise_education, setEntrepriseEducation] = useState('');
const [description_education, setDescriptionEducation] = useState('');

const [title_experience, setTitleExperience] = useState('');
const [entreprise_experience, setEntrepriseExperience] = useState('');
const [description_experience, setDescriptionExperience] = useState('');

const [title_project, setTitleProject] = useState('');
const [description_project, setDescriptionProject] = useState('');

// Handle show and close modal
const handleShow = (item) => { setModalApply(true); setStep(item) };
const handleClose = () => { setModalApply(false) };

// Submit functions
const handleSubmitEducation = (event) => {
event.preventDefault();
dispatch(EducationCandidatPost(idCandidat, title_education, entreprise_education, description_education, toast));
handleClose();
};

const handleSubmitExperience = (event) => {
event.preventDefault();
dispatch(ExperienceCandidatPost(idCandidat, title_experience, entreprise_experience, description_experience, toast));
handleClose();
};

const handleSubmitProject = (event) => {
event.preventDefault();
dispatch(ProjectCandidatPost(idCandidat, title_project, description_project, toast));
handleClose();
};

// Delete functions
const handleDeleteEducation = (educationId) => {
dispatch(EducationCandidatDelete(educationId, toast));
};

const handleDeleteExperience = (experienceId) => {
dispatch(ExperienceCandidatDelete(experienceId, toast));
};

const handleDeleteProject = (projectId) => {
dispatch(ProjectCandidatDelete(projectId, toast));
};

return (
<div className="main-content">
    <div className="page-content">
        <section className="section mt-28 mb-36">
            <div className="px-5 container-fluid">
                <div className="lg:flex md:lg:flex lg:justify-between gap-5">
                    {/* Left Column */}
                    <div className="col-lg-4">
                        <div className="card border bg-white rounded-lg">
                            <div className="card-body p-4">
                                <div className="w-full text-center justify-items-center">
                                    {candidat?.coverPicture ? (
                                    <img src={candidat.coverPicture} alt=""
                                        className="avatar-lg rounded-full h-32 w-32" />
                                    ) : (
                                    <div className="h-32 w-32 bg-gray-200 animate-pulse rounded-full"></div>
                                    )}

                                    <h6 className="fs-18 mt-4 text-xl font-semibold">{candidat?.firstname}
                                        {candidat?.lastname}</h6>
                                    <p className="text-muted">{candidat?.title_post}</p>

                                    {/*candidat && candidat._id === idCandidat && (
                                    <div>
                                        <button onClick={()=> navigate(`/${routing.candidat_edit}`)} className="btn inline-flex items-center px-4 bg-indigo-500 text-xs text-white py-2 rounded-lg">
                                            <BiEdit className="mr-2" /> <span>Mettre à jour</span>
                                        </button>

                                    </div>
                                    ) */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full col-lg-8">
                        <div className="card shadow-sm w-full h-screen">
                            <div className="card-body p-4">
                                {/* About Me Section */}
                                <div className="mb-4">
                                    <h6 className="text-2xl font-semibold">Description</h6>
                                    <hr />
                                    {candidat?.description ? (
                                    <p>{candidat.description}</p>
                                    ) : (
                                    <div className="bg-gray-200 h-20 animate-pulse rounded-lg"></div>
                                    )}
                                </div>

                                {/* Education Section */}
                                <div className="mb-4">
                                    <div className="flex justify-between items-center">
                                        <h6 className="text-2xl font-semibold">Expérience</h6>
                                    </div>
                                    {isLoadingEducation ? (
                                    <p>Chargement...</p>
                                    ) : (
                                    candidatEducation?.map((edu) => (
                                    <div key={edu._id} className=" card p-3 rounded-lg border flex justify-between mt-4">
                                        <div>
                                            <h6>{edu.title}</h6>
                                            <hr class="w-full"/>
                                            <p>{edu.entreprise}</p>
                                            <p>{edu.description}</p>
                                        </div>
                                        
                                    </div>
                                    )))}
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       
            </div>
        </div>
    );
};

export default CandidatDetailViewPage;