import { Home, Settings, User } from "lucide-react";

function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Dashboard", href: "#" },
    { icon: User, label: "Profile", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  return (
    <aside className='w-full h-full border-r border-sidebar-border flex flex-col bg-sky-950'>
      <div className='flex items-center justify-between p-4 border-b border-sidebar-border'>
        <h2 className='text-lg font-semibold text-sidebar-foreground'>
          Aspire
        </h2>
      </div>
      <nav className='flex-1 p-4'>
        <ul className='space-y-2'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className='flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors'
              >
                <item.icon className='w-5 h-5' />
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
