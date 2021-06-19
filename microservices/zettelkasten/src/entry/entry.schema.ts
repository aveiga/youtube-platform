import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type EntryDocument = Entry & mongoose.Document;

@Schema()
export class Entry {
  @Prop()
  title: string;

  @Prop()
  tags: string[];

  @Prop()
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Entry' }] })
  links: Entry[];
}

export const EntrySchema = SchemaFactory.createForClass(Entry);
