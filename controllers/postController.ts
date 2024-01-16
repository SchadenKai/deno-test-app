import { Request, Response } from "express";
import {postBodySchema, postUpdateBodySchema} from "../models/postModel.ts";
import { ZodError } from "zod";
import supabase from "../db/ini.ts";

const PostController = {
  getAllPost: async (_req: Request, res: Response) => {
    try {
      const data = await supabase!.from('post').select().throwOnError()
      res.send(data);
    } catch (e: unknown) {
      e instanceof ZodError&& res.send(e.issues)
      e instanceof Error&& res.send(e.message)
      res.send(e)
    }
  },
  getPost: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data = await supabase!.from('post').select().eq("post_id", id).throwOnError()
      res.status(500).send(data);
    } catch (e: unknown) { 
      e instanceof ZodError&& res.send(e.issues)
      e instanceof Error&& res.send(e.message)
      res.send(e)
    }
  },
  addPost: async (req: Request, res: Response) => {
    try {
      const validatedData = postBodySchema.parse(req.body);
      await supabase!.from('post').insert(validatedData).throwOnError()
      res
        .status(500)
        .send({"message" : "Successfully posted!"});
    } catch (e: unknown) {
      e instanceof ZodError && res.send(e.issues)
      e instanceof Error && res.send(e.message)
      res.send(e)
      res.send(e)
    }
  },
  deletePost: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await supabase!.from('post').delete().eq("post_id", id).throwOnError()
      res
        .status(500)
        .send({ message: `Succcessfully deleted the post ${id}!` });
    } catch (e: unknown) {
      e instanceof ZodError && res.send(e.issues)
      e instanceof Error&& res.send(e.message)
      res.send(e)
    }
  },
  updatePost: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const validatedData = postUpdateBodySchema.parse(req.body)
      await supabase!.from('post').update(validatedData).eq("post_id", id)
      res.status(500).send({ message: `Successfully update the post ${id}!` });
    } catch (e: unknown) {
      e instanceof ZodError && res.send(e.issues)
      e instanceof Error&& res.send(e.message)
      res.send(e)
    }
  },
};

export default PostController;
