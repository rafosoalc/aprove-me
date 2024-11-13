import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class LoginAuthDto {

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
