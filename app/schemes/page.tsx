"use client";

import { ExternalLink, Calendar, CircleCheck as CheckCircle2 } from "lucide-react";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { governmentSchemes } from "@/lib/mock-data";

export default function SchemesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Government Schemes" showSearch={true} searchPlaceholder="Search schemes..." />

      <main className="px-4 py-6 max-w-4xl mx-auto">
        <Card className="mb-6 bg-green-50 border-green-200">
          <CardContent className="p-4">
            <h2 className="font-semibold text-gray-900 mb-2">
              Find Schemes You&apos;re Eligible For
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Discover government schemes and subsidies available for farmers. Check eligibility and apply directly.
            </p>
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-100">
              Check Eligibility
            </Button>
          </CardContent>
        </Card>

        <h2 className="text-lg font-bold text-gray-900 mb-4">Active Schemes</h2>

        <div className="space-y-4">
          {governmentSchemes.map((scheme) => (
            <Card key={scheme.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{scheme.name}</h3>
                  <Badge className="bg-green-600">Active</Badge>
                </div>

                <p className="text-sm text-gray-700 mb-4">{scheme.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Eligibility: </span>
                      <span className="text-gray-600">{scheme.eligibility}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Deadline: </span>
                      <span className="text-gray-600">{scheme.deadline}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Not sure which schemes apply to you? Our AI assistant can help you find the right schemes based on your farm details.
            </p>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-100">
              Ask AI Assistant
            </Button>
          </CardContent>
        </Card>
      </main>

      <MobileNav />
    </div>
  );
}
