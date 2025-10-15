import { lazy, Suspense } from "react";
import Sidebar from "@/view/Sidebar/Sidebar";
import Header from "@/view/Header";
import useIsMobile from "@/common/hooks/useIsMobile";

// Lazy load the Navbar component
const Navbar = lazy(() => import("@/view/Navbar/Navbar"));

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();

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
          <div className='flex-[8] bg-sky-950 md:bg-white overflow-hidden'>
            <main
              className={`h-full overflow-y-auto p-4 ${
                isMobile ? "pb-20" : ""
              }`}
            >
              {children}
            </main>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className='fixed bottom-0 left-0 right-0 z-[99999] pointer-events-auto'>
          <Suspense fallback={<div className='h-16 bg-sky-950' />}>
            <Navbar />
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default Layout;
