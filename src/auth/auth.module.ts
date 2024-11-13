import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { PayableModule } from 'src/payable/payable.module';
import { AssignorModule } from 'src/assignor/assignor.module';

@Module({
  imports: [
    JwtModule.register(
      {
        secret: String(process.env.SECRET_TOKEN),
        signOptions: {
          expiresIn: "9h"
        }

      }
    ),
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      }
    ]),
    // forwardRef(() => UserModule),
    // forwardRef(() => PayableModule),
    // forwardRef(() => AssignorModule)
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService]
})
export class AuthModule { }
