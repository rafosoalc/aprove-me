import { forwardRef, Module } from '@nestjs/common';
import { PayableService } from './payable.service';
import { PayableController } from './payable.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PayableSchema } from './schemas/payable.schema';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { Assignor } from 'src/assignor/entities/assignor.entity';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Payable',
      schema: PayableSchema,
    }
  ]),
  AuthModule
  // forwardRef(() => AuthModule),
  // forwardRef(() => UserModule),
  // forwardRef(() => Assignor)
  
],
  controllers: [PayableController],
  providers: [PayableService],
})
export class PayableModule { }
