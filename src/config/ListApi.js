export const typeProfile = [
    {type:true,name:"candidat"},
    {type:false,name:"employeur"}
];
export const typeContrat= [
    {type:"CDD",name:"CDD"},
    {type:"CDI",name:"CDI"},
    {type:"Stage",name:"Stage"},
    {type:"Pernament",name:"Permanent"},
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


export const  competenceslist = [
    {id:0,name:"Informatique"},
    {id:1,name:"Developpeur"},
    {id:2,name:"Comptabilté"},
    {id:3,name:"Consultant"},
    {id:4,name:"Marketing"},
    {id:5,name:"Pharmacie"},
];