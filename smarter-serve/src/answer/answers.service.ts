import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from './answer.entity';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  async create(answerData: Partial<Answer>): Promise<Answer> {
    const answer = this.answerRepository.create(answerData);
    return await this.answerRepository.save(answer);
  }
}
