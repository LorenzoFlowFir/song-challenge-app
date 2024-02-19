import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTabs,
  IonLabel,
  IonTabButton,
  IonTabBar,
  IonIcon,
} from '@ionic/angular/standalone';
import { SongChallengeComponent } from '../../components/song-challenge/song-challenge.component';
import { PersonalChallengeComponent } from 'src/app/components/personal-challenge/personal-challenge.component';
import { addIcons } from 'ionicons';
import { people, person } from 'ionicons/icons';
import { MoreChallengeComponent } from 'src/app/components/more-challenge/more-challenge.component';

@Component({
  selector: 'app-more-challenge-page',
  templateUrl: 'more-challenge-page.page.html',
  styleUrls: ['more-challenge-page.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonTabs,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    SongChallengeComponent,
    MoreChallengeComponent,
    IonIcon,
    PersonalChallengeComponent,
  ],
})
export class MoreChallengePagePage {
  public selectedTab = 'community';

  constructor() {
    addIcons({
      people,
      person,
    });
  }
}
