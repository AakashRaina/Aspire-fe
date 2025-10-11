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
import CardDetailsIcon from "./assets/Card_details.svg";
import RecentTransactionsIcon from "./assets/Recent_transactions.svg";

function App() {
  return (
    <Layout>
      <div className='flex flex-col md:flex-row border-zinc-50 border-2 h-full rounded gap-6 p-10 mx-10'>
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
        <div className='hidden md:flex md:flex-1 flex-col justify-start w-full border-2 border-green-300 overflow-y-auto max-h-full'>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                <div className='flex flex-row items-center gap-2 bg-slate-100 p-4 rounded w-full'>
                  <img src={CardDetailsIcon} alt='Card details' />
                  <p className='text-sky-950'>Card details</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className='h-full border border-border rounded-lg p-6'>
                  <h2 className='text-xl font-semibold mb-4'>Right Content</h2>
                  <div className='space-y-4'>
                    <div className='bg-muted p-4 rounded-md'>
                      <h3 className='font-medium mb-2'>Settings</h3>
                      <p className='text-sm text-muted-foreground'>
                        Configure your application preferences and user
                        settings.
                      </p>
                    </div>
                    <div className='bg-muted p-4 rounded-md'>
                      <p className='text-sm font-semibold mb-4'>
                        {" "}
                        Configure your application preferences and user
                        settings.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                <div className='flex  flex-row items-center gap-2 bg-slate-100 p-4 rounded w-full'>
                  <img src={RecentTransactionsIcon} alt='Recent transactions' />
                  <p className='text-sky-950'>Recent transactions</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className='h-full bg-card border border-border rounded-lg p-6'>
                  <h2 className='text-xl font-semibold mb-4'>Right Content</h2>
                  <div className='space-y-4'>
                    <div className='bg-muted p-4 rounded-md'>
                      <h3 className='font-medium mb-2'>Settings</h3>
                      <p className='text-sm text-muted-foreground'>
                        Configure your application preferences and user
                        settings.
                      </p>
                    </div>
                    <div className='bg-muted p-4 rounded-md'>
                      <p className='text-sm font-semibold mb-4'>
                        {" "}
                        Configure your application preferences and user
                        settings.
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
