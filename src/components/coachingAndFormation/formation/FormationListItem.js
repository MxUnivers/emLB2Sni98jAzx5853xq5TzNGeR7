import React from 'react'
import { useState } from 'react';
import FormationCard from './FormationCard';

const FormationListItem = () => {
    const [formations, setformations] = useState([1, 1, 1])
    return (
        <section class="mt-16 border-b border-gray-100 dark:border-gray-800 sm:mt-20 lg:mt-32">
            <div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div class="border-b border-gray-100 pb-20 dark:border-gray-800 lg:grid lg:grid-cols-5 xl:grid-cols-6">
                </div>
                <div class="w-full mx-5 py-20 lg:w-3/5">
                    <h3 class="text-center text-2xl font-semibold text-gray-800 dark:text-white">Nos formations</h3>
                    <div class="w-full px-5 mt-8 grid  gap-5">
                        {
                            formations.map((item) => {
                                return (
                                    <FormationCard item={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FormationListItem;