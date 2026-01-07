"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Sprout } from "lucide-react";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  image?: string;
  timestamp: Date;
}

export default function AdvicePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I am your AI Farming Assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAIResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  const getAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("tomato") || lowerInput.includes("yellow")) {
      return "Yellowing leaves with brown spots often indicate a fungal infection like Early Blight. It typically starts on older leaves. To manage this, ensure good air circulation, avoid overhead watering, and consider applying a fungicide if severe. Removing infected leaves can also help.";
    } else if (lowerInput.includes("rotation") || lowerInput.includes("crop")) {
      return "Crop rotation is vital for soil health and pest control. For tomatoes, rotating with legumes or leafy greens is beneficial. Avoid planting nightshades in the same spot for 2-3 years.";
    } else if (lowerInput.includes("pest") || lowerInput.includes("insect")) {
      return "For pest control, I recommend integrated pest management (IPM). Use neem oil, companion planting, and beneficial insects. Regular monitoring is key to catching problems early.";
    } else if (lowerInput.includes("fertilizer") || lowerInput.includes("nutrient")) {
      return "For nutrient deficiency, consider a balanced NPK fertilizer. Organic options like compost, vermicompost, or well-rotted manure are excellent. A soil test can help identify specific deficiencies.";
    } else if (lowerInput.includes("water") || lowerInput.includes("irrigation")) {
      return "Proper watering is crucial. Most crops need 1-2 inches of water per week. Drip irrigation is efficient and reduces disease. Water early morning to minimize evaporation and fungal growth.";
    } else {
      return "That's a great question! For specific crop advice, disease diagnosis, or pest management, please provide more details about your situation. You can also upload photos for better analysis.";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-20">
      <Header title="AI Farming Assistant" showSearch={false} />

      <main className="flex-1 overflow-y-auto px-4 py-4 max-w-4xl mx-auto w-full">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} items-start gap-2`}
            >
              {message.role === "assistant" && (
                <Avatar className="w-8 h-8 bg-green-100 mt-1">
                  <AvatarFallback>
                    <Sprout className="w-4 h-4 text-green-600" />
                  </AvatarFallback>
                </Avatar>
              )}

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-gray-200 text-gray-900"
                    : "bg-green-600 text-white"
                }`}
              >
                {message.image && (
                  <img
                    src={message.image}
                    alt="Uploaded"
                    className="rounded-lg mb-2 max-w-full"
                  />
                )}
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.role === "user" ? "text-gray-500" : "text-green-100"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              {message.role === "user" && (
                <Avatar className="w-8 h-8 bg-gray-300 mt-1">
                  <AvatarFallback className="text-gray-600">U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <div className="sticky bottom-16 md:bottom-0 bg-white border-t border-gray-200 p-4 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Paperclip className="w-5 h-5 text-gray-500" />
          </button>
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
