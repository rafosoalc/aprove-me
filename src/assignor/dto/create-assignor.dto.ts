import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator"

export class CreateAssignorDto {
   
    @IsNotEmpty({message:'O campo document é obrigatório!'})
    @IsString({message:'O campo document deve ser um texto!'})
    @MaxLength(30,{message:'O campo document deve ter no máximo 30 caracteres'})
    document:string

    @IsNotEmpty({message:'O campo email é obrigatório!'})
    @IsEmail()
    @MaxLength(140,{message:'O campo email deve ter no máximo 140 caracteres'})
    email:string

    @IsNotEmpty({message:'O campo phone é obrigatório!'})
    @IsString({message:'O campo phone deve ser um texto!'})
    @MaxLength(20,{message:'O phone document deve ter no máximo 20 caracteres'})
    phone:string

    @IsNotEmpty({message:'O campo name é obrigatório!'})
    @IsString({message:'O campo name deve ser um texto!'})
    @MaxLength(140,{message:'O campo name deve ter no máximo 140 caracteres'})
    name:string
}
