import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSetting } from 'src/graphql/models/UserSetting.entity';
import { In, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UserSettingsService {
  constructor(
    @InjectRepository(UserSetting)
    private readonly usersRepository: Repository<UserSetting>,
  ) {}
}
