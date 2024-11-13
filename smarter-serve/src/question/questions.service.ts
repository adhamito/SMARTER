import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async create(questionData: Partial<Question>): Promise<Question> {
    const question = this.questionRepository.create(questionData);
    return await this.questionRepository.save(question);
  }
}
