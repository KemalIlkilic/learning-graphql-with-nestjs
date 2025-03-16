import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { User } from 'src/graphql/models/User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './UserService';
import { UserSettingsService } from 'src/userSettings/userSettingsService';
import { UserSetting } from 'src/graphql/models/UserSetting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [UserResolver, UserService, UserSettingsService],
})
export class UsersModule {}
