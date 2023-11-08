import { Component, OnInit } from '@angular/core';
import { SongChallengeService } from '../services/song-challenge.service';
import { IonicModule } from '@ionic/angular';
import { IonImg } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SongChallenge } from '../models/song-challenge.model';

@Component({
  selector: 'app-song-challenge',
  templateUrl: './song-challenge.component.html',
  styleUrls: ['./song-challenge.component.scss'],
  imports: [IonicModule, IonImg, HttpClientModule],
  standalone: true,
})
export class SongChallengeComponent implements OnInit {
  public songChallengeUrl: string = '';

  constructor(public songChallengeService: SongChallengeService) {}

  ngOnInit() {
    this.songChallengeService.getDiscordData().subscribe((data) => {
      this.songChallengeUrl = data.coverUrls[0];
    });
  }
}
