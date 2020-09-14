import { Injectable } from '@angular/core';
// @ts-ignore
import algoliasearch from 'algoliasearch';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  client: any;
  index: any;

  constructor() {
    this.client = algoliasearch('HAYJWBVFJR', '59ca0f7b12d01ee6997cf004857d8d11');
    this.index = this.client.initIndex('concerts');
  }

  query(arg: any): any {
    return this.index.search(arg);
  }
}
