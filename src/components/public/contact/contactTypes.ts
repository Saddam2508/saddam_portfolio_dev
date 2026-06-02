export type FormStatus = "idle" | "success" | "error";

export type FormState = {
  status: FormStatus;
  message: string;
};

export type ContactFormField = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactIconType = "GitHub" | "LinkedIn" | "Facebook" | "Email";
