import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className='min-h-screen bg-background'>
      <div className='flex h-screen'>
        <div className='flex-[2] hidden md:block'>
          <Sidebar />
        </div>
        <div className='flex-1 md:flex-[8] flex flex-col min-w-0'>
          <div className='flex-[1.5]'>
            <Header />
          </div>
          <div className='flex-[8.5] bg-sky-950 md:bg-white'>
            <main className='overflow-auto p-4'>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
