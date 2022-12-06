const postService = require ('../service/post-service');
const postModel = require ('../models/post-model')

class PostController {
    async addPost (req, res, next) {
        try {
           const { text } = req.body;
           const { id } = req.params;
           const post = new postModel({text, uid:id});
           post
           .save()
           .then((post) => res.status(200).json(post))
        //    .catch((error) => handleError(res, error));
        } catch (e) {
            next(e)
        }
    }
    async getPosts (req, res, next) {
        try {
            const { id } = req.params;
            postModel
             .find({uid:id})
             .sort({ createdAt: -1 })
             .then((posts) => res.status(200).json(posts))
            //  .catch((error) => handleError(res, error));
        } catch (e) {
            next(e)
        }
    }
    
    async deletePost (req, res, next) {
        try {
            const { id } = req.params;
            postModel
            .findByIdAndDelete(id)
            .then((post) => res.status(200).json(id))

        } catch (e) {
            next(e)
        }
    }
}


module.exports = new PostController()