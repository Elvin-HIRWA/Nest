import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { Request, Response } from 'express';

describe('PaymentController', () => {
  let controller: PaymentController;
  const requestMock = {
    query: {}
  } as unknown as Request

  const statusResponseMock = {
    send: jest.fn((x) => x)
  };

  const responseMock = {
    status: jest.fn((x) => statusResponseMock),
    send: jest.fn((x) => x)
  } as unknown as Response

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
    }).compile();

    controller = module.get<PaymentController>(PaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('get payment', () => {
    it('should return 400', () => {
      controller.getPayment(requestMock, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(400);
      expect(statusResponseMock.send).toHaveBeenCalledWith({
        msg: 'Missing count or page query parameter'
      })
    })
    it('should return 200', () => {
      requestMock.query = {
        count: '10',
        page: '1'
      }

      controller.getPayment(requestMock, responseMock)
      expect(responseMock.send).toHaveBeenCalledWith(200);
    })
  })
});
