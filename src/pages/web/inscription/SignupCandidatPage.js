import React, { useState } from 'react'
import Select from 'react-select'
//File pond
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
// Importer le plugin de prévisualisation d'image
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import { ApiKey } from '../../../utlis/config'
import BarnerCandidat from '../../../components/web/candidat/BarnerCandidat'
import { Editor } from '@tinymce/tinymce-react'
import { routing } from '../../../utlis/routing'
import { optionPays } from '../../../utlis/options/optionDivers'
import { localites } from '../../../utlis/options/annonceOptions'
import { competences, languages, level_School } from '../../../utlis/options/candidatOption'
import { lang } from 'moment/moment'

registerPlugin(FilePondPluginImagePreview)

const SignupCandidatPage = () => {
    // Uploader images
    const [photo, setPhoto] = useState(null);

    const handlePhotoUpdate = (files) => {
        if (files[0].getFileEncodeDataURL !== undefined) {
            setPhoto(files[0].getFileEncodeDataURL());
        } else if (files[0].getFileEncodeDataURL == undefined) {
            // Fichier non défini ou non chargé
            setPhoto();
            console.error("Une erreur s'est produite lors de la récupération de l'URL encodée en base64 de l'image");
        } else {
            console.log("Erreur inconue")
        }
    };

    const handleRemovePhoto = () => {
        setPhoto(null);
    };


    // Edtiteur tiny
    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content)
    }



    const levels = [
        { value: 'doctorat', label: 'Doctorat' },
        { value: 'master1', label: 'Master 2' },
        { value: 'master2', label: 'Master2' },
        { value: 'bts', label: 'Bts' }
    ]

    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedCompetences, setSelectedCompetences] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([])

    
    const handleChangeLanguages = selected => {
        setSelectedLanguages(selected)
    }
    const handleChangeComptences = (selected) => {
        setSelectedCompetences(selected)
    }

    return (
        <div>
            <BarnerCandidat />

            <div class='main p-10 d-flex flex-column bg-gray-200'>

                <div class='submit-resumes-box  '>
                    <div class=" flex space-x-3 items-center ">
                        <p>si vous avez une compte</p>
                        <a href={`/${routing.connexionCandidat.path}`} class=" btn bg-blue-500 text-white underline" >Se connecter</a>
                    </div>
                    <form>
                        <div class=' pt-20 bg-white'>
                            <div>
                                <FilePond
                                    allowMultiple={false}
                                    acceptedFileTypes={['image/*']}
                                    labelIdle="Déposez votre photo de profil ici ou <span class='filepond--label-action'>téléchargez un fichier</span>"
                                    onupdatefiles={handlePhotoUpdate}
                                    onremovefile={handleRemovePhoto}
                                />
                                {photo && <img class="h-[50px] w-[50px] rounded-lg" src={photo} alt='Ma photo de profil' />}
                            </div>
                        </div>
                        <div class='row'>
                            <h3 class='text-3xl'>Information sur candidat</h3>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Nom d{"'"}utilisateur *</label>
                                    <input type='text' name="username" class='form-control' placeholder="nom d'utlisateur" />
                                </div>
                            </div>
                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Votre nom *</label>
                                    <input type='text' name="firstname" class='form-control' placeholder='Nom' />
                                </div>
                            </div>
                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Votre prénoms *</label>
                                    <input
                                        type='text'
                                        name="lastname"
                                        class='form-control'
                                        placeholder='prénoms'
                                    />
                                </div>
                            </div>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Email *</label>
                                    <input
                                        type='text'
                                        name="email"
                                        class='form-control'
                                        placeholder='Your Email'
                                    />
                                </div>
                            </div>
                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>mot de passe *</label>
                                    <input
                                        type='text'
                                        name="email"
                                        class='form-control'
                                        placeholder='Your Email'
                                    />
                                </div>
                            </div>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Date de naissance *</label>
                                    <input
                                        type='date'
                                        class='form-control'
                                        placeholder='Date of Birth'
                                    />
                                </div>
                            </div>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Télephone</label>
                                    <input
                                        type='number'
                                        class='form-control'
                                        placeholder='+XXXXXXXXXX'
                                    />
                                </div>
                            </div>


                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>ville</label>
                                    <select class="form-control">
                                        <option> Choisissez votre ville</option>
                                        {
                                            localites.map((item) => {
                                                return (
                                                    <option value={item.value}>{item.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>adresse *</label>
                                    <input type="text" class="form-control" name="adresse" placeholder="Côte d'Ivoire , Abidjan,Yopougon" />
                                </div>
                            </div>



                            <div class='col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Dites en plus sur vous (Cela peut s{"'"})averé utile pour les recommandations</label>

                                    <Editor
                                        class='form-control'
                                        apiKey={`${ApiKey.tiny.path}`}
                                        initialValue='<p>Décriver en plus sur votre entrprise sur votre acticté / les succès de votre entrpise</p>'
                                        init={{
                                            height: 200,
                                            menubar: true,
                                            plugins: [
                                                'advlist autolink lists link image charmap print preview anchor',
                                                'searchreplace visualblocks code fullscreen',
                                                'insertdatetime media table paste code help wordcount'
                                            ],
                                            toolbar:
                                                'undo redo | formatselect | bold italic backcolor | \
                                                alignleft aligncenter alignright alignjustify | \
                                                bullist numlist outdent indent | removeformat | help'
                                        }}
                                        onEditorChange={handleEditorChange}
                                    />
                                </div>
                            </div>

                            <h3>Secteur d{"'"}activités </h3>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Choisir domaine de compétences</label>
                                    <div>
                                        <Select
                                            options={competences}
                                            onChange={handleChangeComptences}
                                            isMulti
                                            value={selectedCompetences}
                                        />
                                        <p>Options sélectionnées:</p>
                                        <ul>
                                            {selectedCompetences.map(option => (
                                                <li key={option.value}>{option.label}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Niveau d{"'"}études</label>
                                    <div>
                                        <select class="form-control" name="level_school">
                                            {
                                                level_School.map((item) => {
                                                    return (
                                                        <option value={item.value} >{item.label}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Année Experience</label>
                                    <input
                                        type='number'
                                        name="years_experience"
                                        class='form-control'
                                        placeholder='Experience'
                                    />
                                </div>
                            </div>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Langues</label>
                                    <div>
                                        <Select
                                            options={languages}
                                            onChange={handleChangeLanguages}
                                            isMulti

                                            value={selectedLanguages}
                                        />
                                        <p>Langues sélectionnées:</p>
                                        <ul>
                                            {selectedLanguages.map(option => (
                                                <li key={option.value}>{option.label}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h3>Résaux sociaux</h3>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Facebook URL</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        placeholder='https://www.facebook.com/'
                                    />
                                </div>
                            </div>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Twitter URL</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        placeholder='https://twitter.com/'
                                    />
                                </div>
                            </div>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Linkedin URL</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        placeholder='https://www.linkedin.com/'
                                    />
                                </div>
                            </div>

                            <div class='col-xl-6 col-lg-12 col-md-12'>
                                <div class='form-group'>
                                    <label>Instagram URL</label>
                                    <input
                                        type='text'
                                        class='form-control'
                                        placeholder='https://instagram.com/'
                                    />
                                </div>
                            </div>

                            <div class='col-lg-12 col-md-12'>
                                <button
                                    type='submit'
                                    class=' btn btn-info default-btn bg-blue-600'
                                >
                                    Confimer votre inscription <i class='flaticon-send'></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupCandidatPage
