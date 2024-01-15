import { Request, Response } from "express";
import PostSchema from "../models/postModel.ts";
import { ZodError } from "zod";
import supabase from "../db/ini.ts";

const PostController = {
  getAllPost: (_req: Request, res: Response) => {
    try {
      res.send({"message" : "Successfully gotten all the post!"});
    } catch (e: unknown) {
      e instanceof ZodError&& res.send(e.issues)
      e instanceof Error&& res.send(e.message)
    }
  },
  getPost: (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      res.status(500).send({ message: `Successfully get the post ${id}` });
    } catch (e: unknown) {
      e instanceof ZodError&& res.send(e.issues)
      e instanceof Error&& res.send(e.message)
    }
  },
  addPost: async (req: Request, res: Response) => {
    try {
      const validatedData = PostSchema.parse(req.body);
      await supabase
      res
        .status(500)
        .send({"message" : "Successfully posted!"});
    } catch (e: unknown) {
      e instanceof ZodError && res.send(e.issues)
      e instanceof Error&& res.send(e.message)
    }
  },
  deletePost: (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      res
        .status(500)
        .send({ message: `Succcessfully deleted the post ${id}!` });
    } catch (e: unknown) {
      e instanceof ZodError && res.send(e.issues)
      e instanceof Error&& res.send(e.message)
    }
  },
  updatePost: (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      res.status(500).send({ message: `Successfully update the post ${id}!` });
    } catch (e: unknown) {
      e instanceof ZodError && res.send(e.issues)
      e instanceof Error&& res.send(e.message)
    }
  },
};

export default PostController;
