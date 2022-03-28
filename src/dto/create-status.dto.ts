import { ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

export class CreateStatusDto {
    @ObjectIdColumn()
    id?: ObjectId;

    isPlaying:number;

    isStopping:number;

    isFinished:number;

    SongName:string;
  
  }