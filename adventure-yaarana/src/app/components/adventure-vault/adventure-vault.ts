import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TravelPhoto {
  id: number;
  src: string;
  title: string;
  location: string;
  description: string;
  tags: string[];
  date: string;
  category: string;
}

@Component({
  selector: 'app-adventure-vault',
  imports: [CommonModule],
  templateUrl: './adventure-vault.html',
  styleUrls: ['./adventure-vault.scss']
})
export class AdventureVaultComponent {
  selectedCategory = 'all';
  selectedPhoto: TravelPhoto | null = null;
  isModalOpen = false;

  // Page Information
  pageInfo = {
    title: 'Adventure Vault',
    subtitle: 'A treasure trove of unforgettable moments and breathtaking destinations',
    description: 'Explore our collection of stunning travel photography capturing the essence of adventure, culture, and natural beauty from around the world.'
  };

  // Photo Categories
  categories = [
    { id: 'all', name: 'All Adventures', icon: '🌍' },
    { id: 'mountains', name: 'Mountains', icon: '🏔️' },
    { id: 'beaches', name: 'Beaches', icon: '🏖️' },
    { id: 'cities', name: 'Cities', icon: '🏙️' },
    { id: 'culture', name: 'Culture', icon: '🎭' },
    { id: 'wildlife', name: 'Wildlife', icon: '🦁' },
    { id: 'adventure', name: 'Adventure Sports', icon: '🚵‍♂️' }
  ];

  // Travel Photos Collection
  travelPhotos: TravelPhoto[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Himalayan Sunrise',
      location: 'Himalayas, Nepal',
      description: 'Witnessing the first rays of sun painting the snow-capped peaks in golden hues.',
      tags: ['mountains', 'sunrise', 'trekking'],
      date: '2023-10-15',
      category: 'mountains'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Goa Beach Bliss',
      location: 'Goa, India',
      description: 'Crystal clear waters and pristine beaches perfect for relaxation and water sports.',
      tags: ['beach', 'sunset', 'relaxation'],
      date: '2023-08-22',
      category: 'beaches'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Rajasthan Royal Heritage',
      location: 'Jaipur, Rajasthan',
      description: 'Magnificent palaces and forts showcasing the rich cultural heritage of India.',
      tags: ['heritage', 'architecture', 'culture'],
      date: '2023-09-10',
      category: 'culture'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mumbai City Lights',
      location: 'Mumbai, Maharashtra',
      description: 'The bustling metropolis comes alive with vibrant energy and endless possibilities.',
      tags: ['cityscape', 'nightlife', 'urban'],
      date: '2023-07-05',
      category: 'cities'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Wildlife Safari',
      location: 'Jim Corbett, Uttarakhand',
      description: 'Encountering magnificent wildlife in their natural habitat during an unforgettable safari.',
      tags: ['wildlife', 'safari', 'nature'],
      date: '2023-11-03',
      category: 'wildlife'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'River Rafting Rush',
      location: 'Rishikesh, Uttarakhand',
      description: 'Thrilling white water rafting through the rapids of the sacred Ganges river.',
      tags: ['adventure', 'rafting', 'adrenaline'],
      date: '2023-06-18',
      category: 'adventure'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Kashmir Valley',
      location: 'Srinagar, Kashmir',
      description: 'The paradise on earth with its stunning lakes, gardens, and snow-capped mountains.',
      tags: ['valleys', 'lakes', 'paradise'],
      date: '2023-05-12',
      category: 'mountains'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Andaman Islands',
      location: 'Havelock Island, Andaman',
      description: 'Pristine beaches with turquoise waters perfect for diving and water sports.',
      tags: ['islands', 'diving', 'pristine'],
      date: '2023-04-08',
      category: 'beaches'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Delhi Heritage Walk',
      location: 'Old Delhi, Delhi',
      description: 'Exploring the narrow lanes and ancient monuments of India\'s historic capital.',
      tags: ['heritage', 'history', 'walking'],
      date: '2023-03-25',
      category: 'culture'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Manali Adventure',
      location: 'Manali, Himachal Pradesh',
      description: 'Snow-covered peaks and adventure sports in the beautiful hill station of Manali.',
      tags: ['hills', 'snow', 'adventure'],
      date: '2023-02-14',
      category: 'mountains'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Goa Beach Sunset',
      location: 'Arambol Beach, Goa',
      description: 'Magical sunset moments by the Arabian Sea with vibrant colors painting the sky.',
      tags: ['sunset', 'beach', 'magical'],
      date: '2023-01-20',
      category: 'beaches'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1587979049722-78b9b06b5dd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Bangalore Gardens',
      location: 'Bangalore, Karnataka',
      description: 'Lush green gardens and modern architecture in India\'s Silicon Valley.',
      tags: ['gardens', 'modern', 'green'],
      date: '2023-12-10',
      category: 'cities'
    }
  ];

  // Filter photos by category
  get filteredPhotos() {
    if (this.selectedCategory === 'all') {
      return this.travelPhotos;
    }
    return this.travelPhotos.filter(photo => photo.category === this.selectedCategory);
  }

  // Get category info
  get currentCategoryInfo() {
    return this.categories.find(cat => cat.id === this.selectedCategory) || this.categories[0];
  }

  // Set selected category
  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }

  // Open photo modal
  openPhotoModal(photo: TravelPhoto) {
    this.selectedPhoto = photo;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  // Close photo modal
  closePhotoModal() {
    this.selectedPhoto = null;
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  // Navigate through photos in modal
  navigatePhoto(direction: 'prev' | 'next') {
    if (!this.selectedPhoto) return;
    
    const currentIndex = this.filteredPhotos.findIndex(photo => photo.id === this.selectedPhoto!.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : this.filteredPhotos.length - 1;
    } else {
      newIndex = currentIndex < this.filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }
    
    this.selectedPhoto = this.filteredPhotos[newIndex];
  }

  // Track by function for ngFor performance
  trackByPhotoId(index: number, photo: TravelPhoto): number {
    return photo.id;
  }

  // Format date for display
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}