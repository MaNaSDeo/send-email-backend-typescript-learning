import { type Request, type Response } from "express";
import nodemailer from "nodemailer";

const sendEmail = async (req: Request, res: Response) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "jessy.olson94@ethereal.email",
      pass: "GqtGS4dtNKgB5XJgx5",
    },
  });

  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  res.json(info);
};

export { sendEmail };
