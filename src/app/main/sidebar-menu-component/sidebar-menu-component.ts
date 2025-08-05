import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-sidebar-menu-component',
  templateUrl: './sidebar-menu-component.html',
  styleUrls: ['./sidebar-menu-component.css']
})
export class SidebarMenuComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void {


    const dropdownToggles = this.el.nativeElement.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach((toggle: Element) => {
      this.renderer.listen(toggle, 'click', (event: Event) => {
        event.preventDefault(); // جلوگیری از رفتن به href="#"

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

    // رویداد کلیک روی دکمه‌های sidebar toggle
    document.querySelectorAll<HTMLElement>('.sidebar-toggler, .sidebar-menu-button').forEach(button => {
      this.renderer.listen(button, 'click', () => {
        closeAllDropdowns();
        const sidebar = document.querySelector<HTMLElement>('.sidebar');
        if (sidebar) sidebar.classList.toggle('collapsed');
      });
    });

    if (window.innerWidth <= 1024) {
      const sidebar = document.querySelector<HTMLElement>('.sidebar');
      if (sidebar) this.renderer.addClass(sidebar, 'collapsed');
    }
  }



  
}
