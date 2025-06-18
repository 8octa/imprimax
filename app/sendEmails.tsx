"use server";

import { Resend } from "resend";
import EmailComponent from "./components/EmailComponent";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}
const resend = new Resend(RESEND_API_KEY);

type EmailFormData = {
  firstname: string;
  lastname: string;
  senderEmail: string;
  phone: string;
  projecttype: string;
  width: string;
  height: string;
};

function extractFormData(formData: FormData): EmailFormData {
  const data = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    senderEmail: formData.get("senderEmail"),
    phone: formData.get("phone"),
    projecttype: formData.get("projecttype"),
    width: formData.get("width"),
    height: formData.get("height"),
  };

  for (const [key, value] of Object.entries(data)) {
    if (!value || typeof value !== "string" || !value.trim()) {
      throw new Error(`Missing or invalid value for: ${key}`);
    }
  }
  return data as EmailFormData;
}

export const sendEmail = async (formData: FormData) => {
  try {
    const {
      firstname,
      lastname,
      senderEmail,
      phone,
      projecttype,
      width,
      height,
    } = extractFormData(formData);

    const result = await resend.emails.send({
      from: "Cere ofertă <onboarding@resend.dev>",
      to: "tataruoctavian5@gmail.com",
      subject: "Mesaj prin formular",
      replyTo: senderEmail,
      text: `Name: ${firstname} ${lastname}\nEmail: ${senderEmail}\nProject: ${projecttype}\nSize: ${width}x${height}`,
      react: (
        <EmailComponent
          firstname={firstname}
          lastname={lastname}
          phone={phone}
          senderEmail={senderEmail}
          width={width}
          height={height}
          projecttype={projecttype}
        />
      ),
    });

    return { success: true, message: "Email trimis cu succes!", result };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "Eroare necunoscută.",
    };
  }
};
