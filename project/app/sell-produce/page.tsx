"use client";

import { useState } from "react";
import { ArrowLeft, MapPin, Package, IndianRupee } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { produceListings } from "@/lib/mock-data";

export default function SellProducePage() {
  const [formData, setFormData] = useState({
    cropName: "",
    quantity: "",
    pricePerUnit: "",
    location: "",
    deliveryPreference: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Sell Produce" showSearch={true} searchPlaceholder="Search listings..." />

      <main className="px-4 py-6 max-w-7xl mx-auto">
        <Card className="mb-6 bg-green-50 border-green-200">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">List Your Produce</h2>
            <p className="text-sm text-gray-600 mb-4">
              Fill in details about the crop you want to sell.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="cropName">Crop Name</Label>
                <Input
                  id="cropName"
                  placeholder="e.g., Organic Wheat"
                  value={formData.cropName}
                  onChange={(e) => setFormData({ ...formData, cropName: e.target.value })}
                  className="bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="quantity">Quantity (kg)</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="e.g., 500"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price (per kg)</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="e.g., 25"
                    value={formData.pricePerUnit}
                    onChange={(e) => setFormData({ ...formData, pricePerUnit: e.target.value })}
                    className="bg-white"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Village Market, Pune"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="bg-white"
                />
              </div>

              <div>
                <Label htmlFor="delivery">Delivery Preference</Label>
                <Select
                  value={formData.deliveryPreference}
                  onValueChange={(value) => setFormData({ ...formData, deliveryPreference: value })}
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pickup">Pickup Only</SelectItem>
                    <SelectItem value="delivery">Delivery Available</SelectItem>
                    <SelectItem value="both">Both Pickup & Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="e.g., Organic, freshly harvested"
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  className="bg-white min-h-[80px]"
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                List Produce
              </Button>
            </form>
          </CardContent>
        </Card>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Browse Buyer Listings</h2>

          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            <Button variant="outline" size="sm" className="text-green-600 border-green-600">
              Crop Type
            </Button>
            <Button variant="outline" size="sm">
              Price Range
            </Button>
            <Button variant="outline" size="sm">
              Distance
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {produceListings.slice(0, 6).map((listing) => (
              <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={listing.image}
                    alt={listing.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{listing.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Package className="w-4 h-4 mr-2 text-green-600" />
                      {listing.quantity} {listing.unit} needed
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      {listing.location}
                    </div>
                    <div className="flex items-center font-semibold text-green-600">
                      <IndianRupee className="w-4 h-4 mr-1" />
                      {listing.price}/{listing.unit}
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <MobileNav />
    </div>
  );
}
