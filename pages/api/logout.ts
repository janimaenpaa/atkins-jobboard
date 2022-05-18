import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import cookie from "cookie";

const handler = nextConnect<NextApiRequest, NextApiResponse>().post(
  async (req, res) => {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("ACCESS_TOKEN", "", {
        expires: new Date(0),
        path: "/",
      })
    );
    return res.status(200).json({ message: "Succesfully logged out!" });
  }
);

export default handler;
