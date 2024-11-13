import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './score.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private readonly scoreRepository: Repository<Score>,
  ) {}

  async create(scoreData: Partial<Score>): Promise<Score> {
    const score = this.scoreRepository.create(scoreData);
    return await this.scoreRepository.save(score);
  }
}
