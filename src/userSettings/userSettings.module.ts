import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSetting } from 'src/graphql/models/UserSetting.entity';
import { UserSettingsResolver } from './UserSettingsResolver';
import { UserSettingsService } from './userSettingsService';
import { User } from 'src/graphql/models/User.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserSetting, User])],
  providers: [UserSettingsResolver, UserSettingsService],
})
export class UserSettingsModule {}
