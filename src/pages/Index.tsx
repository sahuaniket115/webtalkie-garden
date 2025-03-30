
import React from 'react';
import { Button } from '@/components/ui/button';
import ChatBot from '@/components/ChatBot';
import { MessageSquare, ArrowRight, CheckCircle, Shield, Menu, Home, Info, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Index = () => {
  // Function to scroll to specific section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="border-b sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">ChatBot AI</span>
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()}
                  onClick={() => scrollToSection("hero-section")}
                >
                  <Home className="mr-1" />
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()}
                  onClick={() => scrollToSection("info-section")}
                >
                  <Info className="mr-1" />
                  Information
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()}
                  onClick={() => scrollToSection("features-section")}
                >
                  <BookOpen className="mr-1" />
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => scrollToSection("chatbot-section")}
                >
                  Try It Now
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
              <Button size="lg" className="gap-2" onClick={() => scrollToSection("chatbot-section")}>
                Try It Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => scrollToSection("info-section")}>
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

      {/* Information Section - New section for "Learn More" */}
      <section id="info-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">How Our Chatbot Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered chatbot leverages advanced natural language processing to understand and respond to your queries in real-time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-medium mb-2">Natural Language Understanding</h3>
              <p className="text-muted-foreground">
                Our chatbot processes and understands human language patterns, context, and intent to provide accurate responses.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-medium mb-2">Real-time Learning</h3>
              <p className="text-muted-foreground">
                The more you interact with our chatbot, the better it gets at understanding your specific needs and preferences.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-medium mb-2">Multi-domain Knowledge</h3>
              <p className="text-muted-foreground">
                From general information to specialized topics, our chatbot is equipped to handle a wide range of subject areas.
              </p>
            </div>
          </div>
          
          <div className="bg-primary/5 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <MessageSquare className="h-40 w-40 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Key Capabilities</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Contextual Memory</p>
                  <p className="text-muted-foreground">Remembers conversation history for more coherent interactions</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Personalized Responses</p>
                  <p className="text-muted-foreground">Adapts to individual user preferences and communication styles</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Cross-platform Integration</p>
                  <p className="text-muted-foreground">Works seamlessly across websites, mobile apps, and messaging platforms</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Enterprise-grade Security</p>
                  <p className="text-muted-foreground">End-to-end encryption and robust data protection protocols</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-secondary rounded-2xl my-8">
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
        <Button size="lg" className="gap-2" onClick={() => scrollToSection("chatbot-section")}>
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
