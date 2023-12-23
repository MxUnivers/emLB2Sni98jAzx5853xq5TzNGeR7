import React from 'react'
import { useState } from 'react';
import CompanyPhoto from '../../components/entreprise/account/CompanyPhoto';
import CompanyCompetence from '../../components/entreprise/account/CompanyCompetence';
import CompanyInfo from '../../components/entreprise/account/CompanyInfo';
import CompanySocial from '../../components/entreprise/account/CompanySocial';
import CompanyPassword from '../../components/entreprise/account/CompanyPassword';
import { GrWorkshop } from 'react-icons/gr';
import { MdWork } from 'react-icons/md';

const CompanyEditProfilePage = () => {

    const button_list = [
        { id: 1, label: "Profile" },
        { id: 2, label: "Reseaux sociaux" },
        { id: 3, label: "Compte" },
        { id: 4, label: "Autentification" },
    ];

    const [step, setstep] = useState(1);


    return (
        <div className="main-content">
            <div className="page-content mt-28">
















                <main>

                    <div
                        className="xCPtuxM4_gihvpPwv9bX Nu4HUn5EQpnNJ1itNkrd RZmKBZs1E1eXw8vkE6jY mlwbuv_bMkMhzTA3msA3 sIk4Wc5VFaQpncPF5Sx4 AWLGIryfLKwkSeUZd4O6 h8KYXnua2NT4kTVzieom">
                        <div className=" border shadow-md rounded py-2 px-3 EWLTGduHCjFnjN6tLCXV hD0sTTDgbxakubcHVW2X QzGxlDe4W0Kn6V1Dkd6r">

                            <h1
                                className="text-lg vyo_A8gnQD1QWDPglr3h yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl NdexIDe6BTJXjtSnppoV OyABRrnTV_kvHV7dJ0uE">
                                Mise a jour profile <span className="btn btn-sm py-2 px-3 bg-gray-300 text-white flex space-x-2"><MdWork className="h-3 w-3" /><span className="text-xs">Recruteur</span></span></h1>
                        </div>
                        <div className=" flex justify-start  border shadow-md rounded py-2 px-3 EWLTGduHCjFnjN6tLCXV hD0sTTDgbxakubcHVW2X QzGxlDe4W0Kn6V1Dkd6r">
                            {
                                button_list.map((item) => {
                                    return (
                                        <button
                                            onClick={() => { setstep(item.id) }}
                                            className={`btn mx-2 my-2 btn-sm py-2 text-xs ${step == item.id ? "bg-white font-bold text-blue-500" : "bg-blue-500 text-white"} `}>
                                            {item.label}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        {/*<!-- Right Content -->*/}
                        <div className=" w-full EWLTGduHCjFnjN6tLCXV Atl0coQVHTfJeIp5DBNr mb-40">
                            {/*photo de profile */}
                            {
                                step == 1 &&
                                <>
                                    <CompanyPhoto />
                                    <CompanyCompetence />
                                </>
                            }
                            {
                                step == 3 && <CompanyInfo />
                            }
                            {
                                step == 2 && <CompanySocial />
                            }
                            {
                                step == 4 && <CompanyPassword />
                            }
                        </div>
                    </div>
                </main>

















            </div>
        </div>
    )
}

export default CompanyEditProfilePage;
