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
  public isLoading: boolean = true;
  private currentIndex = 0;
  private batchSize = 15;
  constructor(private discordDataService: DiscordDataService) {}

  ngOnInit() {
    this.loadMoreData();
  }

  loadMoreData(event?: any) {
    this.discordDataService.getDiscordData().subscribe((data) => {
      const nextIndex = this.currentIndex + this.batchSize;
      for (
        let i = this.currentIndex;
        i < nextIndex && i < data.coverUrls.length;
        i++
      ) {
        this.songsChallenges.push({
          id: '',
          coverUrls: data.coverUrls[i],
          titre: data.titre[i],
          date: data.date[i],
        });
      }
      this.currentIndex = nextIndex;
      this.isLoading = false;
      if (event) {
        event.target.complete();
      }

      // Si tous les éléments sont chargés, désactiver l'infinite scroll
      if (this.currentIndex >= data.coverUrls.length) {
        event.target.disabled = true;
      }
    });
  }
}
