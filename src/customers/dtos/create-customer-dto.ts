import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumberString, IsString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./create-address-dto";
import { Type } from "class-transformer";

export class CreateCustomerDto {
    @IsNotEmpty()
    @IsNumberString()
    id: number;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    createdAt: string;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto;
}