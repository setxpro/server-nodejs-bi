import * as MSSQL from "mssql";
// import { sendMail } from "./../Messages/email";

const config = {
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PWD}`,
  server: `${process.env.DB_SERVER}`,
  database: `${process.env.DB_NAME}`,

  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
    port: parseInt(`${process.env.DB_PORT}`), // number exemplo
  },
};

export const connectMssql = async () => {
  try {
    await MSSQL.connect(config).then(() => {
      console.log("Connected with MSSQL");
    });
  } catch (error: any) {
    // ... error checks
    // sendMail(error);
    console.log(error);
  }
};
