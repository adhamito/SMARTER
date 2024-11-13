import { Controller, Post, Body } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { CreateScoreDto } from './create-score.dto';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post()
  async create(@Body() createScoreDto: CreateScoreDto) {
    return this.scoresService.create(createScoreDto);
  }
}
