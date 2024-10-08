import { Module } from '@nestjs/common';
import { CustomersControllerController } from './controllers/customers-controller/customers-controller.controller';
import { CustomersServiceService } from './services/customers-service/customers-service.service';
@Module({
  controllers: [CustomersControllerController],
  providers: [CustomersServiceService]
})
export class CustomersModule {}
