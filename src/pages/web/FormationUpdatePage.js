import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Formik, Field, FieldArray, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseurl } from '../../utlis/url/baseurl';
import LoadinButton from '../../components/loading/LoadinButton';
import { useDispatch, useSelector } from 'react-redux';
import { FormationEditById } from '../../action/api/formations/FormationAction';
import { handleImageUploadCloudOnly } from '../../action/upload/UploadFileCloud';
import ReactQuillWrapper from '../../containers/formations/ReactQuillWrapper';
import { localvalue } from '../../utlis/storage/localvalue';
import { routing } from '../../utlis/routing';

const FormationUpdatePage = () => {




    const { id } = useParams();
    const [initialValues, setInitialValues] = useState(null);
    const [LoadingAll, setLoadingAll] = useState(false);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);

    useEffect(() => {
        axios.get(`${baseurl.url}/api/v1/formation/get_formation/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
            }
        })
            .then(response => {
                setInitialValues(response.data.data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération de la formation:", error);
                toast.error("Erreur lors du chargement des données");
            });
    }, [id]);

    const validationSchema = Yup.object().shape({
        formationTitle: Yup.string().required('Le titre de la formation est requis'),
        description: Yup.string().required('La description est requise'),
        modules: Yup.array().of(
            Yup.object().shape({
                moduleLabel: Yup.string().required('Le titre du module est requis'),
                lecons: Yup.array().of(
                    Yup.object().shape({
                        leconTitle: Yup.string().required('Le titre de la leçon est requis'),
                        leconContent: Yup.string().required('Le contenu de la leçon est requis'),
                    })
                )
            })
        )
    });

    const handleFileUpload = async (event, path, setFieldValue) => {
        const file = event.target.files[0];
        if (file) {
            // Vérification du type MIME pour s'assurer que c'est une image
            const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
            if (!allowedTypes.includes(file.type)) {
                toast.error("Seules les images JPEG, PNG et JPG sont autorisées.");
                return;
            }

            setLoadingAll(true);
            const url = await handleImageUploadCloudOnly(file, toast);
            if (url) {
                setFieldValue(path, url);
            }
            setLoadingAll(false);
        }
    };

    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(FormationEditById(id, values, toast));
    };




    if (!initialValues) {
        return <p>Chargement...</p>;
    }

    if (!sessionStorage.getItem(localvalue.ADMIN_CONNECTED)) {
        return <Navigate to={`/${routing.admin_login}`} />
    } else {
        return (
            <section className="mt-16 mb-56 dark:bg-white dark:text-dark">
                <div className="w-full px-5 py-20">
                    <h3 className="text-center text-2xl font-semibold">Modifier la formation</h3>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, setFieldValue }) => (
                            <Form>
                                <div className="mb-4">
                                    <label htmlFor="formationTitle">Titre de la formation</label>
                                    <Field type="text" name="formationTitle" className="mt-1 p-2 w-full border" />
                                    <ErrorMessage name="formationTitle" component="div" className="text-red-500" />
                                </div>

                                {/* Gestion du logo */}
                                <div className="mb-4">
                                    <label htmlFor="logo" className="block font-medium">Logo de la formation</label>
                                    {values.logo && (
                                        <img src={values.logo} alt="Aperçu du logo" className="max-w-xs mb-2" />
                                    )}
                                    <input
                                        type="file" accept="image/*"
                                        id="logo"
                                        name="logo"
                                        onChange={(e) => handleFileUpload(e, 'logo', setFieldValue)}
                                        className="mt-1 p-2 w-full rounded border"
                                    />
                                    <ErrorMessage name="logo" component="div" className="text-red-500" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="description">Description</label>
                                    <ReactQuillWrapper value={values.description} onChange={(value) => setFieldValue("description", value)} />
                                    <ErrorMessage name="description" component="div" className="text-red-500" />
                                </div>

                                <FieldArray name="modules">
                                    {({ push, remove }) => (
                                        <div>
                                            {values.modules.map((module, moduleIndex) => (
                                                <div key={moduleIndex} className="mb-4 border p-4">
                                                    <h2>Module {moduleIndex + 1}</h2>
                                                    <Field type="text" name={`modules.${moduleIndex}.moduleLabel`} className="mt-1 p-2 w-full border" />
                                                    <ErrorMessage name={`modules.${moduleIndex}.moduleLabel`} component="div" className="text-red-500" />

                                                    <FieldArray name={`modules.${moduleIndex}.lecons`}>
                                                        {({ push: pushLecon, remove: removeLecon }) => (
                                                            <div>
                                                                {module.lecons.map((lecon, leconIndex) => (
                                                                    <div key={leconIndex} className="mb-2 border p-2">
                                                                        <Field type="text" name={`modules.${moduleIndex}.lecons.${leconIndex}.leconTitle`} className="mt-1 p-2 w-full border" />
                                                                        <ErrorMessage name={`modules.${moduleIndex}.lecons.${leconIndex}.leconTitle`} component="div" className="text-red-500" />

                                                                        <ReactQuillWrapper value={lecon.leconContent} onChange={(value) => setFieldValue(`modules.${moduleIndex}.lecons.${leconIndex}.leconContent`, value)} />
                                                                        <ErrorMessage name={`modules.${moduleIndex}.lecons.${leconIndex}.leconContent`} component="div" className="text-red-500" />

                                                                        <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, `modules.${moduleIndex}.lecons.${leconIndex}.coverPicture`, setFieldValue)} />
                                                                        {lecon.coverPicture && <img src={lecon.coverPicture} alt="Cover" className="h-28 w-28" />}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </FieldArray>
                                                    <button type="button" className="bg-red-600 text-white p-2" onClick={() => remove(moduleIndex)}>Supprimer Module</button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </FieldArray>

                                {LoadingAll ? (
                                    <LoadinButton text={"Uploade Fichier en cours ..."} />
                                ) : loading ? (
                                    <LoadinButton text={"Enregistrement en cours .."} />
                                ) : (
                                    <button type="submit" className="bg-blue-900 rounded-3xl text-white px-4 py-2 hover:bg-blue-600 mt-4">
                                        Mettre à  jour
                                    </button>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        );
    }

};

export default FormationUpdatePage;
