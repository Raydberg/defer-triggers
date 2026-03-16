import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenu } from '../shared/side-menu/side-menu';

@Component({
  selector: 'dashboard',
  imports: [RouterModule,SideMenu],
  templateUrl: './dashboard.html',
})
export default class Dashboard { }
