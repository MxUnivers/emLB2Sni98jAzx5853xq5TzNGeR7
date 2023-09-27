import React from 'react'
import { IconPack, packsItemsList } from '../../utlis/config'
import { routing } from '../../utlis/routing'

const HomePacks = () => {
    return (
        <section>
            <div class="container max-w-full mx-auto py-24 px-6 border-t my-3 py-1">
                <h1
                    class="text-center text-4xl text-black font-medium leading-snug tracking-wider"
                >
                    Packs
                </h1>
                <p class="text-center text-lg text-gray-700 mt-2 px-24">
                    Choisissez nos packs premium et ouvrez la porte à un avenir professionnel prometteur !
                </p>
                <div
                    class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"
                ></div>

                <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
                    <div
                        class="relative  flex flex-wrap justify-center  items-center"
                    >


                        {
                            packsItemsList.map((item) => {
                                return (
                                    <div
                                        class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4"
                                    >
                                        <div
                                            class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden"
                                        >
                                            <div
                                                class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6"
                                            >
                                                <h1
                                                    class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide"
                                                >
                                                    {item.titre}
                                                </h1>
                                                <h2 class="text-sm text-gray-500 text-center pb-6">{item.prix} /an</h2>

                                                {item.description}
                                            </div>
                                            <div class="flex flex-wrap mt-3 px-6">
                                                <ul>
                                                    {
                                                        item.avantages.map((avantage) => {
                                                            return (
                                                                <li class="flex items-center">
                                                                    <div
                                                                        class=" rounded-full p-2 fill-current text-green-700"
                                                                    >
                                                                        {IconPack}
                                                                    </div>
                                                                    <span class="text-gray-700 text-lg ml-3"
                                                                    >{avantage}</span
                                                                    >
                                                                </li>
                                                            )
                                                        })

                                                    }

                                                </ul>
                                            </div>

                                            <div class="block flex items-center p-8  uppercase">
                                                <button onClick={()=>{
                                                    setTimeout(() => {
                                                    }, 1000);
                                                    window.location.href=`/${routing.pricing}`
                                                }}
                                                    class="mt-3 text-lg font-semibold bg-blue-700 w-full text-white rounded-lg  px-6 py-1 block shadow-xl hover:bg-gray-700"
                                                >
                                                    Valider
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePacks
