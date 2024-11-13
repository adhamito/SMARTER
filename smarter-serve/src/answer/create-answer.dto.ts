import { IsString, IsInt } from 'class-validator';

export class CreateAnswerDto {
  @IsString()
  content: string;

  @IsInt()
  userId: number; // Foreign key to user

  @IsInt()
  questionId: number; // Foreign key to question
}
