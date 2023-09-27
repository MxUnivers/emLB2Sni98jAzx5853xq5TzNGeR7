const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatModel = require("../models/CandidatModel");
const EntrepriseModel = require("../models/EntrepriseModel");
const CommentModel = require("../models/social/CommentModel");
const PostModel = require("../models/social/PostModel");

const router = require("express").Router();


// ajouter un niveau d'Post supprimer







// post 
router.post('/post/:id/blog/:idBlog', async (req, res) => {
    try {

        const id = req.params.id;
        const idBlog = req.params.idBlog;
        const candidat = await CandidatModel.findById({ _id: id });
        let commentTarget;

        if (!candidat) {
            const entreprise = await EntrepriseModel.findById({ _id: id });
            if (!entreprise) {
                return res.status(407).json({ message: "Candidat ou entreprise introuvable" });
            } else {
                commentTarget = entreprise; // Utilisez l'objet EntrepriseModel
                commentTarget.coverPicture = commentTarget.logo; // Adaptation du champ pour l'entreprise
            }
        } else {
            commentTarget = candidat; // Utilisez l'objet CandidatModel
        }

        const postExist = await PostModel.findById({ _id: idBlog });
        if (!postExist) {
            return res.status(409).json({ message: "poste non retrouvé" })
        }

        const commentNew = new CommentModel(req.body);
        commentNew.idPostId = idBlog;
        commentNew.idcustomerId = id;
        commentNew.customerPhoto = commentTarget.coverPicture; // Utilisez le champ adapté
        commentNew.customerName = commentTarget.username;
        commentNew.areaPost = req.body.areaPost;
        commentNew.title = req.body.title;
        commentNew.content = req.body.content;

        await commentNew.save();

        return res.status(200).json({ data: commentNew, message: "Commentaire ajouté avec succès" });

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Erreur du serveur" });
    }
});





// edit 
router.put('/post/:id/blog/:idBlog/comment/:commentId', async (req, res) => {
    try {
        const id = req.params.id;
        const idBlog = req.params.idBlog;
        const commentId = req.params.commentId;

        const candidat = await CandidatModel.findById({ _id: id });
        let commentTarget;

        if (!candidat) {
            const entreprise = await EntrepriseModel.findById({ _id: id });
            if (!entreprise) {
                return res.status(407).json({ message: "Candidat ou entreprise introuvable" });
            } else {
                commentTarget = entreprise; // Utilisez l'objet EntrepriseModel
                commentTarget.coverPicture = commentTarget.logo; // Adaptation du champ pour l'entreprise
            }
        } else {
            commentTarget = candidat; // Utilisez l'objet CandidatModel
        }

        const postExist = await PostModel.findById({ _id: idBlog });
        if (!postExist) {
            return res.status(409).json({ message: "Post non trouvé" });
        }

        // Recherchez le commentaire existant par son ID
        const existingComment = await CommentModel.findOne({ _id: commentId, idcustomerId: id });

        if (!existingComment) {
            return res.status(409).json({ message: "Commentaire non trouvé" });
        }

        // Mettez à jour uniquement le contenu du commentaire
        existingComment.content = req.body.content;

        await existingComment.save();

        return res.status(200).json({ data: existingComment, message: "Commentaire modifié avec succès" });

    } catch (err) {
        console.error(err.message);
        res.status(500).json('Server Error');
    }
});







router.get('/blog/:idBlog/comments', AuthorizationMiddleware, async (req, res) => {
    try {
        const idBlog = req.params.idBlog;

        // Recherchez le PostModel par son ID
        const postExist = await PostModel.findById({ _id: idBlog });
        if (!postExist) {
            return res.status(409).json({ message: "Post non trouvé" });
        }

        // Recherchez tous les CommentModel où idPostId correspond à l'ID du PostModel
        const comments = await CommentModel.find({ idPostId: idBlog });

        return res.status(200).json({ data: comments, message: "Commentaires récupérés avec succès" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json('Server Error');
    }
});



router.get("/get_comments", AuthorizationMiddleware, async (req, res) => {
    try {

        const comments = await CommentModel.find({});

        return res.status(200).json({ message: "Commentaire Recupérer", data: comments })

    } catch (error) {
        console.log(error.message);
        return res.status(505).json({ message: "Commentaire non récuper" });
    }
})







router.put("/hide_post/:idPost", AuthorizationMiddleware, async (req, res) => {
    try {
        var idPost = req.params.idPost;

        const PostExist = await CommentModel.findById({ id: idPost });
        if (!PostExist) {
            return res.status(401).json({ message: "Post existe" })
        }
        PostExist.access = false;
        PostExist.visible = false;

        PostExist.save();

        return res.status(200).json({ message: "Post Recupérer", data: PostExist })

    } catch (error) {
        return res.status(505).json({ message: "Educaton ajouter" })
    }
})







router.put("/show_post/:idPost", AuthorizationMiddleware, async (req, res) => {
    try {
        var idPost = req.params.idPost;

        const PostExist = await CommentModel.findById({ id: idPost });
        if (!PostExist) {
            return res.status(401).json({ message: "Post existe" })
        }
        PostExist.access = true;
        PostExist.visible = true;

        PostExist.save();

        return res.status(200).json({ message: "Post Recupérer", data: PostExist })

    } catch (error) {
        return res.status(505).json({ message: "Educaton ajouter" })
    }
})





// lister ses niveau d'Post du candidat
// listes les niveau d'Post de tout les candidats





module.exports = router