import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html',
})
export class SideMenu {

  menuItem = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(":"));



  constructor() {
    console.log(this.menuItem)
  }
}
