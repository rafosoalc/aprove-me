import { Document } from "mongoose";

export class Payable extends Document {
    value: number
    emissionDate: string
    assignor: string
}
