import { authBodyModel } from "../models/authModel.ts";
import { Request, Response } from "express";
import supabase from "../db/ini.ts";
import { ZodError } from "zod";

const AuthController = {
  signUp: async (req: Request, res: Response) => {
    try {
      const validatedData = authBodyModel.parse(req.body);
      const data = await supabase!.auth.signUp(validatedData);
      res.status(500).send(data);
    } catch (e) {
      e instanceof ZodError && res.send(e.issues);
      e instanceof Error && res.send(e.message);
      res.send(e);
    }
  },
  signIn: async (req: Request, res: Response) => {
    try {
      const validatedData = authBodyModel.parse(req.body);
      const data = await supabase!.auth.signInWithPassword(validatedData);
      res.status(500).send(data);
    } catch (e) {
      e instanceof ZodError && res.send(e.issues);
      e instanceof Error && res.send(e.message);
      res.send(e);
    }
  },
  signOut : async (_req: Request, res: Response) => {
    try {
        await supabase!.auth.signOut()
        res.status(500).send("Successfully logged out")
    } catch(e) {
        e instanceof Error && res.send(e.message)
        res.send(e)
    }
  }
};

export default AuthController;
