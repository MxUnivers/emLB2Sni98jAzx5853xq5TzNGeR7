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
            className="cursor-pointer rounded-3xl border border-gray-100 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[20px] dark:border-gray-700 dark:bg-gray-800 dark:shadow-none"
        >
            <div className="flex gap-6 sm:flex-row sm:items-center">
                <div className="flex-shrink-0 sm:w-1/3 md:w-2/5 lg:w-1/3">
                    {item && item.logo ? (
                        <img 
                            className="mx-auto w-full h-auto rounded-3xl sm:h-16 lg:h-16"
                            src={item.logo || emptyImage}
                            alt={`${item.formationTitle} logo`}
                            loading="lazy"
                        />
                    ) : null}
                </div>

                <div className="sm:w-2/3 md:w-3/5 lg:w-2/3 mt-6 sm:mt-0">
                    <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">{item.formationTitle}</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-3">{item.description}</p>

                    <div className="relative my-4">
                        <div 
                            aria-hidden="true"
                            className="absolute inset-0 m-auto h-px w-full border-t border-dashed dark:border-gray-600"
                        ></div>
                        <div className="relative flex items-center justify-between px-4 py-2">
                            <span className="text-sm text-gray-500 dark:text-gray-300">Commencez aujourd{"'"}hui</span>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-semibold text-gray-800 dark:text-white">Voir la formation</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Accédez à la page</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormationCard;
