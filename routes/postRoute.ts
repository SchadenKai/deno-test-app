import express from 'express'
import PostController from "../controllers/postController.ts"
import logger from "../middlewares/logStatusMIddleware.ts"

const router = express.Router()

router.use(logger)

const {getAllPost, getPost, addPost, deletePost, updatePost} = PostController

router.route('/')
    .get(getAllPost)
    .post(addPost)
router.route('/:id')
    .get(getPost)
    .patch(updatePost)
    .delete(deletePost)

export default router