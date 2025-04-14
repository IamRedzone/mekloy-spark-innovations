
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
  console.log("Function invoked with method:", req.method);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate API key is available
    if (!BREVO_API_KEY) {
      console.error('Missing BREVO_API_KEY environment variable');
      throw new Error('Server configuration error: Missing API key');
    }
    
    // Parse form data
    const formData: ContactFormData = await req.json();
    console.log("Received form data:", JSON.stringify(formData));
    
    if (!formData.name || !formData.email || !formData.message) {
      console.error('Missing required form fields');
      throw new Error('Missing required form fields');
    }
    
    // Send email using Brevo API
    console.log("Sending main email to recipient");
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
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

    // Check if the main email was sent successfully
    const responseData = await response.json();
    console.log('Main email response:', JSON.stringify(responseData));
    
    if (!response.ok) {
      console.error('Brevo API error:', responseData);
      throw new Error('Failed to send email: ' + (responseData.message || 'Unknown error'));
    }

    // Send confirmation email to the user
    try {
      console.log("Sending confirmation email to user");
      const confirmationResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
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

      const confirmationData = await confirmationResponse.json();
      console.log('Confirmation email response:', JSON.stringify(confirmationData));
      
      if (!confirmationResponse.ok) {
        console.error('Failed to send confirmation email', confirmationData);
        // We don't throw here as the main email was sent successfully
      }
    } catch (confirmationError) {
      console.error('Error sending confirmation email:', confirmationError);
      // We continue as the main email was sent successfully
    }

    // Return success response
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
};

serve(handler);
