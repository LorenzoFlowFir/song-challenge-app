import { Component, OnInit } from '@angular/core';
import {
  IonModal,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonInput,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.scss'],
  standalone: true,
  imports: [IonInput, IonModal, IonList, IonItem, IonIcon, IonLabel],
})
export class CreateChallengeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
