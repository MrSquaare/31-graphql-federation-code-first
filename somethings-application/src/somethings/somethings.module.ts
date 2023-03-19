import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SomethingsResolver } from './somethings.resolver';
import { SomethingsService } from './somethings.service';

@Module({
  providers: [SomethingsResolver, SomethingsService],
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: { federation: 2, path: 'schema.gql' },
    }),
  ],
})
export class SomethingsModule {}
