import React from 'react'

const HomeSubscrible = () => {
    return (
        <section class="relative py-16 overflow-hidden bg-zinc-700 dark:bg-neutral-900">
            <div class="container mx-auto">
                <div class="grid items-center grid-cols-12 gap-5">
                    <div class="col-span-12 lg:col-span-7">
                        <div class="text-center lg:text-start">
                            <h4 class="text-white">Obtenire les notification de jobs</h4>
                            <p class="mt-1 mb-0 text-white/50 dark:text-gray-300">
                            Souscire au forfait au notification pour en être informé</p>
                        </div>
                    </div>
                    <div class="z-40 col-span-12 lg:col-span-5">
                        <form class="flex" action="#">
                            <input type="text"
                                class="w-full text-gray-100 bg-transparent rounded-md border-gray-50/30 ltr:border-r-0 rtl:border-l-0 ltr:rounded-r-none rtl:rounded-l-none placeholder:text-13 placeholder:text-gray-100 dark:text-gray-100 dark:bg-white/5 dark:border-neutral-600 focus:ring-0 focus:ring-offset-0"
                                id="subscribe" placeholder="votre addresse email" />
                            <button
                                class="text-white border-transparent btn ltr:rounded-l-none rtl:rounded-r-none bg-amber-700/70 focus:ring focus:ring-custom-500/30"
                                type="button" id="subscribebtn">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="absolute right-0 -top-10 -z-0 opacity-20">
                <img src="assets/images/subscribe.png" alt="" class="img-fluid" />
            </div>
        </section>
    )
}

export default HomeSubscrible
