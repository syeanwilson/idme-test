import { Component, OnInit } from '@angular/core';

// Interfaces
import { Product } from './interfaces/store.interface';

// Services
import { StoreApiService } from './services/store-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'idme-store';
  products: Array<Product> = [];

  constructor(private storeApi: StoreApiService) {}

  ngOnInit(): void {
    this.storeApi.purchaseHistory.then((response: Response) => {
      response.json().then((products: Array<Product>) => {
        this.products = products;
        console.log(products);
      });
    });
  }

}
