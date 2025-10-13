import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={cn("w-full", className)}>
      <div className='flex'>
        {tabs.map((tab) => (
          <span
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium border-b-2 transition-colors cursor-pointer",
              activeTab === tab.id
                ? "border-b-sky-300 text-white md:text-neutral-800"
                : "text-white md:text-neutral-800 border-b-transparent"
            )}
          >
            {tab.label}
          </span>
        ))}
      </div>

      {/* Tab Content */}
      <div className='mt-4'>{activeTabContent}</div>
    </div>
  );
}
