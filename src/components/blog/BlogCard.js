import moment from 'moment';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routing } from '../../utlis/routing';
import { dureeDeVie, localvalue } from '../../utlis/storage/localvalue';
import { getAndCheckLocalStorage, setWithExpiration } from '../../utlis/storage/localvalueFunction';
import { toast } from 'react-toastify';
import { MdEdit } from 'react-icons/md';

const BlogCard = ({ item }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (getAndCheckLocalStorage(localvalue.TYPEACCESS) == null) {
            toast.info("Vous n'êtes pas autorisé à lire cette publication. Veuillez vous connecter.");
        } else {
            setWithExpiration(localvalue.BlogID, item._id, dureeDeVie);
            navigate(`/${routing.blog_details}`, { state: { item } });
        }
    };

    return (
        <div
            className=" bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            onClick={handleClick}
        >
            <div className="relative">
                <div className="absolute top-2 left-2 bg-indigo-500 text-white px-3 py-1 text-xs rounded-full uppercase">
                    {item.areaPost || 'Actualités'}
                </div>
                {item.coverPicture && (
                    <img src={item.coverPicture} alt={item.title} className="w-full h-48 object-cover" />
                )}
            </div>

            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 hover:underline">{item.title}</h2>
                <div className="flex items-center mt-2 text-gray-600 text-sm">
                    <img src={item.customerPhoto} alt={item.customerName} className="w-8 h-8 rounded-full mr-2" />
                    <div>
                        <p className="font-medium">{item.customerName}</p>
                        <p>{moment(item.createdAt).format('DD/MM/YYYY HH:mm')}</p>
                    </div>
                </div>
                {
                    getAndCheckLocalStorage(localvalue.candidatID) == item.idcustomerId && (
                        <div className="mt-4 text-gray-500 font-semibold text-sm hover:underline">
                            <MdEdit /> <span> Modifier</span>
                        </div>)
                }
                <div className="mt-4 text-gray-500 font-semibold text-sm hover:underline">
                    Découvrir &raquo;
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
