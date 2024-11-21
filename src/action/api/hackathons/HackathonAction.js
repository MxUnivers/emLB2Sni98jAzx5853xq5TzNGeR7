import axios from 'axios';
import { baseurl } from '../../../utlis/url/baseurl';
import { toast } from 'react-toastify';
import { getDataFromFile, saveDataToFile } from '../../storage/DataLocal';
import { localvalue, localvalueStorage } from '../../../utlis/storage/localvalue';

// Récupérer tous les hackathons avec filtrage par date et catégorie
export const fetchAllHackathons = async (
  setHackathons, startDate, endDate, category
) => {
  const filterParams = {};
  if (startDate) filterParams.startDate = startDate;
  if (endDate) filterParams.endDate = endDate;
  if (category) filterParams.category = category;

  const hackathonsList =  getDataFromFile(localvalueStorage.HACKATHONLIST) || [];
  setHackathons(hackathonsList);
  await axios
    .get(`${baseurl.url}/api/v1/hackathons/get_hackathons`, {
      params: filterParams,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${baseurl.TypeToken} ${baseurl.token}`,
      },
    })
    .then((response) => {
      setHackathons(response.data.data);
      saveDataToFile(response.data.data,localvalueStorage.HACKATHONLIST)
    })
    .catch((error) => {
      // console.error('Erreur lors de la récupération des hackathons:', error);
    });
};





// Récupérer un hackathon spécifique par ID
export const fetchHackathonById = async (id, setHackathon) => {
    await axios
      .get(`${baseurl.url}/api/v1/hackathons/get_hackathon/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${baseurl.TypeToken} ${baseurl.token}`,
        },
      })
      .then((response) => {
        setHackathon(response.data.data);
      })
      .catch((error) => {
        // console.error('Erreur lors de la récupération du hackathon:', error);
      });
  };
  



  // Créer un nouveau hackathon
export const createHackathon = async (newHackathonData, setHackathons) => {
    await axios
      .post(`${baseurl.url}/api/v1/hackathons`, newHackathonData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${baseurl.TypeToken} ${baseurl.token}`,
        },
      })
      .then((response) => {
        toast.success(response.data.message|| "Hackathon ajoute avec succès ",{position:"bottom-right"})
        // console.log('Hackathon créé avec succès:', response.data);
        setHackathons((prevHackathons) => [...prevHackathons, response.data.data]);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message|| "Hackathon ajouter avec succès ",{position:"bottom-right"})
        // console.error('Erreur lors de la création du hackathon:', error);
      });
  };
  




  // Modifier un hackathon
export const modifyHackathon = async (id, updatedHackathonData, setHackathons) => {
    await axios
      .put(`${baseurl.url}/api/v1/hackathons/update/${id}`, updatedHackathonData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${baseurl.TypeToken} ${baseurl.token}`,
        },
      })
      .then((response) => {
        // console.log('Hackathon mis à jour avec succès:', response.data);
        toast.success(response?.data?.message|| "Hackathon mise à jour ",{position:"bottom-right"})
        // Mise à jour de la liste des hackathons après modification
        // setHackathons((prevHackathons) =>
        //   prevHackathons.map((hackathon) =>
        //     hackathon._id === id ? response.data.data : hackathon
        //   )
        // );
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message|| "Hackathon non mise à jour ",{position:"bottom-right"})
        // console.error('Erreur lors de la mise à jour du hackathon:', error);
      });
  };
  




  // Ajouter un gagnant à un hackathon
export const addWinnerToHackathon = async (hackathonId, winnerData, setHackathons) => {
    await axios
      .post(`${baseurl.url}/api/v1/hackathons/add_winner/${hackathonId}`, winnerData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${baseurl.TypeToken} ${baseurl.token}`,
        },
      })
      .then((response) => {
        toast.success(response?.data?.message|| "gagnant ajouté à l'hackathon ",{position:"bottom-right"})
        // console.log('Gagnant ajouté avec succès:', response.data);
        // Mise à jour de la liste des hackathons après ajout d'un gagnant
        setHackathons((prevHackathons) =>
          prevHackathons.map((hackathon) =>
            hackathon._id === hackathonId ? response.data.data : hackathon
          )
        );
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message|| "Ajout du gagnant non ajouté à la au compte ",{position:"bottom-right"})
        // console.error('Erreur lors de l\'ajout du gagnant:', error);
      });
  };
  


  // Ajouter un participant à un hackathon
export const addParticipantToHackathon = async (hackathonId, participantData, setHackathons) => {
    await axios
      .post(`${baseurl.url}/api/v1/hackathons/add_participant/${hackathonId}`, participantData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${baseurl.TypeToken} ${baseurl.token}`,
        },
      })
      .then((response) => {
        toast.success(response?.data?.message|| "Soumision de la participation envoyé avec succès ",{position:"bottom-right"})
        // console.log('Participant ajouté avec succès:', response.data);
        // Mise à jour de la liste des hackathons après ajout du participant
        setHackathons((prevHackathons) =>
          prevHackathons.map((hackathon) =>
            hackathon._id === hackathonId ? response.data.data : hackathon
          )
        );
      })
      .catch((error) => {
        toast.error(error?.response?.data.message|| "Soumission l'inscription non envoyé",{position:"bottom-right"})
        // console.error('Erreur lors de l\'ajout du participant:', error);
      });
  };
  



  // Retirer un participant d'un hackathon
export const removeParticipantFromHackathon = async (hackathonId, participantId, setHackathons) => {
    await axios
      .delete(`${baseurl.url}/api/v1/hackathons/remove_participant/${hackathonId}/${participantId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${baseurl.TypeToken} ${baseurl.token}`,
        },
      })
      .then((response) => {
        toast.success(response?.data?.message|| "Participant non retirer de l'hackathon",{position:"bottom-right"})
        // console.log('Participant retiré avec succès:', response.data);
        // Mise à jour de la liste des hackathons après retrait du participant
        setHackathons((prevHackathons) =>
          prevHackathons.map((hackathon) =>
            hackathon._id === hackathonId ? response.data.data : hackathon
          )
        );
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message|| "",{position:"bottom-right"})
        // console.error('Erreur lors du retrait du participant:', error);
      });
  };
  



  // Supprimer un hackathon
export const deleteHackathon = async (id, setHackathons) => {
    await axios
      .delete(`${baseurl.url}/api/v1/hackathons/status/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${baseurl.TypeToken} ${baseurl.token}`,
        },
      })
      .then((response) => {
        toast.success(response?.data?.message|| "Hackathon Mis hors service",{position:"bottom-right"})
        // console.log('Hackathon supprimé avec succès:', response.data);
        // Mise à jour de la liste des hackathons après suppression
        setHackathons((prevHackathons) =>
          prevHackathons.filter((hackathon) => hackathon._id !== id)
        );
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message|| "Hackathon non mise à jour ",{position:"bottom-right"})

        // console.error('Erreur lors de la suppression du hackathon:', error);
      });
  };
  