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
import useFetchEducation, { EducationCandidatPost , EducationCandidatDelete } from '../../action/api/candidat/EducationAction';
import useFetchExperience, { ExperienceCandidatPost , ExperienceCandidatDelete } from '../../action/api/candidat/ExperienceAction';
import useFetchProject, { ProjectCandidatPost , ProjectCandidatDelete } from '../../action/api/candidat/ProjectAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const CandidatDetailPage = () => {
    const idCandidat = getAndCheckLocalStorage(localvalue.candidatID);
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
                        <div className="lg:flex md:lg:flex lg:justify-between">
                            {/* Left Column */}
                            <div className="col-lg-4">
                                <div className="card border bg-white shadow rounded-lg">
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            {candidat?.coverPicture ? (
                                                <img src={candidat.coverPicture} alt="" className="avatar-lg rounded-full h-32 w-32" />
                                            ) : (
                                                <div className="h-32 w-32 bg-gray-200 animate-pulse rounded-full"></div>
                                            )}

                                            <h6 className="fs-18 mt-4 text-xl font-semibold">{candidat?.firstname} {candidat?.lastname}</h6>
                                            <p className="text-muted">{candidat?.title_post}</p>

                                            <ul className="inline-flex mb-5 space-x-4">
                                                {candidat?.facebook_url && (
                                                    <li>
                                                        <a href={candidat.facebook_url} target="_blank" className="social-link">
                                                            <CiFacebook className="h-7 w-7" />
                                                        </a>
                                                    </li>
                                                )}
                                                {candidat?.twitter_url && (
                                                    <li>
                                                        <a href={candidat.twitter_url} target="_blank" className="social-link">
                                                            <BsTwitter className="h-7 w-7" />
                                                        </a>
                                                    </li>
                                                )}
                                                {candidat?.linkedin_url && (
                                                    <li>
                                                        <a href={candidat.linkedin_url} target="_blank" className="social-link">
                                                            <BsLinkedin className="h-7 w-7" />
                                                        </a>
                                                    </li>
                                                )}
                                            </ul>

                                            {candidat && candidat._id === idCandidat && (
                                                <button onClick={() => navigate(routing.candidat_edit)} className="btn bg-blue-500 text-white py-2 px-4 rounded-lg">
                                                    <BiEdit /> Modifier
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="w-full col-lg-8">
                                <div className="card shadow-lg w-full">
                                    <div className="card-body p-4">
                                        {/* About Me Section */}
                                        <div className="mb-4">
                                            <h6 className="text-2xl font-semibold">À propos de moi</h6>
                                            {candidat?.description ? (
                                                <p>{candidat.description}</p>
                                            ) : (
                                                <div className="bg-gray-200 h-20 animate-pulse rounded-lg"></div>
                                            )}
                                        </div>

                                        {/* Education Section */}
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center">
                                                <h6 className="text-2xl font-semibold">Éducation</h6>
                                                <button onClick={() => handleShow(0)} className="btn bg-blue-500 text-white text-xs py-1 px-2">+ Ajouter</button>
                                            </div>
                                            {isLoadingEducation ? (
                                                <p>Chargement...</p>
                                            ) : (
                                                candidatEducation?.map((edu) => (
                                                    <div key={edu._id} className="flex justify-between mt-4">
                                                        <div>
                                                            <h6>{edu.title}</h6>
                                                            <p>{edu.entreprise}</p>
                                                            <p>{edu.description}</p>
                                                        </div>
                                                        <div className="flex space-x-2">
                                                            <button onClick={() => handleShow(0)} className="text-blue-500"><BiEdit /></button>
                                                            <button onClick={() => handleDeleteEducation(edu._id)} className="text-red-500"><BiTrash /></button>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>

                                        {/* Experience Section */}
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center">
                                                <h6 className="text-2xl font-semibold">Expériences</h6>
                                                <button onClick={() => handleShow(1)} className="btn bg-blue-500 text-white text-xs py-1 px-2">+ Ajouter</button>
                                            </div>
                                            {isLoadingExperience ? (
                                                <p>Chargement...</p>
                                            ) : (
                                                candidatExperience?.map((exp) => (
                                                    <div key={exp._id} className="flex justify-between mt-4">
                                                        <div>
                                                            <h6>{exp.title}</h6>
                                                            <p>{exp.entreprise}</p>
                                                            <p>{exp.description}</p>
                                                        </div>
                                                        <div className="flex space-x-2">
                                                            <button onClick={() => handleShow(1)} className="text-blue-500"><BiEdit /></button>
                                                            <button onClick={() => handleDeleteExperience(exp._id)} className="text-red-500"><BiTrash /></button>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>

                                        {/* Projects Section */}
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center">
                                                <h6 className="text-2xl font-semibold">Projets</h6>
                                                <button onClick={() => handleShow(2)} className="btn bg-blue-500 text-white text-xs py-1 px-2">+ Ajouter</button>
                                            </div>
                                            {isLoadingProject ? (
                                                <p>Chargement...</p>
                                            ) : (
                                                candidatProject?.map((proj) => (
                                                    <div key={proj._id} className="flex justify-between mt-4">
                                                        <div>
                                                            <h6>{proj.title}</h6>
                                                            <p>{proj.description}</p>
                                                        </div>
                                                        <div className="flex space-x-2">
                                                            <button onClick={() => handleShow(2)} className="text-blue-500"><BiEdit /></button>
                                                            <button onClick={() => handleDeleteProject(proj._id)} className="text-red-500"><BiTrash /></button>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modal for adding/updating */}
                {modalApply && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                        {step === 0 && (
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-lg font-bold mb-4">Ajouter une Éducation</h2>
                                <form onSubmit={handleSubmitEducation}>
                                    <input type="text" placeholder="Titre" value={title_education} onChange={(e) => setTitleEducation(e.target.value)} className="w-full border rounded mb-4 px-3 py-2" />
                                    <input type="text" placeholder="Entreprise/École" value={entreprise_education} onChange={(e) => setEntrepriseEducation(e.target.value)} className="w-full border rounded mb-4 px-3 py-2" />
                                    <textarea placeholder="Description" value={description_education} onChange={(e) => setDescriptionEducation(e.target.value)} className="w-full border rounded mb-4 px-3 py-2" />
                                    <div className="flex justify-end">
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Ajouter</button>
                                        <button type="button" onClick={handleClose} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">Annuler</button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {step === 1 && (
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-lg font-bold mb-4">Ajouter une Expérience</h2>
                                <form onSubmit={handleSubmitExperience}>
                                    <input type="text" placeholder="Titre" value={title_experience} onChange={(e) => setTitleExperience(e.target.value)} className="w-full border rounded mb-4 px-3 py-2" />
                                    <input type="text" placeholder="Entreprise" value={entreprise_experience} onChange={(e) => setEntrepriseExperience(e.target.value)} className="w-full border rounded mb-4 px-3 py-2" />
                                    <textarea placeholder="Description" value={description_experience} onChange={(e) => setDescriptionExperience(e.target.value)} className="w-full border rounded mb-4 px-3 py-2" />
                                    <div className="flex justify-end">
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Ajouter</button>
                                        <button type="button" onClick={handleClose} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">Annuler</button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-lg font-bold mb-4">Ajouter un Projet</h2>
                                <form onSubmit={handleSubmitProject}>
                                    <input type="text" placeholder="Nom du projet" value={title_project} onChange={(e) => setTitleProject(e.target.value)} className="w-full border rounded mb-4 px-3 py-2" />
                                    <textarea placeholder="Description" value={description_project} onChange={(e) => setDescriptionProject(e.target.value)} className="w-full border rounded mb-4 px-3 py-2" />
                                    <div className="flex justify-end">
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Ajouter</button>
                                        <button type="button" onClick={handleClose} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">Annuler</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CandidatDetailPage;
