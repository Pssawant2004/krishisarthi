"use client";

import { useState } from "react";
import { MapPin, Users, IndianRupee, Calendar } from "lucide-react";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { jobPostings } from "@/lib/mock-data";

export default function JobsPage() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    workType: "",
    workersNeeded: "",
    wagePerDay: "",
    durationDays: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job posted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Hire Workers" showSearch={true} searchPlaceholder="Search jobs..." />

      <main className="px-4 py-6 max-w-7xl mx-auto">
        <Card className="mb-6 bg-white">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Post New Job</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="workType">Work Type</Label>
                <Select
                  value={formData.workType}
                  onValueChange={(value) => setFormData({ ...formData, workType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select work type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="harvesting">Harvesting</SelectItem>
                    <SelectItem value="planting">Planting</SelectItem>
                    <SelectItem value="weeding">Weeding</SelectItem>
                    <SelectItem value="irrigation">Irrigation</SelectItem>
                    <SelectItem value="pestcontrol">Pest Control</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="workersNeeded">Number of Workers</Label>
                <Input
                  id="workersNeeded"
                  type="number"
                  placeholder="e.g., 5"
                  value={formData.workersNeeded}
                  onChange={(e) => setFormData({ ...formData, workersNeeded: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="wage">Wages (per day)</Label>
                <Input
                  id="wage"
                  type="number"
                  placeholder="e.g., 500"
                  value={formData.wagePerDay}
                  onChange={(e) => setFormData({ ...formData, wagePerDay: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="duration">Duration (days)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="e.g., 7"
                  value={formData.durationDays}
                  onChange={(e) => setFormData({ ...formData, durationDays: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Village A"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                Post Job
              </Button>
            </form>
          </CardContent>
        </Card>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Available Job Listings</h2>

          <div className="space-y-4">
            {jobPostings.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-900 mb-3">{job.title}</h3>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-green-600" />
                      {job.workers} workers needed
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="w-4 h-4 mr-2 text-green-600" />
                      ₹{job.wage} / day
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-green-600" />
                      {job.duration} days
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Apply Now
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
