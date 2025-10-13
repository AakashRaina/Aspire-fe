import type { AccountBalance, Card, Transaction } from "@/common/types";
import { create } from "zustand";

interface Store {
  accountBalance: AccountBalance;
  recentTransactions: Transaction[];
  cards: Card[];
}
const useStore = create<Store>((set) => ({
  accountBalance: { availableBalance: 0, currency: "SGD" },
  recentTransactions: [],
  cards: [
    {
      id: 1,
      cardNumber: "4567890123456789",
      cardHolderName: "Aakash Raina",
      expiryDate: "12/25",
      cvv: "123",
      cardType: "visa",
    },
  ],
  setAccountBalance: (balance: AccountBalance) =>
    set(() => ({ accountBalance: balance })),
  setRecentTransactions: (transactions: Transaction[]) =>
    set((state) => ({
      recentTransactions: [...state.recentTransactions, ...transactions],
    })),
  setCards: (cards: Card[]) =>
    set((state) => ({ cards: [...state.cards, ...cards] })),
}));

export default useStore;
