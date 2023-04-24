

const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const AdminModel = require("../models/AdministratorModel");

const router = require("express").Router();

const bcrypt = require('bcryptjs');

// Fonction pour créer un nouvel administrateur
router.post("/", AuthorizationMiddleware,
    async (req, res) => {
        try {
            const { email, password } = req.body;
            // Vérifier si l'email existe déjà
            const adminExist = await AdminModel.findOne({ email });
            if (adminExist) {
                return res.status(400).json({ message: 'Un administrateur avec cet e-mail existe déjà' });
            }
            // Hacher le mot de passe
            const hashedPassword = await bcrypt.hash(password, 10);
            // Créer un nouvel administrateur
            const newAdmin = new AdminModel(req.body);
            newAdmin.password = hashedPassword;
            await newAdmin.save();
            // Renvoyer une réponse JSON
            res.json({ message: 'Un nouvel administrateur a été créé avec succès' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Une erreur s\'est produite lors de la création de l\'administrateur' });
        }
    }
);




//Fonction pour modifier les informations de l'adminstrateur
router.put("/edit/:id", async (req, res) => {
    try {
        const adminId = req.params.id;
        const updatedAdmin = req.body;

        // Supprimer la propriété de mot de passe avant de mettre à jour l'administrateur
        delete updatedAdmin.password;

        // Mettre à jour les informations de l'administrateur dans la base de données
        AdminModel.updateOne({ _id: adminId }, updatedAdmin, function (err, result) {
            if (err) {
                // Erreur lors de la mise à jour de l'administrateur
                console.error(err);
                return res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'administrateur' });
            }

            // Vérifier si l'administrateur a été mis à jour avec succès
            if (result.nModified === 0) {
                return res.status(404).json({ message: 'Administrateur non trouvé' });
            }

            // Renvoyer une réponse indiquant que l'administrateur a été mis à jour avec succès
            res.json({ message: 'Administrateur mis à jour avec succès' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression de l\'administrateur' });
    }
})



//Fonction pour modifier les informations de l'adminstrateur
router.put("/password/edit/:id", async (req, res) => {
    try {
        const adminId = req.params.id;
        const updatedAdminPassword = req.body.password;
        const hashedPassword = await bcrypt.hash(updatedAdminPassword, 10);

        // Supprimer la propriété de mot de passe avant de mettre à jour l'administrateur
        // Mettre à jour les informations de l'administrateur dans la base de données
        AdminModel.updateOne({ _id: adminId }, {password:hashedPassword},  async(err, result)=> {
            if (err) {
                // Erreur lors de la mise à jour de l'administrateur
                console.error(err);
                return res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'administrateur' });
            }
            // Vérifier si l'administrateur a été mis à jour avec succès
            if (result.nModified === 0) {
                return res.status(404).json({ message: 'Administrateur non trouvé' });
            }

            // Renvoyer une réponse indiquant que l'administrateur a été mis à jour avec succès
            await res.json({ message: 'Mot de passe admonistrateur modifier avec succès' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression de l\'administrateur' });
    }
})



// Fonction pour récupérer tous les administrateurs sans

router.get("/get_admininstrator", AuthorizationMiddleware, async (req, res) => {
    try {
        const admins = await AdminModel.find({});
        res.json(admins);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des administrateurs' });
    }
}
)


// Fonction pour bloquer un administrateur
router.put("/blocked/:id", AuthorizationMiddleware, async (req, res) => {
    const { id } = req.params;

    try {
        const admin = await AdminModel.findById({ _id: id });
        if (!admin) {
            return res.status(404).json({ error: 'Administrateur non trouvé' });
        }
        admin.blocked = true; // mettre à jour le champ blocked à true
        await admin.save();
        res.json({ message: "administrateur bloqué avec succès", admin: admin });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors du blocage de l\'administrateur' });
    }
})


// Débloquer pour bloquer un administrateur
router.put("/unblocked/:id", AuthorizationMiddleware, async (req, res) => {
    const { id } = req.params;
    try {
        const admin = await AdminModel.findById({ _id: id });
        if (!admin) {
            return res.status(404).json({ error: 'Administrateur non trouvé' });
        }
        admin.blocked = false; // mettre à jour le champ blocked à true
        await admin.save();
        res.json({ message: "administrateur modifié avec succès ", admin });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors du blocage de l\'administrateur' });
    }
})



// Fonction pour supprimer un administrateur

router.delete("/deleted/:id", AuthorizationMiddleware, async (req, res) => {
    const { id } = req.params;

    try {
        const result = await AdminModel.findById({ _id: id });
        if (result.nModified === 0) {
            return res.status(404).json({ error: 'Administrateur non trouvé' });
        }
        result.deleted = true;
        await result.save();
        res.json({ message: 'Administrateur supprimé avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression de l\'administrateur' });
    }
});

router.delete("/remove/:id", AuthorizationMiddleware, async (req, res) => {
    const { id } = req.params;

    try {
        const result = await AdminModel.findById({ _id: id });
        if (result.nModified === 0) {
            return res.status(404).json({ error: 'Administrateur non trouvé' });
        }
        result.deleted = false;
        await result.save();
        res.json({ message: 'Administrateur Restaurer avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression de l\'administrateur' });
    }
});



module.exports = router;