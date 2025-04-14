
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY');
const RECIPIENT_EMAIL = "mekloyintegrated@gmail.com";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    // Send email using Brevo API
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: "Mekloy Contact Form",
          email: "no-reply@mekloy.com"
        },
        to: [{ email: RECIPIENT_EMAIL }],
        replyTo: { email: formData.email },
        subject: `New Contact Form Submission from ${formData.name}`,
        htmlContent: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
          ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Brevo API error:', error);
      throw new Error('Failed to send email');
    }

    // Send confirmation email to the user
    const confirmationResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: "Mekloy Integrated Services",
          email: "no-reply@mekloy.com"
        },
        to: [{ email: formData.email }],
        subject: "Thank you for contacting Mekloy Integrated Services",
        htmlContent: `
          <h2>Thank you for contacting us!</h2>
          <p>Dear ${formData.name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Mekloy Integrated Services Team</p>
        `
      })
    });

    if (!confirmationResponse.ok) {
      console.error('Failed to send confirmation email', await confirmationResponse.json());
      // We don't throw here as the main email was sent successfully
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
};

serve(handler);
