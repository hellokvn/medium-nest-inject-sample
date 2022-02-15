import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
  public getItems(): string[] {
    return ['sword', 'axe', 'pants'];
  }
}
