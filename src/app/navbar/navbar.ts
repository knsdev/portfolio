import { Component, HostListener } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

const NAV_BREAKPOINT: number = 903; // has to be 1px greater than the breakpoint in css

@Component({
  selector: 'app-navbar',
  imports: [NgTemplateOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
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
}
