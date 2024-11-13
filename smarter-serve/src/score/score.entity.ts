import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Game } from '../game/game.entity';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  points: number;

  @ManyToOne(() => User, (user) => user.scores)
  user: User;

  @ManyToOne(() => Game, (game) => game.scores)
  game: Game;
}
