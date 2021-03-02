import { Resolver, Args, Query } from '@nestjs/graphql';
import { userResponse } from './app.schema';

@Resolver()
export class AppResolver {
  @Query(() => userResponse, {
    description: 'Get user details',
  })
  async getUser(
    @Args('email', {
      description: 'Payload for retrieving user details',
    })
    email: string,
  ): Promise<userResponse> {
    return {
      firstName: 'Rohini',
      lastName: 'Senthil',
      email: email,
    };
  }
}
