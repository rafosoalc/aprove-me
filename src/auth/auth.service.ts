import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('User')
    private readonly userModel: Model<User>

  ) { }

  async login(loginAuthDto: LoginAuthDto) {

    const user = await this.userModel.findOne({ email: loginAuthDto.email })
    if (!user) {
      throw new HttpException("Verifique suas credenciais", 403)
    }

    let matchPassword = await this.checkPassword(loginAuthDto.password, user)
    if (!matchPassword) {
      throw new HttpException("Verifique suas credenciais", 403)
    }
    const token = await this.buildToken(user)
    return { name: user.name, access_token: token }
    // return JSON.stringify(loginAuthDto)
  }

  private async checkPassword(password: string, user: any): Promise<Boolean> {
    const match = await bcrypt.compare(password, user.password)
    try {
      if (match) {
        return match;
      }

    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas')
    }
  }

  async buildToken(user: any) {
    return this.jwtService.sign({
      sub: user._id,
      nome: user.name
    })
  }

  async verifyToken(token: string) {
    try {

      const dataUser= this.jwtService.verify(token)
      return dataUser

    } catch (error) {
      throw new BadRequestException(error)
    }

  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
