import * as MSSQL from "mssql";
import { Request, Response } from "express";

export const findAll = async (req: Request, res: Response) => {
  try {
    let getInfo = new MSSQL.Request();
    let response = await getInfo.query(
      "SELECT * FROM ZBC010 WHERE D_E_L_E_T_ = ''"
    );

    res.status(200).json(response.recordset);
  } catch (error) {
    console.log(error);
  }
};
