import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSetting } from 'src/graphql/models/UserSetting.entity';
import { UserSettingsResolver } from './UserSettingsResolver';
import { UserSettingsService } from './userSettingsService';

@Module({
  imports: [TypeOrmModule.forFeature([UserSetting])],
  providers: [UserSettingsResolver, UserSettingsService],
})
export class UserSettingsModule {}
