import { Test, TestingModule } from '@nestjs/testing';
import { Something } from './models/something.model';
import { SomethingsResolver } from './somethings.resolver';
import { SomethingsService } from './somethings.service';

const somethingsServiceMock = {
  findById: jest.fn((id: number): Something => {
    return { id, name: 'Mocked Something' };
  }),
};

describe('SomethingsResolver', () => {
  let resolver: SomethingsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SomethingsResolver,
        { provide: SomethingsService, useValue: somethingsServiceMock },
      ],
    }).compile();

    resolver = module.get<SomethingsResolver>(SomethingsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should query a something by its id', () => {
    const result = resolver.getSomething(1);
    expect(result.id).toEqual(1);
  });

  it('should resolve a reference', () => {
    const result = resolver.resolveReference({
      __typename: 'Something',
      id: 1,
    });
    expect(result.id).toEqual(1);
  });
});
