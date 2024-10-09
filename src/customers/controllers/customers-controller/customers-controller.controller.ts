import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/create-customer-dto';
import { CustomersServiceService } from 'src/customers/services/customers-service/customers-service.service';

@Controller('customers')
export class CustomersControllerController {
    constructor(private service: CustomersServiceService) { }



    @Get(':id')
    getCustomer(@Param('id', ParseIntPipe) id: number) {
        const result = this.service.findCustomer(id)
        if (result) return result;
        else throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST)
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() dto: CreateCustomerDto) {
        this.service.createCustomer(dto)
    }
}
