import { ChevronRight } from "lucide-react";
import { formatDate } from "@/common/utils";
import { api } from "@/common/api";
import { useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import useStore from "@/store";
import { useApi } from "@/common/hooks/useApi";
import type { Transaction } from "@/common/types";

function RecentTransactions() {
  const recentTransactions = useStore((state) => state.recentTransactions);
  const setRecentTransactions = useStore(
    (state) => state.setRecentTransactions
  );

  const { data: transactionsData, isLoading: isFetching } = useApi<
    Transaction[]
  >(() =>
    recentTransactions.length === 0
      ? api.getRecentTransactions()
      : Promise.resolve(recentTransactions)
  );

  useEffect(() => {
    if (transactionsData && transactionsData.length > 0) {
      setRecentTransactions(transactionsData);
    }
  }, [transactionsData, setRecentTransactions]);

  return (
    <div>
      {isFetching ? (
        <div className='flex justify-center items-center h-32'>
          <Spinner color='#01D167' />
        </div>
      ) : (
        recentTransactions.map((transaction, index) => (
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
                  alt={transaction.description}
                />
              </div>
            </div>
            <div className='flex-[9] flex flex-row pl-4'>
              <div className='flex-1 flex flex-col'>
                <p className='text-neutral-800 mb-2 text-sm font-semibold inline-block'>
                  {transaction.description}
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
        ))
      )}
      <div className='bg-emerald-50 flex justify-center items-center p-4 rounded-b-md'>
        <p className='text-sm text-green-500'>View all card transactions</p>
      </div>
    </div>
  );
}

export default RecentTransactions;
