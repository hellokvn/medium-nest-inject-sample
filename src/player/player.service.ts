import { Inject, Injectable } from '@nestjs/common';
import { ItemService } from 'src/item/item.service';

@Injectable()
export class PlayerService {
  @Inject(ItemService)
  private readonly itemService: ItemService;

  public findPlayerById(id: string): any {
    const items: string[] = this.itemService.getItems();

    return { id, items, name: `Player ${id}` };
  }
}
