import React, { useEffect, useState } from 'react';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import useFetchCandidat from '../../../action/api/candidat/CandidatAction';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { handleImageUploadCloudOnly } from '../../../action/upload/UploadFileCloud';
import { baseurl } from '../../../utlis/url/baseurl';

const CandidatPhoto = () => {
    const idCandidat = getAndCheckLocalStorage(localvalue.candidatID);
    const { isLoading, error, candidat } = useFetchCandidat(idCandidat);
    const [coverPicture, setcoverPicture] = useState();
    const [loadingPhoto, setLoadingPhoto] = useState(false);

    useEffect(() => {
        if (candidat?.coverPicture) {
            setcoverPicture(candidat.coverPicture);
        }
    }, [candidat]);

    const handleFileInputChangePhoto = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setLoadingPhoto(true);
            const url = await handleImageUploadCloudOnly(file, toast);
            if (url) {
                setcoverPicture(url);
                try {
                    await axios.put(`${baseurl.url}/api/v1/candidat/edit/${idCandidat}`, {
                        coverPicture: url
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `${baseurl.TypeToken} ${baseurl.token}`
                        }
                    });
                    toast.success("Photo updated successfully");
                } catch (error) {
                    toast.error("Failed to update photo");
                }
                setLoadingPhoto(false);
            }
        }
    };

    return (
        <div className="min-w-full flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error.message}</p>
            ) : (
                <div className="text-center">
                    {/* Profile Picture */}
                    <div className="relative">
                        {coverPicture ? (
                            <img
                                className="w-32 h-32 rounded-full object-cover shadow-lg"
                                src={coverPicture}
                                alt={`${candidat.firstname} ${candidat.lastname}`}
                            />
                        ) : (
                            <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse"></div>
                        )}
                    </div>

                    {/* Name and Title */}
                    <h3 className="mt-4 text-xl font-semibold text-gray-800">
                        {candidat?.firstname} {candidat?.lastname}
                    </h3>
                    <p className="text-gray-600 mt-1">{candidat?.title_post}</p>

                    {/* Upload Button */}
                    <div className="mt-4">
                        {loadingPhoto ? (
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-indigo-600"></div>
                        ) : (
                            <>
                                <input
                                    onChange={handleFileInputChangePhoto}
                                    id="file"
                                    name="file"
                                    type="file"
                                    accept=".JPEG,.PNG,.JPG"
                                    className="hidden"
                                />
                                <label htmlFor="file" className="cursor-pointer flex flex-col items-center mt-2">
                                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
                                        <MdOutlineAddAPhoto className="h-8 w-8" />
                                    </div>
                                    <span className="text-sm text-gray-600 mt-2">Change Photo</span>
                                </label>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CandidatPhoto;
