import { User } from "../user/User";

export type Api = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  authRequired: boolean | null;
  name: string | null;
  endpoint: string | null;
  method?: "Option1" | null;
  description: string | null;
  user?: User | null;
};
