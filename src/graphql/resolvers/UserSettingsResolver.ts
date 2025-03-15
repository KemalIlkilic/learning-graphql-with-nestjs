import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

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
