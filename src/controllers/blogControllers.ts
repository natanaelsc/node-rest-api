import { Request, Response } from "express";
import { middlewares } from "../middlewares";

import Service from "../database/services";
import { Blog } from "../types/Blog";

const { responses, messages, codes } = middlewares;

const { blog } = Service;

class BlogControllers {
    
  findBlogs = async (_: Request, res: Response) => {
    const response = await blog.findBlogs();

    if (!response) return responses.error(codes.error(), messages.error(), res);

    return responses.success(
      codes.ok(),
      messages.ok(),
      response,
      res
    );
  };
  
  findOneBlog = async (req: Request, res: Response) => {
    const { id } = req.params;

    const response = await blog.findOneBlog(parseInt(id));

    if (!response) return responses.error(codes.error(), messages.notFound(), res);

    return responses.success(codes.ok(), messages.ok(), response, res);
  };
  
  createBlog = async (req: Request, res: Response) => {
    const { title, description, }: Blog = req.body;

    const response = await blog.createBlog({
      title,
      description,
    });

    if (!response) return responses.error(codes.error(), messages.notFound(), res);

    const id: number = response.id;

    return responses.success(
      codes.created(),
      messages.created(),
      { id, title, description },
      res
    );
  };
  
  updateBlog = async (req: Request, res: Response) => {
    const {
      title,
      description,
    }: Blog = req.body;

    const { id } = req.params;

    const response = await blog.updateBlog(parseInt(id), {
      title,
      description,
    });

    if (!response) return responses.error(codes.error(), messages.error(), res);

    return responses.success(
      codes.ok(),
      messages.ok(),
      { id, title, description },
      res
    );
  };
  
  deleteBlog = async (req: Request, res: Response) => {
    const { id } = req.params;

    const response = await blog.deleteBlog(parseInt(id));

    if (!response) return responses.error(codes.error(), messages.error(), res);

    return responses.ok(codes.ok(), messages.ok(), res);
  };
}

export default BlogControllers;
