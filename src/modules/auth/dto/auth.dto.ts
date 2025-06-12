import { IsNotEmpty, IsString } from 'class-validator'

export class RegisterAuthDto {
  @IsString()
  @IsNotEmpty()
  phone_number: string
  @IsString()
  @IsNotEmpty()
  password: string
}
