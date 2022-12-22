import { Request, Response } from "express";
import { emailPortalWeb } from "../Messages/emailPortalWeb";

export const messagePortal = async (req: Request, res: Response) => {
  const { message, to } = req.body;

  try {
    const send = emailPortalWeb(message, to);
    await res
      .status(200)
      .json({ status: true, message: "Mensagem enviada com sucesso!" });
    return send;
  } catch (error) {
    let to = ["patrick.anjos@bagaggio.com.br"];
    emailPortalWeb(`Error sending request to server. - ${error}`, to);
    res.status(500).json({ message: "Error sending request to server." });
  }
};
