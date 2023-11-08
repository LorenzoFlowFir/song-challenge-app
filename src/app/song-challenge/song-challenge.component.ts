import { Component, OnInit } from '@angular/core';
import { SongChallengeService } from '../services/song-challenge.service';
import { IonicModule } from '@ionic/angular';
import { IonImg } from '@ionic/angular/standalone';
import { MoreChallengeComponent } from '../more-challenge/more-challenge.component';

@Component({
  selector: 'app-song-challenge',
  templateUrl: './song-challenge.component.html',
  styleUrls: ['./song-challenge.component.scss'],
  imports: [IonicModule, IonImg, MoreChallengeComponent],
  standalone: true,
})
export class SongChallengeComponent implements OnInit {
  public songChallengeUrl: string = '';
  public songChallengeTitle: string = '';
  public songChallengeDate: string = '';

  constructor(public songChallengeService: SongChallengeService) {}

  ngOnInit() {
    this.songChallengeService.getDiscordData().subscribe((data) => {
      this.songChallengeUrl = data.coverUrls[0];
      this.songChallengeTitle = data.titre[0];
      this.songChallengeDate = data.date[0];
    });
  }
}
