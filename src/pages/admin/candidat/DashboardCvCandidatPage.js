import React, { useEffect, useState } from 'react'
import { routing } from '../../../utlis/routing';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { useDispatch, useSelector } from 'react-redux';
import { localvalueGetCandidat } from '../../../utlis/storage/localvalue';
import { CandidatEditCv, CandidatEditProfile, CandidatGetCvById } from '../../../action/api/candidat/CandidatAction';

registerPlugin(FilePondPluginFileEncode, FilePondPluginFileValidateType);

const DashboardCvCandidatPage = () => {


    const [cv, setCv] = useState(null);

    useEffect(()=>{
        CandidatGetCvById(localvalueGetCandidat.idCandidat,setCv);
    },[]);
    const handleCvUpdate = (files) => {
        const pdfFile = files.find((file) => file.file.type === 'application/pdf');
        if (pdfFile) {
            const url = URL.createObjectURL(pdfFile.file);
            setCv(url);
            console.log(url + cv);
        } else {
            setCv(null);
            console.error("Une erreur s'est produite lors de la récupération de l'URL encodée en base64 du fichier PDF");
        }
    };

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (cv == null) {
            alert("Veillez mettre à jour votre cv svp")
            return;
        }
        dispatch(CandidatEditCv(localvalueGetCandidat.idCandidat, {"cv":cv}));
    };


    return (
        <div>
            <div class="breadcrumb-area">
                <h1>Votre CV</h1>
                <ol class="breadcrumb">
                    <li class="item"><a href={`/${routing.candidatDashboard.path}`}>Tableau de board</a></li>

                    <li class="item">Votre cv</li>
                </ol>
            </div>



            <div class="cv-manager-box">
                <h2>Cv du candidat</h2>

                <div class="file-upload-box">
                    <form class="dropzone" onSubmit={handleSubmit}>

                        <FilePond
                            allowMultiple={false}
                            acceptedFileTypes={['application/pdf']}
                            labelIdle="Déposez votre CV ici ou <span class='filepond--label-action'>téléchargez un fichier</span>"
                            onupdatefiles={handleCvUpdate}
                        />
                        {cv && (
                            <div>
                                <object data={cv} type="application/pdf" width="100%" height="600px">
                                    <p>Votre navigateur ne supporte pas les PDF intégrés. Vous pouvez télécharger le fichier <a href={cv}>ici</a>.</p>
                                </object>
                            </div>
                        )}

                        {error && <p class="text-danger">une erreur est sur venue lors de la modification de votre cv : {error}</p>}


                        {
                            loading ?
                                <p class="animate-pulse text-gray-500  font-bold">Mise à jour en cours .... </p>
                                :
                                <div class="mt-5">
                                    <button type="submit" class=" btn bg-blue-600 text-white rounded-lg px-2 py-1 hover:bg-blue-700 active:bg-blue-800">Enregister changement</button>
                                </div>
                        }

                    </form>
                </div>
                <div class="text">
                    <p>Noted: to upload file size is (Max 5Mb) and allowed file types are (.doc, .docx, .pdf)</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardCvCandidatPage;