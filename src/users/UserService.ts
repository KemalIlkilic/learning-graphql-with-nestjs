import { Injectable } from '@nestjs/common';
import { User } from 'src/graphql/models/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository, UpdateResult } from 'typeorm';
import { CreateUserInput } from 'src/graphql/utils/CreateUserInput';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUserById(id: number) {
    return await this.usersRepository.findOneBy({ id });
  }

  async createUser(createUserData: CreateUserInput): Promise<User> {
    const newUser = this.usersRepository.create(createUserData);
    return await this.usersRepository.save(newUser);
  }
}
