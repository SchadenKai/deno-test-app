import { authRegisterModel, authSigninModel } from "../models/authModel.ts";
import { Request, Response } from "express";
import supabase from "../db/ini.ts";
import { ZodError } from "zod";

const AuthController = {
  signUp: async (req: Request, res: Response) => {
    try {
      const validatedData = authRegisterModel.parse(req.body);
      const data = await supabase!.auth.signUp(validatedData);
      res.send(data);
    } catch (e) {
      e instanceof ZodError && res.send(e.issues);
      e instanceof Error && res.send(e.message);
      res.send(e);
    }
  },
  signIn: async (req: Request, res: Response) => {
    try {
      const validatedData = authSigninModel.parse(req.body);
      const data = await supabase!.auth.signInWithPassword(validatedData);
      console.log('Successfully signin id:' + data.data.user?.id + ' email: ' + data.data.user?.email)
      await sessionStorage.setItem("username", data.data.user?.user_metadata.username)
      await sessionStorage.setItem("email", data.data.user?.email || "")
      await sessionStorage.setItem("jwt_token", data.data.session?.access_token || "")
      res.send(data);
    } catch (e) {
      e instanceof ZodError && res.send(e.issues);
      e instanceof Error && res.send(e.message);
      res.send(e);
    }
  },
  signOut: async (_req: Request, res: Response) => {
    try {
      await supabase!.auth.signOut();
      res.send("Successfully logged out");
      sessionStorage.clear()
    } catch (e) {
      e instanceof Error && res.send(e.message);
      res.send(e);
    }
  },
};

export default AuthController;
