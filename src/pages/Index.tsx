
import React from 'react';
import { Button } from '@/components/ui/button';
import ChatBot from '@/components/ChatBot';
import { MessageSquare, ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Function to scroll to the chatbot section
  const scrollToChatbot = () => {
    const chatbotElement = document.getElementById('chatbot-section');
    if (chatbotElement) {
      chatbotElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Intelligent conversations with our <span className="text-primary">AI Chatbot</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience seamless communication with our advanced chatbot. Get quick answers,
              support, and engage in natural conversations 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" onClick={scrollToChatbot}>
                Try It Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={scrollToChatbot}>
                Learn More
              </Button>
            </div>
            
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Instant Responses</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Private & Secure</span>
              </div>
            </div>
          </div>
          
          <div id="chatbot-section" className="flex-1 w-full max-w-md">
            <ChatBot />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-secondary rounded-2xl my-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Chatbot?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered chatbot is designed to provide exceptional experiences and solve your problems efficiently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageSquare className="h-8 w-8" />,
              title: "Natural Conversations",
              description: "Engage in fluid, human-like conversations that understand context and nuance."
            },
            {
              icon: <CheckCircle className="h-8 w-8" />,
              title: "Accurate Responses",
              description: "Get precise answers to your questions with our advanced AI technology."
            },
            {
              icon: <Shield className="h-8 w-8" />,
              title: "Secure Communication",
              description: "Your conversations are private and protected with enterprise-grade security."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 rounded-lg text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Chatting?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Try our chatbot today and experience the future of digital conversations. No sign-up required.
        </p>
        <Button size="lg" className="gap-2" onClick={scrollToChatbot}>
          Get Started <ArrowRight className="h-4 w-4" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2023 Chatbot Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="#" className="text-muted-foreground hover:text-foreground text-sm">Privacy Policy</Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground text-sm">Terms of Service</Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
