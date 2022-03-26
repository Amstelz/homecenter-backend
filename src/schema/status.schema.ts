import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatusDocument = Status & Document;

@Schema()
export class Status {
  @Prop()
  isPlaying: number;
  @Prop()
  isStopping: number;
  @Prop()
  SongName:string;
}

export const StatusSchema = SchemaFactory.createForClass(Status);