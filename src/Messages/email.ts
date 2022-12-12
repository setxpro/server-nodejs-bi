import TestAccount from "nodemailer";
import { SMTP_CONFIG } from "../Config/smtp";

const transporter = TestAccount.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
} as any);

export const sendMail = async (message: string, to: string[]) => {
  const mailSent = await transporter.sendMail({
    subject: "Fluxo de dados",
    text: `${message}`,
    from: "NodeJS <patrick.anjos@bagaggio.com.br>",
    to: to,
  });

  return mailSent;
};
