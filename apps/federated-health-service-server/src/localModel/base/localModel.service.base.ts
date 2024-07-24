/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  LocalModel as PrismaLocalModel,
  TrainingTask as PrismaTrainingTask,
  Hospital as PrismaHospital,
} from "@prisma/client";

export class LocalModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LocalModelCountArgs, "select">
  ): Promise<number> {
    return this.prisma.localModel.count(args);
  }

  async localModels(
    args: Prisma.LocalModelFindManyArgs
  ): Promise<PrismaLocalModel[]> {
    return this.prisma.localModel.findMany(args);
  }
  async localModel(
    args: Prisma.LocalModelFindUniqueArgs
  ): Promise<PrismaLocalModel | null> {
    return this.prisma.localModel.findUnique(args);
  }
  async createLocalModel(
    args: Prisma.LocalModelCreateArgs
  ): Promise<PrismaLocalModel> {
    return this.prisma.localModel.create(args);
  }
  async updateLocalModel(
    args: Prisma.LocalModelUpdateArgs
  ): Promise<PrismaLocalModel> {
    return this.prisma.localModel.update(args);
  }
  async deleteLocalModel(
    args: Prisma.LocalModelDeleteArgs
  ): Promise<PrismaLocalModel> {
    return this.prisma.localModel.delete(args);
  }

  async findTrainingTasks(
    parentId: string,
    args: Prisma.TrainingTaskFindManyArgs
  ): Promise<PrismaTrainingTask[]> {
    return this.prisma.localModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .trainingTasks(args);
  }

  async getHospital(parentId: string): Promise<PrismaHospital | null> {
    return this.prisma.localModel
      .findUnique({
        where: { id: parentId },
      })
      .hospital();
  }
}
