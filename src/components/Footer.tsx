export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">BookingPilot</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Revolutionizing appointment scheduling with intelligent conversational AI 
              that works 24/7 across all channels.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="font-semibold">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Voice Call Integration</li>
              <li>SMS & WhatsApp Support</li>
              <li>Website Chat Widget</li>
              <li>Multilingual AI</li>
              <li>24/7 Availability</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Ready to automate your bookings?</p>
              <p>Contact our team for a personalized demo</p>
              <div className="pt-2">
                <span className="text-primary font-medium">hello@bookingpilot.ai</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; © 2025 BookingPilot Inc. We’ve got everything covered – all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};