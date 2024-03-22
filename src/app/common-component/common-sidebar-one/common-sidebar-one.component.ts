import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, routes } from 'src/app/core/core.index';
import { ActivatedRoute, NavigationEnd, Router, Event as RouterEvent, RouterLink } from '@angular/router';
import { url } from 'src/app/shared/model/sidebar.model';

import { sharedModule } from 'src/app/shared/shared.module';
@Component({
  selector: 'app-common-sidebar-one',
  standalone: true,
  imports: [CommonModule, RouterLink, sharedModule],
  templateUrl: './common-sidebar-one.component.html',
  styleUrls: ['./common-sidebar-one.component.scss']
})
export class CommonSidebarOneComponent {
  public routes = routes;
  base = '';
  page = '';
  currentUrl = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public side_bar_data: Array<any> = [];

  constructor(

    private sidebar: SidebarService,
    private router: Router,

  ) {
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    const superadmin = sessionStorage.getItem("superadmin-token")
    const admin = sessionStorage.getItem("admin-token")
    const client = sessionStorage.getItem("client-token")
    const user = sessionStorage.getItem("user-token")
    if (superadmin) {
      this.side_bar_data = this.sidebar.sidebarData1
    }
    else if (admin) {
      this.side_bar_data = this.sidebar.sidebarData2;
    }
    else if (client) {
      this.side_bar_data = this.sidebar.sidebarClient;

    }
    else if (user) {
      this.side_bar_data = this.sidebar.sidebarUser;
    }
  }

  private getRoutes(route: url): void {
    const splitVal = route.url.split('/');
    this.currentUrl = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
    console.log('base', this.base);
    const role = sessionStorage.getItem("role")
    console.log('role', role);
    console.log('page', this.page);

  }

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public expandSubMenus(menu: any): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.side_bar_data.map((mainMenus: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mainMenus.menu.map((resMenu: any) => {
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }

}
