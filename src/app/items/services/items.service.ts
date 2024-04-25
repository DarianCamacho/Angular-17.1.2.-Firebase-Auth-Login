import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }
  
  getItemCategories(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/item-category/');
  }

  getItemsByCategory(categoryName: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/item-category/${categoryName}`);
  }

  getItemDetails(itemIdOrName: string): Observable<any> {
    const itemUrl = `https://pokeapi.co/api/v2/item/${itemIdOrName}/`;
    return this.http.get(itemUrl);
  }
}
