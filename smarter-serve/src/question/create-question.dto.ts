import { IsString, IsInt } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  content: string;

  @IsInt()
  gameId: number;
}
