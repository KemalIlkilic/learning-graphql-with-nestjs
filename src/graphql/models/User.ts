import { UserSetting } from './UserSetting';
import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  // we only do this for integer
  //it is not required for string and boolean types; it is required for number type
  @Field((type) => Int)
  id: number;

  @Field()
  username: string;

  @Field({ nullable: true })
  displayName?: string;

  // with this nullable value, setting itself nullable not its properties
  @Field({ nullable: true })
  settings?: UserSetting;
}
