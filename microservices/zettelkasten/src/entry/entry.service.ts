import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Entry, EntryDocument } from './entry.schema';

@Injectable()
export class EntryService {
  constructor(
    @InjectModel(Entry.name) private entryModel: Model<EntryDocument>,
    @Inject('ZETTELKASTEN_SERVICE') private client: ClientProxy,
  ) {}

  async getEntries(): Promise<Entry[]> {
    return this.entryModel.find().exec();
  }

  async postEntry(entry: Entry): Promise<Entry> {
    const createdEntry = new this.entryModel(entry);
    return createdEntry.save().then((e: Entry) => {
      this.client.emit<Entry>('', {
        eventType: 'create',
        eventData: entry,
      });

      return entry;
    });
  }

  async putEntry(id: string, entry: Entry): Promise<Entry> {
    this.client.emit<Entry>('', {
      eventType: 'update',
      eventData: entry,
    });
    return this.entryModel.findByIdAndUpdate(id, entry);
  }

  async deleteEntry(id: string): Promise<Entry> {
    this.client.emit<Entry>('', {
      eventType: 'delete',
      eventData: id,
    });
    return this.entryModel.findByIdAndDelete(id);
  }
}
