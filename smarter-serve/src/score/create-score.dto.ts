import { IsInt } from 'class-validator';

export class CreateScoreDto {
  @IsInt()
  points: number;

  @IsInt()
  userId: number; // Foreign key to user

  @IsInt()
  gameId: number; // Foreign key to game
}
