import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Status, StatusDocument } from '../schema/status.schema';
import { CreateStatusDto } from '../dto/create-status.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status.name) private statusModel: Model<StatusDocument>) {}

  async update_songname(createStatusDto: CreateStatusDto) {
    const userid = new ObjectId("623f667e0199b92e29550da5");
    const status = await this.statusModel.findOne({id: userid });
    status.isPlaying = 1;
    status.SongName = createStatusDto.SongName;
    status.isFinished = 0;
    return status.save();
  }

  async play() {
    const userid = new ObjectId("623f196b74a7ab2e5d25b2ea");
    const status = await this.statusModel.findOne({id: userid });
    status.isPlaying = 1;
    status.isFinished = 0;
    
    return status.save();
  }

  async pause() {
    const userid = new ObjectId("623f196b74a7ab2e5d25b2ea");
    const status = await this.statusModel.findOne({id: userid });
    status.isPlaying = 0;
    status.isFinished = 0;
    
    return status.save();
  }

  async update_stopping() {
    const userid = new ObjectId("623f196b74a7ab2e5d25b2ea");
    const status = await this.statusModel.findOne({id: userid });
    status.isStopping = ~(status.isStopping - 2);
    status.isFinished = 0;
    
    return status.save();
  }

  async finish(createStatusDto: CreateStatusDto) {
    const userid = new ObjectId("623f196b74a7ab2e5d25b2ea");
    const status = await this.statusModel.findOne({id: userid });
    status.isFinished = createStatusDto.isFinished;
    
    return status.save();
  }

  async findAll(): Promise<Status[]> {
    return this.statusModel.find().exec();
  }

}
