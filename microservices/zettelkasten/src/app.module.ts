import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EntryModule } from './entry/entry.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/zettelkasten'),
    EntryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
