export interface Business {
  id: string;
  name: string;
  category: string;
  type: "quick-pickup" | "time-slot";
  image: string;
  rating: number;
  reviewCount: number;
  address: string;
  nextSlot: string;
  waitTime: string;
  isOpen: boolean;
  pickupTime?: string; // For quick pickup
  availableSlots?: string[]; // For time slots
}

export const mockBusinesses: Business[] = [
  // QUICK PICKUP - Ritira e vai
  {
    id: "1",
    name: "Supermercato Conad",
    category: "Spesa",
    type: "quick-pickup",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=300&fit=crop",
    rating: 4.5,
    reviewCount: 234,
    address: "Via Roma 15, Milano",
    nextSlot: "Pronto in 45 min",
    waitTime: "45-60 min",
    isOpen: true,
    pickupTime: "45 min"
  },
  {
    id: "2", 
    name: "Panetteria Goldoni",
    category: "Panetteria",
    type: "quick-pickup",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    rating: 4.6,
    reviewCount: 89,
    address: "Corso Buenos Aires 8, Milano",
    nextSlot: "Pronto in 20 min",
    waitTime: "20-30 min",
    isOpen: true,
    pickupTime: "20 min"
  },
  {
    id: "3",
    name: "Farmacia San Marco", 
    category: "Farmacia",
    type: "quick-pickup",
    image: "https://images.unsplash.com/photo-1576670159805-381123e5a2e4?w=400&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 156,
    address: "Piazza del Duomo 12, Milano",
    nextSlot: "Pronto in 15 min",
    waitTime: "15-25 min", 
    isOpen: true,
    pickupTime: "15 min"
  },
  {
    id: "4",
    name: "Caffè Centrale Take Away",
    category: "Caffetteria", 
    type: "quick-pickup",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
    rating: 4.4,
    reviewCount: 143,
    address: "Via Montenapoleone 5, Milano",
    nextSlot: "Pronto in 5 min",
    waitTime: "5-10 min",
    isOpen: true,
    pickupTime: "5 min"
  },
  
  // TIME SLOT - Prenota fasce orarie
  {
    id: "5",
    name: "Mario's Barbershop",
    category: "Barbiere",
    type: "time-slot",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 124,
    address: "Via Roma 25, Milano",
    nextSlot: "15:30 oggi",
    waitTime: "30 min slot",
    isOpen: true,
    availableSlots: ["15:30", "16:00", "17:30", "18:00"]
  },
  {
    id: "6",
    name: "Studio Medico Rossi",
    category: "Medico",
    type: "time-slot",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop", 
    rating: 4.9,
    reviewCount: 89,
    address: "Via San Babila 10, Milano",
    nextSlot: "14:30 oggi",
    waitTime: "15 min slot",
    isOpen: true,
    availableSlots: ["14:30", "15:00", "16:30", "17:00"]
  },
  {
    id: "7",
    name: "Estetica Bella Vista",
    category: "Estetica",
    type: "time-slot",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    rating: 4.7,
    reviewCount: 67,
    address: "Via Brera 22, Milano",
    nextSlot: "17:45 oggi",
    waitTime: "60 min slot",
    isOpen: true,
    availableSlots: ["17:45", "19:00"]
  },
  {
    id: "8",
    name: "Trattoria del Centro", 
    category: "Ristorante",
    type: "time-slot",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    rating: 4.9,
    reviewCount: 256,
    address: "Piazza del Duomo 2, Milano",
    nextSlot: "20:15 oggi",
    waitTime: "120 min slot", 
    isOpen: true,
    availableSlots: ["19:30", "20:15", "21:00"]
  }
];