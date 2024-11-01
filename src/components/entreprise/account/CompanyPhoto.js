import React, { useEffect, useState } from 'react';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { MdOutlineAddAPhoto } from "react-icons/md";
import axios from 'axios';
import { baseurl } from '../../../utlis/url/baseurl';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchEntreprise } from '../../../action/api/employeur/EmployeurAction';
import { handleImageUploadCloudOnly } from '../../../action/upload/UploadFileCloud';

const CompanyPhoto = () => {
    const idEntreprise = getAndCheckLocalStorage(localvalue.recruteurID);
    const { isLoading, error, entreprise } = useFetchEntreprise(idEntreprise);

    const [coverPicture, setCoverPicture] = useState();
    const [loadingPhoto, setLoadingPhoto] = useState(false);

    useEffect(() => {
        if (entreprise && entreprise.logo) {
            setCoverPicture(entreprise.logo);
        }
    }, [entreprise]);

    const HandleFileInputChangePhoto = async (event) => {
        const file = event.target.files[0];
        setLoadingPhoto(true);
        const url = await handleImageUploadCloudOnly(file, toast);
        if (url) {
            setCoverPicture(url);
            try {
                await axios.put(`${baseurl.url}/api/v1/entreprise/edit/${idEntreprise}`, {
                    "logo": url
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                    }
                });
                toast.success("Photo mise à jour !");
            } catch (error) {
                toast.error("Photo non modifiée !");
            } finally {
                setLoadingPhoto(false);
            }
        } else {
            setLoadingPhoto(false);
        }
    };

    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="relative">
                {isLoading ? (
                    <div className="h-32 w-32 rounded-full bg-gray-300 animate-pulse"></div>
                ) : (
                    <img
                        src={coverPicture}
                        alt="Company Logo"
                        className="h-32 w-32 rounded-full object-cover"
                    />
                )}
                <input
                    id="file"
                    type="file"
                    accept=".jpeg, .png, .jpg"
                    onChange={HandleFileInputChangePhoto}
                    className="hidden"
                />
                <label htmlFor="file" className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full cursor-pointer">
                    <MdOutlineAddAPhoto size={20} />
                </label>
            </div>
            
            <div className="mt-4 text-center">
                {isLoading ? (
                    <p className="animate-pulse text-gray-400">Chargement...</p>
                ) : error ? (
                    <p className="text-red-500">{error.message}</p>
                ) : (
                    entreprise && (
                        <>
                            <h3 className="text-xl font-semibold text-gray-800">
                                {entreprise.firstname} {entreprise.lastname}
                            </h3>
                            <p className="text-gray-600 mt-1">{entreprise.title_post}</p>
                        </>
                    )
                )}
            </div>

            {loadingPhoto && (
                <div className="mt-3 flex items-center text-blue-500">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
                    <span className="ml-2">Mise à jour en cours...</span>
                </div>
            )}
        </div>
    );
};

export default CompanyPhoto;
