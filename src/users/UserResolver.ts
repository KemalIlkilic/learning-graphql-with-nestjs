import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../graphql/models/User.entity';
import { UserSetting } from '../graphql/models/UserSetting.entity';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { UserService } from './UserService';
import { UserSettingsService } from 'src/userSettings/userSettingsService';

//In our example, since the class includes a field resolver function, we must supply the @Resolver() decorator with a value to indicate which class is the parent type
@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private userSettingsService: UserSettingsService,
  ) {}

  @Query((returns) => User, { nullable: true })
  async getUserById(@Args('id', { type: () => Int }) id: number) {
    return await this.userService.getUserById(id);
  }

  @Query((returns) => [User])
  async getUsers() {
    return await this.userService.getUsers();
  }
  /* @Query() → Root query’leri tanımlar.
	•	@ResolveField() → Bir field’ı (örneğin settings) çözümler. */
  //Aslında GraphQL query’mizde sadece getUsers isteği atıyoruz, ama ilgili User’in settings alanını da görüntüleyebilmek için @ResolveField() kullanıyoruz.
  @ResolveField((returns) => UserSetting, { nullable: true })
  settings(@Parent() user: User) {
    const { id } = user;
    return this.userSettingsService.getUserSettingById(id);
  }

  @Mutation((returns) => User)
  async createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return await this.userService.createUser(createUserData);
  }
}
