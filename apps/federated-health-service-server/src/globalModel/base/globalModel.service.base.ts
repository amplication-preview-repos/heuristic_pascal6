/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, GlobalModel as PrismaGlobalModel } from "@prisma/client";

export class GlobalModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GlobalModelCountArgs, "select">
  ): Promise<number> {
    return this.prisma.globalModel.count(args);
  }

  async globalModels(
    args: Prisma.GlobalModelFindManyArgs
  ): Promise<PrismaGlobalModel[]> {
    return this.prisma.globalModel.findMany(args);
  }
  async globalModel(
    args: Prisma.GlobalModelFindUniqueArgs
  ): Promise<PrismaGlobalModel | null> {
    return this.prisma.globalModel.findUnique(args);
  }
  async createGlobalModel(
    args: Prisma.GlobalModelCreateArgs
  ): Promise<PrismaGlobalModel> {
    return this.prisma.globalModel.create(args);
  }
  async updateGlobalModel(
    args: Prisma.GlobalModelUpdateArgs
  ): Promise<PrismaGlobalModel> {
    return this.prisma.globalModel.update(args);
  }
  async deleteGlobalModel(
    args: Prisma.GlobalModelDeleteArgs
  ): Promise<PrismaGlobalModel> {
    return this.prisma.globalModel.delete(args);
  }
}
