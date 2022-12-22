// import * as MSSQL from "mssql";
import { Request, Response } from "express";

import axios from "axios";

export const findAllSensors = async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(
      `${process.env.NODE_ENDPOINT_URL}/registroSensor`
    );
    res.status(200).json({ data });
    return data;
  } catch (error) {
    console.log(error);
  }
};
