import { UserSetting } from './UserSetting';
import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  // we only do this for integer
  @Field((type) => Int)
  id: number;

  @Field()
  username: string;

  @Field({ nullable: true })
  displayName?: string;

  @Field({ nullable: true })
  settings?: UserSetting;
}
