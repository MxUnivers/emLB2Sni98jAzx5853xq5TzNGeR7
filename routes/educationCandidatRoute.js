const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatModel = require("../models/CandidatModel");
const EducationModel = require("../models/EducationModel");

const router = require("express").Router();


// ajouter un niveau d'education supprimer





router.post("/post/:idCandidat", AuthorizationMiddleware, async (req, res) => {
    try {
        var idCandidat = req.params.idCandidat;

        const candidatExit = await CandidatModel({ _id: idCandidat })
        if (!candidatExit) {
            return res.status(401).json({ message: "Candidat non trouvé" })
        }
        const educationNew = new EducationModel(req.body);

        educationNew.idPerson = idCandidat;

        educationNew.save();

        return res.status(200).json({ message: "Education ajouter", data: educationNew })

    } catch (error) {
        return res.status(505).json({ message: "Educaton ajouter" })
    }
})






// edit 
router.put("/edit/:idEducation", AuthorizationMiddleware, async (req, res) => {
    try {
        var idCandidat = req.params.idEducation;

        const candidatExit = await CandidatModel({ _id: idCandidat })
        if (!candidatExit) {
            return res.status(401).json({ message: "Candidat non trouvé" })
        }
        const educationExit = await EducationModel.findByIdAndUpdate({ _id: idCandidat }, req.body);

        educationExit.save();

        return res.status(200).json({ message: "Education ajouter", data: educationExit })

    } catch (error) {
        return res.status(505).json({ message: "Educaton ajouter" })
    }
})






// lister un niveau d'education
router.get("/get_educations/candidat/:idCandidat", AuthorizationMiddleware, async (req, res) => {
    try {
        var idCandidat = req.params.idCandidat;

        const candidatExit = await CandidatModel({ _id: idCandidat });

        if (!candidatExit) {
            return res.status(401).json({ message: "Candidat non trouvé" });
        }

        const educationList = await EducationModel.find({ access: true, idPerson: idCandidat });

        return res.status(200).json({ message: "Education Recupérer", data: educationList })

    } catch (error) {
        return res.status(505).json({ message: "Educaton ajouter" })
    }
})







router.put("/hide_education/:idEducation", AuthorizationMiddleware, async (req, res) => {
    try {
        var idEducation = req.params.idEducation;

        const educationExist = await EducationModel.findById({ id: idEducation });
        if (!educationExist) {
            return res.status(401).json({ message: "Education existe" })
        }
        educationExist.access = false;

        educationExist.save();

        return res.status(200).json({ message: "Education Recupérer", data: educationExist })

    } catch (error) {
        return res.status(505).json({ message: "Educaton ajouter" })
    }
})







router.put("/show_education/:idEducation", AuthorizationMiddleware, async (req, res) => {
    try {
        var idEducation = req.params.idEducation;

        const educationExist = await EducationModel.findById({ id: idEducation });
        if (!educationExist) {
            return res.status(401).json({ message: "Education existe" })
        }
        educationExist.access = true;

        educationExist.save();

        return res.status(200).json({ message: "Education Recupérer", data: educationExist })

    } catch (error) {
        return res.status(505).json({ message: "Educaton ajouter" })
    }
})





// lister ses niveau d'education du candidat
// listes les niveau d'education de tout les candidats





module.exports = router