import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private baseUrl = 'http://localhost:9000/api/movies';

  constructor(private http: HttpClient) { }

  createMovie(movieData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, movieData); // No necesitas agregar "/movies" aquí, ya que la ruta completa está en this.baseUrl
  }

  getAllMovies(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getMovieById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  updateMovie(id: string, movieData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, movieData);
  }

  deleteMovie(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
