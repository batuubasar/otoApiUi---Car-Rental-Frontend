import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OtoDto } from '../models/oto-dto.model';
import { AuthService } from './auth.service'; // AuthService'i içe aktar

@Injectable({
  providedIn: 'root'
})
export class OtoService {
  private baseUrl = 'http://localhost:8080/api/v1/oto'; // Backend API URL'si

  constructor(private http: HttpClient, private authService: AuthService) {}

  addOto(formData: FormData): Observable<OtoDto> {
    
    const token = this.authService.getToken(); // AuthService'den token'ı al

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Bearer token ekleme
    });

    return this.http.post<OtoDto>(`${this.baseUrl}/add-oto`, formData, { headers });
  }
  getAllOtos(): Observable<OtoDto[]> {
    const token = this.authService.getToken(); // AuthService'den token'ı al

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`, // Bearer token ekleme
    });
    return this.http.get<OtoDto[]>(`${this.baseUrl}/all`, {headers});
  }
  
}



 
 
    
