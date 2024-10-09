import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersControllerController } from './controllers/customers-controller/customers-controller.controller';
import { CustomersServiceService } from './services/customers-service/customers-service.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer-middleware';
@Module({
  controllers: [CustomersControllerController],
  providers: [CustomersServiceService]
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ValidateCustomerMiddleware).forRoutes(//CustomersControllerController
    //   {
    //     path: 'customers/:1',
    //     method: RequestMethod.GET
    //   }
    // )
    consumer.apply(ValidateCustomerMiddleware).exclude(
      {
        path: 'customers/:id',
        method: RequestMethod.GET
      }
    ).forRoutes(CustomersControllerController)
  }
}
