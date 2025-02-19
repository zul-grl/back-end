import { Request, RequestHandler, Response } from "express";

export const getProduct: RequestHandler = (req: Request, res: Response) => {
  res.send(req.body);
};
