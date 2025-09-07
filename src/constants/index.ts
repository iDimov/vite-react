// Pagination
export const INITIAL_VISIBLE_COUNT = 6;
export const ITEMS_INCREMENT = 6;

// API Configuration
export const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const equipmentData: Record<
  string,
  { icon: string; label: string; type: 'boolean' | 'string' }
> = {
  AC: { icon: 'icon-ac', label: 'AC', type: 'boolean' },
  TV: { icon: 'icon-tv', label: 'TV', type: 'boolean' },
  bathroom: { icon: 'icon-bathroom', label: 'Bathroom', type: 'boolean' },
  kitchen: { icon: 'icon-kitchen', label: 'Kitchen', type: 'boolean' },
  microwave: { icon: 'icon-microwave', label: 'Microwave', type: 'boolean' },
  radio: { icon: 'icon-radio', label: 'Radio', type: 'boolean' },
  refrigerator: { icon: 'icon-refrigerator', label: 'Refrigerator', type: 'boolean' },
  water: { icon: 'icon-water', label: 'Water', type: 'boolean' },
  gas: { icon: 'icon-gas', label: 'Gas', type: 'boolean' },
  engine: { icon: 'icon-engine', label: 'Engine', type: 'string' },
  transmission: { icon: 'icon-transmission', label: 'Transmission', type: 'string' },
};

export const typeData = [
    { key: "panelTruck", label: "Van", icon: 'icon-van' },
    { key: "fullyIntegrated", label: "Fully Integrated", icon: 'icon-fully-integrated' },
    { key: "alcove", label: "Alcove", icon: 'icon-alcove' },
  ];
