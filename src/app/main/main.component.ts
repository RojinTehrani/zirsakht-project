import { Component } from '@angular/core';
import { SidebarMenuComponent } from './sidebar-menu-component/sidebar-menu-component';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-main',
  imports: [SidebarMenuComponent , DashboardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
