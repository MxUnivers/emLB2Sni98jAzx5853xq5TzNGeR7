import React, { useRef, useState } from 'react';
import { Formik, Field, FieldArray, ErrorMessage, Form } from 'formik';
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
import { handleImageUploadCloudOnly } from '../../action/upload/UploadFileCloud';

const FormationAddPage = () => {
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
        modules: Yup.array().of(
            Yup.object().shape({
                moduleLabel: Yup.string().required('Le titre du module est requis'),
                lecons: Yup.array().of(
                    Yup.object().shape({
                        leconTitle: Yup.string().required('Le titre de la leçon est requis'),
                        leconContent: Yup.string().required('Le contenu de la leçon est requise'),
                    })
                ),
            })
        ),
    });

    const [LoadingAll, setLoadingAll] = useState(false);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);

    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(FormationCreate(values, toast));
    };

    const HandleFileInputChangePhoto = async (event, moduleIndex, leconIndex, setFieldValue) => {
        const file = event.target.files[0];
        setLoadingAll(true);
        const url = await handleImageUploadCloudOnly(file, toast);
        if (url) {
            setFieldValue(`modules.${moduleIndex}.lecons.${leconIndex}.coverPicture`, url);
        }
        setLoadingAll(false);
    };

    const HandleFileInputChangeVideo = async (event, moduleIndex, leconIndex, setFieldValue) => {
        const file = event.target.files[0];
        setLoadingAll(true);
        const url = await handleImageUploadCloudOnly(file, toast);
        if (url) {
            setFieldValue(`modules.${moduleIndex}.lecons.${leconIndex}.video`, url);
        }
        setLoadingAll(false);
    };

    return (
        <section className="mt-16 mb-56 border-b border-gray-100 dark:border-gray-800 sm:mt-20 lg:mt-32">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="border-b border-gray-100 pb-20 dark:border-gray-800 lg:grid lg:grid-cols-5 xl:grid-cols-6"></div>
                <div className="w-full px-5 py-20">
                    <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-white">Ajouter une formation</h3>

                    <div>
                        <h1>Créer une formation avec des modules et des leçons</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ values, setFieldValue }) => (
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
                                        {values.logo && (
                                            <img src={values.logo} alt="Aperçu du logo" style={{ maxWidth: '100px' }} />
                                        )}
                                        <input
                                            type="file"
                                            accept=".JPEG,.PNG,.JPG"
                                            id="logo"
                                            name="logo"
                                            onChange={async (e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    setLoadingAll(true);
                                                    const url = await handleImageUploadCloudOnly(file, toast);
                                                    if (url) {
                                                        setFieldValue('logo', url);
                                                    }
                                                    setLoadingAll(false);
                                                }
                                            }}
                                            className="mt-1 p-2 w-full rounded border"
                                        />
                                        <ErrorMessage name="logo" component="div" className="text-red-500" />
                                    </div>

                                    {/*<div className="mb-4">
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
                                    </div> */}

                                    <div className="mb-4">
                                        <label htmlFor="description" className="block font-medium">Description de la formation</label>
                                        <Field
                                            as="textarea"
                                            id="description"
                                            name="description"
                                            rows="4"
                                            className="mt-1 p-2 w-full rounded border"
                                        />
                                        <ErrorMessage name="description" component="div" className="text-red-500" />
                                    </div>

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

                                                                            <div className="mb-2">
                                                                                <label htmlFor={`modules.${moduleIndex}.lecons.${leconIndex}.coverPicture`} className="block font-medium">Image de couverture (Leçon {leconIndex + 1})</label>
                                                                                <input
                                                                                    type="file"
                                                                                    accept=".JPEG,.PNG,.JPG"
                                                                                    id={`modules.${moduleIndex}.lecons.${leconIndex}.coverPicture`}
                                                                                    name={`modules.${moduleIndex}.lecons.${leconIndex}.coverPicture`}
                                                                                    onChange={(e) => HandleFileInputChangePhoto(e, moduleIndex, leconIndex, setFieldValue)}
                                                                                    className="mt-1 p-2 w-full rounded border"
                                                                                />
                                                                                <ErrorMessage name={`modules.${moduleIndex}.lecons.${leconIndex}.coverPicture`} component="div" className="text-red-500" />
                                                                            </div>

                                                                            {values.modules[moduleIndex].lecons[leconIndex].coverPicture && (
                                                                                <img src={values.modules[moduleIndex].lecons[leconIndex].coverPicture} className="h-28 w-28" alt="Image de couverture" />
                                                                            )}

                                                                            <div className="mb-2">
                                                                                <label htmlFor={`modules.${moduleIndex}.lecons.${leconIndex}.video`} className="block font-medium">Vidéo de la leçon (Leçon {leconIndex + 1})</label>
                                                                                <input
                                                                                    type="file"
                                                                                    accept=".MP4"
                                                                                    id={`modules.${moduleIndex}.lecons.${leconIndex}.video`}
                                                                                    name={`modules.${moduleIndex}.lecons.${leconIndex}.video`}
                                                                                    onChange={(e) => HandleFileInputChangeVideo(e, moduleIndex, leconIndex, setFieldValue)}
                                                                                    className="mt-1 p-2 w-full rounded border"
                                                                                />
                                                                                <ErrorMessage name={`modules.${moduleIndex}.lecons.${leconIndex}.video`} component="div" className="text-red-500" />
                                                                            </div>

                                                                            {values.modules[moduleIndex].lecons[leconIndex].video && (
                                                                                <ReactPlayer
                                                                                    url={values.modules[moduleIndex].lecons[leconIndex].video}
                                                                                    controls={true}
                                                                                    width="100%"
                                                                                    height="auto"
                                                                                />
                                                                            )}

                                                                            <button type="button" className="btn bg-red-600 rounded-3xl text-white py-1 text-xs" onClick={() => removeLecon(leconIndex)}>Supprimer Leçon {leconIndex + 1}</button>
                                                                        </div>
                                                                    ))}
                                                                    <button type="button" className="btn bg-blue-600 rounded-3xl py-2 text-white text-xs" onClick={() => pushLecon({ leconTitle: '', leconContent: '', coverPicture: '', video: '' })}> + Ajouter Leçon</button>
                                                                </div>
                                                            )}
                                                        </FieldArray>
                                                        <button type="button" className="btn bg-red-600 rounded-3xl py-2 text-white text-xs" onClick={() => remove(moduleIndex)}>Supprimer Module {moduleIndex + 1}</button>
                                                    </div>
                                                ))}
                                                <button type="button" className="btn bg-blue-700 rounded-3xl text-white text-md" onClick={() => push({ moduleLabel: '', lecons: [{ leconTitle: '', leconContent: '', coverPicture: '', video: '' }] })}>+ Ajouter Module</button>
                                            </div>
                                        )}
                                    </FieldArray>

                                    {LoadingAll ? (
                                        <LoadinButton text={"Uploade Fichier en cours ..."} />
                                    ) : loading ? (
                                        <LoadinButton text={"Enregistrement en cours .."} />
                                    ) : (
                                        <button type="submit" className="bg-blue-900 rounded-3xl text-white px-4 py-2 hover:bg-blue-600 mt-4">
                                            Enregistrer Formation
                                        </button>
                                    )}
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormationAddPage;