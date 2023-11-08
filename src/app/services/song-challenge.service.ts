import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SongChallenge } from '../models/song-challenge.model';
import { DiscordDataService } from './discord-data.service';

@Injectable({
  providedIn: 'root',
})
export class SongChallengeService {
  private apiUrl = 'http://eu.pylex.me:20827/get-discord-data';

  constructor(public discordDataService: DiscordDataService) {}

  getDiscordData(): Observable<SongChallenge> {
    return this.discordDataService.getDiscordData();
  }
}
