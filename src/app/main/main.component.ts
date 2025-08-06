import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu-component/sidebar-menu-component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [SidebarMenuComponent , DashboardComponent,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
sidebarIsCollapsed = false;


  constructor() {
    this.sidebarIsCollapsed = window.innerWidth < 1550;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;

    if (width < 1550 && !this.sidebarIsCollapsed) {
      this.sidebarIsCollapsed = true;
    }

    if (width >= 1550 && this.sidebarIsCollapsed) {
      this.sidebarIsCollapsed = false;
    }
  }
  onSidebarToggle(isCollapsed: boolean) {
    this.sidebarIsCollapsed = isCollapsed;
    }


}
