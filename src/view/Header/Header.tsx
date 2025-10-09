import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className='bg-sky-950 md:bg-white px-4 py-3 h-full w-full'>
      <div className='flex items-end justify-between w-full h-full'>
        <div className='flex items-center gap-4'>
          <div className='flex flex-col items-center gap-2 px-3 py-2 flex-1 max-w-md'>
            <p className='text-sm text-white md:text-black'>Account balance</p>
            <div className='flex items-center gap-2'>
              <span className='text-sm font-bold bg-green-500 text-white p-1 rounded'>
                S$
              </span>
              <p className='text-2xl font-bold text-white md:text-black'>
                3,000
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <Button size='lg' className='bg-sky-950 text-sky-300 md:text-white'>
            <CirclePlus /> New card
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
