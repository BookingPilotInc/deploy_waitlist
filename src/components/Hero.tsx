import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, MessageSquare, Phone, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-ai-booking.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Header with Branding */}
      <div className="fixed top-4 left-4 z-50">
        <div className="flex items-center">
          <span className="text-lg lg:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            BookingPilot&trade;
          </span>
        </div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-12 lg:py-20 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up text-center lg:text-left mt-8 sm:mt-0">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                <span className="text-xs lg:text-sm text-muted-foreground">Available on:</span>
                <div className="flex space-x-3 lg:space-x-4">
                  <div 
                    className="p-1.5 lg:p-2 bg-gradient-blue/20 rounded-lg border border-border/30"
                    title="Voice Call Integration"
                  >
                    <Phone className="w-4 h-4 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div className="p-1.5 lg:p-2 bg-gradient-blue/20 rounded-lg border border-border/30"
                    title="SMS & WhatsApp Support"
                  >
                    <MessageSquare className="w-4 h-4 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div className="p-1.5 lg:p-2 bg-gradient-blue/20 rounded-lg border border-border/30"
                    title="Mobile App"
                  >
                    <Smartphone className="w-4 h-4 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div className="p-1.5 lg:p-2 bg-gradient-blue/20 rounded-lg border border-border/30"
                    title="Website Chat Widget">
                    <Bot className="w-4 h-4 lg:w-6 lg:h-6 text-primary" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Experience<br />
                  AI Revolution<br />
                  in Booking
                </span>
              </h1>
              
              <p className="text-base lg:text-lg text-muted-foreground font-medium px-4 lg:px-0">
                Transform your customers journey - with Conversation AI.
              </p>
              
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 lg:px-0">
                Why Join the Waitlist?
                  <br />🚀 Priority Onboarding – Be among the first to explore our platform
                  <br />🎁 Exclusive Early-User Benefits – Special offers, tools & features just for early adopters
                  <br />💼 Built for You – Help shape BookingPilot with your feedback
              </p>
            </div>

            <div className="flex flex-col gap-4 px-2 lg:px-0 w-auto">
              <Button 
                variant="hero" 
                size="sm" 
                onClick={scrollToContact}
                className="group w-auto sm:w-auto text-sm sm:text-sm px-3 py-2 whitespace-normal sm:whitespace-nowrap leading-tight"
              >
                <span className="flex items-center justify-center gap-2 text-center">
                  ✈️ <span className="hidden sm:inline">Join the Waitlist!</span>
                  <span className="sm:hidden">Join the Waitlist</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </span>
              </Button>

            {/* <Button variant="cyber" size="lg">   
              Watch Demo
              </Button> */}
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-scale-in max-w-xs sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mt-8 lg:mt-0 px-4 lg:px-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI Booking System Dashboard" 
                className="w-full h-auto max-h-[280px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] object-contain rounded-2xl lg:rounded-3xl shadow-2xl border border-border/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl lg:rounded-3xl"></div>
              
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-primary opacity-10 blur-xl animate-glow-pulse"></div>
              
              {/* Enhanced floating elements - responsive positioning */}
              <div className="absolute -top-3 -right-3 lg:-top-6 lg:-right-6 bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl lg:rounded-2xl p-2 lg:p-4 animate-float shadow-glow">
                <div className="flex items-center space-x-1 lg:space-x-2">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                  <span className="text-xs lg:text-sm font-semibold text-primary">24/7 Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 bg-card/90 backdrop-blur-md border border-accent/30 rounded-xl lg:rounded-2xl p-2 lg:p-4 animate-float shadow-accent" style={{ animationDelay: '1s' }}>
                <div className="text-xs lg:text-sm">
                  <div className="font-bold text-accent mb-1">🤖 Your AI Assistant</div>
                  <div className="text-muted-foreground">Turn conversations into customers, instantly.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};