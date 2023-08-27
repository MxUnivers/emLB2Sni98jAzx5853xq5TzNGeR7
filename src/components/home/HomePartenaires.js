import React from 'react'

const HomePartenaires = () => {
  return (
    <section class="py-10 dark:bg-gray-50">
                <div class="container mx-auto">
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12 lg:col-span-2">
                            <img src="assets/images/logo/logo-01.png" alt=""
                                class="mx-auto cursor-pointer h-9 lg:h-6 xl:h-9" data-tooltip-target="tooltip-default"/>
                            <div id="tooltip-default" role="tooltip"
                                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                Partenaires
                                <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-2">
                            <img src="assets/images/logo/logo-02.png" alt=""
                                class="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"/>
                        </div>
                        <div class="col-span-12 lg:col-span-2">
                            <img src="assets/images/logo/logo-03.png" alt=""
                                class="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"/>
                        </div>
                        <div class="col-span-12 lg:col-span-2">
                            <img src="assets/images/logo/logo-04.png" alt=""
                                class="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"/>
                        </div>
                        <div class="col-span-12 lg:col-span-2">
                            <img src="assets/images/logo/logo-05.png" alt=""
                                class="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"/>
                        </div>
                        <div class="col-span-12 lg:col-span-2">
                            <img src="assets/images/logo/logo-06.png" alt=""
                                class="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"/>
                        </div>
                    </div>
                </div>
            </section>
            
  )
}

export default HomePartenaires;
