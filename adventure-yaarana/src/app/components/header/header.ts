import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavigationLink {
  label: string;
  route: string;
  isContactButton?: boolean;
}

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  // Company Information
  companyInfo = {
    name: 'Adventure Yaarana',
    logoPath: 'assets/logo.svg'
  };

  // Navigation Links
  navigationLinks: NavigationLink[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Our Trips', route: '/trips' },
    { label: 'Services', route: '/services' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Blog', route: '/blog' },
    { label: 'Contact Us', route: '/contact', isContactButton: true }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
