import React, { useEffect } from 'react'
import CandidatPacks from '../../containers/packs/CandidatPacks';
import { useState } from 'react';
import RecruteurPacks from '../../containers/packs/RecruteurPacks';
import { MdSchool, MdWorkOutline } from 'react-icons/md';
import { getAndCheckLocalStorage } from '../../utlis/storage/localvalueFunction';
import { localvalue, typePersonConnected } from '../../utlis/storage/localvalue';
import PackNoConnected from '../../containers/packs/PackNoConnected';

const PrincingPage = () => {
    const [pack, setpack] = useState(false);

    const handleShowPack = () => { setpack(true); }
    const handleClosePack = () => { setpack(false); }
    useEffect(()=>{
        if(getAndCheckLocalStorage(localvalue.TYPEACCESS==typePersonConnected[1])){
            setpack(false);
        }
        else if(getAndCheckLocalStorage(localvalue.TYPEACCESS==typePersonConnected[0])){
            setpack(true);
        }
    },[pack])
    // alert(getAndCheckLocalStorage(localvalue.TYPEACCESS));

    return (
        <div className="main-content">
            <div className="page-content mt-28">
                <div className="container mx-auto antialiased text-gray-900 bg-white">
                    {/*<!-- Navbar -->*/}


                    <main className="mx-4 my-16">
                        <div className="text-center">
                            <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
                                Nos <span className="font-semibold">Plans </span>pour vos  <span className="font-semibold">stratégies</span>
                            </h1>
                            <p className="text-sm font-normal text-gray-400">

                                Vous trouverez ci-dessous nos trois principaux plans qui corresponde à vos attentes .
                            </p>
                            <p className="text-sm font-normal text-gray-400">
                                It start from here! You can teach yourself what you really like.
                            </p>
                        </div>

                        <div className="flex justify-center mt-5 space-x-4">

                            {
                                getAndCheckLocalStorage(localvalue.TYPEACCESS == typePersonConnected[1]) ?
                                <button className={`${pack == false ?
                                    "flex space-x-2 btn btn-sm  btn-success bg-blue-700 text-white text-md" :
                                    "flex space-x-2 btn btn-sm  btn-success bg-white text-blue-700 text-md"}`}
                                    onClick={() => { handleClosePack() }}>
                                    <MdSchool /> <span>Etudiant</span>
                                </button>
                                : null
                            }

                            {
                                getAndCheckLocalStorage(localvalue.TYPEACCESS)== typePersonConnected[0] ?
                                <button className={`${pack == true ?
                                    "flex space-x-2 btn btn-sm  btn-success bg-blue-700 text-white text-md" :
                                    "flex space-x-2 btn btn-sm  btn-success bg-white text-blue-700 text-md"
    
                                    }`}
                                    onClick={() => { handleShowPack() }}>
                                    <MdWorkOutline /> <span>Recruteur</span>
                                </button>
                                : null
                            }

                        </div>

                        {/*<!-- Plan  -->*/}

                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS)==typePersonConnected[1]&&
                             <CandidatPacks />
                        }
                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS)==typePersonConnected[0]
                            && <RecruteurPacks />
                        }

                        {
                            getAndCheckLocalStorage(localvalue.TYPEACCESS)==null 
                            && <PackNoConnected/>
                        }

                        








                    </main>

                </div>
            </div >
        </div >
    )
}

export default PrincingPage;
