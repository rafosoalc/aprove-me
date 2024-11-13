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
    private readonly payableModel: Model<Payable>

  ) { }

  create(createPayableDto: CreatePayableDto) {
    const payable = new this.payableModel(createPayableDto)
    return payable.save()
  }

  async findAll() {
    const payables = await this.payableModel.find()
    return payables
  }

  async findOne(id: string) {
    const payable = await this.payableModel.findOne({ _id: id })
    return payable
  }

  async update(id: string, updatePayableDto: UpdatePayableDto) {
    const payable = await this.payableModel.findOneAndUpdate({ _id: id }, updatePayableDto, { new: true })
    return payable
  }

  async remove(id: string) {
    const payable = await this.payableModel.findOneAndDelete({ _id: id })
    return payable
  }
}
