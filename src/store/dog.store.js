import { create } from "zustand";
import { getDog } from "../services/dog.services";
import { adaptDog } from '../utils/dog.util.js';

export const useDog = create((set) => ({
    dog: [],
    getDog: async () => {
        try {
            const data = await getDog();
            if (data) {
                set({ dog: [adaptDog(data)] });
            } else {
                set({ dog: [] });
            }
        } catch (error) {
            console.error("Error in store:", error);
            set({ dog: [] });
        }
    },
}));
