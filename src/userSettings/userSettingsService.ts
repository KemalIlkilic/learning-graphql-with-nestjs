import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GraphQLError } from 'graphql';
import { User } from 'src/graphql/models/User.entity';
import { UserSetting } from 'src/graphql/models/UserSetting.entity';
import { CreateUserSettingsInput } from 'src/graphql/utils/CreateUserSettingsInput';
import { In, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UserSettingsService {
  constructor(
    @InjectRepository(UserSetting)
    private readonly userSettingsRepository: Repository<UserSetting>,
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async getUserSettings(): Promise<UserSetting[]> {
    return await this.userSettingsRepository.find();
  }

  async getUserSettingById(userId: number) {
    return await this.userSettingsRepository.findOneBy({ userId });
  }

  async createUserSetting(createUserSettingData: CreateUserSettingsInput) {
    const { userId } = createUserSettingData;
    const findUser = await this.usersRepository.findOneBy({ id: userId });
    if (!findUser) {
      throw new GraphQLError('User not found');
    }
    const newSetting = this.userSettingsRepository.create(
      createUserSettingData,
    );
    const savedSettings = await this.userSettingsRepository.save(newSetting);
    findUser.settings = savedSettings;
    await this.usersRepository.save(findUser);
    return savedSettings;
  }
}
