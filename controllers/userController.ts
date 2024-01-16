import { Request, Response } from "express";
import { ZodError } from "zod";
import { userBodySchema, userUpdateBodySchema } from "../models/userModel.ts";
import supabase from "../db/ini.ts";

const UserController = {
  addUser: async (req: Request, res: Response) => {
    try {
      const validatedData = userBodySchema.parse(req.body);
      await supabase!.from("user").insert(validatedData).throwOnError();
      res.status(500).send({ message: "Succcessfully added a user!" });
    } catch (e) {
      e instanceof ZodError && res.send(e.issues);
      e instanceof Error && res.send(e.message);
      res.send(e);
    }
  },
  deleteUser:  async(req : Request, res : Response) => {
    try {
        const id = req.params.id 
        await supabase!.from('user').delete().eq("id", id).throwOnError()
        res.send("Sucessfully delete the user")
    } catch (e) {
        e instanceof ZodError && res.send(e.issues);
        e instanceof Error && res.send(e.message);
        res.status(500).send(e);
    }
  }, 
  updateUser: async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const validatedData = userUpdateBodySchema.parse(req.body)
        await supabase!.from('user').update(validatedData).eq("id", id).throwOnError()
        res.status(500).send("Successfully updated the user information!")
    } catch (e) {
      e instanceof ZodError && res.send(e.issues);
      e instanceof Error && res.send(e.message);
      res.send(e);
    }
  },

};

export default UserController;
