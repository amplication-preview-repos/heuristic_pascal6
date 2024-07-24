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
import { LocalModel } from "./LocalModel";
import { LocalModelCountArgs } from "./LocalModelCountArgs";
import { LocalModelFindManyArgs } from "./LocalModelFindManyArgs";
import { LocalModelFindUniqueArgs } from "./LocalModelFindUniqueArgs";
import { CreateLocalModelArgs } from "./CreateLocalModelArgs";
import { UpdateLocalModelArgs } from "./UpdateLocalModelArgs";
import { DeleteLocalModelArgs } from "./DeleteLocalModelArgs";
import { TrainingTaskFindManyArgs } from "../../trainingTask/base/TrainingTaskFindManyArgs";
import { TrainingTask } from "../../trainingTask/base/TrainingTask";
import { Hospital } from "../../hospital/base/Hospital";
import { LocalModelService } from "../localModel.service";
@graphql.Resolver(() => LocalModel)
export class LocalModelResolverBase {
  constructor(protected readonly service: LocalModelService) {}

  async _localModelsMeta(
    @graphql.Args() args: LocalModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LocalModel])
  async localModels(
    @graphql.Args() args: LocalModelFindManyArgs
  ): Promise<LocalModel[]> {
    return this.service.localModels(args);
  }

  @graphql.Query(() => LocalModel, { nullable: true })
  async localModel(
    @graphql.Args() args: LocalModelFindUniqueArgs
  ): Promise<LocalModel | null> {
    const result = await this.service.localModel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LocalModel)
  async createLocalModel(
    @graphql.Args() args: CreateLocalModelArgs
  ): Promise<LocalModel> {
    return await this.service.createLocalModel({
      ...args,
      data: {
        ...args.data,

        hospital: args.data.hospital
          ? {
              connect: args.data.hospital,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => LocalModel)
  async updateLocalModel(
    @graphql.Args() args: UpdateLocalModelArgs
  ): Promise<LocalModel | null> {
    try {
      return await this.service.updateLocalModel({
        ...args,
        data: {
          ...args.data,

          hospital: args.data.hospital
            ? {
                connect: args.data.hospital,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => LocalModel)
  async deleteLocalModel(
    @graphql.Args() args: DeleteLocalModelArgs
  ): Promise<LocalModel | null> {
    try {
      return await this.service.deleteLocalModel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [TrainingTask], { name: "trainingTasks" })
  async findTrainingTasks(
    @graphql.Parent() parent: LocalModel,
    @graphql.Args() args: TrainingTaskFindManyArgs
  ): Promise<TrainingTask[]> {
    const results = await this.service.findTrainingTasks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Hospital, {
    nullable: true,
    name: "hospital",
  })
  async getHospital(
    @graphql.Parent() parent: LocalModel
  ): Promise<Hospital | null> {
    const result = await this.service.getHospital(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
