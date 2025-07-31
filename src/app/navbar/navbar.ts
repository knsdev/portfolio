import { Component, HostListener } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

const NAV_BREAKPOINT: number = 951; // has to be 1px greater than the breakpoint in css

@Component({
  selector: 'app-navbar',
  imports: [NgTemplateOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  animations: [
    trigger('navExpand', [
      transition(':enter', [
        style({ height: 0, color: 'rgba(0,0,0,0)' }),
        animate('300ms ease-out', style({ height: '*', color: 'rgba(0,0,0,1)' })),
      ]),
      transition(':leave', [animate('200ms ease-in', style({ height: 0, color: 'rgba(0,0,0,0)' }))]),
    ]),
  ],
})
export class Navbar {
  collapsed: boolean = true;
  isSmallScreen = window.innerWidth < NAV_BREAKPOINT;

  toggleNavbar() {
    this.collapsed = !this.collapsed;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.isSmallScreen = window.innerWidth < NAV_BREAKPOINT;

    if (!this.isSmallScreen) {
      this.collapsed = true;
    }
  }

  scrollToSection(id: string): void {
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }

  scrollToSectionCloseNavbar(id: string): void {
    this.scrollToSection(id);
    this.collapsed = true;
  }
}
