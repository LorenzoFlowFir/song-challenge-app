import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonImg,
  IonInput,
  IonModal,
  IonSpinner,
  ModalController,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonIcon,
} from '@ionic/angular/standalone';
import { CreateChallengeComponent } from 'src/app/components/create-challenge/create-challenge.component';
import { FormsModule } from '@angular/forms';
import {
  Firestore,
  doc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
} from '@angular/fire/firestore';
import { LightboxComponent } from 'src/app/more-challenge/lightbox/lightbox.component';
import { CommonModule } from '@angular/common';
import { SongChallenge } from 'src/app/models/song-challenge.model';
import { query, orderBy, limit, startAfter } from '@angular/fire/firestore';
import { addIcons } from 'ionicons';
import { trash, create } from 'ionicons/icons';

@Component({
  selector: 'app-personal-challenge',
  templateUrl: './personal-challenge.component.html',
  styleUrls: ['./personal-challenge.component.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonButton,
    FormsModule,
    IonModal,
    IonImg,
    LightboxComponent,
    CommonModule,
    IonButton,
    IonInput,
    IonSpinner,
  ],
})
export class PersonalChallengeComponent implements OnInit {
  public challengeName: string = '';
  public isLoading: boolean = true;
  public songsChallenges: SongChallenge[] = [];
  private currentIndex = 0;
  private batchSize = 15;
  private editChallenge: SongChallenge | undefined;
  constructor(
    private modalController: ModalController,
    private firestore: Firestore
  ) {
    addIcons({
      trash,
      create,
    });
  }

  ngOnInit() {
    this.loadMoreData();
  }

  async loadMoreData(event?: any) {
    this.songsChallenges = [];

    const challengesRef = collection(this.firestore, 'Challenge');
    let q;

    if (this.currentIndex === 0) {
      // Première charge de données
      q = query(challengesRef, orderBy('date', 'desc'), limit(this.batchSize));
    } else {
      // Charges suivantes : utilisez le dernier élément chargé comme point de départ
      const lastVisible = this.songsChallenges[this.songsChallenges.length - 1];
      q = query(
        challengesRef,
        orderBy('date', 'desc'),
        //startAfter(lastVisible.date),
        limit(this.batchSize)
      );
    }

    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
      // Créer un nouvel objet SongChallenge en s'assurant que l'id du document prévaut
      const challengeData = doc.data() as SongChallenge;
      const challengeWithId = {
        ...challengeData, // Utilisez d'abord le spread operator pour copier les champs de doc.data()
        id: doc.id, // Ensuite, écrasez ou ajoutez la propriété `id` avec l'ID du document
      };
      this.songsChallenges.push(challengeWithId);
    });

    this.isLoading = false;
    this.currentIndex += snapshot.size;

    console.log(this.songsChallenges);

    if (event) {
      // Assurez-vous que event et event.target sont définis avant d'accéder à event.target.complete
      if (event.target && typeof event.target.complete === 'function') {
        event.target.complete();
      }

      // Si moins de données que batchSize sont retournées, désactiver l'infinite scroll
      if (
        snapshot.size < this.batchSize &&
        event.target &&
        typeof event.target.disabled !== 'undefined'
      ) {
        event.target.disabled = true;
      }
    }
  }
  async openModal(challenge?: SongChallenge) {
    this.editChallenge = challenge; // Gardez la trace du challenge actuellement édité, si applicable
    const modal = await this.modalController.create({
      component: CreateChallengeComponent,
      componentProps: {
        // Passer le challenge à modifier au modal, ou des valeurs par défaut pour une nouvelle création
        challenge: challenge ? { ...challenge } : null,
      },
    });

    const { data } = await modal.onWillDismiss();
    if (data?.reload) {
      this.loadMoreData(); // Recharge les données si nécessaire
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async deleteChallenge(challengeId: string, index: number) {
    const docRef = doc(this.firestore, 'Challenge', challengeId);
    await deleteDoc(docRef);
    // Supprimer le challenge de l'affichage en utilisant l'index
    this.songsChallenges.splice(index, 1);
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
      this.loadMoreData();
      this.closeModal();
      return true;
    } catch (error) {
      console.error('Error creating challenge: ', error);
      return false;
    }
  }

  async validEdit() {
    if (this.editChallenge) {
      const challenge = {
        coverUrls: this.editChallenge.coverUrls,
        titre: this.challengeName,
        date: this.editChallenge.date,
      };

      try {
        const docRef = doc(this.firestore, 'Challenge', this.editChallenge.id);

        await setDoc(docRef, challenge);
        console.log('Challenge updated successfully');
        this.closeModal();
        this.songsChallenges = [];
        this.loadMoreData();
        return true;
      } catch (error) {
        console.error('Error updating challenge: ', error);
        return false;
      }
    }
    return false;
  }
}
