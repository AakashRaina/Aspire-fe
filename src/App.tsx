import { Layout } from "./view/Layout/Layout";
import "./App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";
import CardOptions from "./view/CardOptions/CardOptions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardDetailsIcon from "@/assets/Card_details.svg";
import RecentTransactionsIcon from "@/assets/Recent_transactions.svg";
import FlightIcon from "./assets/Flights.svg";
import FileStorageIcon from "@/assets/File_storage.svg";
import MegaPhoneIcon from "@/assets/Megaphone.svg";
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

export function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function App() {
  return (
    <Layout>
      <div className='flex flex-col md:flex-row border-zinc-50 border-2 h-full rounded gap-10 p-10 mx-4'>
        <div className='flex-1 md:flex-1 border-2 border-red-300'>
          <Carousel className='border-2 border-blue-300'>
            <CarouselContent>
              <CarouselItem>
                <div className='h-full bg-green-500 border-amber-300 border-2 rounded-lg'>
                  <h2 className='text-xl font-semibold mb-4'>Left Content</h2>
                  <div className='space-y-4'>
                    <div className='bg-muted p-4 rounded-md'>
                      <h3 className='font-medium mb-2'>Dashboard Overview</h3>
                      <p className='text-sm text-muted-foreground'>
                        Overview of your application metrics and key performance
                        indicators.
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className='hidden md:block'>
            <CardOptions />
          </div>
        </div>
        <div className='hidden md:flex md:flex-1 flex-col justify-start w-full overflow-y-auto max-h-full'>
          <Accordion type='single' collapsible className='my-3'>
            <AccordionItem value='card-details' className='rounded-t-md'>
              <AccordionTrigger className='bg-slate-100 px-2 rounded-t-md rounded-b-none'>
                <div className='flex flex-row items-center px-2 mx-1 py-1 rounded-t-md w-full gap-1'>
                  <img src={CardDetailsIcon} alt='Card details' />
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
                              {transaction.type === "credit" ? "+" : "-"} S${" "}
                              {transaction.amount}
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
            <AccordionItem value='recent-transactions' className='rounded-t-md'>
              <AccordionTrigger className='bg-slate-100 px-2 rounded-t-md rounded-b-none'>
                <div className='flex flex-row items-center px-2 mx-1 py-1 rounded-t-md w-full gap-1'>
                  <img src={RecentTransactionsIcon} alt='Recent transactions' />
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
                              {transaction.type === "credit" ? "+" : "-"} S${" "}
                              {transaction.amount}
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
      </div>
    </Layout>
  );
}

export default App;
