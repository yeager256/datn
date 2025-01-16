import { ReactElement } from "react";

export interface IUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
  is_blocked: number;
  failed_attempts: number;
  blocked_until: Date;
  email_verified_at: Date;
  created_at: Date;
  updated_at: string;
  roles: string;
}
export interface RouteType {
  path: string;
  element: ReactElement;
  middleware?: ("auth" | "seller"|string)[];
  children?: RouteType[];
}