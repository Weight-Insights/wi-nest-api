import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMemberDto {
  @IsString()
  @IsOptional()
  gameId: string;

  @IsNumber()
  @IsOptional()
  weightGoal: number;

  @IsString()
  @IsOptional()
  vacationStartDate: string;

  @IsString()
  @IsOptional()
  status: string;
}