import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApiListRelationFilter } from "../api/ApiListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  apis?: ApiListRelationFilter;
  comments?: CommentListRelationFilter;
  posts?: PostListRelationFilter;
};
