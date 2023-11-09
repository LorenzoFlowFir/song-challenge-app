import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { SongChallengeComponent } from '../../song-challenge/song-challenge.component';
import { MoreChallengeComponent } from '../../more-challenge/more-challenge.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    SongChallengeComponent,
    MoreChallengeComponent,
  ],
})
export class HomePage {
  constructor() {}
}
