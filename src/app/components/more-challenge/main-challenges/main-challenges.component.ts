import { Component, OnInit, inject } from '@angular/core';
import {
  NavController,
  ModalController,
  IonModal,
  IonButton,
  IonInput,
  IonImg,
  IonSpinner,
} from '@ionic/angular/standalone';
import { DiscordDataService } from 'src/app/services/discord-data.service';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { CommonModule } from '@angular/common';
import { SongChallenge } from 'src/app/models/song-challenge.model';

@Component({
  selector: 'app-main-challenges',
  templateUrl: './main-challenges.component.html',
  styleUrls: ['./main-challenges.component.scss'],
  standalone: true,
  imports: [
    IonModal,
    IonImg,
    LightboxComponent,
    CommonModule,
    IonButton,
    IonInput,
    IonSpinner,
  ],
})
export class MainChallengesComponent implements OnInit {
  public songsChallenges: SongChallenge[] = [];
  public isLoading: boolean = true;

  constructor(
    private discordDataService: DiscordDataService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.discordDataService.getDiscordData().subscribe((data) => {
      for (let i = 1; i < 4; i++) {
        this.songsChallenges.push({
          id: '',
          coverUrls: data.coverUrls[i],
          titre: data.titre[i],
          date: data.date[i],
        });
      }
      this.isLoading = false;
    });
  }

  navigateToPage() {
    this.navCtrl.navigateForward('/more-challenge-page');
  }
}
