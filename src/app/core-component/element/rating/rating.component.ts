import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
import { Star } from 'src/app/shared/model/page.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  public routes = routes;

  basicStar = [
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
  ];
  savedStar = [
    { show: true },
    { show: true },
    { show: true },
    { show: false },
    { show: false },
  ];
  maxStar = [
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
  ];
  readOnlyStar = [
    { show: true },
    { show: true },
    { show: true },
    { show: false },
    { show: false },
  ];
  halfRatingStar = [
    { show: true, half: false },
    { show: true, half: false },
    { show: false, half: true },
    { show: false, half: false },
    { show: false, half: false },
  ];
  heartIcon = [
    { show: false },
    { show: false },
    { show: false },
    { show: false },
    { show: false },
  ];


  clickBasicStar(item: Star, i: number, array: Star[]): void {
    if (item.show == false) {
      array.map((res: Star, index: number) => {
        if (index <= i) {
          res.show = true;
        }
      });
    } else {
      array.map((res: Star, index: number) => {
        if (index >= i && index != 0) {
          res.show = false;
        }
      });
    }
    if (array === this.halfRatingStar) {
      array.map((res: Star) => {
        res.half = false;
      });
    }
  }
}
