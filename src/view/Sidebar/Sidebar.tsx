import HomeIcon from "../../assets/Home.svg";
import AccountIcon from "../../assets/Account.svg";
import CardIcon from "../../assets/Card.svg";
import CreditIcon from "../../assets/Credit.svg";
import PaymentsIcon from "../../assets/Payments.svg";
import AspireLogo from "../../assets/Logo.svg";

function Sidebar() {
  const menuItems = [
    { icon: HomeIcon, label: "Home" },
    { icon: AccountIcon, label: "Account" },
    { icon: CardIcon, label: "Cards" },
    { icon: CreditIcon, label: "Credit" },
    { icon: PaymentsIcon, label: "Payments" },
    { icon: AccountIcon, label: "Settings" },
  ];

  return (
    <aside className='w-full h-full border-r border-sidebar-border flex flex-col bg-sky-950'>
      <div className='flex flex-col items-start justify-between p-4 my-4'>
        <img src={AspireLogo} alt='Aspire' />
        <p className='text-white opacity-30 text-sm mt-3'>
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>
      <nav className='flex-1 p-4'>
        <ul className='space-y-2 flex flex-col justify-start text-white'>
          {menuItems.map((item, index) => (
            <li key={index} className='cursor-pointer text-white my-4'>
              <a
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                  item.label === "Cards" ? "text-green-500" : "text-white"
                }`}
              >
                <img src={item.icon} alt={item.label} className='w-5 h-5' />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
