import AspireLogo from "@/assets/Aspire_Logo_Card.svg";
import VisaLogo from "@/assets/Visa_Logo.svg";
import type { Card as CardType } from "@/common/types";

function Card({
  card,
  showCardNumber,
}: {
  card: CardType;
  showCardNumber: boolean;
}) {
  const { cardNumber, cardHolderName, expiryDate, cvv } = card;

  const renderedCardNumber = () => {
    if (showCardNumber) {
      return (
        <p className='font-semibold text-2xl inline-block'>
          {cardNumber.match(/.{1,4}/g)?.join(" ")}
        </p>
      );
    }

    return (
      <>
        <p className='font-semibold text-2xl inline-block'>•••• •••• ••••</p>{" "}
        <p className='font-medium text-xl inline-block'>
          {cardNumber.slice(-4)}
        </p>
      </>
    );
  };

  return (
    <div className='h-full bg-green-500 rounded-lg flex flex-col'>
      <div className='flex-1 flex justify-end items-center p-4'>
        <div className='text-white font-semibold'>
          <img src={AspireLogo} alt='Aspire Logo' />
        </div>
      </div>

      <div className='flex-1 flex items-center p-4'>
        <div>
          <p className='text-white text-2xl font-bold'>{cardHolderName}</p>
        </div>
      </div>

      <div className='flex-1 flex items-center p-4'>
        <div className='text-white font-medium'>{renderedCardNumber()}</div>
      </div>

      <div className='flex-1 flex items-center gap-8 p-4'>
        <div>
          <p className='text-white text-sm font-bold'>Thru: {expiryDate}</p>
        </div>
        <div>
          <p className='text-white text-sm font-bold'>
            CVV: {showCardNumber ? cvv : "***"}
          </p>
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
