


const router = require("express").Router();
const { AuthorizationMiddleware } = require("../../middlewares/Authtoken");
const CandidatModel = require("../../models/CandidatModel");
const EntrepriseModel = require("../../models/EntrepriseModel");
const { PackCandidatModel, PackEntrepriseModel } = require("../../models/PackModel");
const dotenv = require("dotenv");
dotenv.config();


const axios = require("axios");
const PaymentInfoModel = require("../../models/payment/PaymentInfo");
const { typePersonConnected } = require("../../utils/FormatApi");


// verification

router.post('/check-cinepay-transaction', async (req, res) => {
    try {
        const data = {
            apikey: process.env.REACT_APP_API_KEY_CN,
            site_id: process.env.REACT_APP_SITE_WEB_CN,
            transaction_id: req.body.transaction_id, // Remplacez par le transaction_id de la transaction que vous souhaitez vérifier
        };

        const config = {
            method: 'post',
            url: 'https://api-checkout.cinetpay.com/v2/payment/check',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const response = await axios(config)
        console.log(JSON.stringify(response.data));


        const paymentStatus = await response.data.code;

        if (paymentStatus === '00') {
            // Le paiement a été effectué avec succès
            console.log('Paiement réussi.');
            // Vous pouvez ici effectuer des actions supplémentaires, par exemple, mettre à jour l'état de la commande dans votre base de données.
            // Envoyez une réponse appropriée à l'utilisateur pour l'informer du succès du paiement.
            return res.status(200).json({ message: 'Paiement réussi', data: response.data });
        } else {
            // Le paiement a échoué ou a une autre erreur
            console.log('Échec du paiement ou erreur.');
            // Vous pouvez ici gérer l'échec du paiement en fonction de vos besoins.
            res.status(607).json({ message: 'Échec du paiement ou erreur', data: response.data });
        }
        // Vous pouvez traiter la réponse ici pour déterminer l'état de la transaction
        // La réponse contiendra des informations sur l'état du paiement

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la vérification de la transaction CinetPay' });
    }
});











router.post('/generate-cinepay-payment-url', async (req, res) => {
    try {
        const transactionId = Math.floor(Math.random() * 100000000).toString();

        const data = {
            "apikey": process.env.REACT_APP_API_KEY_CN,
            "site_id": process.env.REACT_APP_SITE_WEB_CN,
            "transaction_id": transactionId,
            "amount": req.body.amount,
            "currency": "XOF",
            "alternative_currency": "",
            "description": " TEST INTEGRATION ",
            "customer_id": "172",
            "customer_name": "KOUADIO",
            "customer_surname": "Francisse",
            "customer_email": "harrissylver@gmail.com",
            "customer_phone_number": "+225004315545",
            "customer_address": "Antananarivo",
            "customer_city": "Antananarivo",
            "customer_country": "CM",
            "customer_state": "CM",
            "customer_zip_code": "065100",
            "notify_url": "https://webhook.site/d1dbbb89-52c7-49af-a689-b3c412df820d",
            "return_url": "https://webhook.site/d1dbbb89-52c7-49af-a689-b3c412df820d",
            "channels": "ALL",
            "metadata": "user1",
            "lang": "FR",
            "invoice_data": {
                "Donnee1": "",
                "Donnee2": "",
                "Donnee3": "",
                "UserID": req.body.UserID,
                "PackID": req.body.PackID,
                "TypePersonne": req.body.TypePersonne
            }
        };

        const config = {
            method: 'post',
            url: 'https://api-checkout.cinetpay.com/v2/payment',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const paymentInfo = new PaymentInfoModel(data);


        await paymentInfo.save();

        const response = await axios(config);
        console.log(JSON.stringify(response.data));

        return res.status(200).json({ data: response.data.data, transactionId: data.transaction_id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la génération de l\'URL de paiement' });
    }
});




router.post("/:type/:id/subscribe/:idPack", /*AuthorizationMiddleware */
    async (req, res) => {
        try {
            const type = req.params.type; // Peut être "candidat" ou "entreprise"
            const id = req.params.id;
            const idPack = req.params.idPack;

            // Validation des paramètres
            if (!type || !id || !idPack) {
                return res.status(400).json({ message: "Les paramètres type, id et idPack sont requis" });
            }

            let userModel, packModel;

            if (type === typePersonConnected[1]) {
                userModel = CandidatModel;
                packModel = PackCandidatModel;
            } else if (type === typePersonConnected[0]) {
                userModel = EntrepriseModel;
                packModel = PackEntrepriseModel;
            } else {
                return res.status(400).json({ message: "Le type doit être 'candidat' ou 'entreprise'" });
            }

            const userExist = await userModel.findById({ _id: id });
            if (!userExist) {
                return res.status(407).json({ message: "Cet utilisateur n'existe pas" });
            }

            const packExist = await packModel.findById({ _id: idPack });
            if (!packExist) {
                return res.status(408).json({ message: "Ce pack n'existe pas" });
            }

            const montant = packExist.solde;

            // Calcul de la date
            const dateNow = Date.now();
            const unAnEnMillisecondes = 365 * 24 * 60 * 60 * 1000;
            const dateEnd = dateNow + unAnEnMillisecondes;
            const dateActuelle = new Date(dateNow);
            const datePlusUnAn = new Date(dateEnd);

            // Assignation des données
            userExist.account.pack = packExist.pack;
            userExist.account.solde = packExist.solde;
            userExist.account.dateNow = dateActuelle;
            userExist.account.dateEnd = datePlusUnAn;
            userExist.account.count_sms = packExist.sms_count;

            // Sauvegarde des données
            await userExist.save();

            res.status(200).json({ data: userExist, message: "Pack souscrit" });

        } catch (error) {
            return res.status(500).json({ message: "Erreur serveur : " + error });
        }
    });





// packEntreprise
router.post("/recruteur/:idRecruteur/subscribe/:idPack", AuthorizationMiddleware, async (req, res) => {
    try {
        const idRecruteur = req.params.idRecruteur;
        const idPack = req.params.idPack;

        const recrutertExit = await EntrepriseModel.findById({ _id: idRecruteur });
        if (!recrutertExit) {
            return res.status(401).json({ message: "Ce recruteur n'existe pas" });
        }
        const packExist = await PackEntrepriseModel.findById({ _id: idPack });
        if (!packExist) {
            return res.status(402).json({ message: "Cet pack n'existe" })
        }


        // get all pack
        const packsCandidat = await PackEntrepriseModel.find({});

        const packFind = packsCandidat.find((pack) => pack._id === idPack);


        // calcule de la date 
        // Obtenez la date actuelle en millisecondes
        const dateNow = Date.now();
        // Définissez le nombre de millisecondes dans une année
        const unAnEnMillisecondes = 365 * 24 * 60 * 60 * 1000;
        // Ajoutez un an en millisecondes à la date actuelle
        const dateEnd = dateNow + unAnEnMillisecondes;
        // Créez des objets Date à partir des valeurs en millisecondes
        const dateActuelle = new Date(dateNow);
        const datePlusUnAn = new Date(dateEnd);


        // assignation des données
        recrutertExit.account.pack = packFind.pack;
        recrutertExit.account.solde = packFind.solde;
        recrutertExit.account.dateNow = dateActuelle;
        recrutertExit.account.dateEnd = datePlusUnAn;
        recrutertExit.account.count_sms = packExist.sms_count;

        console.log(datePlusUnAn);


        // sauveagrder de données
        await recrutertExit.save();

        res.status(200).json({ data: recrutertExit, message: "Pack Souscris" })

    } catch (error) {
        return res.status(505).json({ message: "Pack non validé " + error })
    }
})




// packEntreprise
router.get("/entreprises", AuthorizationMiddleware, async (req, res) => {
    try {

        const packsCandidat = await PackEntrepriseModel.find({});
        res.status(200).json({ data: packsCandidat, message: "Pack candidat recupérer" })

    } catch (error) {
        return res.status(505).json({ message: "Pack non validé " + error })
    }
})

// candiday
router.get("/candidat", AuthorizationMiddleware, async (req, res) => {
    try {

        const packsCandidat = await PackCandidatModel.find({});
        return res.status(200).json({ data: packsCandidat, message: "Pack candidat recupérer" })

    } catch (error) {
        return res.status(505).json({ message: "Pack non validé " + error })
    }
})







module.exports = router;