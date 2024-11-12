import { Module } from '@nestjs/common';
import { AssignorService } from './assignor.service';
import { AssignorController } from './assignor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignorSchema } from './schemas/assignor.schema';

@Module({
  imports:[ MongooseModule.forFeature([
    {
      name: 'Assignor',
      schema: AssignorSchema,
    }
  ])],
  controllers: [AssignorController],
  providers: [AssignorService],
})
export class AssignorModule {}
