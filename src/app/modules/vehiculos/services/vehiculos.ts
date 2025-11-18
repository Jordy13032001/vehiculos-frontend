import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private apiUrl = 'http://localhost:3000/vehiculos';

  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obtener(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  crear(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  actualizar(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  promedioKm(): Observable<any> {
    return this.http.get(`${this.apiUrl}/promedio-km`);
  }

}
