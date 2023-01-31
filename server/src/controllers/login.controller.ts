import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {BadRequestError} from "../helpers/apiError";
import { JWT_SECRET } from "../utils/secrets";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user: any = req.user;
  try {
    const token = jwt.sign(
      {
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({ token, user });
  } catch (error) {
    console.log(error);
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", 400, error));
    } else {
      next(error);
    }
  }
};
