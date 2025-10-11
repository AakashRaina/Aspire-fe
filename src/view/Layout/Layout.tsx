import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header";
import Navbar from "../Navbar/Navbar";
import { Sheet } from "react-modal-sheet";
import { useState, useEffect } from "react";
import CardOptions from "../CardOptions/CardOptions";
import { formatDate } from "@/App";
import FileStorageIcon from "@/assets/File_storage.svg";
import FlightIcon from "@/assets/Flights.svg";
import MegaPhoneIcon from "@/assets/Megaphone.svg";
import { Accordion } from "@/components/ui/accordion";
import { AccordionItem } from "@/components/ui/accordion";
import { AccordionTrigger } from "@/components/ui/accordion";
import { AccordionContent } from "@/components/ui/accordion";
import CardDetailsIcon from "@/assets/Card_details.svg";
import RecentTransactionsIcon from "@/assets/Recent_transactions.svg";
import { ChevronRight } from "lucide-react";

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
        <Sheet
          isOpen={true}
          onClose={() => {}}
          snapPoints={[0, 0.3, 1]}
          initialSnap={1}
          disableDismiss
          style={{ pointerEvents: "none" }}
        >
          <Sheet.Container style={{ pointerEvents: "auto" }}>
            <Sheet.Header>
              <CardOptions />
            </Sheet.Header>
            <Sheet.Content>
              <div className='h-full mx-4'>
                <Accordion type='single' collapsible className='my-3'>
                  <AccordionItem value='card-details' className='rounded-t-md'>
                    <AccordionTrigger className='bg-slate-100 px-2 rounded-t-md rounded-b-none'>
                      <div className='flex flex-row items-center px-2 mx-1 py-1 rounded-t-md w-full gap-1'>
                        <img src={CardDetailsIcon} alt='Recent transactions' />
                        <p className='text-sky-950'>Card details</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
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
                                <div className='flex-1 flex flex-row justify-end items-start gap-2'>
                                  <p
                                    className={`mb-2 text-sm font-semibold inline-block ${
                                      transaction.type === "credit"
                                        ? "text-green-500"
                                        : "text-neutral-800"
                                    }`}
                                  >
                                    {transaction.type === "credit" ? "+" : "-"}{" "}
                                    S$ {transaction.amount}
                                  </p>
                                  <ChevronRight
                                    size={16}
                                    className='mt-1 text-neutral-400'
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className='bg-emerald-50 flex justify-center items-center p-4 rounded-b-md'>
                            <p className='text-sm text-green-500'>
                              View all card transactions
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type='single' collapsible className='my-3'>
                  <AccordionItem
                    value='recent-transactions'
                    className='rounded-t-md'
                  >
                    <AccordionTrigger className='bg-slate-100 px-2 rounded-t-md rounded-b-none'>
                      <div className='flex flex-row items-center px-2 mx-1 py-1 rounded-t-md w-full gap-1'>
                        <img
                          src={RecentTransactionsIcon}
                          alt='Recent transactions'
                        />
                        <p className='text-sky-950'>Recent transactions</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
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
                                <div className='flex-1 flex flex-row justify-end items-start gap-2'>
                                  <p
                                    className={`mb-2 text-sm font-semibold inline-block ${
                                      transaction.type === "credit"
                                        ? "text-green-500"
                                        : "text-neutral-800"
                                    }`}
                                  >
                                    {transaction.type === "credit" ? "+" : "-"}{" "}
                                    S$ {transaction.amount}
                                  </p>
                                  <ChevronRight
                                    size={16}
                                    className='mt-1 text-neutral-400'
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className='bg-emerald-50 flex justify-center items-center p-4 rounded-b-md'>
                            <p className='text-sm text-green-500'>
                              View all card transactions
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
