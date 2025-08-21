import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Building, Mail, User, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting contact form:', formData);
      
      // Save to database
      const { data, error } = await supabase
        .from('business_queries')
        .insert([
          {
            business_name: formData.company,
            name: formData.name,
            email: formData.email,
            company: formData.company,
            query_message: formData.message
          }
        ]);

      if (error) {
        console.error('Database error:', error);
        throw error;
      }

      console.log('Data saved to database:', data);

      // Send email notification
      console.log('Sending email notification...');
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          fromEmail: "hello@bookingpilot.ai",
          bccEmail: "hello@bookingpilot.ai"
        }
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Still show success since data was saved
        toast({
          title: "Request Submitted!",
          description: "Your information has been saved. We'll get back to you soon!",
        });
      } else {
        console.log('Email sent successfully:', emailData);
        toast({
          title: "Request Submitted Successfully!",
          description: "We'll get back to you soon to discuss your booking automation needs.",
        });
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.company;

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-br from-primary/5 to-primary-glow/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-12 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              Get Started with
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> AI Booking</span>
            </h2>
            <p className="text-xl text-primary/80 max-w-2xl mx-auto">
              Transform your appointment booking process. Fill out the form below 
              and our team will reach out to customize a solution for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Request Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Inc."
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your booking needs and current challenges..."
                      rows={4}
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Why Choose Our AI Booking System?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Instant Setup</h4>
                      <p className="text-muted-foreground">Enjoy seamless integration with your systems and start booking.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">No Technical Skills Required</h4>
                      <p className="text-muted-foreground">Simple configuration through our intuitive dashboard</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyber-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-cyber-cyan font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Scale with Your Business</h4>
                      <p className="text-muted-foreground">From First Booking to Full Schedule—We’re With You.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-cyber/10 border border-cyber-blue/20">
                <h4 className="font-semibold mb-2">✨ Special Launch Offer</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Early adopters get priority onboarding support
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Submit queries today!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};