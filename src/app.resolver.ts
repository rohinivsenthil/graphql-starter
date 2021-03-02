import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { postResponse, PostData } from './app.schema';

const posts = [
  {
    id: '1',
    title: 'Title 1',
    description: 'Description 1',
    author: 'Author 1',
  },
  {
    id: '2',
    title: 'Title 2',
    description: 'Description 2',
    author: 'Author 2',
  },
];

@Resolver()
export class AppResolver {
  @Query(() => [postResponse], {
    description: 'Get user details',
  })
  async getPosts(): Promise<postResponse[]> {
    return posts;
  }

  @Mutation(() => String, {
    description: 'Get user details',
  })
  async createPost(
    @Args('data', {
      description: 'Payload for creating a new post',
    })
    data: PostData,
  ): Promise<string> {
    console.log(data);
    return 'Post created successfully';
  }

  @Mutation(() => String, {
    description: 'Get user details',
  })
  async deletePost(
    @Args('id', {
      description: 'ID of the post that needs to be deleted',
    })
    id: string,
  ): Promise<string> {
    console.log(id);
    return 'Post deleted successfully';
  }

  @Mutation(() => String, {
    description: 'Get user details',
  })
  async updatePost(
    @Args('id', {
      description: 'ID of the post that needs to be deleted',
    })
    id: string,
    @Args('data', {
      description: 'Payload for updating an existing post',
    })
    data: PostData,
  ): Promise<string> {
    console.log(id, data);
    return 'Post updated successfully';
  }
}
