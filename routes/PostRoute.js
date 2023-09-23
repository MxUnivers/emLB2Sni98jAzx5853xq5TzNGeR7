const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatModel = require("../models/CandidatModel");
const PostModel = require("../models/social/PostModel");

const router = require("express").Router();


// ajouter un niveau d'Post supprimer





router.post("/post/:idCandidat", AuthorizationMiddleware, async (req, res) => {
    try {
        var idCandidat = req.params.idCandidat;

        const candidatExit = await CandidatModel({ _id: idCandidat })
        if (!candidatExit) {
            return res.status(401).json({ message: "Candidat non trouvé" })
        }
        const PostNew = new PostModel(req.body);

        await PostNew.save();

        return res.status(200).json({ message: "Post ajouter", data: PostNew })

    } catch (error) {
        return res.status(505).json({ message: "Educaton ajouter" })
    }
})






// edit 
router.put("/edit/:idPost", AuthorizationMiddleware, async (req, res) => {
    try {
        var idCandidat = req.params.idPost;

        const postExist = await PostModel.findById({ _id: idCandidat })
        if (!postExist) {
            return res.status(401).json({ message: "Publication non trouvé" })
        }
        const postEdit = await PostModel.findByIdAndUpdate({ _id: idCandidat }, req.body);

        postEdit.save();

        return res.status(200).json({ message: "Post ajouter", data: postEdit })

    } catch (error) {
        return res.status(505).json({ message: "Post non ajouter" })
    }
})






// lister un niveau d'Post
router.get("/posts/:idCandidat", AuthorizationMiddleware, async (req, res) => {
    try {
        var idCandidat = req.params.idCandidat;

        const posts = await PostModel.find({idPerson:idCandidat });
        const candidatExit = await CandidatModel.findById({ _id: idCandidat })
        if (!candidatExit) {
            return res.status(401).json({ message: "Candidat non trouvé" });
        }

        const PostList = await PostModel.find({ access: true, idPerson: idCandidat });

        return res.status(200).json({ message: "Post Recupérer", data: PostList })

    } catch (error) {
        return res.status(505).json({ message: "Educaton ajouter" })
    }
})



router.get("/get_posts", AuthorizationMiddleware, async (req, res) => {
    try {


        const PostList = await PostModel.find({ access: true, idPerson: idCandidat });

        return res.status(200).json({ message: "Post Recupérer", data: PostList })

    } catch (error) {
        return res.status(505).json({ message: "Educaton ajouter" })
    }
})







router.put("/hide_post/:idPost", AuthorizationMiddleware, async (req, res) => {
    try {
        var idPost = req.params.idPost;

        const PostExist = await PostModel.findById({ id: idPost });
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

        const PostExist = await PostModel.findById({ id: idPost });
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