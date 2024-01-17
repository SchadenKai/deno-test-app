import { Request, Response } from "express";
import { ZodError } from "zod";
import { userUpdateBodySchema } from "../models/userModel.ts";
import supabase from "../db/ini.ts";

const UserController = {
  updateUser: async (req: Request, res: Response) => {
    try {
      const validatedData = userUpdateBodySchema.parse(req.body)
      const {data, error} = await supabase!.auth.updateUser(validatedData)
      if (error) throw new Error(JSON.stringify(error))
      res.send({...data, "message" : "Successfully updated the user information!"});
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
