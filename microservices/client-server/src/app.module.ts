import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyEntryModule } from './proxy-entry/proxy-entry.module';

@Module({
  imports: [ProxyEntryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
