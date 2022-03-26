import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusModule } from './Status/status.module';
import { ScoreModule } from './Score/score.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://backend:VQfKYfFePGMdMSdd@cluster0.39z7o.mongodb.net/homecenter'), StatusModule, ScoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
