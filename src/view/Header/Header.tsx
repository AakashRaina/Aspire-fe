import { Bell } from "lucide-react";

function Header() {
  return (
    <header className='bg-sky-950 md:bg-white border-b border-border px-4 py-3 h-full w-full'>
      <div className='flex items-end justify-between w-full h-full'>
        <div className='flex items-center gap-4'>
          <div className='hidden sm:flex items-center gap-2 px-3 py-2 flex-1 max-w-md'>
            <p>Available Balance</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <button className='p-2 rounded-md hover:bg-accent relative'>
            <Bell className='w-5 h-5' />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
