import { User } from '@abcdef/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Richard Roe' },
  ];

  findById(id: number): User {
    return this.users.find((user) => user.id === Number(id));
  }
}
