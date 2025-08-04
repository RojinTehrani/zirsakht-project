import { Component } from '@angular/core';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PickListModule } from 'primeng/picklist';
import { RouterOutlet } from '@angular/router';

import { SidebarMenuComponent } from './sidebar-menu-component/sidebar-menu-component';

import { LoginComponent } from "./auth/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PickListModule, LoginComponent, PickListModule, ToggleButtonModule, LoginComponent,SidebarMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sourceProducts: any[];
  targetProducts: any[];

  constructor() {
    this.sourceProducts = [
      { name: 'محصول ۱', code: 'P1' },
      { name: 'محصول ۲', code: 'P2' },
      { name: 'محصول ۳', code: 'P3' },
      { name: 'محصول ۴', code: 'P4' }
    ];
    this.targetProducts = [];
  }

}
