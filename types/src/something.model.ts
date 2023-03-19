import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Something {
  @Field((type) => ID)
  id: number;

  @Field((type) => String)
  name: string;
}
