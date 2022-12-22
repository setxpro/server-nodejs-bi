import * as MSSQL from "mssql";
import { Request, Response } from "express";

import axios from "axios";
import { sendMail } from "./../Messages/email";

export const findAllSensors = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(
      `${process.env.NODE_ENDPOINT_URL}/registroSensor`
    );

    let database = data.data;

    let info = new MSSQL.Request();

    let resp = await info.query(
      `INSERT INTO table_name (codigo_loja, datetime, numero_pessoas) VALUES (${database.codigo_loja}, ${database.datetime}, ${database.numero_pessoas})`
    );
    res.status(200).json({ data, message: "Registerd with success!" });
    return data;
  } catch (error) {
    let to = ["patrick.anjos@bagaggio.com.br"];
    sendMail(`Error sending request to server. - ${error}`, to);
    res.status(500).json({ message: "Error sending request to server." });
  }
};
