import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EntryController } from './entry.controller';
import { Entry, EntrySchema } from './entry.schema';
import { EntryService } from './entry.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Entry.name, schema: EntrySchema }]),
  ],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule {}
