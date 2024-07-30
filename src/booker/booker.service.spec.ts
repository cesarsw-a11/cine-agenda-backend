import { Test, TestingModule } from '@nestjs/testing';
import { BookerService } from './booker.service';

describe('BookerService', () => {
  let service: BookerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookerService],
    }).compile();

    service = module.get<BookerService>(BookerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
