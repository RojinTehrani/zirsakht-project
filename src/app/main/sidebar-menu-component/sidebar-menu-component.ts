import { AfterViewInit, Component, ElementRef, Renderer2,Output,EventEmitter,Input,SimpleChanges,OnChanges  } from '@angular/core';
@Component({
  selector: 'app-sidebar-menu-component',
  templateUrl: './sidebar-menu-component.html',
  styleUrls: ['./sidebar-menu-component.css']
})
export class SidebarMenuComponent  implements AfterViewInit, OnChanges {

@Output() collapsedChanged = new EventEmitter<boolean>();
@Input() collapsedFromParent: boolean = false;
sidebarLockedCollapsed:boolean = false;
isCollapsed: boolean = false;

//constructor
constructor(private el: ElementRef, private renderer: Renderer2) {}

//on changes (listening to parent for changing window width and make changes on sidebar)
ngOnChanges(changes: SimpleChanges): void {
  if (changes['collapsedFromParent']) {
    this.isCollapsed = changes['collapsedFromParent'].currentValue;
    this.sidebarLockedCollapsed = window.innerWidth <= 1550;  
    this.updateSidebarClass();
  }
}

//after view init for toggle sidebar and dropdown
ngAfterViewInit(): void {
  this.sidebarLockedCollapsed = window.innerWidth <= 1550;

  const dropdownToggles = this.el.nativeElement.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach((toggle: Element) => {
    this.renderer.listen(toggle, 'click', (event: Event) => {
    event.preventDefault();

    const dropdownContainer = toggle.closest('.dropdown-container');
    const dropdownMenu = dropdownContainer?.querySelector('.dropdown-menu');

    if (dropdownMenu) {
      const isShown = dropdownMenu.classList.contains('show');
        if (isShown) {
          this.renderer.removeClass(dropdownMenu, 'show');
          } else {
          this.renderer.addClass(dropdownMenu, 'show');
          }
        }
      });
    });

    const toggleDropdown = (dropdown: HTMLElement, menu: HTMLElement, isOpen: boolean): void => {
      if (isOpen) {
        this.renderer.addClass(dropdown, 'open');
        this.renderer.setStyle(menu, 'height', `${menu.scrollHeight}px`);
      } else {
        this.renderer.removeClass(dropdown, 'open');
        this.renderer.setStyle(menu, 'height', '0');
      }
    };

    const closeAllDropdowns = (): void => {
      document.querySelectorAll<HTMLElement>('.dropdown-container.open').forEach(openDropdown => {
        const menu = openDropdown.querySelector<HTMLElement>('.dropdown-menu');
        if (menu) toggleDropdown(openDropdown, menu, false);
         this.renderer.removeClass(menu, 'show');
      });
    };

    // رویداد کلیک روی dropdown toggle ها
    document.querySelectorAll<HTMLElement>('.dropdown-toggle').forEach(dropdownToggle => {
      this.renderer.listen(dropdownToggle, 'click', (e: MouseEvent) => {
        e.preventDefault();

        const dropdown = dropdownToggle.closest('.dropdown-container') as HTMLElement | null;
        if (!dropdown) return;

        const menu = dropdown.querySelector<HTMLElement>('.dropdown-menu');
        if (!menu) return;

        const isOpen = dropdown.classList.contains('open');

        closeAllDropdowns();
        toggleDropdown(dropdown, menu, !isOpen);
      });
    });



 if (window.innerWidth <= 1550) {
  this.sidebarLockedCollapsed = true; 
  this.isCollapsed = true;
  this.updateSidebarClass();
  this.collapsedChanged.emit(this.isCollapsed);
} else {
  this.sidebarLockedCollapsed = false; 
}



    this.handleInitialCollapseOnSmallScreens();
  }



private updateSidebarClass(): void {
  const sidebar = this.el.nativeElement.querySelector('.sidebar');
  if (sidebar) {
    if (this.isCollapsed) {
      this.renderer.addClass(sidebar, 'collapsed');
    } else {
      this.renderer.removeClass(sidebar, 'collapsed');
    }
  }
}

  private handleInitialCollapseOnSmallScreens(): void {
  if (window.innerWidth <= 1550) {
    this.isCollapsed = true;
    this.collapsedChanged.emit(this.isCollapsed);
    this.updateSidebarClass();
  }
}

// toggle sidebar button method
  toggleSidebar(): void {
  if (this.sidebarLockedCollapsed) return; 

  this.isCollapsed = !this.isCollapsed;
  this.collapsedChanged.emit(this.isCollapsed);
  this.updateSidebarClass();
}








}
