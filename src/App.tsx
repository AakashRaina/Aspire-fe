import { Layout } from "./view/Layout/Layout";
import "./App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";
import CardOptions from "./view/CardOptions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import CardDetailsIcon from "./assets/Card_details.svg";
import RecentTransactionsIcon from "./assets/Recent_transactions.svg";
import ShowCardNumberIcon from "./assets/Eye_card.svg";
import RecentTransactions from "./view/RecentTransactions";
import Card from "./view/Card";
import useStore from "./store";
import { useState, useEffect } from "react";
import { api } from "./common/api";
import { Spinner } from "./components/ui/spinner";
import { useApi } from "./hooks/useApi";
import type { Card as CardType } from "./common/types";

function App() {
  const addedCards = useStore((state) => state.cards);
  const setCards = useStore((state) => state.setCards);
  const [showCardNumber, setShowCardNumber] = useState(false);

  const { data: cardsData, isLoading: isFetching } = useApi<CardType[]>(
    api.getCards
  );

  useEffect(() => {
    if (cardsData) {
      setCards(cardsData);
    }
  }, [cardsData, setCards]);

  const handleShowCardNumber = () => {
    setShowCardNumber((prev) => !prev);
  };

  return (
    <Layout>
      <div className='flex flex-col md:flex-row h-full rounded gap-10 md:p-10 mx-4'>
        <div className='flex-1 md:flex-1'>
          <div className='relative'>
            {isFetching ? (
              <div className='flex justify-center items-center h-32'>
                <Spinner color='#01D167' />
              </div>
            ) : (
              <Carousel className='mt-5'>
                <CarouselContent>
                  {addedCards.map((card) => (
                    <CarouselItem key={card.id}>
                      <Card card={card} showCardNumber={showCardNumber} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            )}
            <div
              className='absolute -top-7 right-0 text-sm text-green-500 font-bold cursor-pointer'
              onClick={handleShowCardNumber}
            >
              <img
                src={ShowCardNumberIcon}
                alt='Show card number'
                className='inline'
              />{" "}
              <p className='inline'>
                {showCardNumber ? "Hide" : "Show"} card number
              </p>
            </div>
          </div>
          <div className='hidden md:block mt-5'>
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
              <AccordionContent />
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
                  <RecentTransactions />
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
