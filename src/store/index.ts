import type { AccountBalance, Card, Transaction } from "@/common/types";
import { create } from "zustand";

interface Store {
  accountBalance: AccountBalance;
  recentTransactions: Transaction[];
  cards: Card[];
  addCard: (card: Card) => void;
  setRecentTransactions: (transactions: Transaction[]) => void;
  setAccountBalance: (balance: AccountBalance) => void;
  setCards: (cards: Card[]) => void;
}
const useStore = create<Store>((set) => ({
  accountBalance: { availableBalance: 0, currency: "SGD" },
  recentTransactions: [],
  cards: [],
  setRecentTransactions: (transactions: Transaction[]) =>
    set({
      recentTransactions: transactions,
    }),
  setAccountBalance: (balance: AccountBalance) =>
    set({ accountBalance: balance }),
  addCard: (cards: Card) =>
    set((state) => ({ cards: [...state.cards, cards] })),
  setCards: (cards: Card[]) => set({ cards: cards }),
}));

export default useStore;
