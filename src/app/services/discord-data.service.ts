// Exemple de service Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SongChallenge } from '../models/song-challenge.model';

@Injectable({
  providedIn: 'root',
})
export class DiscordDataService {
  private apiUrl = 'http://51.38.113.168:5555/get-discord-data';
  //private apiUrl = 'http://eu.pylex.me:20827/get-discord-data';

  constructor(private http: HttpClient) {}

  getDiscordData(): Observable<SongChallenge> {
    return this.http.get<SongChallenge>(this.apiUrl).pipe(
      tap((data) => {
        if (!data.coverUrls || data.coverUrls.length === 0) {
          console.error('No cover URLs found in the response data');
        }
      })
    );
  }
}
