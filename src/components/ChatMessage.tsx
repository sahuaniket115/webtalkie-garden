
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';
import { Bot, User } from 'lucide-react';

export type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

interface ChatMessageProps {
  message: MessageType;
  isLast?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLast }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div 
      className={cn(
        "flex items-start gap-2 animate-fade-in opacity-0",
        isUser ? "flex-row" : "flex-row"
      )}
      style={{ animationDelay: isLast ? '0ms' : '0ms' }}
    >
      <Avatar className={cn(
        "h-8 w-8 flex items-center justify-center",
        isUser ? "bg-muted" : "bg-primary"
      )}>
        {isUser ? (
          <User className="h-4 w-4 text-foreground" />
        ) : (
          <Bot className="h-4 w-4 text-primary-foreground" />
        )}
      </Avatar>
      
      <div className={cn(
        "rounded-lg px-3 py-2 max-w-[80%]",
        isUser ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
      )}>
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-70 mt-1 block">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
