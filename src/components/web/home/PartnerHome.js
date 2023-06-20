import React from 'react'

const PartnerHome = () => {
    return (
        <div class="partner-area bg-F5F5F5 ptb-100">
            <div class="container">
                <div class="flex justify-center items-center mb-6">
                    <h1 class="text-5xl ">Partenaires</h1>
                </div>
                <div class="partner-slides owl flex justify-center owl-theme space-x-6">

                    <div class="image-box visible">
                        <a href="" target="_blank"><img class="h-16 w-16"
                            src="https://apbef-bj.org/wp-content/uploads/2016/07/Logo-NSIA-BANK.png"
                            alt="image"
                        /></a>
                    </div>

                    <div class="image-box visible">
                        <a href="" target="_blank">
                            <img class="h-16 w-16"
                                src="data:image/png;base64,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"
                                alt="image"
                            /></a>
                    </div>



                    <div class="image-box visible">
                        <a href="" target="_blank"><img class="h-16 w-16"
                            src="https://upload.wikimedia.org/wikipedia/fr/1/1c/Logo_SGBCI_2014.png"
                            alt="image"
                        /></a>
                    </div>


                    <div class="image-box visible">
                        <a href="" target="_blank"><img class="h-16 w-16"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSxzcjDs6dTVSj9Or7tpe3FOvlKHwEh0I9HHaLEKqMGnNLhcI6req5DzPtE2OQI0TPfc&usqp=CAU"
                            alt="image"
                        /></a>
                    </div>


                    <div class="image-box visible">
                        <a href="" target="_blank"><img class="h-16 w-16"
                            src="https://upload.wikimedia.org/wikipedia/fr/thumb/e/e9/Mtn-logo-svg.svg/800px-Mtn-logo-svg.svg.png"
                            alt="image"
                        /></a>
                    </div>


                    <div class="image-box visible">
                        <a href="" target="_blank"><img class="h-16 w-16"
                            src="https://upload.wikimedia.org/wikipedia/fr/thumb/1/1d/Moov_Africa_logo.png/640px-Moov_Africa_logo.png"
                            alt="image"
                        /></a>
                    </div>


                    <div class="image-box visible">
                        <a href="" target="_blank"><img class="h-16 w-16"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAw4kcTZfqvhm4x1ocrlkokLWHXI1xTc1Ug&usqp=CAU"
                            alt="image"
                        /></a>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default PartnerHome;