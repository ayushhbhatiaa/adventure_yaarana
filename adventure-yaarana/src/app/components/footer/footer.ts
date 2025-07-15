import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavigationLink {
  label: string;
  route: string;
}

interface ServiceItem {
  name: string;
}

interface ContactInfo {
  icon: string;
  text: string;
}

interface SocialLink {
  platform: string;
  icon: string;
  url: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  // Company Information
  companyInfo = {
    name: 'Adventure Yaarana',
    logoPath: 'assets/logo.svg',
    description: 'Creating unforgettable travel experiences since 2020. Your adventure, our expertise.',
    establishedYear: 2020,
    currentYear: new Date().getFullYear()
  };

  // Navigation Links
  quickLinks: NavigationLink[] = [
    { label: 'Home', route: '/home' },
    { label: 'About Us', route: '/about' },
    { label: 'Our Trips', route: '/trips' },
    { label: 'Services', route: '/services' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Blog', route: '/blog' }
  ];

  // Services List
  services: ServiceItem[] = [
    { name: 'Corporate Trips' },
    { name: 'Honeymoon Packages' },
    { name: 'Couple Adventures' },
    { name: 'Friends Getaway' },
    { name: 'Group Tours' },
    { name: 'Custom Packages' }
  ];

  // Contact Information
  contactInfo: ContactInfo[] = [
    { icon: '📧', text: 'info@adventureyaarana.com' },
    { icon: '📞', text: '+91 98765 43210' },
    { icon: '📍', text: 'Mumbai, Maharashtra, India' }
  ];

  // Social Media Links
  socialLinks: SocialLink[] = [
    { platform: 'facebook', icon: '📘', url: 'https://facebook.com/adventureyaarana', ariaLabel: 'Facebook' },
    { platform: 'instagram', icon: '📷', url: 'https://instagram.com/adventureyaarana', ariaLabel: 'Instagram' },
    { platform: 'twitter', icon: '🐦', url: 'https://twitter.com/adventureyaarana', ariaLabel: 'Twitter' },
    { platform: 'youtube', icon: '📺', url: 'https://youtube.com/adventureyaarana', ariaLabel: 'YouTube' }
  ];

  // Footer Bottom Text
  legalInfo = {
    copyrightText: `© ${this.companyInfo.currentYear} ${this.companyInfo.name}. All rights reserved.`,
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service'
  };
}
