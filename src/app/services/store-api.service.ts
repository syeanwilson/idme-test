import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService {
  get purchaseHistory(): Promise<Response> {
    return fetch("https://idme-interview.herokuapp.com/");
  }
}
