import { ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

export class CreateStatusDto {
    @ObjectIdColumn()
    id?: ObjectId;

    isPlaying:number;

    isStopping:number;

    SongName:string;
  
  }