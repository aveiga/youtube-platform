import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Entry, EntryDocument } from './entry.schema';

@Injectable()
export class EntryService {
  constructor(
    @InjectModel(Entry.name) private entryModel: Model<EntryDocument>,
  ) {}

  async getEntries(): Promise<Entry[]> {
    return this.entryModel.find().exec();
  }

  async postEntry(entry: Entry): Promise<Entry> {
    const createdEntry = new this.entryModel(entry);
    return createdEntry.save();
  }

  async putEntry(id: string, entry: Entry): Promise<Entry> {
    return this.entryModel.findByIdAndUpdate(id, entry);
  }

  async deleteEntry(id: string): Promise<Entry> {
    return this.entryModel.findByIdAndDelete(id);
  }
}
