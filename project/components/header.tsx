"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
}

export function Header({ title = "AgriHub", showSearch = true, searchPlaceholder = "Search AgriHub..." }: HeaderProps) {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Bell className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      {showSearch && (
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="search"
              placeholder={searchPlaceholder}
              className="pl-10 bg-gray-50 border-gray-200"
            />
          </div>
        </div>
      )}
    </header>
  );
}
