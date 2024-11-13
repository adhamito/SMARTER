import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Game } from '../game/game.entity';
import { Answer } from '../answer/answer.entity';
import { Score } from '../score/score.entity';
import { Role } from './role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Joueur,
  })
  role: Role;

  @OneToMany(() => Game, (game) => game.creator)
  createdGames: Game[];

  @OneToMany(() => Answer, (answer) => answer.user)
  answers: Answer[];

  @OneToMany(() => Score, (score) => score.user)
  scores: Score[];
}
