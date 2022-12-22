import * as MSSQL from "mssql";
import { Request, Response } from "express";
import axios from "axios";
import { sendMail } from "../Messages/email";

export const findAllMallAndSensors = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(
      `${process.env.NODE_ENDPOINT_URL}/registroLoja`
    );

    res.status(200).json({ data });
    return data;
  } catch (error) {
    let header = "Contador de Fluxo";
    let to = ["patrick.anjos@bagaggio.com.br"];
    sendMail(`Error sending request to server. e ${error}`, to);
    res.status(500).json({ message: "Error sending request to server." });
  }
};
