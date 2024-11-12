import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  
  constructor(
    @InjectModel("User")
    private readonly userModel: Model<User>

  ) { }

  create(createAssignorDto: CreateUserDto) {
    const assignor = new this.userModel(createAssignorDto)
    return assignor.save()
  }

  async findAll() {
    const assignors = await this.userModel.find()
    return assignors
  }

  async findOne(id: string) {
    const assignor = await this.userModel.findOne({ _id: id })
    return assignor
  }


  async update(id: string, updateAssignorDto: UpdateUserDto) {
    const assignor = await this.userModel.findOneAndUpdate({ _id: id }, updateAssignorDto, { new: true })
    return assignor
  }

  async remove(id: string) {
    const assignor = await this.userModel.findOneAndDelete({_id:id})
    return assignor
  }
 
}
