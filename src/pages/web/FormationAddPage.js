


import React, { useRef } from 'react'
import { useState } from 'react';
import { Formik, Field, FieldArray, ErrorMessage, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import ReactQuillWrapper from '../../containers/formations/ReactQuillWrapper';
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseurl } from '../../utlis/url/baseurl';
import LoadinButton from '../../components/loading/LoadinButton';
import ReactPlayer from 'react-player';
import Select from 'react-select';
import { areaFormationOptions } from '../../utlis/options/optionDivers';
import { useDispatch, useSelector } from 'react-redux';
import { FormationCreate } from '../../action/api/formations/FormationAction';


const FormationAddPage = () => {
    const [formations, setformations] = useState([1, 1, 1])


    const initialValues = {
        idEntreprise: '',
        urlVideo: '',
        formationTitle: '',
        logo: '',
        areaFormation: '',
        description: '',
        modules: [{ moduleLabel: '', lecons: [{ leconTitle: '', coverPicture: '', video: '', leconContent: '' }] }],
        duree: '',
        dateBegin: '',
        dateEnd: '',
        coach: {
            coachWork: '',
            coachNaissance: '',
            coachName: '',
            coachCoverPicture: '',
            coachSchool: '',
        },
        lieu: '',
        price: '',
        capaciteMax: '',
        candidats: [],
        inscriptionOuverte: false,
    };

    const validationSchema = Yup.object().shape({
        idEntreprise: Yup.string(),
        urlVideo: Yup.string(),
        formationTitle: Yup.string().required('Le titre de la formation est requis'),
        logo: Yup.string().required('Image de formation requise'),
        // Ajoutez ici les règles de validation pour les autres champs
        modules: Yup.array().of(
            Yup.object().shape({
                moduleLabel: Yup.string().required('Le titre du module est requis'),
                lecons: Yup.array().of(
                    Yup.object().shape({
                        leconTitle: Yup.string().required('Le titre de la leçon est requis'),
                        leconContent: Yup.string().required('Le contenu de la leçon est requise'),
                        // Ajoutez ici les règles de validation pour les champs de leçon
                    })
                ),
            })
        ),
    });





    // Uploade Images

    const [coverPictures, setCoverPictures] = useState([]); // État pour stocker les URLs des images de couverture

    const [LoadingAll, setLoadingAll] = useState(false);
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }

    const uploadSinglePhoto = (base64, moduleIndex, leconIndex) => {
        setLoadingAll(true);
        axios
            .post(`${baseurl.url}/uploadImage`, { image: base64 })
            .then((res) => {
                // Récupérer l'URL de l'image depuis la réponse du serveur
                const imageUrl = res.data;

                // Mettre à jour l'URL de l'image de couverture spécifique à la leçon
                const newCoverPictures = [...coverPictures];

                if (!newCoverPictures[moduleIndex]) {
                    newCoverPictures[moduleIndex] = [];
                }

                newCoverPictures[moduleIndex][leconIndex] = imageUrl;
                setCoverPictures(newCoverPictures);

                toast.dark("Photo téléchargée avec succès");
                setLoadingAll(false)
            })
            .then(() => setLoadingAll(false))
            .catch(() => {
                console.log("Erreur lors du téléchargement de la photo");
                toast.error("Photo non téléchargée !");
                setLoadingAll(false);
            });
    };


    const HandleFileInputChangePhoto = async (event, moduleIndex, leconIndex) => {
        const files = event.target.files;

        if (files.length === 1) {
            try {
                const base64 = await convertBase64(files[0]);
                uploadSinglePhoto(base64, moduleIndex, leconIndex);
            } catch (error) {
                console.error("Erreur lors de la conversion en base64 :", error);
            }
            return;
        }
        // Gérer le cas où plusieurs fichiers sont sélectionnés
    };







    // **********************   Uploade Video *************************

    const [videoUrls, setVideoUrls] = useState([]);
    const uploadSingleVideo = (base64, moduleIndex, leconIndex) => {
        setLoadingAll(true);
        axios
            .post(`${baseurl.url}/uploadVideo`, { image: base64 }) // Assurez-vous que le serveur accepte les vidéos
            .then((res) => {
                // Récupérer l'URL de la vidéo depuis la réponse du serveur
                const videoUrl = res.data;

                // Mettre à jour l'URL de la vidéo spécifique à la leçon
                const newVideoUrls = [...videoUrls];

                if (!newVideoUrls[moduleIndex]) {
                    newVideoUrls[moduleIndex] = [];
                }

                newVideoUrls[moduleIndex][leconIndex] = videoUrl;
                setVideoUrls(newVideoUrls);

                toast.dark("Vidéo téléchargée avec succès");
                setLoadingAll(false)
            })
            .then(() => setLoadingAll(false))
            .catch(() => {
                console.log("Erreur lors du téléchargement de la vidéo");
                toast.error("Vidéo non téléchargée !");
                setLoadingAll(false);
            });
    };

    const HandleFileInputChangeVideo = async (event, moduleIndex, leconIndex) => {
        const files = event.target.files;

        if (files.length === 1) {
            try {
                const base64 = await convertBase64(files[0]);
                uploadSingleVideo(base64, moduleIndex, leconIndex);
            } catch (error) {
                console.error("Erreur lors de la conversion en base64 :", error);
            }
            return;
        }
        // Gérer le cas où plusieurs fichiers sont sélectionnés
    };




    // Uploade de la photo de la formation 


    const [logoUrl, setLogoUrl] = useState('');





    const fileInputRef = useRef(null);


    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);
    const error = useSelector((state) => state.reducer.error);

    const handleSubmit = (values, { setSubmitting }) => {
        // Vous pouvez effectuer ici des opérations de prétraitement des données si nécessaire

        // Appelez votre action Redux pour créer la formation
        dispatch(FormationCreate(values, toast)); // Assurez-vous d'avoir importé `toast`

        // N'oubliez pas de gérer setSubmitting si vous avez besoin de bloquer le formulaire pendant l'envoi
    };






    return (
        <section className="mt-16 mb-56 border-b border-gray-100 dark:border-gray-800 sm:mt-20 lg:mt-32">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="border-b border-gray-100 pb-20 dark:border-gray-800 lg:grid lg:grid-cols-5 xl:grid-cols-6">
                </div>
                <div className="w-full px-5 py-20">
                    <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-white">Ajouter une formations</h3>




                    <div>
                        <h1>Créer une formation avec des modules et des leçons</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ values, errors, setFieldValue }) => (
                                <Form>
                                    {/* Informations sur la formation */}
                                    <div className="mb-4">
                                        <label htmlFor="formationTitle" className="block font-medium">Titre de la formation</label>
                                        <Field
                                            type="text"
                                            id="formationTitle"
                                            name="formationTitle"
                                            className="mt-1 p-2 w-full rounded border"
                                        />
                                        <ErrorMessage name="formationTitle" component="div" className="text-red-500" />
                                    </div>



                                    <div className="mb-4">
                                        <label htmlFor="logo" className="block font-medium">Logo de la formation</label>
                                        {/* Aperçu de l'image */}
                                        {values.logo && (
                                            <img src={values.logo} alt="Aperçu du logo" style={{ maxWidth: '100px' }} />
                                        )}
                                        <label htmlFor="logo" className="block btn cursor-pointer font-medium">
                                            Sélectionnez une image
                                        </label>
                                        <input
                                            type="file"
                                            accept=".JPEG,.PNG,.JPG"
                                            id="logo"
                                            name="logo"
                                            style={{ display: 'none' }}
                                            ref={fileInputRef}
                                            // Ajoutez une référence pour le champ de fichier
                                            onChange={async (e) => {
                                                const files = e.target.files;

                                                if (files.length === 1) {
                                                    try {
                                                        const base64 = await convertBase64(files[0]);
                                                        setLoadingAll(true);
                                                        axios
                                                            .post(`${baseurl.url}/uploadImage`, { image: base64 })
                                                            .then((res) => {
                                                                // Mettez à jour la valeur du champ "logo" avec l'URL de l'image
                                                                setFieldValue('logo', res.data);
                                                                setLoadingAll(false);
                                                                console.log(res.data)
                                                            })
                                                            .catch((err) => {
                                                                console.log("Erreur lors du téléchargement de la photo", err);
                                                                toast.error("Photo non téléchargée !");
                                                                setLoadingAll(false);
                                                            });
                                                    } catch (error) {
                                                        console.error("Erreur lors de la conversion en base64 :", error);
                                                        toast.error("Une erreur s'est produite lors de l'upload de l'image");
                                                        setLoadingAll(false);
                                                    }
                                                }
                                            }}
                                        />

                                        <ErrorMessage name="logo" component="div" className="text-red-500" />

                                        {/* Le reste de votre formulaire */}

                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="areaFormation" className="block font-medium">Zone de formation</label>
                                        <Field
                                            name="areaFormation"
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    options={areaFormationOptions}
                                                    placeholder="Sélectionnez une zone de formation"
                                                />
                                            )}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="description" className="block font-medium">Description de la formation</label>
                                        <Field
                                            as="textarea"
                                            id="description"
                                            name="description"
                                            rows="4" // Ajustez le nombre de lignes en conséquence
                                            className="mt-1 p-2 w-full rounded border"
                                        />
                                        <ErrorMessage name="description" component="div" className="text-red-500" />
                                    </div>

                                    {/* Autres champs de formation */}
                                    {/* ... (ajoutez les champs supplémentaires de formation ici) */}

                                    {/* Informations sur les modules */}
                                    <FieldArray name="modules">
                                        {({ push, remove }) => (
                                            <div>
                                                {values.modules.map((module, moduleIndex) => (
                                                    <div key={moduleIndex} className="mb-4 border p-4">
                                                        <h2>Module {moduleIndex + 1}</h2>
                                                        <div className="mb-4">
                                                            <label htmlFor={`modules.${moduleIndex}.moduleLabel`} className="block font-medium">Titre du module {moduleIndex + 1}</label>
                                                            <Field
                                                                type="text"
                                                                id={`modules.${moduleIndex}.moduleLabel`}
                                                                name={`modules.${moduleIndex}.moduleLabel`}
                                                                className="mt-1 p-2 w-full rounded border"
                                                            />
                                                            <ErrorMessage name={`modules.${moduleIndex}.moduleLabel`} component="div" className="text-red-500" />
                                                        </div>

                                                        {/* Informations sur les leçons */}
                                                        <FieldArray name={`modules.${moduleIndex}.lecons`}>
                                                            {({ push: pushLecon, remove: removeLecon }) => (
                                                                <div>
                                                                    {module.lecons.map((lecon, leconIndex) => (
                                                                        <div key={leconIndex} className="mb-2 border p-2">
                                                                            <h3>Leçon {leconIndex + 1}</h3>
                                                                            <div className="mb-2">
                                                                                <label htmlFor={`modules.${moduleIndex}.lecons.${leconIndex}.leconTitle`} className="block font-medium">Titre de la leçon</label>
                                                                                <Field
                                                                                    type="text"
                                                                                    id={`modules.${moduleIndex}.lecons.${leconIndex}.leconTitle`}
                                                                                    name={`modules.${moduleIndex}.lecons.${leconIndex}.leconTitle`}
                                                                                    className="mt-1 p-2 w-full rounded border"
                                                                                />
                                                                                <ErrorMessage name={`modules.${moduleIndex}.lecons.${leconIndex}.leconTitle`} component="div" className="text-red-500" />
                                                                            </div>

                                                                            {/* Autres champs de leçon */}
                                                                            <div className="mb-2">
                                                                                <label htmlFor={`modules.${moduleIndex}.lecons.${leconIndex}.leconContent`} className="block font-medium">Contenu de la leçon</label>
                                                                                <Field
                                                                                    name={`modules.${moduleIndex}.lecons.${leconIndex}.leconContent`}
                                                                                    render={({ field }) => (
                                                                                        <ReactQuillWrapper
                                                                                            value={field.value}
                                                                                            onChange={(value) => field.onChange(field.name)(value)}
                                                                                        />
                                                                                    )}
                                                                                />
                                                                                <ErrorMessage name={`modules.${moduleIndex}.lecons.${leconIndex}.leconContent`} component="div" className="text-red-500" />
                                                                            </div>

                                                                            {/*Image de couverture */}
                                                                            <div className="mb-2">
                                                                                <label htmlFor={`modules.${moduleIndex}.lecons.${leconIndex}.coverPicture`} className="block font-medium">Image de couverture (Leçon {leconIndex + 1} )</label>
                                                                                <input
                                                                                    type="file"
                                                                                    accept='.JPEG,.PNG,.JPG'
                                                                                    id={`modules.${moduleIndex}.lecons.${leconIndex}.coverPicture`}
                                                                                    name={`modules.${moduleIndex}.lecons.${leconIndex}.coverPicture`}
                                                                                    onChange={(e) => HandleFileInputChangePhoto(e, moduleIndex, leconIndex)} // Appel de la fonction pour télécharger l'image
                                                                                    className="mt-1 p-2 w-full rounded border"
                                                                                />
                                                                                <ErrorMessage name={`modules.${moduleIndex}.lecons.${leconIndex}.coverPicture`} component="div" className="text-red-500" />
                                                                            </div>
                                                                            {/* ... (autres champs de leçon) */}
                                                                            <div className="mb-2">
                                                                                {/* Affichage de l'image de couverture téléchargée */}
                                                                                {coverPictures[moduleIndex] && coverPictures[moduleIndex][leconIndex] && (
                                                                                    <img src={coverPictures[moduleIndex][leconIndex]} className="h-28 w-28" alt="Image de couverture" />
                                                                                )}
                                                                            </div>

                                                                            {/* Vidéo de la leçon */}
                                                                            <div className="mb-2">
                                                                                <label htmlFor={`modules.${moduleIndex}.lecons.${leconIndex}.video`} className="block font-medium">Vidéo de la leçon ((Leçon {leconIndex + 1} ))</label>
                                                                                <input
                                                                                    type="file"
                                                                                    accept='.MP4'
                                                                                    id={`modules.${moduleIndex}.lecons.${leconIndex}.video`}
                                                                                    name={`modules.${moduleIndex}.lecons.${leconIndex}.video`}
                                                                                    onChange={(e) => HandleFileInputChangeVideo(e, moduleIndex, leconIndex)} // Appel de la fonction pour télécharger la vidéo
                                                                                    className="mt-1 p-2 w-full rounded border"
                                                                                />
                                                                                <ErrorMessage name={`modules.${moduleIndex}.lecons.${leconIndex}.video`} component="div" className="text-red-500" />
                                                                            </div>
                                                                            {/* ... (autres champs de leçon) */}
                                                                            <div className="mb-2">
                                                                                {/* Affichage de la vidéo téléchargée en utilisant ReactPlayer */}
                                                                                {videoUrls[moduleIndex] && videoUrls[moduleIndex][leconIndex] && (
                                                                                    <ReactPlayer
                                                                                        url={videoUrls[moduleIndex][leconIndex]}
                                                                                        controls={true}
                                                                                        width="100%"
                                                                                        height="auto"
                                                                                    />
                                                                                )}
                                                                            </div>

                                                                            {/* Informations supplémentaires */}
                                                                            <div className="mb-2">
                                                                                <label htmlFor={`modules.${moduleIndex}.lecons.${leconIndex}.additionalInfo`} className="block font-medium">Informations supplémentaires (Leçon {leconIndex + 1} )</label>
                                                                                <Field
                                                                                    as="textarea"
                                                                                    id={`modules.${moduleIndex}.lecons.${leconIndex}.additionalInfo`}
                                                                                    name={`modules.${moduleIndex}.lecons.${leconIndex}.additionalInfo`}
                                                                                    className="mt-1 p-2 w-full rounded border"
                                                                                />
                                                                            </div>

                                                                            <button type="button" className="btn bg-red-600 rounded-3xl text-white py-1 text-xs" onClick={() => removeLecon(leconIndex)}>Supprimer Leçon {leconIndex + 1}</button>
                                                                        </div>
                                                                    ))}
                                                                    <button type="button" className="btn bg-blue-600 rounded-3xl py-2 text-white text-xs" onClick={() => pushLecon({ leconTitle: '', leconContent: '', coverPicture: '', video: '', additionalInfo: '' })}> + Ajouter Leçon</button>
                                                                </div>
                                                            )}
                                                        </FieldArray>
                                                        <button type="button" className="btn bg-red-600 rounded-3xl py-2 text-white text-xs" onClick={() => remove(moduleIndex)}>Supprimer Module {moduleIndex + 1}</button>
                                                    </div>
                                                ))}
                                                <button type="button" className="btn bg-blue-700 rounded-3xl  text-white text-md" onClick={() => push({ moduleLabel: '', lecons: [{ leconTitle: '', leconContent: '', coverPicture: '', video: '', additionalInfo: '' }] })}>+ Ajouter Module</button>
                                            </div>
                                        )}
                                    </FieldArray>

                                    {
                                        LoadingAll ?
                                            <LoadinButton text={"Uploade Fichier en cours ..."} />
                                            :
                                            loading ?
                                                (<LoadinButton text={"Enregistrement en cours .."} />)
                                                :
                                                <button type="submit" className="bg-blue-900 rounded-3xl text-white px-4 py-2  hover:bg-blue-600 mt-4">
                                                    Enregistrer Formation
                                                </button>
                                    }
                                </Form>
                            )}
                        </Formik>
                    </div>



                </div>
            </div>
        </section >

    )
}

export default FormationAddPage;