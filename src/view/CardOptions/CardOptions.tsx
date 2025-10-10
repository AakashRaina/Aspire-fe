import FreezeIcon from "../../assets/Freeze_card.svg";
import GPayIcon from "../../assets/Gpay.svg";
import DeactivateIcon from "../../assets/Deactivate_card.svg";
import ReplaceCardIcon from "../../assets/Replace_card.svg";
import SetSpendLimitIcon from "../../assets/Set_spend_limit.svg";

const cardOptions = [
  {
    icon: FreezeIcon,
    label: "Freeze card",
  },
  {
    icon: SetSpendLimitIcon,
    label: "Set spend limit",
  },
  {
    icon: GPayIcon,
    label: "Add to Gpay",
  },
  {
    icon: ReplaceCardIcon,
    label: "Replace card",
  },
  {
    icon: DeactivateIcon,
    label: "Cancel card",
  },
];

function CardOptions() {
  return (
    <div className='bg-indigo-50 p-4 rounded-t-md md:rounded-md flex flex-row justify-evenly items-center'>
      {cardOptions.map((option, index) => (
        <div
          key={index}
          className='flex flex-col items-center text-center break-words'
        >
          <img src={option.icon} alt={option.label} />
          <p className='text-xs text-sky-950'>{option.label}</p>
        </div>
      ))}
    </div>
  );
}

export default CardOptions;
