import { Document } from "mongoose";

export class Assignor extends Document {
    document: string
    email: string
    phone: string
    name:string
}
