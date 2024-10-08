import { Test, TestingModule } from '@nestjs/testing';
import { CustomersControllerController } from './customers-controller.controller';

describe('CustomersControllerController', () => {
  let controller: CustomersControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersControllerController],
    }).compile();

    controller = module.get<CustomersControllerController>(CustomersControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
