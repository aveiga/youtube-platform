import { Test, TestingModule } from '@nestjs/testing';
import { ProxyEntryController } from './proxy-entry.controller';
import { ProxyEntryService } from './proxy-entry.service';

describe('ProxyEntryController', () => {
  let controller: ProxyEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProxyEntryController],
      providers: [ProxyEntryService],
    }).compile();

    controller = module.get<ProxyEntryController>(ProxyEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
