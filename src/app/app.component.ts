import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  viewPhotoList: boolean = false;
  viewPicsumPhotoList: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  //
  // Per gestire gli eventi dei pulsanti che abilitano
  // la visualizzazione delle singole liste
  //
  onButtonJSONPlaceholder() {
    this.viewPhotoList = true;
    this.viewPicsumPhotoList = false;
  }

  onButtonPicsum() {
    this.viewPhotoList = false;
    this.viewPicsumPhotoList = true;
  }
}
