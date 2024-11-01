import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import useFetchCandidat, { CandidatEditSocial } from '../../../action/api/candidat/CandidatAction';
import { toast } from 'react-toastify';
import { MdOutlineWeb, MdFacebook } from 'react-icons/md';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const CandidatSocial = () => {
    const idCandidat = getAndCheckLocalStorage(localvalue.candidatID);
    const { isLoading, error, candidat } = useFetchCandidat(idCandidat);
    const dispatch = useDispatch();

    const [facebookUrl, setFacebookUrl] = useState('');
    const [linkedinUrl, setLinkedinUrl] = useState('');
    const [website, setWebsite] = useState('');
    const [twitterUrl, setTwitterUrl] = useState('');
    const [instagramUrl, setInstagramUrl] = useState('');
    const loading = useSelector((state) => state.reducer.loading);

    useEffect(() => {
        if (candidat) {
            setWebsite(candidat.site_web || '');
            setLinkedinUrl(candidat.linkedin_url || '');
            setTwitterUrl(candidat.twitter_url || '');
            setInstagramUrl(candidat.instagram_url || '');
            setFacebookUrl(candidat.facebook_url || '');
        }
    }, [candidat]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            CandidatEditSocial(idCandidat, facebookUrl, linkedinUrl, twitterUrl, instagramUrl, website, toast)
        );
    };

    return (
        <div className="min-w-full bg-white p-6 rounded-lg shadow-md">

            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Résaux Sociaux</h3>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="w-full space-y-5">
                    <SocialInput
                        label="Website"
                        icon={<MdOutlineWeb className="text-indigo-600" />}
                        value={website}
                        onChange={setWebsite}
                    />
                    <SocialInput
                        label="LinkedIn"
                        icon={<AiFillLinkedin className="text-indigo-600" />}
                        value={linkedinUrl}
                        onChange={setLinkedinUrl}
                    />
                    <SocialInput
                        label="Facebook"
                        icon={<MdFacebook className="text-indigo-600" />}
                        value={facebookUrl}
                        onChange={setFacebookUrl}
                    />
                    <SocialInput
                        label="Instagram"
                        icon={<AiFillInstagram className="text-pink-500" />}
                        value={instagramUrl}
                        onChange={setInstagramUrl}
                    />
                    <SocialInput
                        label="Twitter"
                        icon={<AiFillTwitterCircle className="text-indigo-500" />}
                        value={twitterUrl}
                        onChange={setTwitterUrl}
                    />
                </div>
                <div className="mt-6 text-right">
                    {loading ? (
                        <p className="text-gray-500 animate-pulse">...</p>
                    ) : (
                        <button
                            type="submit"
                            className=" py-2 px-4 mt-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-150"
                        >
                            Mettre à jour
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

const SocialInput = ({ label, icon, value, onChange }) => (
    <div className="w-full flex items-center space-x-4">
        <div className="flex-shrink-0">{icon}</div>
        <div className=" w-full flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={`${label.toLowerCase()} URL`}
            />
        </div>
    </div>
);

export default CandidatSocial;
