import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Question } from '../question/question.entity';
import { Score } from '../score/score.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.createdGames)
  creator: User;

  @OneToMany(() => Question, (question) => question.game)
  questions: Question[];

  @OneToMany(() => Score, (score) => score.game)
  scores: Score[];
}
