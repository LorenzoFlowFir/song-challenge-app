import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DiscordDataService } from '../services/discord-data.service';
import { LightboxComponent } from './lightbox/lightbox.component';
import { CommonModule } from '@angular/common';
import { SongChallenge } from '../models/song-challenge.model';

@Component({
  selector: 'app-more-challenge',
  templateUrl: './more-challenge.component.html',
  styleUrls: ['./more-challenge.component.scss'],
  standalone: true,
  imports: [IonicModule, LightboxComponent, CommonModule],
})
export class MoreChallengeComponent implements OnInit {
  public songsChallenges: SongChallenge[] = [];

  constructor(private discordDataService: DiscordDataService) {}

  ngOnInit() {
    this.discordDataService.getDiscordData().subscribe((data) => {
      for (let i = 1; i < 4; i++) {
        this.songsChallenges.push({
          coverUrls: data.coverUrls[i],
          titre: data.titre[i],
          date: data.date[i],
        });
      }
    });
  }
}
