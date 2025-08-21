import { Card, CardContent } from "@/components/ui/card";

import { 
  Globe, 
  Clock, 
  MessageCircle, 
  Zap, 
  Users, 
  Shield,
  Phone,
  Smartphone
} from "lucide-react";
import { Hero } from "./Hero";

const features = [
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Communicate with customers in their preferred language. Our AI supports 50+ languages for global reach.",
    color: "text-cyber-blue"
  },
  {
    icon: Clock,
    title: "24/7 Availability", 
    description: "Never miss a booking opportunity. Your AI assistant works round the clock, even when you sleep.",
    color: "text-primary"
  },
  {
    icon: MessageCircle,
    title: "Multi-Channel Integration",
    description: "Seamlessly handle bookings across Voice, SMS, WhatsApp, and Website Chat from one unified platform.",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Instant Integration",
    description: "Get up and running in minutes. Our streamlined onboarding process gets your business live fast.",
    color: "text-cyber-cyan"
  },
  {
    icon: Users,
    title: "Smart Conversation Flow",
    description: "AI understands context and intent, providing natural conversations that feel human-like.",
    color: "text-cyber-purple"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance standards protect your customer data and business information.",
    color: "text-primary-glow"
  }
];

const channels = [
  {
    icon: Phone,
    title: "Voice Calls",
    description: "Natural voice conversations with advanced speech recognition"
  },
  {
    icon: MessageCircle,
    title: "SMS Messages", 
    description: "Text-based booking flow that works on any mobile device"
  },
  {
    icon: Smartphone,
    title: "WhatsApp",
    description: "Leverage the world's most popular messaging platform"
  },
  {
    icon: MessageCircle,
    title: "Website Chat",
    description: "Embedded chat widget that integrates with your existing site"
  }
];

export const Features = () => {
  return (
    <section className="py-24 relative bg-gradient-to-br from-accent/8 via-accent/5 to-accent/12 overflow-hidden">
      {/* Background decoration with animations */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center space-y-8 mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm hover:bg-accent/15 hover:border-accent/30 transition-all duration-300 hover:scale-105 animate-scale-in">
            <Zap className="w-4 h-4 animate-pulse" />
            Advanced AI Features
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight transform transition-all duration-700 hover:scale-105">
            Powerful Features for
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-glow to-accent bg-clip-text text-transparent animate-glow-pulse">
              Modern Businesses
            </span>
          </h2>
          <p className="text-xl text-accent-foreground/70 max-w-3xl mx-auto leading-relaxed transform transition-all duration-500 hover:text-accent-foreground/90">
            Our AI-powered booking system adapts to your business needs with intelligent 
            automation and seamless integrations that work 24/7.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group relative bg-card/90 backdrop-blur-md border-accent/30 hover:border-accent/60 transition-all duration-700 hover:shadow-accent animate-fade-in-up overflow-hidden transform hover:-translate-y-2 hover:scale-105"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transitionDelay: `${index * 0.05}s`
              }}
            >
              {/* Card background glow with enhanced animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse" />
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/20 via-accent-glow/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-glow-pulse" style={{ padding: '1px' }}>
                <div className="w-full h-full bg-card/95 rounded-lg" />
              </div>
              
               <CardContent className="p-8 relative z-10">
                 <div className="space-y-6">
                   {/* Icon container with enhanced styling and animations */}
                   <div className="relative">
                     <div className="inline-flex p-4 rounded-2xl bg-accent/15 border border-accent/25 group-hover:bg-accent/25 group-hover:border-accent/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 transform">
                       <feature.icon className="w-8 h-8 text-accent group-hover:text-accent-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                       {/* Enhanced glow effect */}
                       <div className="absolute inset-0 rounded-2xl bg-accent/30 blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 animate-pulse" />
                       {/* Ripple effect */}
                       <div className="absolute inset-0 rounded-2xl border border-accent/40 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
                     </div>
                   </div>
                  
                  <div className="space-y-3 transform transition-all duration-500 group-hover:translate-x-1">
                    <h3 className="text-xl font-bold text-accent group-hover:text-accent-glow transition-all duration-500 group-hover:scale-105">
                      {feature.title}
                    </h3>
                    
                    <p className="text-accent-foreground/75 leading-relaxed group-hover:text-accent-foreground/95 transition-all duration-500 transform group-hover:translate-x-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Hover shine effect */}
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000 transform skew-x-12" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA section with enhanced animations */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/15 border border-accent/30 text-accent hover:bg-accent/25 hover:border-accent/50 transition-all duration-500 cursor-pointer group hover:scale-110 transform hover:shadow-accent">
            <span className="font-medium transition-all duration-300 group-hover:scale-105">Ready to transform your business?</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse group-hover:animate-bounce group-hover:bg-accent-glow transition-colors duration-300" />
            {/* Ripple effect on hover */}
            <div className="absolute inset-0 rounded-full border border-accent/50 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
          </div>
        </div>

      </div>
    </section>
  );
};