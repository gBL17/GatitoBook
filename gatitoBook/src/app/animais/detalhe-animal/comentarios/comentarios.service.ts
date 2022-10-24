import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Comentarios } from './comentarios';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private http: HttpClient) {}

  buscaComentarios(id: number): Observable<Comentarios> {
    return this.http.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  incluiComentario(id: number, commentText: string): Observable<Comentarios> {
    return this.http.post<Comentarios>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
