import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header";
import Navbar from "../Navbar/Navbar";
import { Sheet } from "react-modal-sheet";
import { useState, useEffect } from "react";
import CardOptions from "../CardOptions/CardOptions";

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
            <main className={`overflow-auto p-4 ${isMobile ? "pb-20" : ""}`}>
              {children}
            </main>
          </div>
        </div>
      </div>
      {isMobile && (
        <Sheet
          isOpen={true}
          onClose={() => {}}
          snapPoints={[0.3]}
          initialSnap={1}
          disableDismiss
        >
          <Sheet.Container>
            <Sheet.Header>
              <CardOptions />
            </Sheet.Header>
            <Sheet.Content>
              <div>
                <h1>Sheet</h1>
              </div>
            </Sheet.Content>
          </Sheet.Container>
        </Sheet>
      )}
      {isMobile && (
        <div className='fixed bottom-0 left-0 right-0 z-[99999] pointer-events-auto'>
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default Layout;
