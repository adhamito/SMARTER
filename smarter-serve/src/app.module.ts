import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GamesModule } from './game/games.module';
import { QuestionsModule } from './question/questions.module';
import { AnswersModule } from './answer/answers.module';
import { ScoresModule } from './score/scores.module';
import { User } from './users/user.entity';
import { Game } from './game/game.entity';
import { Question } from './question/question.entity';
import { Answer } from './answer/answer.entity';
import { Score } from './score/score.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'smarter_game',
      entities: [User, Game, Question, Answer, Score],
      synchronize: true, // You can set to false in production
    }),
    UsersModule,
    GamesModule,
    QuestionsModule,
    AnswersModule,
    ScoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
