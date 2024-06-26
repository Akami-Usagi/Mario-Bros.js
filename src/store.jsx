import { create } from "zustand";

export const useStore = create((set) => ({
  gravity: 90,
  setGravity: (gravity) => set({ gravity }),
  nodes: null,
  setNodes: (nodes) => set({ nodes }),
  materials: null,
  setMaterials: (materials) => set({ materials }),
  shoes: null,
  setShoes: (shoes) => set({ shoes }),
  alive: true,
  setAlive: (alive) => set({ alive }),
  gameStarted: false,
  setGameStarted: (gameStarted) => set({ gameStarted }),
}));