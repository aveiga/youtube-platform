import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HistoryEntry, HistoryEntryDocument } from './entry.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(HistoryEntry.name)
    private historyEntryModel: Model<HistoryEntryDocument>,
  ) {}
  persistHistoryEntry(message): Promise<HistoryEntry> {
    const createdEntry = new this.historyEntryModel(message);
    return createdEntry.save();
  }
}
