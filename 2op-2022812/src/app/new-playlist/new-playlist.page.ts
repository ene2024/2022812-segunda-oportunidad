import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-playlist',
  templateUrl: './new-playlist.page.html',
  styleUrls: ['./new-playlist.page.scss'],
})
export class NewPlaylistPage {
  playlistName: string = '';

  constructor(private modalController: ModalController) { }

  dismissModal() {
    this.modalController.dismiss();
  }

  createPlaylist() {
    if (this.playlistName && this.playlistName.trim().length > 0) {
      this.modalController.dismiss({ playlistName: this.playlistName });
    }
  }
}