import { Controller, Post, Body, Get } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './create-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  async create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Get()
  async findAll() {
    return this.gamesService.findAll();
  }
}
