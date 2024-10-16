import { IsNotEmpty } from "class-validator";

export class CreateAddressDto {
    @IsNotEmpty()
    line1: string;

    @IsNotEmpty()
    line2: string;

    @IsNotEmpty()
    zip: number;
}