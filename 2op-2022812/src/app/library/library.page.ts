import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewPlaylistPage } from '../new-playlist/new-playlist.page';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage  {
  username: string = '';
  playlists = [
    { name: 'Shazam', songs: [] },
    { name: 'Roadtrip', songs: [] },
    { name: 'Study', songs: [] }
  ];


  constructor(private modalController: ModalController) { }

  async openNewPlaylistModal() {
    const modal = await this.modalController.create({
      component: NewPlaylistPage,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.playlistName) {
        this.playlists.push({
          name: result.data.playlistName,
          songs: []
        });
      }
    });

    return await modal.present();
  }
}
