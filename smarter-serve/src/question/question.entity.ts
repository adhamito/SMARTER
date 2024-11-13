import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Game } from '../game/game.entity';
import { Answer } from '../answer/answer.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Game, (game) => game.questions)
  game: Game;
  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];
}
