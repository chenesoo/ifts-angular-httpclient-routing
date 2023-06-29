import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo.model';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-jsonplaceholder-list',
  templateUrl: './jsonplaceholder-list.component.html',
  styleUrls: ['./jsonplaceholder-list.component.css'],
})
export class JsonplaceholderListComponent implements OnInit {
  photoList: Photo[] | undefined;

  photoNumber: number = 10;
  photoPage: number = 1;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.updatePhotoList();
  }

  updatePhotoList() {
    this.photoService.getPhotoList().then((x) => {
      if (x != null) {
        // pagina N ( N = this.photoPage )
        this.photoList = x.slice(
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
