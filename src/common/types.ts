export interface Card {
  id: number;
  cardNumber: string;
  cardHolderName: string;
  expMonth: string;
  expYear: string;
  cvv: string;
  cardType: "visa" | "mastercard";
}

export interface Transaction {
  id: number;
  description: string;
  icon: string;
  amount: number;
  currency: string;
  createdAt: number;
  type: "debit" | "credit";
  color: string;
}

export interface AccountBalance {
  availableBalance: number;
  currency: string;
}
