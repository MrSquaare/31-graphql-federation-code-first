import { Something } from '@abcdef/types';
import { Args, ID, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { SomethingsService } from './somethings.service';

@Resolver((of) => Something)
export class SomethingsResolver {
  constructor(private somethingsService: SomethingsService) {}

  @Query((returns) => Something)
  getSomething(@Args({ name: 'id', type: () => ID }) id: number): Something {
    return this.somethingsService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): Something {
    return this.somethingsService.findById(reference.id);
  }
}
