import FileStorageIcon from "@/assets/File_storage.svg";
import FlightIcon from "@/assets/Flights.svg";
import MegaPhoneIcon from "@/assets/Megaphone.svg";
import { ChevronRight } from "lucide-react";
import { formatDate } from "@/common/utils";

const recentTransactions = [
  {
    icon: FileStorageIcon,
    title: "Hamleys",
    createdAt: 1760162915,
    color: "#009DFF1A",
    amount: 100,
    currency: "SGD",
    type: "credit",
  },
  {
    icon: FlightIcon,
    title: "Hamleys",
    createdAt: 1760162915,
    color: "#00D6B51A",
    amount: 100,
    currency: "SGD",
    type: "debit",
  },
  {
    icon: MegaPhoneIcon,
    title: "Hamleys",
    createdAt: 1760162915,
    color: "#F251951A",
    amount: 100,
    currency: "SGD",
    type: "credit",
  },
  {
    icon: FileStorageIcon,
    title: "Hamleys",
    createdAt: 1760162915,
    color: "#009DFF1A",
    amount: 100,
    currency: "SGD",
    type: "debit",
  },
];

function RecentTransactions() {
  return (
    <div>
      {recentTransactions.map((transaction, index) => (
        <div
          className='p-4 flex border-b-2 border-l-1 border-r-1 border-[#F0F0F0]'
          key={index}
        >
          <div className='flex-[1] flex flex-col justify-center items-center'>
            <div
              className='flex w-8 h-8 rounded-full justify-center items-center mb-2'
              style={{ backgroundColor: transaction.color }}
            >
              <img
                className='w-4 h-4'
                src={transaction.icon}
                alt={transaction.title}
              />
            </div>
          </div>
          <div className='flex-[9] flex flex-row pl-4'>
            <div className='flex-1 flex flex-col'>
              <p className='text-neutral-800 mb-2 text-sm font-semibold inline-block'>
                {transaction.title}
              </p>
              <p className='text-neutral-400 text-xs mb-2'>
                {formatDate(transaction.createdAt)}
              </p>
              <p className='text-xs text-blue-700'>
                {transaction.type === "debit"
                  ? "Charged to debit card"
                  : "Refund on debit card"}
              </p>
            </div>
            <div className='flex-1 flex flex-row justify-end items-start'>
              <p
                className={`mb-2 text-sm font-semibold inline-block ${
                  transaction.type === "credit"
                    ? "text-green-500"
                    : "text-neutral-800"
                }`}
              >
                {transaction.type === "credit" ? "+" : "-"} S${" "}
                {transaction.amount}
              </p>
              <ChevronRight size={16} className='mb-0.5 text-neutral-400' />
            </div>
          </div>
        </div>
      ))}
      <div className='bg-emerald-50 flex justify-center items-center p-4 rounded-b-md'>
        <p className='text-sm text-green-500'>View all card transactions</p>
      </div>
    </div>
  );
}

export default RecentTransactions;
