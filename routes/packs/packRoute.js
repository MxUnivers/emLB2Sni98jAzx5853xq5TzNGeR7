


const router = require("express").Router();
const { AuthorizationMiddleware } = require("../../middlewares/Authtoken");
const CandidatModel = require("../../models/CandidatModel");
const EntrepriseModel = require("../../models/EntrepriseModel");
const { PackCandidatModel, PackEntrepriseModel } = require("../../models/PackModel");
const dotenv = require("dotenv");
dotenv.config();


const axios = require("axios");
const PaymentInfoModel = require("../../models/payment/PaymentInfo");


// verification
router.post('/payment-notification', async (req, res) => {
    try {
        // Récupérez les données de notification envoyées par Cinepay depuis req.body
        const notificationData = req.body;

        // Exemple de données de notification de Cinepay
        /*
        notificationData = {
          cpm_site_id: 'VOTRE_SITE_ID',
          cpm_trans_id: 'IDENTIFIANT_TRANSACTION',
          cpm_currency: 'XOF',
          cpm_amount: '100', // Montant en centimes (par exemple, 100 représente 1 XOF)
          cpm_payment_date: '2022-09-30 12:00:00',
          // ... d'autres données ...
        }
        */

        // Vérifiez les données de notification pour confirmer le paiement
        const siteId = process.env.REACT_APP_SITE_WEB_CN; // Remplacez par votre identifiant de site Cinepay
        const transactionId = req.body.transactionId; // Remplacez par l'identifiant de la transaction que vous avez précédemment stocké

        // Vérifiez si le site_id de la notification correspond à votre site_id
        if (notificationData.cpm_site_id === siteId) {
            // Vérifiez si l'identifiant de transaction correspond à celui que vous avez précédemment stocké
            if (notificationData.cpm_trans_id === transactionId) {
                // La transaction est confirmée avec succès
                // Vous pouvez mettre à jour l'état du candidat ou effectuer d'autres actions ici
                console.log('Paiement confirmé pour la transaction', transactionId);
                res.status(200).json({ message: 'Paiement confirmé avec succès.' });
            } else {
                // L'identifiant de transaction ne correspond pas, ce n'est pas la bonne transaction
                console.error('Identifiant de transaction incorrect');
                res.status(400).json({ message: 'Identifiant de transaction incorrect.' });
            }
        } else {
            // Le site_id ne correspond pas, ce n'est pas votre notification
            console.error('Site ID incorrect');
            res.status(400).json({ message: "'Site ID incorrect.'" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors du traitement de la notification de paiement.');
    }
});












router.post('/generate-cinepay-payment-url', async (req, res) => {
    try {
        const transactionId = Math.floor(Math.random() * 100000000).toString();

        const data = {
            apikey: process.env.REACT_APP_API_KEY_CN,
            site_id: process.env.REACT_APP_SITE_WEB_CN,
            transaction_id: transactionId,
            amount: req.body.amount,
            currency: "XOF",
            alternative_currency: "",
            description: "TEST INTEGRATION",
            customer_id: "172",
            customer_name: "KOUADIO",
            customer_surname: "Francisse",
            customer_email: "harrissylver@gmail.com",
            customer_phone_number: "+225004315545",
            customer_address: "Antananarivo",
            customer_city: "Antananarivo",
            customer_country: "CM",
            customer_state: "CM",
            customer_zip_code: "065100",
            notify_url: "https://webhook.site/d1dbbb89-52c7-49af-a689-b3c412df820d",
            return_url: "https://webhook.site/d1dbbb89-52c7-49af-a689-b3c412df820d",
            channels: "ALL",
            metadata: "user1",
            lang: "FR",
            invoice_data: {
                Donnee1: "",
                Donnee2: "",
                Donnee3: ""
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




router.post("/candidat/:idCandidat/subscribe/:idPack", /*AuthorizationMiddleware */
    async (req, res) => {
        try {
            const idCandidat = req.params.idCandidat;
            const idPack = req.params.idPack;
            // Validation des paramètres
            if (!idCandidat || !idPack) {
                return res.status(400).json({ message: "Les paramètres idCandidat et idPack sont requis" });
            }

            const candidatExist = await CandidatModel.findById({ _id: idCandidat });
            if (!candidatExist) {
                return res.status(407).json({ message: "Ce candidat n'existe pas" });
            }
            const packExist = await PackCandidatModel.findById({ _id: idPack });
            if (!packExist) {
                return res.status(408).json({ message: "Ce pack n'existe pas" });
            }
            const montant = packExist.solde;
            // axios

            // calcule de la date 
            const dateNow = Date.now();
            const unAnEnMillisecondes = 365 * 24 * 60 * 60 * 1000;
            const dateEnd = dateNow + unAnEnMillisecondes;
            const dateActuelle = new Date(dateNow);
            const datePlusUnAn = new Date(dateEnd);

            // assignation des données
            candidatExist.account.pack = packExist.pack;
            candidatExist.account.solde = packExist.solde;
            candidatExist.account.dateNow = dateActuelle;
            candidatExist.account.dateEnd = datePlusUnAn;
            candidatExist.account.count_sms = packExist.sms_count;

            // sauvegarde des données
            await candidatExist.save();

            res.status(200).json({ data: candidatExist, message: "Pack souscrit" })

        } catch (error) {
            return res.status(500).json({ message: "Erreur serveur : " + error })
        }
    })





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