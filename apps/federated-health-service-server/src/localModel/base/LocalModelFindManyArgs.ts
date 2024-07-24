/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalModelWhereInput } from "./LocalModelWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LocalModelOrderByInput } from "./LocalModelOrderByInput";

@ArgsType()
class LocalModelFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LocalModelWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LocalModelWhereInput, { nullable: true })
  @Type(() => LocalModelWhereInput)
  where?: LocalModelWhereInput;

  @ApiProperty({
    required: false,
    type: [LocalModelOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LocalModelOrderByInput], { nullable: true })
  @Type(() => LocalModelOrderByInput)
  orderBy?: Array<LocalModelOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LocalModelFindManyArgs as LocalModelFindManyArgs };
