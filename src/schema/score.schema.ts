import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScoreDocument = Score & Document;

@Schema()
export class Score {
  @Prop()
  Score: number;
  @Prop()
  Mention: string;

}

export const ScoreSchema = SchemaFactory.createForClass(Score);