import axios from "axios";
import { baseurl } from "../../utlis/url/baseurl";



export const handleImageUploadCloud = async (files , toast) => {
    const uploadPromises = Array.from(files).map((file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', `${baseurl.cloudinaryUploadPreset}`);

        return axios.post(`https://api.cloudinary.com/v1_1/${baseurl.cloudinaryCloudName}/image/upload`, formData)
            .then(response => response.data.secure_url)
            .catch(error => {
                toast.error('Erreur lors du téléchargement de l\'image', { position: "bottom-right" });
                console.error('Erreur lors du téléchargement de l\'image :', error);
                return null;
            });
    });
    return Promise.all(uploadPromises);
};



export const handleImageUploadCloudOnly = async (file, toast) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', `${baseurl.cloudinaryUploadPreset}`);

    try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${baseurl.cloudinaryCloudName}/image/upload`, formData);
        toast.success('Fichier télécharger avec succès', { position: "bottom-right" });
        return response.data.secure_url; // Retourne l'URL du fichier uploadé
    } catch (error) {
        toast.error('Erreur lors du téléchargement de l\'image', { position: "bottom-right" });
        console.error('Erreur lors du téléchargement de l\'image :', error);
        return null;
    }
};