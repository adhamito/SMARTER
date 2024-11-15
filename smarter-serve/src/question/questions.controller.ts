import { Controller, Post, Body } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './create-question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }
}
