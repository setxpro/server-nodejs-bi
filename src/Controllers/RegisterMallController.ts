import * as MSSQL from "mssql";
import { Request, Response } from "express";
import axios from "axios";
import { sendMail } from "../Messages/email";

export const registerMall = async (req: Request, res: Response) => {
  const { codigo_loja } = req.body;

  try {
    const { data } = await axios.post(
      `${process.env.NODE_ENDPOINT_URL}/registroLoja`,
      {
        codigo_loja,
      }
    );

    res.status(200).json(data);
    return data;
  } catch (error) {
    console.log(error);
    let to = ["patrick.anjos@bagaggio.com.br"];
    sendMail(`Error sending request to server. e ${error}`, to);
    res.status(500).json({ message: "Error sending request to server." });
  }
};
