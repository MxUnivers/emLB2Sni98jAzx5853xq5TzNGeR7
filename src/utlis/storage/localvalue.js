export const localvalue = {
    //information sur les candidat
    candidat: {
        idCandidat: "idCandidat",
        tokenCandidat: "tokenCandidat",
        emailCandidat: "emailCandidat",
        coverPictureCandidat:"photoCandidat"
    },
    typeAdmin:"typeAdmin",


}



export var localvalueGet = {
    typeAdmin: localStorage.getItem(localvalue.typeAdmin)
}




export var localvalueGetCandidat = {
    idCandidat: localStorage.getItem(localvalue.candidat.idCandidat),
    tokenCandidat: localStorage.getItem(localvalue.candidat.tokenCandidat),
    emailCandidat: localStorage.getItem(localvalue.candidat.emailCandidat),
    coverPictureCandidat: localStorage.getItem(localvalue.candidat.coverPictureCandidat),
}
