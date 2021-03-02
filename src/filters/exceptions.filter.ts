import { Catch, ExceptionFilter } from '@nestjs/common';
import { ApolloError } from 'apollo-server-express';

@Catch(ApolloError)
export class GqlExceptionFilter implements ExceptionFilter<ApolloError> {
  // This exception filter exists only because the normal HTTP errors
  // don't work properly with Apollo. Additionally only throwing Apollo
  // errors leads the server to believe that something went wrong.
  // Hence, we catch all ApolloErrors here and then just return the error payload
  catch(exception: ApolloError) {
    return exception;
  }
}
