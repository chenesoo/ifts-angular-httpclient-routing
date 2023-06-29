import { Component, OnInit } from '@angular/core';
import { PicsumPhoto } from '../photo.model';
import { PicsumPhotoService } from '../picsum-photo.service';

@Component({
  selector: 'app-picsum-list',
  templateUrl: './picsum-list.component.html',
  styleUrls: ['./picsum-list.component.css'],
})
export class PicsumListComponent implements OnInit {
  picsumPhotoList: PicsumPhoto[] | undefined;

  photoNumber: number = 10;
  photoPage: number = 1;

  constructor(private picsumPhotoService: PicsumPhotoService) {}

  ngOnInit(): void {
    this.updatePhotoList();
  }

  updatePhotoList() {
    this.picsumPhotoService.getPicsumPhotoList().then((x) => {
      if (x != null) {
        // pagina N ( N = this.photoPage )
        this.picsumPhotoList = x.slice(
          (this.photoPage - 1) * this.photoNumber,
          this.photoPage * this.photoNumber
        );
      }
    });
  }

  onPageDown() {
    this.photoPage = Number(this.photoPage) - 1;
    if (this.photoPage < 1) this.photoPage = 1;
    this.updatePhotoList();
  }

  onPageUp() {
    this.photoPage = Number(this.photoPage) + 1;
    this.updatePhotoList();
  }
}
