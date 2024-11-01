import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAndCheckLocalStorage } from '../../../utlis/storage/localvalueFunction';
import { localvalue } from '../../../utlis/storage/localvalue';
import { toast } from 'react-toastify';
import { MdOutlineWeb, MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { EntrepriseEditSocial, useFetchEntreprise } from '../../../action/api/employeur/EmployeurAction';

const CompanySocial = () => {
    const idEntreprise = getAndCheckLocalStorage(localvalue.recruteurID);
    const { isLoading, error, entreprise } = useFetchEntreprise(idEntreprise);

    const [socialLinks, setSocialLinks] = useState({
        facebook_url: '',
        linkedine_url: '',
        site_web: '',
        twitter_url: '',
        instagram_url: '',
    });

    useEffect(() => {
        if (entreprise) {
            setSocialLinks({
                site_web: entreprise.site_web || '',
                linkedine_url: entreprise.linkedin_url || '',
                twitter_url: entreprise.twitter_url || '',
                instagram_url: entreprise.instagram_url || '',
                facebook_url: entreprise.facebook_url || '',
            });
        }
    }, [entreprise]);

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.reducer.loading);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSocialLinks({ ...socialLinks, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            EntrepriseEditSocial(
                idEntreprise,
                socialLinks.facebook_url,
                socialLinks.linkedine_url,
                socialLinks.twitter_url,
                socialLinks.instagram_url,
                socialLinks.site_web,
                toast
            )
        );
    };

    const socialFields = [
        { name: 'site_web', label: 'Website', icon: <MdOutlineWeb /> },
        { name: 'linkedine_url', label: 'LinkedIn', icon: <AiFillLinkedin /> },
        { name: 'facebook_url', label: 'Facebook', icon: <MdFacebook /> },
        { name: 'instagram_url', label: 'Instagram', icon: <AiFillInstagram /> },
        { name: 'twitter_url', label: 'Twitter', icon: <AiFillTwitterCircle /> },
    ];

    return (
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Social Accounts</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                {socialFields.map((field, index) => (
                    <div key={index} className="flex items-center space-x-3 mb-4">
                        <div className="text-gray-600 text-xl">{field.icon}</div>
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                            <input
                                type="text"
                                name={field.name}
                                value={socialLinks[field.name]}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                                placeholder={`Enter ${field.label} URL`}
                                required
                            />
                        </div>
                    </div>
                ))}
                <div className="mt-6 text-right">
                    {loading ? (
                        <p className="text-gray-500 animate-pulse">Updating...</p>
                    ) : (
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
                        >
                            Update
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CompanySocial;
