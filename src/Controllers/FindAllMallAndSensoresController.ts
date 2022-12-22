import * as MSSQL from "mssql";
import { Request, Response } from "express";
import axios from "axios";

export const findAllMallAndSensors = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(
      `${process.env.NODE_ENDPOINT_URL}/registroLoja`
    );
    res.status(200).json({ data });
    return data;
  } catch (error) {
    console.log(error);
  }
};
