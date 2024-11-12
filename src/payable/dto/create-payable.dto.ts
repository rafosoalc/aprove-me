import { IsDateString, IsMongoId, IsNotEmpty, IsNumber, IsUUID } from "class-validator"

export class CreatePayableDto {

    @IsNotEmpty({message:'O campo value é obrigatório!'})
    @IsNumber()
    value:number

    @IsNotEmpty({message:'O campo emissionDate é obrigatório!'})
    @IsDateString()
    emissionDate:string

    @IsNotEmpty({message:'O campo assignor é obrigatório!'})
    @IsMongoId()
    assignor:string

}
