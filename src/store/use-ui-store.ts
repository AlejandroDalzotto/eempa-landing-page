import { create } from 'zustand'

interface State {
  isOpen: boolean;
  toggle: () => void;
}

export const useUIStore = create<State>()((set, get) => ({
  isOpen: false,
  toggle: () => set({ isOpen: !(get().isOpen) })
}))