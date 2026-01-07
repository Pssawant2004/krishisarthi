"use client";

import Link from "next/link";
import { Sprout, Tractor, MessageCircle, TrendingUp, Cloud, Wallet, MessageSquare, Users } from "lucide-react";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mandiPrices, weatherAlerts, quickTips } from "@/lib/mock-data";

export default function Home() {
  const quickAccessItems = [
    { icon: Sprout, label: "Sell Produce", href: "/sell-produce", color: "bg-green-50" },
    { icon: Tractor, label: "Hire Workers", href: "/jobs", color: "bg-green-50" },
    { icon: MessageCircle, label: "Get Advice", href: "/advice", color: "bg-green-50" },
    { icon: TrendingUp, label: "Market Prices", href: "/market-prices", color: "bg-green-50" },
    { icon: Cloud, label: "Weather Updates", href: "/weather", color: "bg-green-50" },
    { icon: Wallet, label: "Gov. Schemes", href: "/schemes", color: "bg-green-50" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />

      <main className="px-4 py-6 max-w-7xl mx-auto">
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickAccessItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={index} href={item.href}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                      <div className={`${item.color} p-4 rounded-full`}>
                        <Icon className="w-8 h-8 text-green-600" />
                      </div>
                      <span className="text-sm font-semibold text-gray-900 text-center">
                        {item.label}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Today&apos;s Insights</h2>

          <Card className="mb-4 bg-white border-green-100">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-green-50 p-2 rounded">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Today&apos;s Mandi Prices</h3>
                  <p className="text-sm text-gray-600">
                    {mandiPrices.map((item, index) => (
                      <span key={index}>
                        {item.commodity}: ₹{item.price}/{item.unit}{" "}
                        <span className={item.change > 0 ? "text-green-600" : "text-red-600"}>
                          ({item.change > 0 ? "↑" : "↓"} {Math.abs(item.change)}%)
                        </span>
                        {index < mandiPrices.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {weatherAlerts.map((alert, index) => (
            <Card key={index} className="mb-4 bg-red-50 border-red-100">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded">
                    <Cloud className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-red-900">Weather Alert</h3>
                      <Badge variant="destructive" className="text-xs">
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-red-800">{alert.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {quickTips.map((tip, index) => (
            <Card key={index} className="bg-green-50 border-green-100">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded">
                    <Sprout className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-900 mb-1">Quick Tip</h3>
                    <p className="text-sm text-green-800">{tip.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <MobileNav />
    </div>
  );
}
