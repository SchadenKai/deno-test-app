import express from 'express'
import AuthController from "../controllers/authController.ts"

const router = express.Router()
const {signIn, signOut, signUp} = AuthController

router.post('/signup', signUp)
router.post('/signin', signIn)
router.post('/signout', signOut)

export default router