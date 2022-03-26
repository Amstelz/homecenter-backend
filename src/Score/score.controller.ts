import { Controller, Get , Post , Body} from '@nestjs/common';
import { ScoreService } from './score.service';
import { Score, ScoreDocument } from '../schema/score.schema';
import { CreateScoreDto } from '../dto/create-score-dto';

@Controller("score")
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Get()
  findAll() {
      return this.scoreService.findAll();
  }
  @Post()
  update(@Body() createScoreDto: CreateScoreDto)  {
    return this.scoreService.update(createScoreDto);
  }

}