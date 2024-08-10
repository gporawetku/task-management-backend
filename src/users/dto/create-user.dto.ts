import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsOptional()
  readonly password: string;
}
