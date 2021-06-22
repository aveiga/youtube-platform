import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type HistoryEntryDocument = HistoryEntry & mongoose.Document;

@Schema()
export class HistoryEntry {
  @Prop()
  eventType: string;

  @Prop(raw({}))
  eventData: Object;
}

export const HistoryEntrySchema = SchemaFactory.createForClass(HistoryEntry);
