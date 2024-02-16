import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SongChallengeService } from '../../services/song-challenge.service';
import {
  IonImg,
  IonContent,
  IonApp,
  IonSpinner,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { MoreChallengeComponent } from '../../more-challenge/more-challenge.component';
import { MainChallengesComponent } from '../../more-challenge/main-challenges/main-challenges.component';

@Component({
  selector: 'app-song-challenge',
  templateUrl: './song-challenge.component.html',
  styleUrls: ['./song-challenge.component.scss'],
  imports: [
    IonImg,
    MoreChallengeComponent,
    CommonModule,
    MainChallengesComponent,
    IonContent,
    IonApp,
    IonSpinner,
  ],
  standalone: true,
})
export class SongChallengeComponent implements OnInit {
  public songChallengeUrl: string = '';
  public songChallengeTitle: string = '';
  public songChallengeDate: string = '';
  public isLoading: boolean = true;
  public number = 4;

  constructor(
    private songChallengeService: SongChallengeService,
    private cdr: ChangeDetectorRef // Injectez ChangeDetectorRef ici
  ) {}

  ngOnInit() {
    this.songChallengeService.getDiscordData().subscribe({
      next: (data) => {
        this.songChallengeUrl = data.coverUrls[0];
        this.songChallengeTitle = data.titre[0];
        this.songChallengeDate = data.date[0];
        this.isLoading = false; // Arrêter le chargement une fois les données reçues
        this.cdr.detectChanges(); // Déclenchez la détection des changements manuellement
      },
      error: (err) => {
        console.error('Error fetching data: ', err);
        this.isLoading = false; // Arrêter le chargement en cas d'erreur
        this.cdr.detectChanges(); // Déclenchez la détection des changements manuellement
      },
    });
  }
}
