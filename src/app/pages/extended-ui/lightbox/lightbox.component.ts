import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})

/**
 * Lightbox Component
 */
export class LightboxComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  images: { src: string; thumb: string; caption: string }[] = [];
  gallery: { src: string; thumb: string; caption: string }[] = [];

  id = 'JlvxDa7Sges';

  constructor(private lightbox: Lightbox, private modalService: NgbModal) {
    /**
     * Single Image Lightbox
     */
    for (let i = 1; i <= 2; i++) {
      const src = '../../../assets/images/small/img-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/small/img-' + i + '.jpg';
      const album = {
        src,
        caption,
        thumb
      };
      this.images.push(album);
    }

    /**
     * Images with Description
     */
    for (let i = 4; i <= 6; i++) {
      const src = '../../../assets/images/small/img-' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/small/img-' + i + '.jpg';
      const album = {
        src,
        caption,
        thumb
      };
      this.gallery.push(album);
    }
  }

  ngOnInit(): void {
    /**
     * BreadCrumb 
     */
    this.breadCrumbItems = [
      { label: 'Extended UI' },
      { label: 'Lightbox', active: true }
    ];
  }

  /**
   * Open lightbox
   */
  openImage(index: number): void {
    // open lightbox
    this.lightbox.open(this.images, index, {
      showZoom: true
    });
  }

  /**
   * Open ZoomGallery lightbox
   */
  openZoomGallery(index: number): void {
    // open lightbox
    this.lightbox.open(this.gallery, index, {
      wrapAround: true, showImageNumberLabel: true
    });
  }

  /**
   * Open modal
   * @param content modal content
   */
  openYoutubeModal(content: any) {
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }

  /**
   * Open modal
   * @param content modal content
   */
  openVimeoModal(content: any) {
    this.modalService.open(content, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }

}
