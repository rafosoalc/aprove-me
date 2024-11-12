import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {

    @IsNotEmpty({ message: 'O campo name é obrigatório!' })
    @IsString({ message: 'O campo name deve ser um texto!' })
    @MaxLength(100, { message: 'O campo name deve ter no máximo 100 caracteres' })
    name: string

    @IsNotEmpty({ message: 'O campo email é obrigatório!' })
    @IsEmail()
    @MaxLength(140, { message: 'O campo email deve ter no máximo 140 caracteres' })
    email: string

    @IsNotEmpty({ message: 'O campo password é obrigatório!' })
    @IsString({ message: 'O campo password deve ser um texto!' })
    @MinLength(6, { message: 'O password password deve ter no mínimo 6 caracteres' })
    @MaxLength(20, { message: 'O password password deve ter no máximo 20 caracteres' })
    password: string

}
