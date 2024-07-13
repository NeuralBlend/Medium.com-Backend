import { InputJsonValue } from "../../types";
import { ApiUpdateManyWithoutUsersInput } from "./ApiUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  apis?: ApiUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
  posts?: PostUpdateManyWithoutUsersInput;
};
