import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [DataService]
})
export class GalleryComponent implements OnInit {
  galleryData: Item[] = [];
  showCount = false;
  
  constructor(private data: DataService) {
    this.galleryData = data.data
  }

  previewImage = false;
  showMask = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
  }
  /**
   * shows images
   */
  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
    this.showCount = true
  }

  

  onClosePreview(){
    this.previewImage = false;
    this.showMask = false;
  }

  next() :void {
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex>this.galleryData.length-1){
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }

  prev() :void {
    this.currentIndex = this.currentIndex - 1;
    if(this.currentIndex < 0 ){
      this.currentIndex = this.galleryData.length - 1;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }
}
