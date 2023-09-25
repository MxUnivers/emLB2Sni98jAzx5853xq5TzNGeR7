const { AuthorizationMiddleware } = require("../middlewares/Authtoken");
const CandidatModel = require("../models/CandidatModel");
const PostModel = require("../models/social/PostModel");

const router = require("express").Router();


// ajouter un niveau d'Post supprimer







// post 
router.post('/post/:id', AuthorizationMiddleware, async (req, res) => {
    try {
        const id = req.params.id
        const candidat = await CandidatModel.findById({ _id: id });
        if(!candidat){
            return res.status(407).json({message:"Candidat introuvalble"});
        }

        const postNew = new PostModel(req.body);
        postNew.idcustomerId = id;
        postNew.customerPhoto = candidat.coverPicture;
        postNew.customerName = candidat.username;
        postNew.areaPost = req.body.areaPost;
        postNew.title =  req.body.title;
        postNew.content=req.body.content;

        await postNew.save();

        return res.status(200).json({ data: postNew, message: "poster ajouter avec succès" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json('Server Error');
    }
});





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

        const posts = await PostModel.find({ idPerson: idCandidat });
        const candidatExit = await CandidatModel.findById({ _id: idCandidat })
        if (!candidatExit) {
            return res.status(401).json({ message: "Candidat non trouvé" });
        }

        const PostList = await PostModel.find({ access: true, idPerson: idCandidat });

        return res.status(200).json({ message: "Post Recupérer", data: PostList.reverse })

    } catch (error) {
        return res.status(505).json({ message: "Educaton ajouter" })
    }
})



router.get("/get_posts", AuthorizationMiddleware, async (req, res) => {
    try {

        const PostList = await PostModel.find({});

        return res.status(200).json({ message: "Post Recupérer", data: PostList.reverse() })

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