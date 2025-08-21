import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { VisitorCounter } from "@/components/VisitorCounter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <VisitorCounter />
      <Hero />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
