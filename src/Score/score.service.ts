import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Score, ScoreDocument } from '../schema/score.schema';
import { CreateScoreDto } from '../dto/create-score-dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class ScoreService {
  constructor(@InjectModel(Score.name) private scoreModel: Model<ScoreDocument>) {}

  async update(createScoreDto: CreateScoreDto) {
    const userid = new ObjectId("623f326faa416d1c293bac40");
    const score = await this.scoreModel.findOne({id: userid });
    score.Score = createScoreDto.Score;
    var Mention = ["Good","Great","Perfect","Impressive","Excellent","Incredible","Champion","Beautiful","Gorgeous","Wonderful","Awesome"];
    var randMention = Mention[Math.floor(Math.random() * Mention.length)];
    score.Mention = randMention;
    
    return score.save();
  }

  async findAll() {
    return this.scoreModel.find().exec();
  }
}
