import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiCreateInput = {
  authRequired?: boolean | null;
  name?: string | null;
  endpoint?: string | null;
  method?: "Option1" | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
