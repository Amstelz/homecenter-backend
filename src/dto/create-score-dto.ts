import { ObjectIdColumn } from 'typeorm'; 
import { ObjectId } from 'mongodb';

export class CreateScoreDto {
    @ObjectIdColumn()
    id?: ObjectId;
    Score:number;

  
  }