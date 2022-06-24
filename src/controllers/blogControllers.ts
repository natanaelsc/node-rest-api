import { Request, Response } from "express";
import { services } from './../database/services/index';
import { middlewares } from "../middlewares";
import { Blog } from "../types/Blog";

const { responses, messages, codes } = middlewares;

const { blogService } = services;

export default class BlogController {
    
  findAll = async (_: Request, res: Response) => {
    const response = await blogService.findAll();

    if (!response) return responses.error(codes.error(), messages.error(), res);

    return responses.success(
      codes.ok(),
      messages.ok(),
      response,
      res
    );
  };
  
  findOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    const response = await blogService.findOne(parseInt(id));

    if (!response) return responses.error(codes.error(), messages.notFound(), res);

    return responses.success(codes.ok(), messages.ok(), response, res);
  };
  
  create = async (req: Request, res: Response) => {
    const { title, description, }: Blog = req.body;

    const response = await blogService.create({
      title,
      description,
    });

    if (!response) return responses.error(codes.error(), messages.notFound(), res);

    const id: number | undefined = response.id;

    return responses.success(
      codes.created(),
      messages.created(),
      { id, title, description },
      res
    );
  };
  
  update = async (req: Request, res: Response) => {
    const {
      title,
      description,
    }: Blog = req.body;

    const { id } = req.params;

    const response = await blogService.update(parseInt(id), {
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
  
  delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    const response = await blogService.delete(parseInt(id));

    if (!response) return responses.error(codes.error(), messages.error(), res);

    return responses.ok(codes.ok(), messages.ok(), res);
  };
}
