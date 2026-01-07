"use client";

import { useState } from "react";
import { ArrowUp, MessageCircle, Plus } from "lucide-react";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { forumPosts } from "@/lib/mock-data";

export default function ForumPage() {
  const [newPost, setNewPost] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Community Forum" showSearch={true} searchPlaceholder="Search forum..." />

      <main className="px-4 py-6 max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Create New Post</h3>
            <Textarea
              placeholder="Share your thoughts or ask a question..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="mb-3 min-h-[80px]"
            />
            <div className="flex justify-between items-center">
              <Button variant="outline" size="sm" className="text-green-600">
                <Plus className="w-4 h-4 mr-1" />
                Add Photo
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Post to Forum
              </Button>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Discussions</h2>

        <div className="space-y-4">
          {forumPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <Avatar>
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{post.author}</h3>
                      <span className="text-xs text-gray-500">{post.time}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-3">{post.content}</p>

                {post.image && (
                  <div className="rounded-lg overflow-hidden mb-3">
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600 transition-colors">
                    <ArrowUp className="w-4 h-4" />
                    {post.upvotes} Upvotes
                  </button>
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments} Comments
                  </button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto text-green-600 hover:text-green-700 hover:bg-green-50"
                  >
                    Reply
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <button className="fixed bottom-24 right-6 bg-green-600 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition-colors md:hidden">
        <Plus className="w-6 h-6" />
      </button>

      <MobileNav />
    </div>
  );
}
