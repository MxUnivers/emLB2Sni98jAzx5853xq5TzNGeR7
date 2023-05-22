import React, { useState } from 'react'
import { RiFileSettingsFill, RiHome2Line } from 'react-icons/ri';
import {Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Dashboard from '../../components/web/employer/all-view/Dashboard';
import Settings from '../../components/web/employer/all-view/Settings';
import Statistics from '../../components/web/employer/all-view/Statistics';
import AcceptedCandidatApplications from '../../components/web/employer/all-view/AcceptedCandidatApplications';
import RejectedCandidatApplications from '../../components/web/employer/all-view/RejectedCandidatApplications';
import PendingCandidatApplications from '../../components/web/employer/all-view/PendingCandidatApplications';




const FollowEmployeur = () => {
    var bgImg = "https://images.pexels.com/photos/5716016/pexels-photo-5716016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";


    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };


    return (
        <div>

            <div class="page-banner-area item-bg-two" style={{ backgroundImage: `url('${bgImg}')` }}>
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="page-banner-content">
                                <h2 class="flex flex-wrap justify-center space-x-2"> <RiFileSettingsFill size={20} />   <span> Paramtere de suivis </span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class=" mt-32 container-fluid bg-gray-white border p-3 rounded-lg ">
            <Tabs>
                <TabList>
                    <Tab onClick={() => handleTabChange(0)}>
                        <button className="flex items-center px-4 py-2 space-x-2 bg-blue-500 text-white rounded-md focus:outline-none">
                            <RiHome2Line size={18} />
                            <span>Tableau de bord</span>
                        </button>
                    </Tab>
                    <Tab onClick={() => handleTabChange(1)}>
                    <button className="flex items-center px-4 py-2 space-x-2 bg-blue-500 text-white rounded-md focus:outline-none">
                            <RiHome2Line size={18} />
                            <span>Candidat en attente</span>
                        </button>
                    </Tab>
                    <Tab onClick={() => handleTabChange(2)}>
                    <button className="flex items-center px-4 py-2 space-x-2 bg-blue-500 text-white rounded-md focus:outline-none">
                            <RiHome2Line size={18} />
                            <span>Canditures acceptés</span>
                        </button>
                    </Tab>
                    <Tab onClick={() => handleTabChange(3)}>
                    <button className="flex items-center px-4 py-2 space-x-2 bg-blue-500 text-white rounded-md focus:outline-none">
                            <RiHome2Line size={18} />
                            <span>Candidatures rejetés</span>
                        </button>
                    </Tab>
                    <Tab onClick={() => handleTabChange(4)}>
                    <button className="flex items-center px-4 py-2 space-x-2 bg-blue-500 text-white rounded-md focus:outline-none">
                            <RiHome2Line size={18} />
                            <span>Statistiques</span>
                        </button></Tab>
                    <Tab onClick={() => handleTabChange(5)}>
                    <button className="flex items-center px-4 py-2 space-x-2 bg-blue-500 text-white rounded-md focus:outline-none">
                            <RiHome2Line size={18} />
                            <span>Paramètre</span>
                        </button>
                    </Tab>
                </TabList>

                <TabPanel>
                    {/* Contenu du tableau de bord */}
                    <Dashboard />
                </TabPanel>
                <TabPanel>
                    {/* Contenu des candidatures en attente */}
                    <PendingCandidatApplications />
                </TabPanel>
                <TabPanel>
                    {/* Contenu des candidatures acceptées */}
                    <AcceptedCandidatApplications />
                </TabPanel>
                <TabPanel>
                    {/* Contenu des candidatures rejetées */}
                    <RejectedCandidatApplications />
                </TabPanel>
                <TabPanel>
                    {/* Contenu des statistiques */}
                    <Statistics />
                </TabPanel>
                <TabPanel>
                    {/* Contenu des paramètres */}
                    <Settings />
                </TabPanel>
                </Tabs>
            </div>



        </div>
    )
}

export default FollowEmployeur;
