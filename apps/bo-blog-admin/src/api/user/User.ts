import { JsonValue } from "type-fest";
import { Api } from "../api/Api";
import { Comment } from "../comment/Comment";
import { Post } from "../post/Post";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  apis?: Array<Api>;
  comments?: Array<Comment>;
  posts?: Array<Post>;
};
