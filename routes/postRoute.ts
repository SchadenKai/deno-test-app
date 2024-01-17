import express from 'express'
import PostController from "../controllers/postController.ts"

const router = express.Router()

const {getAllPost, getPost, addPost, deletePost, updatePost, getAllYourPost} = PostController

router.route('/')
    .get(getAllPost)
    .post(addPost)
router.get('/self', getAllYourPost)
router.route('/:id')
    .get(getPost)
    .patch(updatePost)
    .delete(deletePost)


export default router