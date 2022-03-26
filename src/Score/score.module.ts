import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';
import { Score, ScoreSchema } from '../schema/score.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Score.name, schema: ScoreSchema }])],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class ScoreModule {}