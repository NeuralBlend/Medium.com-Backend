/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ApiService } from "../api.service";
import { ApiCreateInput } from "./ApiCreateInput";
import { Api } from "./Api";
import { Post } from "../../post/base/Post";
import { ApiFindManyArgs } from "./ApiFindManyArgs";
import { ApiWhereUniqueInput } from "./ApiWhereUniqueInput";
import { ApiUpdateInput } from "./ApiUpdateInput";

export class ApiControllerBase {
  constructor(protected readonly service: ApiService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Api })
  async createApi(@common.Body() data: ApiCreateInput): Promise<Api> {
    return await this.service.createApi({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        authRequired: true,
        name: true,
        endpoint: true,
        method: true,
        description: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Api] })
  @ApiNestedQuery(ApiFindManyArgs)
  async apis(@common.Req() request: Request): Promise<Api[]> {
    const args = plainToClass(ApiFindManyArgs, request.query);
    return this.service.apis({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        authRequired: true,
        name: true,
        endpoint: true,
        method: true,
        description: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Api })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async api(@common.Param() params: ApiWhereUniqueInput): Promise<Api | null> {
    const result = await this.service.api({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        authRequired: true,
        name: true,
        endpoint: true,
        method: true,
        description: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Api })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateApi(
    @common.Param() params: ApiWhereUniqueInput,
    @common.Body() data: ApiUpdateInput
  ): Promise<Api | null> {
    try {
      return await this.service.updateApi({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          authRequired: true,
          name: true,
          endpoint: true,
          method: true,
          description: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Api })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteApi(
    @common.Param() params: ApiWhereUniqueInput
  ): Promise<Api | null> {
    try {
      return await this.service.deleteApi({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          authRequired: true,
          name: true,
          endpoint: true,
          method: true,
          description: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
