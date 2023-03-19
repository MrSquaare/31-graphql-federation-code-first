import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { ParseIntPipe } from '@nestjs/common';
import { Post, User } from '@abcdef/types';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query((returns) => Post)
  post(@Args({ name: 'id', type: () => ID }, ParseIntPipe) id: number): Post {
    return this.postsService.findOne(id);
  }

  @Query((returns) => [Post])
  posts(): Post[] {
    return this.postsService.findAll();
  }

  @ResolveField((of) => User)
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }
}
