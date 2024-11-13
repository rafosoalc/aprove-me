import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AssignorModule } from './assignor/assignor.module';
import { PayableModule } from './payable/payable.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AssignorModule,
    PayableModule,
    UserModule,
    AuthModule,
        
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
