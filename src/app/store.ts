import { create } from "zustand";

type cursorStore = {
  type: string;
  change: (newType: string) => void;
};

export const useCursorStore = create<cursorStore>()((set) => ({
  type: "idle",
  change: (newType) => set(() => ({ type: newType })),
}));
