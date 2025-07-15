import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactMethod {
  icon: string;
  title: string;
  details: string[];
}

interface FormOption {
  value: string;
  label: string;
}

interface BusinessHours {
  day: string;
  hours: string;
}

interface SocialLink {
  platform: string;
  icon: string;
  url: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  // Contact Information
  contactInfo = {
    pageTitle: 'Contact Us',
    pageSubtitle: 'Let\'s plan your next adventure together',
    formTitle: 'Send us a Message',
    getInTouchTitle: 'Get in Touch'
  };

  // Contact Methods
  contactMethods: ContactMethod[] = [
    {
      icon: '📧',
      title: 'Email Us',
      details: [
        'info@adventureyaarana.com',
        'support@adventureyaarana.com'
      ]
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: [
        '+91 98765 43210',
        '+91 87654 32109'
      ]
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: [
        '123 Adventure Street,',
        'Colaba, Mumbai - 400001',
        'Maharashtra, India'
      ]
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 7:00 PM',
        'Saturday: 10:00 AM - 6:00 PM',
        'Sunday: 11:00 AM - 5:00 PM'
      ]
    }
  ];

  // Form Options
  tripTypes: FormOption[] = [
    { value: '', label: 'Select Trip Type' },
    { value: 'corporate', label: 'Corporate Trip' },
    { value: 'honeymoon', label: 'Honeymoon Package' },
    { value: 'couple', label: 'Couple Adventure' },
    { value: 'friends', label: 'Friends Group' },
    { value: 'large-group', label: 'Large Group' },
    { value: 'custom', label: 'Custom Package' }
  ];

  budgetRanges: FormOption[] = [
    { value: '', label: 'Select Budget' },
    { value: 'under-10k', label: 'Under ₹10,000' },
    { value: '10k-25k', label: '₹10,000 - ₹25,000' },
    { value: '25k-50k', label: '₹25,000 - ₹50,000' },
    { value: '50k-100k', label: '₹50,000 - ₹1,00,000' },
    { value: 'above-100k', label: 'Above ₹1,00,000' }
  ];

  // Social Media Links
  socialLinks: SocialLink[] = [
    { platform: 'facebook', icon: '📘', url: 'https://facebook.com/adventureyaarana', ariaLabel: 'Facebook' },
    { platform: 'instagram', icon: '📷', url: 'https://instagram.com/adventureyaarana', ariaLabel: 'Instagram' },
    { platform: 'twitter', icon: '🐦', url: 'https://twitter.com/adventureyaarana', ariaLabel: 'Twitter' },
    { platform: 'youtube', icon: '📺', url: 'https://youtube.com/adventureyaarana', ariaLabel: 'YouTube' },
    { platform: 'whatsapp', icon: '💬', url: 'https://wa.me/919876543210', ariaLabel: 'WhatsApp' }
  ];

  // Map Information
  mapInfo = {
    title: 'Find Us',
    sectionTitle: '📍 Our Location',
    address: '123 Adventure Street, Colaba, Mumbai - 400001',
    landmark: 'Near Gateway of India & Taj Hotel'
  };

  // Form handling
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Here you can handle form submission
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Add your form handling logic here
    alert('Thank you for your message! We will get back to you soon.');
  }
}
