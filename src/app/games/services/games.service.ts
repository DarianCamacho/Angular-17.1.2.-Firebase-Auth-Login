import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }
  
  getGames(versionGroupId: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/version-group/${versionGroupId}`);
  }
}
