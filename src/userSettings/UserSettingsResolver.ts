import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from 'src/graphql/models/UserSetting.entity';
import { CreateUserSettingsInput } from 'src/graphql/utils/CreateUserSettingsInput';
import { UserSettingsService } from './userSettingsService';

@Resolver()
export class UserSettingsResolver {
  constructor(private userSettingsService: UserSettingsService) {}

  @Mutation((returns) => UserSetting)
  async createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    const { userId, receiveNotifications, receiveEmails } =
      createUserSettingsData;
    return await this.userSettingsService.createUserSetting(
      createUserSettingsData,
    );
  }
}
