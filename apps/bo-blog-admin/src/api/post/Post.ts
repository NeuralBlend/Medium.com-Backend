import { User } from "../user/User";
import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  publishedDate: Date | null;
  user?: User | null;
  category?: Category | null;
  comments?: Array<Comment>;
};
