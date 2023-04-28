import React, { useState } from 'react'
import { routing } from '../../../utlis/routing';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css'
// Importer le plugin de prévisualisation d'image
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'




registerPlugin(FilePondPluginImagePreview)

const DashboardCvCandidatPage = () => {

    const [photo, setPhoto] = useState(null);
    const handlePhotoUpdate = (files) => {
        if (files[0].getFileEncodeDataURL !== undefined) {
            setPhoto(files[0].getFileEncodeDataURL());
        } else if(files[0].getFileEncodeDataURL == undefined){
            // Fichier non défini ou non chargé
            setPhoto();
            console.error("Une erreur s'est produite lors de la récupération de l'URL encodée en base64 de l'image");
        }else{
            console.log("Erreur inconue")
        }
    };

    const handleRemovePhoto = () => {
        setPhoto(null);
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
                    <form action="/file-upload" class="dropzone">
                        <FilePond
                            allowMultiple={false}
                            acceptedFileTypes={['pdf/*']}
                            labelIdle="Déposez votre photo de profil ici ou <span class='filepond--label-action'>téléchargez un fichier</span>"
                            onupdatefiles={handlePhotoUpdate}
                            onremovefile={handleRemovePhoto}
                        />
                        {photo && <img class="h-[50px] w-[50px] rounded-lg" src={photo} alt='Ma photo de profil' />}
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