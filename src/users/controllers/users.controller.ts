import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Inject,
    Param,
    ParseIntPipe,
    Post,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { serialize } from '../types/User';
import { CreateUserDto } from '../dtos/create-user-dto';

@Controller('users')
export class UsersController {

    constructor(@Inject('USER_SERVICE') private readonly service: UsersService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUsers() {
        return this.service.getUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':id')
    getUserByName(@Param('id', ParseIntPipe) id: number) {
        const result = this.service.getUserByName(id)
        if (result) return result
        // new serialize(result);
        else throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
    }


    @Post('/create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() dto: CreateUserDto) {
        this.service.createUser(dto)
    }
}