import { create } from "zustand";
import type { SortOrder } from "../components/GameSortSelectors";

interface GameQuery {
  genreId?: string | null;
  searchText?: string;
  sortBy?: string;
  sortOrder?: SortOrder;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: string | null) => void;
  setSearchText: (searchText: string) => void;
  setSortBy: (sortBy: string) => void;
  setSortOrder: (sortOrder: SortOrder) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setSortBy: (sortBy) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortBy } })),
  setSortOrder: (sortOrder) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
