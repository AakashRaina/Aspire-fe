import { menuItems } from "../Sidebar/contants";

function Navbar() {
  return (
    <nav className='bg-white border-t border-gray-200 px-4 py-2 shadow-lg'>
      <div className='flex justify-around items-center'>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className='flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors'
          >
            <img src={item.icon} alt={item.label} className='bg-slate-50' />
            <span
              className={`text-xs font-medium ${
                item.label === "Cards" ? "text-green-500" : "text-gray-600"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
