import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
  post?: PostWhereUniqueInput | null;
};
