import type { AccountBalance, Card, Transaction } from "@/common/types";
import { create } from "zustand";

interface Store {
  accountBalance: AccountBalance;
  recentTransactions: Transaction[];
  cards: Card[];
}
export const useStore = create<Store>((set) => ({
  accountBalance: { availableBalance: 0, currency: "SGD" },
  recentTransactions: [],
  cards: [],
  setAccountBalance: (balance: AccountBalance) =>
    set(() => ({ accountBalance: balance })),
  setRecentTransactions: (transactions: Transaction[]) =>
    set((state) => ({
      recentTransactions: [...state.recentTransactions, ...transactions],
    })),
  setCards: (cards: Card[]) =>
    set((state) => ({ cards: [...state.cards, ...cards] })),
}));
