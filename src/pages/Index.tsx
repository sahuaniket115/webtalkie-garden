
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
      <footer className="py-12 border-t bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 - About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span className="font-bold text-lg">ChatBot AI</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Experience seamless communication with our advanced AI chatbot technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection("hero-section")} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Home className="h-4 w-4" /> Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("info-section")} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Info className="h-4 w-4" /> Information
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("features-section")} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <BookOpen className="h-4 w-4" /> Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("chatbot-section")} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4" /> Try Chatbot
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Column 3 - Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Column 4 - Legal */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                    GDPR Compliance
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2023 Chatbot Inc. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-xs text-muted-foreground">
                Made with ❤️ by our talented team
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
