import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class LightboxComponent {
  @Input() imageSrc: string = ''; // L'URL de l'image à afficher dans le lightbox
  isVisible: boolean = false;

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }
}
