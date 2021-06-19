import { Module } from '@nestjs/common';
import { ProxyEntryController } from './proxy-entry.controller';

@Module({
  controllers: [ProxyEntryController],
  providers: [],
})
export class ProxyEntryModule {}
