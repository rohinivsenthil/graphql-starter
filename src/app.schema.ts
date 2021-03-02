import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class postResponse {
  @Field({ description: 'Unique identifier string of the post' })
  id: string;

  @Field({ description: 'Title of the post' })
  title: string;

  @Field({ description: 'Summary/Description the post' })
  description: string;

  @Field({ description: 'Author of the post' })
  author: string;
}

@InputType()
export class PostData {
  @Field({ description: 'Title of the post' })
  title: string;

  @Field({ description: 'Summary/Description the post' })
  description: string;

  @Field({ description: 'Author of the post' })
  author: string;
}
