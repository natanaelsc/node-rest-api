import { Blog } from "../../types/Blog";
import { prismaClient } from "../prismaClient";

export default class BlogService {
    
  findBlogs = async (): Promise<any | null> => {
    const result = await prismaClient.blog.findMany();
    if (!result) return null;
    return result;
  };
  
  findOneBlog = async (id: number): Promise<any | null> => {
    const result = await prismaClient.blog.findUnique({ where: { id: id } });
    if (!result) return null;
    return result;
  };
  
  createBlog = async (data: Blog): Promise<any | null> => {
    const result = await prismaClient.blog.create({ data });
    if (!result) return null;
    return result;
  };
  
  updateBlog = async (id: number, data: Blog): Promise<any | null> => {
    const result = await prismaClient.blog.update({ where: { id: id }, data });
    if (!result) return null;
    return result;
  };
  
  deleteBlog = async (id: number): Promise<any | null> => {
    const result = await prismaClient.blog.delete({ where: { id: id } });
    if (!result) return null;
    return result;
  };
}