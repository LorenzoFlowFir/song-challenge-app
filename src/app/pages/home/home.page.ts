import { Component, ViewChild } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  NavController,
} from '@ionic/angular/standalone';
import { SongChallengeComponent } from '../../components/song-challenge/song-challenge.component';
import { MoreChallengeComponent } from '../../components/more-challenge/more-challenge.component';
import { addIcons } from 'ionicons';
import { informationCircle } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    SongChallengeComponent,
    MoreChallengeComponent,
  ],
})
export class HomePage {
  constructor(private navCtrl: NavController) {
    addIcons({
      informationCircle,
    });
  }

  scrollToTop() {
    this.navCtrl.navigateForward('/info');
  }
}
