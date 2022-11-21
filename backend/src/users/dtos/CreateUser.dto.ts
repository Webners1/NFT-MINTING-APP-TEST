import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    wallet: string;

    @IsNotEmpty()
    tokenId: number;

    @IsNotEmpty()
    metadata: string;
}