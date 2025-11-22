
export enum CategoryType {
  FAUCET = "FAUCET_HUB",
  PTC = "AD_NETWORK",
  GAMING = "ARCADE_SECTOR",
  TASKS = "BOUNTY_BOARD",
  NODES = "SERVER_FARM",
  DEFI = "DEFI_VAULT",
  TOOLS = "GEAR_DEPOT",
  SOCIAL = "SOCIAL_GRID"
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description: string;
  category: CategoryType;
  tags: string[];
  color: string; // Tailwind class for accent
  isHot?: boolean;
  isNew?: boolean;
}

export interface CategoryMeta {
  id: CategoryType;
  label: string;
  description: string;
  icon: any; // Lucide Icon component
  color: string; // Hex for glow effects
}

// Tracking System Types
export interface DailyLog {
  completed: boolean;
  earnings: number; // In USD (or generic units)
  lastUpdated: number; // Timestamp
}

export interface UserStats {
  totalXp: number;
  level: number;
  streak: number;
  dailyLogs: Record<string, DailyLog>; // Keyed by Link ID
}
