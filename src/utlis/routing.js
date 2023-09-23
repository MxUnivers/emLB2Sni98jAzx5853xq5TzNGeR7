import { localvalue } from "./storage/localvalue";
import { getAndCheckLocalStorage } from "./storage/localvalueFunction";

export const routing = {
    
    aboutus:"a_propos_de",
    servives:"services_de_la_plateforme",
    pricing:"pricing",
    faq:"faq_&_plateforme",
    contact:"contact_us",
    privacy_policy:"condition_utilisation",
    blog_list:"post-blog-list",
    job_list:"listes_des_emplois_de_la_plateforme",
    job_category:"categrory_jobs",
    job_details:"detail-jobs",
    job_post:"poster-une-offre-emplois",
    job_edit:"mise-a-offre-emplois",
    candidat_details:"profile-candidat-"+getAndCheckLocalStorage(localvalue.candidatID),
    candidat_details_view:"candidat_details_profile",
    candidat_edit:"candidat-update-profile",
    candidat_applied:"candidat_candidat_applied",
    candidat_list:"candidats_list_group",
    candidature_list:"candidatures_list_group",
    candidature_list_recruteur:"candidatures_list_group_recruteur",
    company_list:"conpany_list",
    company_details:`profile-recurteur-${getAndCheckLocalStorage(localvalue.recruteurID)}`,
    company_details_view:"company_detail_view",
    connexion:"authentification-connexion-candidat-&=email,mot-de-passe=&",
    connexion_recuteur:"authentification-recruteur-&=email,mot-de-passe=&",
    inscription:"inscription",
    inscription_recruteur:"inscription-recruteur",
    deconnexion:"logout",
    reset_password:"reset_password",

}