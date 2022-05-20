import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import jwt from "jsonwebtoken";
import cookie from "cookie";

const handler = nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    const { password } = req.body;

    if (password && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(
        { time: Date.now() },
        process.env.JWT_SECRET as string,
        { expiresIn: "8h" }
      );

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("ACCESS_TOKEN", token, {
          httpOnly: true,
          maxAge: 8 * 60 * 60,
          path: "/",
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
        })
      );

      res.status(200).json({ message: "Successful login!" });
      return;
    }

    res
      .status(401)
      .json({ error: "Wrong password.", password: process.env.PASSWORD });
    return;
  }
);

export default handler;
