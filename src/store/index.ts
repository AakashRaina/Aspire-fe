import type { AccountBalance, Card, Transaction } from "@/common/types";
import { create } from "zustand";

interface Store {
  accountBalance: AccountBalance;
  recentTransactions: Transaction[];
  cards: Card[];
  isBottomSheetOpen: boolean;
  addCard: (card: Card) => void;
  setRecentTransactions: (transactions: Transaction[]) => void;
  setAccountBalance: (balance: AccountBalance) => void;
  setCards: (cards: Card[]) => void;
  toggleBottomSheet: () => void;
}
const useStore = create<Store>((set) => ({
  accountBalance: { availableBalance: 0, currency: "SGD" },
  recentTransactions: [],
  cards: [],
  isBottomSheetOpen: true,
  setRecentTransactions: (transactions: Transaction[]) =>
    set({
      recentTransactions: transactions,
    }),
  setAccountBalance: (balance: AccountBalance) =>
    set({ accountBalance: balance }),
  addCard: (cards: Card) =>
    set((state) => ({ cards: [...state.cards, cards] })),
  setCards: (cards: Card[]) => set({ cards: cards }),
  toggleBottomSheet: () =>
    set((state) => ({ isBottomSheetOpen: !state.isBottomSheetOpen })),
}));

export default useStore;
