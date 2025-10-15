import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import CardOptions from "@/view/CardOptions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CardDetailsIcon from "@/assets/Card_details.svg";
import RecentTransactionsIcon from "@/assets/Recent_transactions.svg";
import ShowCardNumberIcon from "@/assets/Eye_card.svg";
import RecentTransactions from "@/view/RecentTransactions";
import Card from "@/view/Card";
import useStore from "@/store";
import { Spinner } from "@/components/ui/spinner";
import { useApi } from "@/common/hooks/useApi";
import type { Card as CardType } from "@/common/types";
import { Sheet } from "react-modal-sheet";
import { api as fetchApi } from "@/common/api";
import Bottomsheet from "../Bottomsheet";
import useIsMobile from "@/common/hooks/useIsMobile";

function DebitCards() {
  const addedCards = useStore((state) => state.cards);
  const isBottomSheetOpen = useStore((state) => state.isBottomSheetOpen);
  const setCards = useStore((state) => state.setCards);

  const [showCardNumber, setShowCardNumber] = useState(false);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const isMobile = useIsMobile();

  const { data: cardsData, isLoading: isFetching } = useApi<CardType[]>(
    fetchApi.getCards
  );

  useEffect(() => {
    if (cardsData) {
      setCards(cardsData);
    }
  }, [cardsData, setCards]);

  const handleShowCardNumber = () => {
    setShowCardNumber((prev) => !prev);
  };

  const handleApiChange = (newApi: CarouselApi) => {
    setApi(newApi);
    if (newApi) {
      setCurrent(newApi.selectedScrollSnap());
      newApi.on("select", () => {
        setCurrent(newApi.selectedScrollSnap());
      });
    }
  };

  return (
    <div className='flex flex-col md:flex-row h-full rounded gap-10 md:p-10 mx-4 overflow-x-auto lg:overflow-x-visible'>
      <div className='flex-1 md:flex-1'>
        <div className='relative mt-10'>
          {isFetching ? (
            <div className='flex justify-center items-center h-32'>
              <Spinner color='#01D167' />
            </div>
          ) : (
            <>
              <Carousel
                setApi={handleApiChange}
                className='mt-5 mx-auto max-w-md'
              >
                <CarouselContent>
                  {addedCards.map((card) => (
                    <CarouselItem key={card.id}>
                      <Card card={card} showCardNumber={showCardNumber} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className='flex justify-center gap-2'>
                {addedCards.map((card, index) => (
                  <span
                    key={card.id}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2 h-2 p-1 mt-4 flex items-center justify-center rounded-full text-sm font-medium cursor-pointer ${
                      current === index ? "bg-green-500" : "bg-green-100"
                    }`}
                  />
                ))}
              </div>
            </>
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
        <div className='hidden md:block mt-5 max-w-md mx-auto'>
          <CardOptions />
        </div>
      </div>
      <div className='hidden md:flex md:flex-1 flex-col justify-start w-full min-w-80 overflow-y-auto max-h-full'>
        <Accordion type='single' collapsible className='my-3 mt-10'>
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
      {isMobile && (
        <Sheet
          isOpen={isBottomSheetOpen}
          onClose={() => {}}
          snapPoints={[0, 0.3, 1]}
          initialSnap={1}
          disableDismiss
        >
          <Sheet.Container>
            <Sheet.Header>
              <CardOptions />
            </Sheet.Header>
            <Sheet.Content>
              <Bottomsheet />
            </Sheet.Content>
          </Sheet.Container>
        </Sheet>
      )}
    </div>
  );
}

export default DebitCards;
