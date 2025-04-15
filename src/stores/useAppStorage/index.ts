import { create } from "zustand";
import { MMKV } from "react-native-mmkv";
import type { IAppStorageSchema, IAppStorageKey } from "./types";
import { IStore } from "./types";

const storage = new MMKV();

function loadInitialData(): Partial<IAppStorageSchema> {
  const keys = storage.getAllKeys() as IAppStorageKey[];
  const data: Partial<IAppStorageSchema> = {};

  for (const key of keys) {
    const rawValue = storage.getString(key);

    if (rawValue !== undefined) {
      try {
        data[key] = JSON.parse(rawValue);
      } catch {
        data[key] = undefined;
      }
    }
  }

  return data;
}

export const useAppStorage = create<IStore>((set, get) => ({
  data: loadInitialData(),

  setItem: (key, value) => {
    storage.set(key, JSON.stringify(value));

    set((state) => ({
      data: {
        ...state.data,
        [key]: value,
      },
    }));
  },

  getItem: (key) => {
    return get().data[key];
  },

  updateItem: (key, updater) => {
    const current = get().getItem(key);
    const updated = updater(current);
    get().setItem(key, updated);
  },

  removeItem: (key) => {
    storage.delete(key);

    set((state) => {
      const updatedData = { ...state.data };
      delete updatedData[key];

      return {
        data: updatedData,
      };
    });
  },
}));
