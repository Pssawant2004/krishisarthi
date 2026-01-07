"use client";

import { useState } from "react";
import { IndianRupee, Filter } from "lucide-react";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { marketplaceProducts } from "@/lib/mock-data";

export default function MarketPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? marketplaceProducts
      : marketplaceProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Marketplace" showSearch={true} searchPlaceholder="Search products..." />

      <main className="px-4 py-6 max-w-7xl mx-auto">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
          <TabsList className="w-full grid grid-cols-4 h-auto">
            <TabsTrigger value="all" className="text-xs">
              All
            </TabsTrigger>
            <TabsTrigger value="seeds" className="text-xs">
              Seeds
            </TabsTrigger>
            <TabsTrigger value="fertilizers" className="text-xs">
              Fertilizers
            </TabsTrigger>
            <TabsTrigger value="pesticides" className="text-xs">
              Pesticides
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isRental && (
                  <Badge className="absolute top-2 right-2 bg-blue-600">Rental</Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                <Badge variant="outline" className="mb-3 text-xs">
                  {product.category}
                </Badge>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-green-600 font-bold text-lg">
                    <IndianRupee className="w-5 h-5" />
                    {product.price} / {product.unit}
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
