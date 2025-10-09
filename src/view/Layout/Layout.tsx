import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header";
import { Sheet } from "react-modal-sheet";
import { useState, useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

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
          <div className='flex-[8] bg-sky-950 md:bg-white'>
            <main className='overflow-auto p-4'>{children}</main>
          </div>
        </div>
      </div>
      {isMobile && (
        <Sheet
          isOpen={true}
          onClose={() => {}}
          snapPoints={[0.3]}
          initialSnap={1}
        >
          <Sheet.Container>
            <Sheet.Header>
              <Header />
            </Sheet.Header>
            <Sheet.Content>
              <div>
                <h1>Sheet</h1>
              </div>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      )}
    </div>
  );
}

export default Layout;
