import { Test, TestingModule } from '@nestjs/testing';
import { SomethingsService } from './somethings.service';

describe('SomethingsService', () => {
  let service: SomethingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SomethingsService],
    }).compile();

    service = module.get<SomethingsService>(SomethingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch a something by its id', () => {
    const something = service.findById(1);
    expect(something.id).toEqual(1);
  });
});
