import { Request, Response, Application } from "express";
import { controllers } from './../controllers/index';
import { middlewares } from "../middlewares";

const { responses, messages, codes } = middlewares;

const { blogController } = controllers

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

    app.get("/blogs", blogController.findAll);
    app.get("/blogs/:id", blogController.findOne);
    app.post("/blogs", blogController.create);
    app.put("/blogs/:id", blogController.update);
    app.delete("/blogs/:id", blogController.delete);

    app.all("*", (_: Request, res: Response) => {
      responses.error(codes.notFound(), messages.pageNotFound(), res);
    });
  };
}

export const route = new Routes().router;