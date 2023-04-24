export const typeProfile = [
    {type:true,name:"candidat"},
    {type:false,name:"employeur"}
];
export const typeStatut= [
    {type:true,name:"particulier"},
    {type:false,name:"Entreprise"},
];

export const  typeAdministrator =  [
    {name:"Supper admministrateur",value:"super_admin"},
    {name:"Administrateur",value:"admin"},
    {name:"Operateur de saisie",value:"operateur"},
];


export  const  ListAnnoncesMemberId = [
    {
        _id:"id",
        name:"name de l' annonce",
        content:"contenu de la annonce",
        countPostules:12,
        typeAnnonce:"Entreprise",
        namePostule:"nom du postuleur",
        volumters:[
            {_id:"iduser",name:"nom d'utilisateurs"},
            {_id:"iduser",name:"nom d'utilisateurs"},
            {_id:"iduser",name:"nom d'utilisateurs"},
        ]
    },
    {
        _id:"id",
        name:"name de l' annonce",
        content:"contenu de la annonce",
        countPostules:12,
        typeAnnonce:"Entreprise",
        namePostule:"nom du postuleur",
        volumters:[
            {_id:"iduser",name:"nom d'utilisateurs"},
            {_id:"iduser",name:"nom d'utilisateurs"},
            {_id:"iduser",name:"nom d'utilisateurs"},
        ]
    }
]


export const addresslist = [
    {name:"Abidjan",value:"Abidjan"},
    {name:"Abidjan , Yopougon",value:"Abidjan , Yopougon"},
    {name:"Yamoussoukro",value:"Yamoussoukro"}
];

export const payslist = [
    {name:"Côte d'Ivoire",value:"Abidjan"},
    {name:"France",value:"France"},
    {name:"Angleterre",value:"Angleterre"}
];