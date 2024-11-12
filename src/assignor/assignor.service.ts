import { Injectable } from '@nestjs/common';
import { CreateAssignorDto } from './dto/create-assignor.dto';
import { UpdateAssignorDto } from './dto/update-assignor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Assignor } from './entities/assignor.entity';

@Injectable()
export class AssignorService {

  constructor(
    @InjectModel("Assignor")
    private readonly assignorModel: Model<Assignor>

  ) { }

  create(createAssignorDto: CreateAssignorDto) {
    const assignor = new this.assignorModel(createAssignorDto)
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


  async update(id: string, updateAssignorDto: UpdateAssignorDto) {
    const assignor = await this.assignorModel.findOneAndUpdate({ _id: id }, updateAssignorDto, { new: true })
    return assignor
  }

  async remove(id: string) {
    const assignor = await this.assignorModel.findOneAndDelete({_id:id})
    return assignor
  }
}
