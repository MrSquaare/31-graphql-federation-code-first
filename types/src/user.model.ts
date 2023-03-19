import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from './post.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => ID)
  id: number;

  @Field((type) => String)
  name: string;

  @Field((type) => [Post])
  posts?: Post[];
}
