import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { ServicesService } from './services/services.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [ServicesService],
})
export class UserModule {}
