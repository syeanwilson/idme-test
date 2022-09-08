import { Component, Input } from '@angular/core';

// Interfaces
import { Product } from '../../interfaces/store.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{

  @Input() productData: Product | undefined;

}
