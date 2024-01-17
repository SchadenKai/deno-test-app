import express from "express";
import UserController from "../controllers/userController.ts";

const router = express.Router();

const { addUser, updateUser, deleteUser, getUserInfo} = UserController;

router.route("/")
    .post(addUser)
    .get(getUserInfo)
router.route("/:id")
    .patch(updateUser)
    .delete(deleteUser);

export default router;
