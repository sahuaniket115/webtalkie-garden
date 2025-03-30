
import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SendHorizontal } from 'lucide-react';
import ChatMessage, { MessageType } from './ChatMessage';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@/components/ui/sonner';

const INITIAL_MESSAGES: MessageType[] = [
  {
    id: '1',
    content: 'Hello! How can I assist you today?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

// Simple responses for the bot
const BOT_RESPONSES = [
  "I'm here to help with any questions you might have!",
  "That's an interesting question. Let me think about that.",
  "I understand what you're asking. Here's what I know about that topic.",
  "I appreciate your question. Here's my response.",
  "Thanks for chatting with me today!",
  "I'm still learning, but I'll do my best to assist you.",
  "That's a great point. Let me add some more information.",
  "I'm sorry, I don't have enough information to answer that question fully.",
  "Is there anything else you'd like to know about this topic?",
  "Let me know if you need any clarification on my response."
];

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: MessageType = {
      id: uuidv4(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const randomResponse = BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
      const botMessage: MessageType = {
        id: uuidv4(),
        content: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      
      // Show a notification for the new message
      toast("New message", {
        description: "The chatbot has responded to your message",
      });
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <ChatMessage 
            key={message.id} 
            message={message} 
            isLast={index === messages.length - 1}
          />
        ))}
        
        {isTyping && (
          <div className="flex items-center gap-2 animate-fade-in opacity-0">
            <div className="rounded-md bg-muted p-2">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-secondary-foreground animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-secondary-foreground animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-2 w-2 rounded-full bg-secondary-foreground animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chat-input-container">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button onClick={handleSendMessage} disabled={!input.trim() || isTyping}>
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatBot;
