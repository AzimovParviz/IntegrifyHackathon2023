import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../utils/secrets"

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user: any = req.user

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
  )
  res.json({ token, user })
}
