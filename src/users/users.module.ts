import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { User } from 'src/graphql/models/User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './UserService';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService],
})
export class UsersModule {}
