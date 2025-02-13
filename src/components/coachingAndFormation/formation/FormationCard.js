import React from 'react';
import { localvalue } from '../../../utlis/storage/localvalue';
import { routing } from '../../../utlis/routing';
import { emptyImage } from '../../../utlis/config';

const FormationCard = ({ item }) => {
    return (
        <div
            onClick={() => {
                localStorage.setItem(localvalue.formationId, item._id);
                window.location.href = `/${routing.formation_detail}`;
            }}
            className="cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-10 dark:border-gray-700 dark:bg-gray-800"
        >
            <div className="flex flex-wrap justify-between">

                <div className="flex flex-row items-center text-start">
                    <img
                        className="w-40 h-40 rounded-lg object-cover mb-4"
                        src={item.logo || emptyImage}
                        alt={`${item.formationTitle} logo`}
                    />
                    <div className="w-[200px] mx-4">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.formationTitle}</h4>
                    </div>
                </div>

                {/*<p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{item.description}</p> */}

                <div className="mt-4 flex flex-col items-center">
                    <button className="mt-2  text-indigo-700 px-4 py-2 rounded-lg ">
                        Detail
                    </button>
                </div>
            </div>
        </div>
    );
};


export default FormationCard;
