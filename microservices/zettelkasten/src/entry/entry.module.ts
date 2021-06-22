import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { EntryController } from './entry.controller';
import { Entry, EntrySchema } from './entry.schema';
import { EntryService } from './entry.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Entry.name, schema: EntrySchema }]),
    ClientsModule.register([
      {
        name: 'ZETTELKASTEN_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'entry',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule {}
