import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { UserSetting } from '../models/UserSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

//In our example, since the class includes a field resolver function, we must supply the @Resolver() decorator with a value to indicate which class is the parent type
@Resolver(() => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query((returns) => [User])
  getUsers() {
    return mockUsers;
  }
  /* @Query() → Root query’leri tanımlar.
	•	@ResolveField() → Bir field’ı (örneğin settings) çözümler. */
  //Aslında GraphQL query’mizde sadece getUsers isteği atıyoruz, ama ilgili User’in settings alanını da görüntüleyebilmek için @ResolveField() kullanıyoruz.
  @ResolveField((returns) => UserSetting, { nullable: true })
  settings(@Parent() user: User) {
    const { id } = user;
    return mockUserSettings.find((setting) => setting.userId === id);
  }
}
