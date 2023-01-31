import express from "express";
import passport from "passport";
import loginWithGoogle from "../passport/google";
import { login } from "../controllers/login.controller";

const router = express.Router();
router.use(passport.initialize());
passport.use(loginWithGoogle());
router.post(
  "/",
  passport.authenticate("google-id-token", { session: false }),
  login
);

export default router;
