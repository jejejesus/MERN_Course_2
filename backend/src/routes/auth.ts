import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";

const router = express.Router();

router.post("/login",[
    check("email", "Email invalid").isEmail(),
    check("password", "Password invalid").notEmpty()
], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send({ message: errors.array() });
    
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User does not exist" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Incorrect password" });
        else {
            const token = jwt.sign(
                { _id: user._id },
                process.env.JWT_SECRET as string,
                { expiresIn: "7d" }
            );
            res.cookie("auth_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 24 * 7 * 1000 // 7 days
            });
            res.status(200).json({ userId: user._id });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Something went wrong" });
    }
});

router.get("/validate-token", verifyToken, async (req: Request, res: Response) => {
    res.status(200).send({ userId: req.userId });
});

export default router;