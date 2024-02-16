import { Component, OnInit, inject } from '@angular/core';
import { IonicModule, NavController, ModalController } from '@ionic/angular';
import { DiscordDataService } from 'src/app/services/discord-data.service';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { CommonModule } from '@angular/common';
import { SongChallenge } from 'src/app/models/song-challenge.model';
import { IonButton, IonInput } from '@ionic/angular/standalone';
import { CreateChallengeComponent } from 'src/app/components/create-challenge/create-challenge.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-main-challenges',
  templateUrl: './main-challenges.component.html',
  styleUrls: ['./main-challenges.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    LightboxComponent,
    CommonModule,
    IonButton,
    IonInput,
    FormsModule,
  ],
})
export class MainChallengesComponent implements OnInit {
  public songsChallenges: SongChallenge[] = [];
  public isLoading: boolean = true;
  public challengeName: string = '';

  constructor(
    private discordDataService: DiscordDataService,
    private navCtrl: NavController,
    private modalController: ModalController,
    private firestore: Firestore
  ) {}

  ngOnInit() {
    this.discordDataService.getDiscordData().subscribe((data) => {
      for (let i = 1; i < 4; i++) {
        this.songsChallenges.push({
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

  openModal() {
    this.modalController.create({
      component: CreateChallengeComponent,
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async valid() {
    const challenge = {
      coverUrls: 'https://cdn-icons-png.flaticon.com/512/121/121148.png',
      titre: this.challengeName,
      date: new Date().toISOString(),
    };

    try {
      // Créez une référence au document avec l'ID spécifique
      const docRef = doc(
        this.firestore,
        'Challenge',
        `challenge_${challenge.date}`
      );

      // Utilisez setDoc pour créer le document avec les données de l'utilisateur
      await setDoc(docRef, challenge);
      console.log('Challenge created successfully');
      this.closeModal(); // Ferme le modal après la création
      return true;
    } catch (error) {
      console.error('Error creating challenge: ', error);
      return false;
    }
  }
  //TODO Créer 2 liste dans more chalenge, une avec les challenges de discord et les perso, utilisé une toolbar
}
