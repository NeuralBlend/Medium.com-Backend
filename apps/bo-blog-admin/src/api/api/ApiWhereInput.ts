import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiWhereInput = {
  id?: StringFilter;
  authRequired?: BooleanNullableFilter;
  name?: StringNullableFilter;
  endpoint?: StringNullableFilter;
  method?: "Option1";
  description?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
