import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent {
  public routes = routes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public albumsOne: any = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public albumsTwo: any = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 5; i++) {
      const src = 'assets/img/img-0' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';

      this.albumsOne.push({ src: src });
      this.albumsTwo.push({ src: src, caption: caption });
    }
   }
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }

  close(): void {
    this._lightbox.close();
  }
 

}
