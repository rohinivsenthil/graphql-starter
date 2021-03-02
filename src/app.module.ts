import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      // turn off debugging to prevent stack trace in errors
      debug: false,
      context: ({ req, connection }) =>
        connection
          ? {
              /**
               * For websocket connection:
               * native application -> authorization headers is read from variables
               * graphql playground -> authorization headers is read from context
               */
              req: {
                headers: connection.variables.headers || connection.context,
              },
            }
          : { req },
    }),
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
