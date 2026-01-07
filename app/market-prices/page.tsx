"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mandiData = [
  { commodity: "Wheat", price: 2100, change: 2.1, unit: "quintal", market: "Delhi Mandi" },
  { commodity: "Rice", price: 3500, change: -1.2, unit: "quintal", market: "Punjab Mandi" },
  { commodity: "Corn", price: 1800, change: 5.3, unit: "quintal", market: "Karnataka Mandi" },
  { commodity: "Potatoes", price: 800, change: 3.5, unit: "quintal", market: "UP Mandi" },
  { commodity: "Onions", price: 1200, change: -2.8, unit: "quintal", market: "Maharashtra Mandi" },
  { commodity: "Tomatoes", price: 1500, change: 8.2, unit: "quintal", market: "Bangalore Mandi" },
  { commodity: "Cotton", price: 6000, change: 1.5, unit: "quintal", market: "Gujarat Mandi" },
  { commodity: "Sugarcane", price: 3200, change: 0.8, unit: "quintal", market: "UP Mandi" },
];

export default function MarketPricesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Market Prices" showSearch={true} searchPlaceholder="Search commodities..." />

      <main className="px-4 py-6 max-w-4xl mx-auto">
        <Card className="mb-6 bg-green-50 border-green-200">
          <CardContent className="p-4">
            <h2 className="font-semibold text-gray-900 mb-1">Live Mandi Prices</h2>
            <p className="text-xs text-gray-600">Updated 10 minutes ago</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {mandiData.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.commodity}</h3>
                    <p className="text-xs text-gray-500">{item.market}</p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1 mb-1">
                      <span className="text-lg font-bold text-gray-900">
                        ₹{item.price}
                      </span>
                      <span className="text-xs text-gray-500">/{item.unit}</span>
                    </div>
                    <Badge
                      variant={item.change > 0 ? "default" : "destructive"}
                      className={item.change > 0 ? "bg-green-600" : ""}
                    >
                      {item.change > 0 ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {Math.abs(item.change)}%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
