import React, { useEffect, useState } from 'react'
import { FormationGetById } from '../../action/api/formations/FormationAction';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue } from '../../utlis/storage/localvalue';
import LoadinButton from '../../components/loading/LoadinButton';
import LoadingCompo1 from '../../components/loading/LoadingCompo1';
import useFetchCandidat from '../../action/api/candidat/CandidatAction';
import { statusPACKS } from '../../utlis/config';
import ErrorPrincing from '../../components/empty/ErrorPrincing';
import { routing } from '../../utlis/routing';
import { EntrepriseGetById } from '../../action/api/employeur/EmployeurAction';
import VocalReader from '../../components/coachingAndFormation/formation/VocalReader';

const FormationdetailPage = () => {






    var idFormation = localStorage.getItem(localvalue.formationId);
    const idCcandidat = getAndCheckLocalStorage(localvalue.candidatID);
    const idEntreprise = getAndCheckLocalStorage(localvalue.recruteurID);
    const { isLoading, error, formation } = FormationGetById(idFormation);
    const { candidat } = useFetchCandidat(idCcandidat);

    const [entrepriseDetail, setentrepriseDetail] = useState();
    useEffect(() => {
        EntrepriseGetById(idEntreprise, setentrepriseDetail);
    }, []);


    const [textToRead, setTextToRead] = useState(''); // Contenu à lire

    useEffect(() => {
        // Construire le texte à lire
        const pageContent = `
            Formation: ${formation?.formationTitle || ''}
            Description: ${formation?.description || ''}
            ${formation?.modules?.map((module, index) => {
                return `
                    Module ${index + 1}: ${module.moduleLabel || 'Nom du module'}
                    ${module?.lecons?.map((lesson, lessonIndex) => {
                        return `
                            Leçon ${lessonIndex + 1}: ${lesson?.leconTitle || 'Titre de la leçon'}
                            Contenu de la leçon: ${lesson?.leconContent || 'Contenu de la leçon non disponible'}
                        `;
                    }).join(' ')}
                `;
            }).join('\n')}
        `;
        
        setTextToRead(pageContent); // Mettre à jour le texte à lire
    }, [formation]);

    return (
        <div className="main-content">
            <div className="page-content mt-28">
                {
                    (candidat && candidat.account && candidat.account.pack &&
                        (candidat.account.pack == statusPACKS[1] || candidat.account.pack == statusPACKS[2]))
                        ||
                        (entrepriseDetail && entrepriseDetail.account && entrepriseDetail.account.pack &&
                            (entrepriseDetail.account.pack == statusPACKS[0] || entrepriseDetail.account.pack == statusPACKS[1] || entrepriseDetail.account.pack == statusPACKS[2]))
                        ?
                        <section className="mt-16 border-b border-gray-100 dark:border-gray-800 sm:mt-20 lg:mt-32">
                            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                                <div className="border-b border-gray-100 pb-20 dark:border-gray-800 lg:grid lg:grid-cols-5 xl:grid-cols-6">
                                    <div className="sticky top-24 hidden h-max lg:block">
                                        <div className="sticky">
                                            <span className="text-sm font-medium text-gray-600 dark:text-gray-500">Modules</span>
                                            <div className="mt-6 mr-[-0.80rem] space-y-4 text-2xl text-gray-500 dark:text-gray-400">
                                                <ul className="relative space-y-3 border-l px-6 text-base dark:border-gray-700">
                                                    <div id="link-indicator"
                                                        className="link-indicator link-indicator absolute top-0 -left-[3.5px] z-[1] h-6 w-1.5 rounded-full border-2 border-white bg-primary transition-[top] dark:border-gray-900 dark:bg-secondaryLight"
                                                        style={{ top: "0px" }}></div>
                                                    {
                                                        formation && formation.modules && formation.modules.length > 0 ?
                                                            formation.modules.map((item) => {
                                                                return (
                                                                    <li data-target="company"
                                                                        className="section-link active-link relative before:absolute before:top-0 before:bottom-0 before:-left-6 before:my-auto before:h-[1px] before:w-3 before:bg-gray-200 dark:before:bg-gray-800">
                                                                        <a href="#company"
                                                                            className="py-2 duration-300 hover:text-primary dark:hover:text-secondaryLight">
                                                                            {item.moduleLabel}
                                                                        </a>
                                                                    </li>
                                                                )

                                                            }) : ""
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-12 text-gray-600 dark:text-gray-400 lg:col-span-4 xl:col-span-4 xl:col-start-2">

                                    <VocalReader text={textToRead} />

                                        <div className="space-y-6">
                                            {
                                                formation && formation.formationTitle ?
                                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                                                        {formation.formationTitle}
                                                    </h2> :
                                                    <div>...</div>
                                            }

                                            {
                                                formation && formation.logo ?
                                                    <img className="rounded-2xl h-[300px] w-full " src={formation.logo} loading="lazy"
                                                        alt="abstract background " />
                                                    : ""
                                            }
                                            {
                                                formation && formation.description ?
                                                    <div className="space-y-4">
                                                        <p>{formation.description}</p>
                                                    </div>
                                                    : ""
                                            }
                                        </div>
                                        {
                                            formation.modules.map((item, index) => {
                                                return (
                                                    <div className="my-5">
                                                        <div className="space-y-6">
                                                            <h2 className="text-2xl font-bold text-gray-800  md:text-2xl">
                                                                {item.moduleLabel ? `module ${index + 1}  : `.toLocaleUpperCase() : ""}
                                                                {item.moduleLabel} </h2>
                                                        </div>
                                                        {
                                                            item.lecons.map((item, index) => {
                                                                return (
                                                                    <div className="space-y-10">
                                                                        <h2 className="text-lg  text-gray-800 dark:text-white md:text-xl font-bold"> L {index + 1} :  {item.leconTitle}</h2>
                                                                        {
                                                                            item && item.coverPicture ?
                                                                                <div className="grid grid-cols-1 lg:ml-1 xl:mx-5">
                                                                                    <img className="h-96 w-full rounded-2xl object-cover" src={item.coverPicture}
                                                                                        alt="abstract background" width="1556" height="778" />
                                                                                </div> : null
                                                                        }
                                                                        <div className="space-y-4">
                                                                            <div className="mt-10 mb-10" dangerouslySetInnerHTML={{ __html: item.leconContent }} />
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                        :
                        <ErrorPrincing title={`Participation à la formation  ${formation && formation.formationTitle ? formation.formationTitle : ''} `} message={"Cette Fonctionnalité est reservé au premuim"} route={`${routing.pricing}`} />
                }
            </div>
        </div>
    )
}

export default FormationdetailPage;