import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Entry } from './entry.schema';
import { EntryService } from './entry.service';

@Controller('entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Get()
  async getEntries(): Promise<Entry[]> {
    return this.entryService.getEntries();
  }

  @Post()
  async postEntry(@Body() entry: Entry): Promise<Entry> {
    console.log(entry);
    return this.entryService.postEntry(entry);
  }

  @Put(':id')
  async putEntry(
    @Param('id') id: string,
    @Body() entry: Entry,
  ): Promise<Entry> {
    return this.entryService.putEntry(id, entry);
  }

  @Delete(':id')
  async deleteEntry(@Param('id') id: string) {
    return this.entryService.deleteEntry(id);
  }
}
