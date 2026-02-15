export type ViewState = 'login' | 'dashboard';
export type TabState = 'home' | 'stats' | 'profile';
export type OverlayState = 'none' | 'leave-application' | 'leave-progress';

export interface User {
  name: string;
  role: string;
  department: string;
  avatar: string;
  id: string;
  rank: number;
}