import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import CardDetailsIcon from "@/assets/Card_details.svg";
import RecentTransactionsIcon from "@/assets/Recent_transactions.svg";
import RecentTransactions from "../RecentTransactions";

function Bottomsheet() {
  return (
    <div className='h-full mx-4'>
      <Accordion type='single' collapsible className='my-3'>
        <AccordionItem value='card-details' className='rounded-t-md'>
          <AccordionTrigger className='bg-slate-100 px-2 rounded-t-md rounded-b-none'>
            <div className='flex flex-row items-center px-2 mx-1 py-1 rounded-t-md w-full gap-1'>
              <img src={CardDetailsIcon} alt='Recent transactions' />
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
  );
}

export default Bottomsheet;
