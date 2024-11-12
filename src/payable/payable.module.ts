import { Module } from '@nestjs/common';
import { PayableService } from './payable.service';
import { PayableController } from './payable.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PayableSchema } from './schemas/payable.schema';

@Module({
  imports:[ MongooseModule.forFeature([
    {
      name: 'Payable',
      schema: PayableSchema,
    }
  ])],
  controllers: [PayableController],
  providers: [PayableService],
})
export class PayableModule {}
