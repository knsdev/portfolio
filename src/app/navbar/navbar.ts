import { Component, HostListener } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

const NAV_BREAKPOINT: number = 902;

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
}
