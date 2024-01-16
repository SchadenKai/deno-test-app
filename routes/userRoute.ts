import express from "express";
import UserController from "../controllers/userController.ts";

const router = express.Router();

const { addUser, updateUser, deleteUser } = UserController;

router.route("/")
    .post(addUser);
router.route("/:id")
    .patch(updateUser)
    .delete(deleteUser);

export default router;
