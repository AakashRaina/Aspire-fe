import FileStorageIcon from "@/assets/File_storage.svg";
import FlightIcon from "@/assets/Flights.svg";
import MegaPhoneIcon from "@/assets/Megaphone.svg";
import type { Card, Transaction, AccountBalance } from "./types";

const mockCards: Card[] = [
  {
    id: 1,
    cardNumber: "4567890123456789",
    cardHolderName: "Aakash Raina",
    expMonth: "12",
    expYear: "2025",
    cvv: "123",
    cardType: "visa",
  },
];

const mockTransactions: Transaction[] = [
  {
    id: 1,
    icon: FileStorageIcon,
    description: "Hamleys",
    createdAt: 1760162915,
    color: "#009DFF1A",
    amount: 100,
    currency: "SGD",
    type: "credit",
  },
  {
    id: 2,
    icon: FlightIcon,
    description: "Hamleys",
    createdAt: 1760162915,
    color: "#00D6B51A",
    amount: 100,
    currency: "SGD",
    type: "debit",
  },
  {
    id: 3,
    icon: MegaPhoneIcon,
    description: "Hamleys",
    createdAt: 1760162915,
    color: "#F251951A",
    amount: 100,
    currency: "SGD",
    type: "credit",
  },
  {
    id: 4,
    icon: FileStorageIcon,
    description: "Hamleys",
    createdAt: 1760162915,
    color: "#009DFF1A",
    amount: 100,
    currency: "SGD",
    type: "debit",
  },
];

const mockAccountBalance: AccountBalance = {
  availableBalance: 3000,
  currency: "S$",
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getCards(): Promise<Card[]> {
  await delay(1000);
  return mockCards;
}

async function getRecentTransactions(): Promise<Transaction[]> {
  await delay(1000);
  return mockTransactions;
}

async function getAccountBalance(): Promise<AccountBalance> {
  await delay(1000);
  return mockAccountBalance;
}

export const api = {
  getAccountBalance,
  getCards,
  getRecentTransactions,
};
