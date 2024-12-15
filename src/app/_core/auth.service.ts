import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public savedData = new BehaviorSubject<boolean>(!!JSON.parse(localStorage['sd'] || '{}').ut);

  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  public validateUser(request: { user: string, pass: string, device?: string }) {
    request.device = this.core.generateDeviceId();
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(`${this.core.apiBaseUrl}/auth`, request, httpOptions);
  }
}