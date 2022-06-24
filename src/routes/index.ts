import { Request, Response, Application } from "express";
import BlogControllers from "../controllers/blogControllers";
import { middlewares } from "../middlewares";

const { responses, messages, codes } = middlewares;

const Blog = new BlogControllers();

class Routes {
  public router = (app: Application): any => {
    app.get("/", (_: Request, res: Response) => {
      responses.ok(codes.ok(), messages.welcomeMessage(), res);
    });

    app.get("/about", (_: Request, res: Response) => {
      responses.ok(codes.ok(), "About Us", res);
    });
    app.get("/contact", (_: Request, res: Response) => {
      responses.ok(codes.ok(), "Contact Us", res);
    });

    app.get("/blogs", Blog.findBlogs);
    app.get("/blogs/:id", Blog.findOneBlog);
    app.post("/blogs", Blog.createBlog);
    app.put("/blogs/:id", Blog.updateBlog);
    app.delete("/blogs/:id", Blog.deleteBlog);

    app.all("*", (_: Request, res: Response) => {
      responses.error(codes.notFound(), messages.pageNotFound(), res);
    });
  };
}

export const route = new Routes().router;