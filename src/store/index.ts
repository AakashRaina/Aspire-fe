import type { AccountBalance, Card, Transaction } from "@/common/types";
import { create } from "zustand";

interface Store {
  accountBalance: AccountBalance;
  recentTransactions: Transaction[];
  cards: Card[];
  addCard: (card: Card) => void;
}
const useStore = create<Store>((set) => ({
  accountBalance: { availableBalance: 0, currency: "SGD" },
  recentTransactions: [],
  cards: [
    {
      id: 1,
      cardNumber: "4567890123456789",
      cardHolderName: "Aakash Raina",
      expMonth: "12",
      expYear: "2025",
      cvv: "123",
      cardType: "visa",
    },
  ],
  addCard: (cards: Card) =>
    set((state) => ({ cards: [...state.cards, cards] })),
}));

export default useStore;
