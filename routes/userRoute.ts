import express from "express";
import UserController from "../controllers/userController.ts";

const router = express.Router();

const { updateUser, getUserInfo} = UserController;

router.route("/")
    .get(getUserInfo)
    .patch(updateUser)
    

export default router;
