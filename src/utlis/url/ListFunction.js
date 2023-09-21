import { routing } from "../routing";

export const Retour = ()=>{
    window.history.back();
}

export const  handleCandidatEditRouting= ()=>{
    window.location.href=`/${routing.candidat_edit}`;
}