import { Test, TestingModule } from '@nestjs/testing';
import { BookerController } from './booker.controller';

describe('BookerController', () => {
  let controller: BookerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookerController],
    }).compile();

    controller = module.get<BookerController>(BookerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
