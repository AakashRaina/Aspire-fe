import AspireLogo from "@/assets/Aspire_Logo_Card.svg";
import VisaLogo from "@/assets/Visa_Logo.svg";

function Card() {
  return (
    <div className='h-full bg-green-500 rounded-lg flex flex-col'>
      <div className='flex-1 flex justify-end items-center p-4'>
        <div className='text-white font-semibold'>
          <img src={AspireLogo} alt='Aspire Logo' />
        </div>
      </div>

      <div className='flex-1 flex items-center p-4'>
        <div>
          <p className='text-white text-2xl font-bold'>Mark Henry</p>
        </div>
      </div>

      <div className='flex-1 flex items-center p-4'>
        <div className='text-white font-medium'>
          <p className='font-semibold text-2xl inline-block'>•••• •••• ••••</p>{" "}
          <p className='font-medium text-xl inline-block'>1234</p>
        </div>
      </div>

      <div className='flex-1 flex items-center gap-8 p-4'>
        <div>
          <p className='text-white text-sm font-bold'>Thru: 12/28</p>
        </div>
        <div>
          <p className='text-white text-sm font-bold'>CVV: 123</p>
        </div>
      </div>

      <div className='flex-1 flex items-center p-4 justify-end'>
        <div className='text-white text-sm'>
          <img src={VisaLogo} alt='Visa Logo' />
        </div>
      </div>
    </div>
  );
}

export default Card;
