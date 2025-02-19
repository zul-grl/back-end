import { Router } from "express";

const authRouter = Router();
authRouter
  .get("/refresh")
  .post("/login")
  .post("/signup")
  .post("/reset-password-request")
  .get("/verify-reset-password-request")
  .post("/reset-password");
export { authRouter };
