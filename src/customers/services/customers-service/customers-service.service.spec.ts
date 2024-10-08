import { Test, TestingModule } from '@nestjs/testing';
import { CustomersServiceService } from './customers-service.service';

describe('CustomersServiceService', () => {
  let service: CustomersServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersServiceService],
    }).compile();

    service = module.get<CustomersServiceService>(CustomersServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
