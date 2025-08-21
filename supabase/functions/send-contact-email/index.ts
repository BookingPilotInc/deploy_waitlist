import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

// SMTP Configuration for Zoho Mail
const smtpConfig = {
  hostname: "smtp.zoho.com",
  port: 587,
  username: "hello@bookingpilot.ai",
  password: Deno.env.get("ZOHO_MAIL_PASSWORD"),
  tls: true,
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company: string;
  message: string;
  fromEmail?: string;
  bccEmail?: string;
}

// Separate email function using SMTP
async function sendEmailViaSMTP(to: string, subject: string, htmlContent: string, bcc?: string) {
  const client = new SmtpClient();
  
  try {
    await client.connectTLS(smtpConfig);
    
    const emailOptions: any = {
      from: "hello@bookingpilot.ai",
      to: to,
      subject: subject,
      content: htmlContent,
      html: htmlContent,
    };
    
    if (bcc) {
      emailOptions.bcc = bcc;
    }
    
    await client.send(emailOptions);
    await client.close();
    
    console.log("Email sent successfully via SMTP");
    return { success: true };
  } catch (error) {
    console.error("SMTP email error:", error);
    await client.close();
    throw error;
  }
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message, fromEmail, bccEmail }: ContactEmailRequest = await req.json();

    console.log("Sending contact form email for:", { name, email, company });

    // Send email to recipient with BCC to hello@bookingpilot.ai using SMTP
    const emailSubject = `Thank you for your interest in BookingPilot™ - ${company}`;
    const emailHtml = `
      <h2>Thank you for your interest in BookingPilot™!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for reaching out to us about transforming your appointment booking process with AI.</p>
      
      <h3>Your submission details:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No message provided'}</p>
      
      <h3>What happens next?</h3>
      <p>Our team will review your requirements and get back to you, to discuss how we can customize an AI booking solution for your business.</p>
      
      <p>If you have any urgent questions, feel free to reply to this email.</p>
      
      <hr>
      <p><em>Best regards,<br>The BookingPilot Team</em></p>
    `;
    
    const emailResponse = await sendEmailViaSMTP(
      email, 
      emailSubject, 
      emailHtml, 
      bccEmail || "hello@bookingpilot.ai"
    );

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify("Your request has been sent. Thank you for your interest in BookingPilot&trade;! We will review your requirements and get back to you soon."),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);