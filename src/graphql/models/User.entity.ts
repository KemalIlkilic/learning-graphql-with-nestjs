import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserSetting } from './UserSetting.entity';
import { Field, ObjectType, Int } from '@nestjs/graphql';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  // we only do this for integer
  //it is not required for string and boolean types; it is required for number type
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  username: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  displayName?: string;

  // with this nullable value, setting itself nullable not its properties
  @OneToOne(() => UserSetting, { nullable: true })
  @JoinColumn() // Required for owning side of 1:1
  @Field({ nullable: true })
  settings?: UserSetting;
}
