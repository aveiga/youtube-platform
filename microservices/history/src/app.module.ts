import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryEntry, HistoryEntrySchema } from './entry.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/history'),
    MongooseModule.forFeature([
      { name: HistoryEntry.name, schema: HistoryEntrySchema },
    ]),
    ClientsModule.register([
      {
        name: 'HISTORY_SERVICE',
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
