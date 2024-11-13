import { Controller, Post, Body } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './create-answer.dto';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post()
  async create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answersService.create(createAnswerDto);
  }
}
