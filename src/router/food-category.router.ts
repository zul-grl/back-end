import { Router } from "express";

const foodRouter = Router();
foodRouter.get("/:foodId").patch("/:foodId").delete("/:foodId");
export { foodRouter };
