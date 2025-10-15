import { useEffect } from "react";
import { api } from "@/common/api";
import { useApi } from "@/common/hooks/useApi";
import type { AccountBalance } from "@/common/types";
import useStore from "@/store";
import { Spinner } from "@/components/ui/spinner";
import NewCardModal from "../NewCardModal";

function Header() {
  const setAccountBalance = useStore((state) => state.setAccountBalance);
  const accountBalance = useStore((state) => state.accountBalance);

  const { data: balanceData, isLoading: isFetching } = useApi<AccountBalance>(
    api.getAccountBalance
  );

  useEffect(() => {
    if (balanceData) {
      setAccountBalance(balanceData);
    }
  }, [balanceData, setAccountBalance]);

  return (
    <header className='bg-sky-950 md:bg-white px-4 py-3 h-full w-full'>
      <div className='flex items-end justify-between w-full h-full'>
        <div className='flex items-center gap-4'>
          <div className='flex flex-col items-center gap-2 px-3 py-2 flex-1 max-w-md'>
            <p className='text-sm text-white md:text-black'>Account balance</p>
            {isFetching ? (
              <Spinner color='#01D167' />
            ) : (
              <div className='flex items-center gap-2'>
                <span className='text-sm font-bold bg-green-500 text-white p-1 rounded'>
                  S$
                </span>
                <p className='text-2xl font-bold text-white md:text-black'>
                  {accountBalance.availableBalance}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <NewCardModal />
        </div>
      </div>
    </header>
  );
}

export default Header;
