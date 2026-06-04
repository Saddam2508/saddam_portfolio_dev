export type AppRole = "admin" | "user";

export interface AppUser {
  id: string;
  email: string;
  name: string;
  image?: string | null;
  emailVerified: boolean;
  role?: AppRole;
}

export interface AppSession {
  user: AppUser;
}