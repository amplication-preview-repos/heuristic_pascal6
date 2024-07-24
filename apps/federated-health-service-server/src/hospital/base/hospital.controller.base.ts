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
import { HospitalService } from "../hospital.service";
import { HospitalCreateInput } from "./HospitalCreateInput";
import { Hospital } from "./Hospital";
import { HospitalFindManyArgs } from "./HospitalFindManyArgs";
import { HospitalWhereUniqueInput } from "./HospitalWhereUniqueInput";
import { HospitalUpdateInput } from "./HospitalUpdateInput";
import { LocalModelFindManyArgs } from "../../localModel/base/LocalModelFindManyArgs";
import { LocalModel } from "../../localModel/base/LocalModel";
import { LocalModelWhereUniqueInput } from "../../localModel/base/LocalModelWhereUniqueInput";

export class HospitalControllerBase {
  constructor(protected readonly service: HospitalService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Hospital })
  async createHospital(
    @common.Body() data: HospitalCreateInput
  ): Promise<Hospital> {
    return await this.service.createHospital({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        location: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Hospital] })
  @ApiNestedQuery(HospitalFindManyArgs)
  async hospitals(@common.Req() request: Request): Promise<Hospital[]> {
    const args = plainToClass(HospitalFindManyArgs, request.query);
    return this.service.hospitals({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        location: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Hospital })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async hospital(
    @common.Param() params: HospitalWhereUniqueInput
  ): Promise<Hospital | null> {
    const result = await this.service.hospital({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        location: true,
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
  @swagger.ApiOkResponse({ type: Hospital })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateHospital(
    @common.Param() params: HospitalWhereUniqueInput,
    @common.Body() data: HospitalUpdateInput
  ): Promise<Hospital | null> {
    try {
      return await this.service.updateHospital({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          location: true,
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
  @swagger.ApiOkResponse({ type: Hospital })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteHospital(
    @common.Param() params: HospitalWhereUniqueInput
  ): Promise<Hospital | null> {
    try {
      return await this.service.deleteHospital({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          location: true,
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

  @common.Get("/:id/localModels")
  @ApiNestedQuery(LocalModelFindManyArgs)
  async findLocalModels(
    @common.Req() request: Request,
    @common.Param() params: HospitalWhereUniqueInput
  ): Promise<LocalModel[]> {
    const query = plainToClass(LocalModelFindManyArgs, request.query);
    const results = await this.service.findLocalModels(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        trainingAccuracy: true,
        modelUrl: true,

        hospital: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/localModels")
  async connectLocalModels(
    @common.Param() params: HospitalWhereUniqueInput,
    @common.Body() body: LocalModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      localModels: {
        connect: body,
      },
    };
    await this.service.updateHospital({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/localModels")
  async updateLocalModels(
    @common.Param() params: HospitalWhereUniqueInput,
    @common.Body() body: LocalModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      localModels: {
        set: body,
      },
    };
    await this.service.updateHospital({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/localModels")
  async disconnectLocalModels(
    @common.Param() params: HospitalWhereUniqueInput,
    @common.Body() body: LocalModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      localModels: {
        disconnect: body,
      },
    };
    await this.service.updateHospital({
      where: params,
      data,
      select: { id: true },
    });
  }
}
