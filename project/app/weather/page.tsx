"use client";

import { Cloud, CloudRain, Sun, Wind, Droplets } from "lucide-react";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WeatherPage() {
  const forecast = [
    { day: "Today", temp: "28°C", condition: "Partly Cloudy", icon: Cloud, rain: "20%" },
    { day: "Tomorrow", temp: "26°C", condition: "Rain", icon: CloudRain, rain: "80%" },
    { day: "Wed", temp: "29°C", condition: "Sunny", icon: Sun, rain: "10%" },
    { day: "Thu", temp: "27°C", condition: "Cloudy", icon: Cloud, rain: "40%" },
    { day: "Fri", temp: "25°C", condition: "Rain", icon: CloudRain, rain: "70%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Weather Updates" showSearch={false} />

      <main className="px-4 py-6 max-w-4xl mx-auto">
        <Card className="mb-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm opacity-90 mb-2">Current Location</p>
              <h2 className="text-2xl font-bold mb-1">Pune, Maharashtra</h2>
              <div className="flex items-center justify-center my-6">
                <Cloud className="w-16 h-16" />
              </div>
              <div className="text-5xl font-bold mb-2">28°C</div>
              <p className="text-lg opacity-90">Partly Cloudy</p>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-blue-400">
                <div>
                  <Wind className="w-5 h-5 mx-auto mb-1 opacity-90" />
                  <p className="text-xs opacity-75">Wind</p>
                  <p className="font-semibold">12 km/h</p>
                </div>
                <div>
                  <Droplets className="w-5 h-5 mx-auto mb-1 opacity-90" />
                  <p className="text-xs opacity-75">Humidity</p>
                  <p className="font-semibold">65%</p>
                </div>
                <div>
                  <CloudRain className="w-5 h-5 mx-auto mb-1 opacity-90" />
                  <p className="text-xs opacity-75">Rain</p>
                  <p className="font-semibold">20%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-red-50 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Badge variant="destructive">Alert</Badge>
              <div className="flex-1">
                <h3 className="font-semibold text-red-900 mb-1">Heavy Rain Expected</h3>
                <p className="text-sm text-red-800">
                  Moderate to heavy rainfall expected tomorrow. Prepare for irrigation management and protect crops.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-lg font-bold text-gray-900 mb-4">5-Day Forecast</h2>

        <div className="space-y-3">
          {forecast.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-center w-16">
                        <p className="font-semibold text-gray-900">{item.day}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-full">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.condition}</p>
                        <p className="text-sm text-gray-500">Rain: {item.rain}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{item.temp}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-6 bg-green-50 border-green-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Farming Tip</h3>
            <p className="text-sm text-gray-700">
              With rain expected tomorrow, avoid applying pesticides or fertilizers. Wait for clear weather for best results.
            </p>
          </CardContent>
        </Card>
      </main>

      <MobileNav />
    </div>
  );
}
