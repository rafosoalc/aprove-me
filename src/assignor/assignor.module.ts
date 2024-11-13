import { forwardRef, Module } from '@nestjs/common';
import { AssignorService } from './assignor.service';
import { AssignorController } from './assignor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignorSchema } from './schemas/assignor.schema';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Assignor',
      schema: AssignorSchema,
    }
  ]),
  AuthModule,
  ],
  controllers: [AssignorController],
  providers: [AssignorService],
})
export class AssignorModule { }
