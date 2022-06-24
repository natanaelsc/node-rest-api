import { Blog } from "../../types/Blog";
import { prismaClient } from "../prismaClient";

export default class BlogService {
    
  findAll = async (): Promise<Blog[] | null> => {
    const result = await prismaClient.blog.findMany();
    if (!result) return null;
    return result;
  };
  
  findOne = async (id: number): Promise<Blog | null> => {
    const result = await prismaClient.blog.findUnique({ where: { id: id } });
    if (!result) return null;
    return result;
  };
  
  create = async (data: Blog): Promise<Blog | null> => {
    const result = await prismaClient.blog.create({ data });
    if (!result) return null;
    return result;
  };
  
  update = async (id: number, data: Blog): Promise<Blog | null> => {
    const result = await prismaClient.blog.update({ where: { id: id }, data });
    if (!result) return null;
    return result;
  };
  
  delete = async (id: number): Promise<Blog | null> => {
    const result = await prismaClient.blog.delete({ where: { id: id } });
    if (!result) return null;
    return result;
  };
}