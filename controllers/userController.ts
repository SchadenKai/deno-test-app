import { Request, Response } from "express";
import { z, ZodError } from "zod";
import { userBodySchema, userUpdateBodySchema } from "../models/userModel.ts";
import supabase from "../db/ini.ts";

const UserController = {
  addUser: async (req: Request, res: Response) => {
    try {
      const validatedData = userBodySchema.parse(req.body);
      await supabase!.from("user").insert(validatedData).throwOnError();
      res.send({ message: "Succcessfully added a user!" });
    } catch (e) {
      e instanceof ZodError && res.send(e.issues);
      e instanceof Error && res.send(e.message);
      res.send(e);
    }
  },
  deleteUser: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await supabase!.from("user").delete().eq("id", id).throwOnError();
      res.send("Sucessfully delete the user");
    } catch (e) {
      e instanceof ZodError && res.send(e.issues);
      e instanceof Error && res.send(e.message);
      res.send(e);
    }
  },
  updateUser: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const validatedData = userUpdateBodySchema.parse(req.body);
      await supabase!
        .from("user")
        .update(validatedData)
        .eq("id", id)
        .throwOnError();
      res.send("Successfully updated the user information!");
    } catch (e) {
      e instanceof ZodError && res.send(e.issues);
      e instanceof Error && res.send(e.message);
      res.send(e);
    }
  },
  getUserInfo: async (_req: Request, res: Response) => {
    try {
      const jwt = sessionStorage.getItem("jwt_token") || undefined
      const email = sessionStorage.getItem("email")
      const username = sessionStorage.getItem("username")
      console.log("jwt: " + jwt + " email: " + email + " username: " + username)
      const { data : { user }} = await supabase!.auth.getUser(jwt);
      console.log("Successfully gotten current user info");
      res.send(user);
    } catch (e) {
      console.error(e);
      e instanceof ZodError && res.send(e.issues);
      e instanceof Error && res.send(e.message);
      res.send(e);
    }
  },
};

export default UserController;
