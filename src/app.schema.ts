import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class userResponse {
  @Field({ description: 'First name of the user' })
  firstName: string;

  @Field({ description: 'Last name of the user' })
  lastName: string;

  @Field({ description: 'Email of the user' })
  email: string;
}
