import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { UserSetting } from 'src/graphql/models/UserSetting.entity';
import { CreateUserSettingsInput } from 'src/graphql/utils/CreateUserSettingsInput';

@Resolver()
export class UserSettingsResolver {
  @Mutation((returns) => UserSetting)
  createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    const { userId, receiveNotifications, receiveEmails } =
      createUserSettingsData;
    mockUserSettings.push({ userId, receiveNotifications, receiveEmails });
    return mockUserSettings[mockUserSettings.length - 1];
  }
}
