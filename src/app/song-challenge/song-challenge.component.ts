import { Component, OnInit } from '@angular/core';
import { SongChallengeService } from '../services/song-challenge.service';
import { IonicModule } from '@ionic/angular';
import { IonImg } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { MoreChallengeComponent } from '../more-challenge/more-challenge.component';

@Component({
  selector: 'app-song-challenge',
  templateUrl: './song-challenge.component.html',
  styleUrls: ['./song-challenge.component.scss'],
  imports: [IonicModule, IonImg, MoreChallengeComponent, CommonModule],
  standalone: true,
})
export class SongChallengeComponent implements OnInit {
  public songChallengeUrl: string = '';
  public songChallengeTitle: string = '';
  public songChallengeDate: string = '';
  public isLoading: boolean = true; // Ajouter une propriété pour suivre l'état de chargement

  constructor(private songChallengeService: SongChallengeService) {}

  ngOnInit() {
    this.songChallengeService.getDiscordData().subscribe({
      next: (data) => {
        this.songChallengeUrl = data.coverUrls[0];
        this.songChallengeTitle = data.titre[0];
        this.songChallengeDate = data.date[0];
        this.isLoading = false; // Arrêter le chargement une fois les données reçues
      },
      error: (err) => {
        console.error('Error fetching data: ', err);
        this.isLoading = false; // Arrêter le chargement en cas d'erreur
      }
    });
  }
}
