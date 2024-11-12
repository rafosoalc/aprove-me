import { Injectable } from '@nestjs/common';
import { CreatePayableDto } from './dto/create-payable.dto';
import { UpdatePayableDto } from './dto/update-payable.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Payable } from './entities/payable.entity';
import { Model } from 'mongoose';

@Injectable()
export class PayableService {
  constructor(
    @InjectModel("Payable")
    private readonly assignorModel: Model<Payable>

  ) { }

  create(createPayableDto: CreatePayableDto) {
    const assignor = new this.assignorModel(createPayableDto)
    return assignor.save()
  }

  async findAll() {
    const assignors = await this.assignorModel.find()
    return assignors
  }

  async findOne(id: string) {
    const assignor = await this.assignorModel.findOne({ _id: id })
    return assignor
  }


  async update(id: string, updatePayableDto: UpdatePayableDto) {
    const assignor = await this.assignorModel.findOneAndUpdate({ _id: id }, updatePayableDto, { new: true })
    return assignor
  }

  async remove(id: string) {
    const assignor = await this.assignorModel.findOneAndDelete({_id:id})
    return assignor
  }
}
