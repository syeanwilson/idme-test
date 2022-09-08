import { Component, Input } from '@angular/core';

// Interfaces
import { Product } from '../../interfaces/store.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() products: Array<Product> = [];

}
