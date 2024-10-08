import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { CustomersServiceService } from 'src/customers/services/customers-service/customers-service.service';

@Controller('customers')
export class CustomersControllerController {
    constructor(private readonly CustomersServiceService: CustomersServiceService) { }
    @Get(':id')
    getCustomer(@Param('id', ParseIntPipe) id: number) {
        const result =  this.CustomersServiceService.findCustomer(id)
        if(result) return result;
        else throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST)
    }
}
