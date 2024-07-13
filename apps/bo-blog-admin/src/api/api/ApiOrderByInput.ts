import { SortOrder } from "../../util/SortOrder";

export type ApiOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authRequired?: SortOrder;
  name?: SortOrder;
  endpoint?: SortOrder;
  method?: SortOrder;
  description?: SortOrder;
  userId?: SortOrder;
};
