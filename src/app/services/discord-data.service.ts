// Exemple de service Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiscordDataService {
  private apiUrl = 'http://eu.pylex.me:20827/get-discord-data'; // Mettez à jour l'URL ici

  constructor(private http: HttpClient) {}

  getDiscordData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
