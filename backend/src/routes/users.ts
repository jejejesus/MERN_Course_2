import express, { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";
import verifyToken from "../middleware/auth";

const router = express.Router();

router.get("/me", verifyToken, async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId).select("-password");
    if (!user) return res.status(404).send({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching user" });
  }
});

router.post(
  "/register",
  [
    check("email", "Email must be valid").isEmail(),
    check(
      "password",
      "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    ).matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    ),
    check("firstName", "First name is required").notEmpty(),
    check("lastName", "Last name is required").notEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).send({ message: errors.array() });

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) return res.status(400).json({ message: "User already exists" });

      user = new User(req.body);
      await user.save();

      const token = jwt.sign(
        { _id: user._id },
        process.env.JWT_SECRET as string,
        { expiresIn: "7d" }
      );
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7 * 1000, // 7 days
      });

      return res.status(201).send({ message: "User registered successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: "Error registering user" });
    }
  }
);

export default router;
