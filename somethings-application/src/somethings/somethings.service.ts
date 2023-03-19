import { Something } from '@abcdef/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SomethingsService {
  private somethings: Something[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Richard Roe' },
  ];

  findById(id: number): Something {
    return this.somethings.find((something) => something.id === Number(id));
  }
}
