import { Controller, Get , Post , Body} from '@nestjs/common';
import { StatusService } from './status.service';
import { Status, StatusDocument } from '../schema/status.schema';
import { CreateStatusDto } from '../dto/create-status.dto';

@Controller("status")
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  findAll(): Promise<Status[]> {
      return this.statusService.findAll();
  }
  @Post("songname")
  update_songname(@Body() createStatusDto: CreateStatusDto)  {
    return this.statusService.update_songname(createStatusDto);
  }

  @Post("playing")
  update_playing()  {
    return this.statusService.update_playing();
  }

  @Post("stopping")
  update_stopping()  {
    return this.statusService.update_stopping();
  }

}