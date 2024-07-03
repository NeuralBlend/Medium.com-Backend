/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Blog } from "./Blog";
import { BlogCountArgs } from "./BlogCountArgs";
import { BlogFindManyArgs } from "./BlogFindManyArgs";
import { BlogFindUniqueArgs } from "./BlogFindUniqueArgs";
import { DeleteBlogArgs } from "./DeleteBlogArgs";
import { BlogService } from "../blog.service";
@graphql.Resolver(() => Blog)
export class BlogResolverBase {
  constructor(protected readonly service: BlogService) {}

  async _blogsMeta(
    @graphql.Args() args: BlogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Blog])
  async blogs(@graphql.Args() args: BlogFindManyArgs): Promise<Blog[]> {
    return this.service.blogs(args);
  }

  @graphql.Query(() => Blog, { nullable: true })
  async blog(@graphql.Args() args: BlogFindUniqueArgs): Promise<Blog | null> {
    const result = await this.service.blog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Blog)
  async deleteBlog(@graphql.Args() args: DeleteBlogArgs): Promise<Blog | null> {
    try {
      return await this.service.deleteBlog(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
