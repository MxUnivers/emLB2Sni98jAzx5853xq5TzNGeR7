import React from 'react'
import CandidatPhoto from '../../components/candidat/account/CandidatPhoto';
import CandidatInfo from '../../components/candidat/account/CandidatInfo';
import CandidatCompetence from '../../components/candidat/account/CandidatCompetence';
import CandidatPassword from '../../components/candidat/account/CandidatPassword';
import CandidatSocial from '../../components/candidat/account/CandidatSocial';
import { useState } from 'react';

const CandidatEditProfilePage = () => {

    const button_list = [
        { id: 1, label: "Profile" },
        { id: 2, label: "Reseaux sociaux" },
        { id: 3, label: "Compte" },
        { id: 4, label: "Autentification" },
    ];

    const [step, setstep] = useState(1);


    return (
        <div class="main-content">
            <div class="page-content mt-28">
















                <main>

                    <div
                        class="xCPtuxM4_gihvpPwv9bX Nu4HUn5EQpnNJ1itNkrd RZmKBZs1E1eXw8vkE6jY mlwbuv_bMkMhzTA3msA3 sIk4Wc5VFaQpncPF5Sx4 AWLGIryfLKwkSeUZd4O6 h8KYXnua2NT4kTVzieom">
                        <div class=" border shadow-md rounded py-2 px-3 EWLTGduHCjFnjN6tLCXV hD0sTTDgbxakubcHVW2X QzGxlDe4W0Kn6V1Dkd6r">

                            <h1
                                class="text-lg vyo_A8gnQD1QWDPglr3h yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl NdexIDe6BTJXjtSnppoV OyABRrnTV_kvHV7dJ0uE">
                                Mise a jour profile</h1>
                        </div>
                        <div class=" flex justify-start  border shadow-md rounded py-2 px-3 EWLTGduHCjFnjN6tLCXV hD0sTTDgbxakubcHVW2X QzGxlDe4W0Kn6V1Dkd6r">
                            {
                                button_list.map((item) => {
                                    return (
                                        <button
                                        onClick={()=>{setstep(item.id)}}
                                        class={`btn mx-2 my-2 btn-sm py-2 text-xs ${step==item.id ?"bg-white font-bold text-blue-500":"bg-blue-500 text-white"} `}>
                                            {item.label}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        {/*<!-- Right Content -->*/}
                        <div class="EWLTGduHCjFnjN6tLCXV Atl0coQVHTfJeIp5DBNr mb-40">
                            {/*photo de profile */}
                            {
                                step == 1 &&
                                <>
                                    <CandidatPhoto />
                                    <CandidatCompetence />
                                </>
                            }
                            {
                                step == 3 && <CandidatInfo />
                            }
                            {
                                step == 2 && <CandidatSocial />
                            }
                            {
                                step == 4 && <CandidatPassword />
                            }
                        </div>
                    </div>
                </main>

















            </div>
        </div>
    )
}

export default CandidatEditProfilePage;
